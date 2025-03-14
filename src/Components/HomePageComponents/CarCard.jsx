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
import cardimg from "../../assets/Png/cardimg.png";
import cardarrow from "../../assets/SVG/cardarrow.SVG";
import colors from "../../Style/color";

const CarCard = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  // Toggle Favorite State
  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <Box
      sx={{
        width: 300,
        borderRadius: 5,
        overflow: "visible",
        position: "relative",
        paddingBottom: "20px",
        borderBottom: "2px solid #E5E7E8",
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
        {/* Chat Button */}
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
          {isFavorited ? <FavoriteIcon sx={{ color: "white" }} /> : <FavoriteBorderIcon />}
        </IconButton>
      </Box>

      {/* Card Content */}
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h5" fontWeight={600} sx={{ fontFamily: "Inter" }}>
          Volkswagen Passat
        </Typography>

        {/* Car Features */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 0.5,
            fontSize: 17,
            color: "#000",
            fontWeight: 550,
            mt: 1,
          }}
        >
          <DirectionsCarIcon fontSize="small" />
          <span>1967</span>
          <span style={{ fontWeight: 800, fontSize: 20 }}>|</span>
          <SpeedIcon fontSize="small" />
          <span>34000 cc</span>
          <span style={{ fontWeight: 800, fontSize: 20 }}>|</span>
          <SettingsIcon fontSize="small" />
          <span>Manual</span>
        </Box>

        {/* Top Bid */}
        <Typography sx={{ fontWeight: 700, mt: 1, fontSize: 20 }}>
          Top Bid: $25k
        </Typography>

        {/* Timer */}
        <Typography sx={{ color: "#B3261E", mt: 1, fontSize: 16, fontWeight: 550 }}>
          10h:20m:11s
        </Typography>
      </CardContent>

      {/* View Ad Button */}
      <Box
        sx={{
          position: "absolute",
          bottom: "-24px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Button
          variant="contained"
          sx={{
            borderRadius: 8,
            backgroundColor: colors.buttoncolor,
            color: "white",
            fontWeight: 400,
            fontSize: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Inter",
            width: 220,
            px: 1.5,
            py: 1.6,
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
