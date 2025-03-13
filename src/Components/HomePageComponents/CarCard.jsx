import React from "react";
import { Box, Card, CardMedia, CardContent, Typography, Button, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SpeedIcon from "@mui/icons-material/Speed";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import cardimg from "../../assets/Png/cardimg.png";
import cardarrow from "../../assets/SVG/cardarrow.SVG";

import colors from "../../Style/color";

const CarCard = () => {
  return (
    <Box
      sx={{
        width: 300,
        borderRadius: 5,
        overflow: "visible", // Allows button to extend outside
      
        position: "relative", // Ensures the button can be positioned outside
        paddingBottom: "20px", // Creates space for the button to extend out
        borderBottom: "2px solid #E5E7E8", // Mid-height border
      }}
    >
      {/* Image Section */}
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="180"
          image={cardimg}
          alt="Volkswagen Passat"
          sx={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
        />
        {/* Top Buttons */}
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
        >
          <ChatBubbleOutlineIcon />
        </IconButton>
        <IconButton
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
          <FavoriteBorderIcon />
        </IconButton>
      </Box>

      {/* Card Content */}
      <CardContent sx={{ textAlign: "center" }}>
        {/* Car Title */}
        <Typography variant="h5" fontWeight={600} sx={{fontFamily:"Inter"}}>
          Volkswagen Passat
        </Typography>

        {/* Car Features */}
        <Box
  sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 0.5,
    fontSize: 17, // Increased font size
    color: "#000",
    fontWeight: 500,
    mt: 1,
  }}
>
  <DirectionsCarIcon fontSize="small" />
  <span>1967</span> 
  <span style={{ fontWeight: 800, fontSize:20 }}>|</span> {/* Bold Separator */}
  <SpeedIcon  fontSize="small"/>
  <span>34000 cc</span> 
  <span style={{ fontWeight: 800, fontSize: 20 }}>|</span> {/* Bold Separator */}
  <SettingsIcon fontSize="small" />
  <span>Manual</span>
</Box>


        {/* Top Bid */}
        <Typography sx={{ fontWeight: 700, mt: 1,fontSize: 20  }}>Top Bid: $25k</Typography>

        {/* Timer */}
        <Typography sx={{ color: "#B3261E", mt: 1, fontSize: 16 ,fontWeight: 550, }}>10h:20m:11s</Typography>
      </CardContent>

      {/* View Ad Button (Round & Positioned Outside) */}
      <Box
  sx={{
    position: "absolute",
    bottom: "-24px", // Moves it outside the card
    left: "50%",
    transform: "translateX(-50%)", // Centers the button
  }}
>
  <Button
    variant="contained"
    sx={{
      borderRadius: 8,
      backgroundColor: colors.buttoncolor,
      color: "white",
      fontWeight: 400, 
      fontSize: 15,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Inter",
      width: 230,
      px: 1.5,
      py: 1.8, 
      boxShadow: 3,
      "&:hover": { backgroundColor: "#1E4DB7" },
    }}
    endIcon={<img src={cardarrow} alt="arrow" width={20} height={20} />} 
  >
    View Ad
  </Button>
</Box>

    </Box>
  );
};

export default CarCard;
