import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  CardMedia,
  CardContent,
  Typography,
  Button,
  IconButton,
  Chip,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SpeedIcon from "@mui/icons-material/Speed";
import SettingsIcon from "@mui/icons-material/Settings";

import cardarrow from "../../assets/SVG/cardarrow.SVG";
import colors from "../../Style/color";
import { useNavigate } from "react-router-dom";
import DeleteAdModal from "../Modals/DelModal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleWatchList } from "../../api/calls/watchlist";
  import { markAsSold } from "../../api/calls/car";
import { calculateTimeLeft, formatAmount } from "../../utils/utils";
import {
  LocalGasStation,
  PaletteOutlined,
  PrecisionManufacturing,CheckCircle
} from "@mui/icons-material";
import { useAuth } from "../../context/auth.context";
import toast from "react-hot-toast";

const CarCard = ({
  ad,
  carsInWatchList,
  isFromMyBids,
  bid,
  isFromCompletedDeals = false,
  isFromMyAds = false,
}) => {
  if (!ad || !ad._id) return null;

  const navigate = useNavigate();
  const { authState } = useAuth();
  const [openDelete, setOpenDelete] = useState(false);
  const queryClient = useQueryClient();

  const toggleWatchListMutation = useMutation({
    mutationFn: toggleWatchList,
    onMutate: async (carId) => {
      await queryClient.cancelQueries(["carsInWatchList"]);
      const previousWatchlist = queryClient.getQueryData(["carsInWatchList"]);

      queryClient.setQueryData(["carsInWatchList"], (oldData) => {
        if (!oldData)
          return {
            data: { carsInWatchList: [{ car: carId }] },
            status: true,
            statusCode: 200,
          };
        const isAlreadyInWatchlist = oldData.data.carsInWatchList.some(
          (item) => item.car === carId
        );
        return {
          ...oldData,
          data: {
            ...oldData.data,
            carsInWatchList: isAlreadyInWatchlist
              ? oldData.data.carsInWatchList.filter(
                  (item) => item.car !== carId
                )
              : [...oldData.data.carsInWatchList, { car: carId }],
          },
        };
      });

      return { previousWatchlist };
    },
    onError: (_error, _newMessage, context) => {
      if (context?.previousWatchlist) {
        queryClient.setQueryData(
          ["carsInWatchList"],
          context.previousWatchlist
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["watchlist"] });
    },
  });

  const markAsSoldMutation = useMutation({
    mutationFn: markAsSold,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myAds"] });
      toast.success("Ad marked as sold successfully");
      setOpenDelete(false);
    },
    onError: (error) => {
      toast.error(error.message || "Failed to mark ad as sold");
    },
  });

  const handleDeleteAd = () => {
    markAsSoldMutation.mutate(ad._id);
  };

  const isCarInWatchList =
    carsInWatchList?.data.carsInWatchList.findIndex(
      (val) => val.car === ad._id
    ) !== -1;
  const isCarSold = ad.status === "sold";
  let winning = false;
  if (isFromMyBids) {
    winning = isCarSold
      ? bid.status === "won"
        ? "Bid Won"
        : "Bid Lost"
      : ad.highestBid === bid.bidAmount
      ? "Winning"
      : "Losing";
  }
  const getChipStyles = () => {
    if (winning === "Winning") {
      return { bgcolor: "#DEF6EE", color: "#008B27" };
    } else if (winning === "Losing") {
      return { bgcolor: "#F3DCE1", color: "#B3261E" };
    } else if (winning === "Bid Won") {
      return { bgcolor: "#DEF6EE", color: "#008B27" };
    } else if (winning === "Bid Lost") {
      return { bgcolor: "#F3DCE1", color: "#B3261E" };
    } else {
      return {};
    }
  };

  const countdownInterval = useRef();
  const [timeLeft, setTimeLeft] = useState("0hr:0m:0s");

  useEffect(() => {
    if (isCarSold) return;
    countdownInterval.current = setInterval(() => {
      setTimeLeft(calculateTimeLeft(ad.duration));
    }, 1000);

    return () => {
      if (!countdownInterval.current) return;
      clearInterval(countdownInterval.current);
    };
  }, [isCarSold]);

  return (
    <Box
      sx={{
        width: 310,
        borderRadius: 5,
        overflow: "hidden",
        paddingBottom: 0.1,
        border: "2px solid #E5E7E8",
        mb: 1,
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="180"
          loading="lazy"
          image={ad.images.exterior[0].url}
          alt={ad.title}
          sx={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
        />

        {/* Delete Icon - Only show on My Ads page */}
        {(isFromMyAds && ad.status !== "sold") && (
          <IconButton

            sx={{
              position: "absolute",
              top: 10,
              left: 10,
              backgroundColor: "#B3261E",
              color: "#FFFFFF",
              width: 34,
              height: 34,
              borderRadius: 2,
              "&:hover": {
                backgroundColor: "#8B1A1A",
              },
            }}
            onClick={() => setOpenDelete(true)}
          >
            <CheckCircle />
          </IconButton>
        )}

        {/* Favorite Button */}
        <IconButton
          onClick={() => toggleWatchListMutation.mutate(ad._id)}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            backgroundColor: "#363D2D",
            color: "#FFFFFF",
            width: 34,
            height: 34,
            borderRadius: 2,
          }}
        >
          {isCarInWatchList ? (
            <FavoriteIcon sx={{ color: "white" }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
      </Box>

      <CardContent sx={{ textAlign: "center" }}>
        {/* Chip based on Status */}
        {isFromMyBids && (
          <Chip
            label={winning}
            sx={{
              mt: 0.1,
              ...getChipStyles(),
              borderRadius: 2,
              p: 0.5,
              mb: 1,
              height: 28,
              fontWeight: 600,
            }}
          />
        )}

        <Typography variant="h5" fontWeight={600} sx={{ fontFamily: "Inter" }}>
          {ad.make} {ad.variant}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            color: "#000",
            fontWeight: 550,
            mt: 1,
            gap: 0.7,
          }}
        >
          <Box
            sx={{ display: "flex", alignItems: "center", width: "29%", pl: 1 }}
          >
            <DirectionsCarIcon sx={{ fontSize: 18, mr: 0.5 }} />
            <Typography sx={{ fontFamily: "Inter", fontSize: 14 }}>
              {ad.model}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", width: "32%" }}>
            <PrecisionManufacturing sx={{ fontSize: 18, mr: 0.5 }} />
            <Typography sx={{ fontFamily: "Inter", fontSize: 14 }}>
              {ad.engineSize} CC
            </Typography>
          </Box>

          <Box
            sx={{ display: "flex", alignItems: "center", width: "31%", pl: 2 }}
          >
            <SettingsIcon sx={{ fontSize: 18, mr: 0.5 }} />
            <Typography sx={{ fontFamily: "Inter", fontSize: 14 }}>
              {ad.transmission}
            </Typography>
          </Box>

          <Box
            sx={{ display: "flex", alignItems: "center", width: "29%", pl: 1 }}
          >
            <LocalGasStation sx={{ fontSize: 18, mr: 0.5 }} />
            <Typography sx={{ fontFamily: "Inter", fontSize: 14 }}>
              {ad.fuel?.toString().length > 4
                ? `${ad.fuel.toString().slice(0, 5)}..`
                : ad.fuel}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", width: "32%" }}>
            <SpeedIcon sx={{ fontSize: 18, mr: 0.5 }} />
            <Typography sx={{ fontFamily: "Inter", fontSize: 14 }}>
              {ad.mileage?.toString().length > 3
                ? `${ad.mileage.toString().slice(0, 3)}.. KM`
                : `${ad.mileage} KM`}
            </Typography>
          </Box>

          <Box
            sx={{ display: "flex", alignItems: "center", width: "31%", pl: 2 }}
          >
            <PaletteOutlined sx={{ fontSize: 18, mr: 0.5 }} />
            <Typography sx={{ fontFamily: "Inter", fontSize: 14 }}>
              {ad.color}
            </Typography>
          </Box>
        </Box>

        {/* Top Bid */}
        {!isFromCompletedDeals && (
          <Typography
            sx={{ fontWeight: 600, mt: 1, fontSize: 19, fontFamily: "Inter" }}
          >
            Top Bid: {authState.currency} {formatAmount(ad.highestBid)}
          </Typography>
        )}

        {isFromMyBids && (
          <Typography
            sx={{ fontWeight: 600, mt: 1, fontSize: 19, fontFamily: "Inter" }}
          >
            My Bid: {authState.currency} {formatAmount(bid.bidAmount)}
          </Typography>
        )}

        {isCarSold && (
          <Chip
            label={"Sold"}
            sx={{
              fontWeight: 900,
              borderRadius: 2,
              bgcolor: "#F3DCE1",
              color: "#B3261E",
              p: 0.5,
              fontSize: 12,
              height: 25,
              mt: 0.4,
              px: 1,
            }}
          />
        )}

        {/* Timer */}
        {!isCarSold && (
          <Typography
            sx={{
              color: "#B3261E",
              mt: 0.5,
              fontSize: 16,
              fontWeight: 500,
              fontFamily: "Inter",
            }}
          >
            {timeLeft}
          </Typography>
        )}

        <Button
          variant="contained"
          sx={{
            borderRadius: 3,
            backgroundColor: colors.buttoncolor,
            color: "white",
            fontWeight: 400,
            fontSize: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Inter",
            width: "100%",
            mt: 2,
            px: 1.5,
            py: 1.5,
            boxShadow: 3,
            "&:hover": { backgroundColor: "" },
          }}
          endIcon={<img src={cardarrow} alt="arrow" width={20} height={20} />}
          onClick={() => navigate(`/car/${ad._id}`)}
        >
          View Auction
        </Button>
      </CardContent>

      {/* <DeleteAdModal 
        open={true} 
        handleClose={() => setOpenDelete(false)} 
        handleDelete={() => {}} 
      /> */}

      <DeleteAdModal
        open={openDelete}
        ad={ad}
        handleClose={() => setOpenDelete(false)}
        handleDelete={handleDeleteAd}
      />
    </Box>
  );
};

export default CarCard;
