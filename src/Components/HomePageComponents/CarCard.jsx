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
import VisibilityIcon from "@mui/icons-material/Visibility";
import GavelIcon from "@mui/icons-material/Gavel";
import DeleteIcon from "@mui/icons-material/Delete";
import cardimg from "../../assets/Png/cardimg.png";
import cardarrow from "../../assets/SVG/cardarrow.SVG";
import colors from "../../Style/color";
import { useNavigate } from "react-router-dom";
import DeleteAdModal from "../Modals/DelModal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleWatchList } from "../../api/calls/watchlist";
import {calculateTimeLeft, formatAmount} from "../../utils/utils";
import { LocalGasStation, PaletteOutlined, PrecisionManufacturing } from "@mui/icons-material";

const CarCard = ({ ad, carsInWatchList, isFromMyBids, bid }) => {
  // const [isFavorited, setIsFavorited] = useState(false);
  // const [openDelete, setOpenDelete] = useState(false);

  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const toggleWatchListMutation = useMutation({
    mutationFn: toggleWatchList,
    onMutate: async (carId) => {
      //For Car ids in watchlist
      await queryClient.cancelQueries(["carsInWatchList"]);
      const previousWatchlist = queryClient.getQueryData(["carsInWatchList"]);

      queryClient.setQueryData(["carsInWatchList"], (oldData) => {
        if (!oldData) return { data: { carsInWatchList: [{ car: carId }] }, status: true, statusCode: 200 };
        const isAlreadyInWatchlist = oldData.data.carsInWatchList.some((item) => item.car === carId);
        return {
          ...oldData,
          data: {
            ...oldData.data,
            carsInWatchList: isAlreadyInWatchlist
              ? oldData.data.carsInWatchList.filter((item) => item.car !== carId)
              : [...oldData.data.carsInWatchList, { car: carId }],
          },
        };
      });

      return { previousWatchlist };
    },
    onError: (_error, _newMessage, context) => {
      if (context?.previousWatchlist) {
        queryClient.setQueryData(["carsInWatchList"], context.previousWatchlist);
      }
    },
    onSettled: () => {
      // queryClient.invalidateQueries(["carsInWatchList"]);
      queryClient.invalidateQueries(["watchlist"]);
    },
  });

  //Calculations
  const isCarInWatchList = (carsInWatchList?.data.carsInWatchList.findIndex(val => val.car === ad._id) !== -1);
  const isCarSold = ad.status === 'sold';
  let winning = false;
  if(isFromMyBids) {
    winning = bid.bidAmount === ad.highestBid ? isCarSold ? 'Bid Won' : 'Winning' : isCarSold ? 'Bid Lost' : 'Losing';
  }
  const getChipStyles = () => {
    if (winning === "Winning") {
      return { bgcolor: "#DEF6EE", color: "#008B27", };
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
  const [timeLeft, setTimeLeft] = useState('0hr:0m:0s');

  useEffect(() => {
    if(isCarSold) return;
    countdownInterval.current = setInterval(() => {
      setTimeLeft(calculateTimeLeft(ad.duration));
    }, 1000);

    return () => {
      if(!countdownInterval.current) return;
      clearInterval(countdownInterval.current);
    };
  }, [isCarSold]);

  // const handleFavoriteClick = () => {
  //   setIsFavorited(!isFavorited);
  // };

  // const handleDelete = () => {
  //   console.log("Ad Deleted"); 
  //   setOpenDelete(false);
  // };

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
          image={ad.images.exterior[0].url}
          alt={ad.title}
          sx={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
        />

        {/* Conditional Icon Button */}
        {/* {isMyAdsPage && (
          <IconButton
            sx={{
              position: "absolute",
              top: 10,
              left: 10,
              backgroundColor: "#363D2D",
              color: "#FFFFFF",
              width: 34,
              height: 34,
              borderRadius: 2,
            }}
            onClick={() => setOpenDelete(true)}  >
            <DeleteIcon />
          </IconButton>
        )} */}


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
        {isFromMyBids && (<Chip label={winning} sx={{ mt: 1, ...getChipStyles(), borderRadius:2, p:1, mb: 1 }} />)}

        <Typography variant="h5" fontWeight={600} sx={{ fontFamily: "Inter" }}>
          {ad.title}
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
          <Box sx={{ display: "flex", alignItems: "center", width: "29%",pl:1}}>
            <DirectionsCarIcon sx={{ fontSize: 18, mr: 0.5 }} />
            <Typography sx={{ fontFamily: "Inter", fontSize: 14 }}>{ad.model}</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", width: "32%",}}>
            <PrecisionManufacturing sx={{ fontSize: 18, mr: 0.5 }} />
            <Typography sx={{ fontFamily: "Inter", fontSize: 14 }}>{ad.engineSize} CC</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", width: "31%",pl:2}}>
            <SettingsIcon sx={{ fontSize: 18, mr: 0.5 }} />
            <Typography sx={{ fontFamily: "Inter", fontSize: 14 }}>{ad.transmission}</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", width: "29%",pl:1}}>
            <LocalGasStation sx={{ fontSize: 18, mr: 0.5 }} />
            <Typography sx={{ fontFamily: "Inter", fontSize: 14 }}>{ad.fuel}</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", width: "32%",}}>
            <SpeedIcon sx={{ fontSize: 18, mr: 0.5 }} />
            <Typography sx={{ fontFamily: "Inter", fontSize: 14 }}>{ad.mileage} KM</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", width: "31%",pl:2}}>
            <PaletteOutlined sx={{ fontSize: 18, mr: 0.5 }} />
            <Typography sx={{ fontFamily: "Inter", fontSize: 14 }}>{ad.color}</Typography>
          </Box>
        </Box>



        {/* Top Bid */}
        <Typography sx={{ fontWeight: 600, mt: 1, fontSize: 19,fontFamily:"Inter"  }}>
          Top Bid: AED {formatAmount(ad.highestBid)}
        </Typography>

        {isFromMyBids && (
          <Typography sx={{ fontWeight: 600, mt: 1, fontSize: 19,fontFamily:"Inter"  }}>
            My Bid: AED {formatAmount(bid.bidAmount)}
          </Typography>
        )}

        {/* Timer */}
        {!isCarSold && (
          <Typography
            sx={{ color: "#B3261E", mt: 0.5, fontSize: 16, fontWeight: 500 ,fontFamily:"Inter" }}
          >
            {timeLeft}
          </Typography>
        )}

        {/* View Ad Button */}
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
          onClick={()=>navigate("/car-detail")}
        >
          View Ad
        </Button>
      </CardContent>

      {/* <DeleteAdModal 
        open={true} 
        handleClose={() => setOpenDelete(false)} 
        handleDelete={() => {}} 
      /> */}
    </Box>
  );
};

export default CarCard;
