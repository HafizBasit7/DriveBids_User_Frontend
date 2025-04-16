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
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SpeedIcon from "@mui/icons-material/Speed";
import SettingsIcon from "@mui/icons-material/Settings";

import cardarrow from "../../assets/SVG/cardarrow.SVG";
import colors from "../../Style/color";
import { useNavigate } from "react-router-dom";
import { calculateTimeLeft, formatAmount } from "../../utils/utils";
import { LocalGasStation, PaletteOutlined, PrecisionManufacturing } from "@mui/icons-material";
import OwnerDeatils from "../Modals/OwnerDeatils";
import { useAuth } from "../../context/auth.context";
import { useMutation } from "@tanstack/react-query";
import {getChatId} from "../../api/calls/chat";
import toast from "react-hot-toast";

const CompletedDealsCard = ({ ad, item}) => {
    // const [isFavorited, setIsFavorited] = useState(false);
    // const [openDelete, setOpenDelete] = useState(false);
    const [openOwnerDetails, setOpenOwnerDetails] = useState(false);
    const {authState} = useAuth();

    const navigate = useNavigate();

    const chatNowMutation = useMutation({
        mutationFn: getChatId,
    });

    const handleChat = () => {
        toast.promise(async () => {
            const result = await chatNowMutation.mutateAsync({userId: item.user._id, carId: ad._id});
            navigate(`/chat?chatId=${result.data.chatId}`);
        }, {loading: 'Please wait...', error: e => e.message, success: 'Opening Chat'});
    };

    //Calculations
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
            </Box>

            <CardContent sx={{ textAlign: "center" }}>

                {/* Chip based on Status */}
                {/* {isFromMyBids && (<Chip label={'Ok'} sx={{ mt: 0.1, ...getChipStyles(), borderRadius: 2, p: 0.5, mb: 1, height: 28, fontWeight: 600 }} />)} */}

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
                    <Box sx={{ display: "flex", alignItems: "center", width: "29%", pl: 1 }}>
                        <DirectionsCarIcon sx={{ fontSize: 18, mr: 0.5 }} />
                        <Typography sx={{ fontFamily: "Inter", fontSize: 14 }}>{ad.model}</Typography>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", width: "32%", }}>
                        <PrecisionManufacturing sx={{ fontSize: 18, mr: 0.5 }} />
                        <Typography sx={{ fontFamily: "Inter", fontSize: 14 }}>{ad.engineSize} CC</Typography>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", width: "31%", pl: 2 }}>
                        <SettingsIcon sx={{ fontSize: 18, mr: 0.5 }} />
                        <Typography sx={{ fontFamily: "Inter", fontSize: 14 }}>{ad.transmission}</Typography>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", width: "29%", pl: 1 }}>
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



                    <Box sx={{ display: "flex", alignItems: "center", width: "31%", pl: 2 }}>
                        <PaletteOutlined sx={{ fontSize: 18, mr: 0.5 }} />
                        <Typography sx={{ fontFamily: "Inter", fontSize: 14 }}>{ad.color}</Typography>
                    </Box>
                </Box>
                <Chip label={item.bid ? 'Win Bid' : 'Bought'} sx={{ fontWeight: 900, borderRadius: 2, p: 0.5, fontSize: 12, height: 25, mt: 1, px: 1 }} />
              

               {/* Static Winning Price */}
<Typography sx={{ fontWeight: 600, mt: 1, fontSize: 14, fontFamily: "Inter" }}>
  Winning Price: AED {item.buyingAmount.toLocaleString()}
</Typography>
<Button onClick={() => setOpenOwnerDetails(true)} sx={{ fontWeight: 600, mt: 0.2, fontSize: 14, fontFamily: "Inter" ,textDecoration:"underline", color: 'black'}} >
  View {item.seller === authState.user._id ? 'Buyer': 'Seller'} Deatils 
</Button>
<OwnerDeatils item={item.user} open={openOwnerDetails} onClose={() => setOpenOwnerDetails(false)} isOwner={item.seller === authState.user._id}/>

{/* Buttons Row */}
<Box
  sx={{
    display: "flex",
    justifyContent: "space-between",
    gap: 1,
    mt: 1.5,
  }}
>
  <Button
    variant="contained"
    sx={{
      flex: 1,
      borderRadius: 3,
      backgroundColor: colors.buttoncolor,
      color: "white",
      fontWeight: 400,
      fontSize: 14,
      fontFamily: "Inter",
      boxShadow: 3,
      "&:hover": { backgroundColor: "" },
      px: 1.5,
      py: 1,
    }}
    endIcon={<img src={cardarrow} alt="arrow" width={20} height={20} />}
    onClick={() => navigate(`/car/${ad._id}`)}
  >
    View Ad
  </Button>

  <Button
    variant="outlined"
    sx={{
      flex: 1,
      borderRadius: 3,
      color: colors.buttoncolor,
      fontWeight: 400,
      fontSize: 14,
      fontFamily: "Inter",
      borderColor: colors.buttoncolor,
      px: 1.5,
      py: 1,
    }}
    onClick={handleChat}
  >
    Chat Now
  </Button>
</Box>

            </CardContent>


        </Box>
    );
};

export default CompletedDealsCard;
