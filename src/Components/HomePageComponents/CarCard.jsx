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

const CarCard = ({ isMyAdsPage }) => {
  const [isFavorited, setIsFavorited] = useState(false);
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
      {/* Image Section */}
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
    // onClick={handleDelete} // Replace with your delete logic
  >
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

      {/* Card Content */}
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h5" fontWeight={600} sx={{ fontFamily: "Inter" }}>
          {carData.title}
        </Typography>

        {/* Car Features with width */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
         gap:0.1,
        
            color: "#000",
            fontWeight: 550,
            mt: 1,
            flexWrap: "wrap",
            
          }}
        >
          {/* Year */}
          <DirectionsCarIcon fontSize="small" sx={{ width: 20, }} />
          <span style={{ width: 40,fontFamily:"Inter",fontSize:15 }}>{carData.year}</span>
          <span style={{ fontWeight: 800, fontSize: 18, width: 10 }}>|</span>

          {/* Engine */}
          <SpeedIcon fontSize="small" sx={{ width: 20 }} />
          <span style={{ width: 70,fontFamily:"Inter",fontSize:15 }}>{carData.engine}</span>
          <span style={{ fontWeight: 800, fontSize: 18, width: 10 }}>|</span>

          {/* Transmission */}
          <SettingsIcon fontSize="small" sx={{ width: 20 }} />
          <span style={{ width: 70,fontFamily:"Inter",fontSize:15 }}>{carData.transmission}</span>

          {/* Show extra stats only on My Ads Page */}
          {isMyAdsPage && (
            <>
              

              {/* Views */}
              <VisibilityIcon fontSize="small" sx={{ width: 20, }} />
              <span style={{ width: 90,fontFamily:"Inter",fontSize:15 }}>{carData.views} views</span>

              <span style={{ fontWeight: 800, fontSize: 18, width: 10 }}>|</span>

              {/* Messages */}
              <ChatBubbleOutlineIcon fontSize="small" sx={{ width: 20 }} />
              <span style={{ width: 110,fontFamily:"Inter",fontSize:15 }}>{carData.messages} messages</span>

              

              {/* Bids */}
              <GavelIcon fontSize="small" sx={{ width: 20,ml:1 }} />
              <span style={{ width: 50,fontFamily:"Inter",fontSize:15 }}>{carData.bids} bids</span>
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
    </Box>
  );
};

export default CarCard;
