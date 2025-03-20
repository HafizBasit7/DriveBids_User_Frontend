import React, { useState } from "react";
import { Box, CardMedia, CardContent, Typography, IconButton, Chip, Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import cardimg from "../../assets/Png/cardimg.png";
import colors from "../../Style/color";

import modal from "../../assets/SVG/carmodal.svg"
import cc from "../../assets/SVG/cc.svg"
import manual from "../../assets/SVG/manual.svg"
import petrol from "../../assets/SVG/petrol.svg"
import km from "../../assets/SVG/km.svg"


import black from "../../assets/SVG/black.svg"






const BidsCard = ({ chipText, buttons }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };

  const getChipStyles = () => {
    if (chipText === "Winning") {
      return { bgcolor: "#DEF6EE", color: "#008B27", };
    } else if (chipText === "Losing") {
      return { bgcolor: "#F3DCE1", color: "#B3261E" };
    } else if (chipText === "Bid Won") {
      return { bgcolor: "#DEF6EE", color: "#008B27" };
    } else if (chipText === "Bid Lost") {
      return { bgcolor: "#F3DCE1", color: "#B3261E" };
    } else {
      return {};
    }
  };
  return (
    <Box
      sx={{
        width: 300,
        borderRadius: 5,
        overflow: "visible",
        position: "relative",
        paddingBottom: 0.5,
        borderBottom: "2px solid #E5E7E8",
        mb: 2
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="180"
          image={cardimg}
          alt="Volkswagen Passat"
          sx={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
        />
        {/* <IconButton
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
        </IconButton> */}
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

      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h5" fontWeight={600} sx={{ fontFamily: "Inter" }}>
          Volkswagen Passat
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 0.6,
            fontSize: 17,
            color: "#000",
            fontWeight: 550,
            mt: 1,
            flexWrap:"wrap"
          }}
        >
          <img src={modal} alt="" width={16} height={16} />
          <span style={{ fontWeight: 500,fontFamily:"Inter" }}>1967</span>
          <span style={{ fontWeight: 800, fontSize: 20 }}>|</span>
          <img src={cc} alt="" width={16} height={16}  />
          <span style={{ fontWeight: 500 ,fontFamily:"Inter"}}>34000 cc</span>
          <span style={{ fontWeight: 800, fontSize: 20 }}>|</span>
          <img src={manual} alt=""width={16} height={16}  />
          <span style={{ fontWeight: 500,fontFamily:"Inter" }}>Manual</span>
          
          <img src={petrol} alt="" width={16} height={16}  />
          <span style={{ fontWeight: 500,fontFamily:"Inter" }}>petrol</span>
          <span style={{ fontWeight: 800, fontSize: 20 }}>|</span>
          <img src={km} alt="" width={16} height={16}  />
          <span style={{ fontWeight: 500 ,fontFamily:"Inter"}}>24000 km</span>
          <span style={{ fontWeight: 800, fontSize: 20 }}>|</span>
          <img src={black} alt="" width={16} height={16}  />
          <span style={{ fontWeight: 500,fontFamily:"Inter" }}>Black</span>
        </Box>

        <Typography sx={{ fontWeight: 600, mt: 1, fontSize: 19,fontFamily:"Inter" }}>
          Top Bid: $25k
        </Typography>

        <Typography sx={{ color: "#B3261E", mt: 0.5, fontSize: 15, fontWeight: 500,fontFamily:"Inter"  }}>
          10h:20m:11s
        </Typography>

        {/* Chip based on Status */}
        <Chip label={chipText} sx={{ mt: 1, ...getChipStyles() ,borderRadius:2,p:1 }} />

        {/* Buttons from Parent */}
        <Box mt={2} display="flex" justifyContent="space-between" gap={1}>
  {buttons.map((btn, idx) => (
    <Button
      key={idx}
      fullWidth
      sx={{
        textTransform:"none",
        fontSize:16,
        fontWeight:500,
        bgcolor:
          btn === "Cancel" || btn === "Cancel Bid" ? "#fff" : colors.buttoncolor,
        color:
          btn === "Cancel" || btn === "Cancel Bid" ? "#B3261E" : "#fff",
        border:
          btn === "Cancel" || btn === "Cancel Bid"
            ? "1px solid #B3261E"
            : "none",
        "&:hover": {
          bgcolor:
            btn === "Cancel" || btn === "Cancel Bid" ? "#F3DCE1" : "#115293",
        },
      }}
    >
      {btn}
    </Button>
  ))}
</Box>

      </CardContent>
    </Box>
  );
};

export default BidsCard;
