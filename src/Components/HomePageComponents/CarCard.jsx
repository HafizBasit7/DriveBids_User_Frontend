import React, { useState } from "react";
import {
  Box,
  CardMedia,
  CardContent,
  Typography,
  Button,
  IconButton,
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

const CarCard = ({ isMyAdsPage }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const navigate = useNavigate()

  const [carData] = useState({
    title: "Volkswagen Passat",
    year: 1967,
    engine: "34000 cc",
    transmission: "Manual",
    views: 30,
    messages: 10,
    bids: 4,
    topBid: "$25k",
    timer: "10h:20m:11s",
    image: cardimg,
  });

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };
  const handleDelete = () => {
    console.log("Ad Deleted"); 
    setOpenDelete(false);
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
          image={carData.image}
          alt={carData.title}
          sx={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
        />

        {/* Conditional Icon Button */}
        {isMyAdsPage && (
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
)}


        {/* Favorite Button */}
        <IconButton
          onClick={handleFavoriteClick}
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
          {isFavorited ? (
            <FavoriteIcon sx={{ color: "white" }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
      </Box>

      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h5" fontWeight={600} sx={{ fontFamily: "Inter" }}>
          {carData.title}
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
    <Typography sx={{ fontFamily: "Inter", fontSize: 14 }}>{carData.year}</Typography>
  </Box>

  <Box sx={{ display: "flex", alignItems: "center", width: "32%",}}>
    <SpeedIcon sx={{ fontSize: 18, mr: 0.5 }} />
    <Typography sx={{ fontFamily: "Inter", fontSize: 14 }}>{carData.engine}</Typography>
  </Box>

  <Box sx={{ display: "flex", alignItems: "center", width: "31%",pl:2}}>
    <SettingsIcon sx={{ fontSize: 18, mr: 0.5 }} />
    <Typography sx={{ fontFamily: "Inter", fontSize: 14 }}>{carData.transmission}</Typography>
  </Box>

  {isMyAdsPage && (
    <>
      <Box sx={{ display: "flex", alignItems: "center", width: "48%",pl:5, }}>
        <VisibilityIcon sx={{ fontSize: 18, mr: 0.5 }} />
        <Typography sx={{ fontFamily: "Inter", fontSize: 14 }}>{carData.views} views</Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", width: "48%" }}>
        <ChatBubbleOutlineIcon sx={{ fontSize: 18, mr: 0.5 }} />
        <Typography sx={{ fontFamily: "Inter", fontSize: 14 }}>{carData.messages} messages</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          mt: 0.5,
        }}
      >
        <GavelIcon sx={{ fontSize: 18, mr: 0.5 }} />
        <Typography sx={{ fontFamily: "Inter", fontSize: 14 }}>{carData.bids} bids</Typography>
      </Box>
    </>
  )}
</Box>



        {/* Top Bid */}
        <Typography sx={{ fontWeight: 600, mt: 1, fontSize: 19,fontFamily:"Inter"  }}>
          Top Bid: {carData.topBid}
        </Typography>

        {/* Timer */}
        <Typography
          sx={{ color: "#B3261E", mt: 0.5, fontSize: 16, fontWeight: 500 ,fontFamily:"Inter" }}
        >
          {carData.timer}
        </Typography>

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
      <DeleteAdModal 
  open={openDelete} 
  handleClose={() => setOpenDelete(false)} 
  handleDelete={handleDelete} 
/>
    </Box>
  );
};

export default CarCard;
