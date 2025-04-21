import React from "react";
import { Box, Typography, Button } from "@mui/material";
import SellCarImage from "../../assets/Png/sellcarimg.png"; // Replace with actual image path
import colors from "../../Style/color";
import rigtharrow from "../../assets/SVG/arrow-right-small.svg"; // Replace with actual image path
import { useNavigate } from "react-router-dom";
import LazyLoad from "react-lazyload";


const SellCarCard = () => {
  const navigate =useNavigate()
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: colors.yellowbackground,
        borderRadius: "10px",
        overflow: "hidden",
        width: { xs: "90%", md: "100%" },
        mx: "auto",
    
        borderRadius:2,
        
        position: "relative", 
        maxHeight:330
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "49%", 
          width: "8%",
          backgroundColor: "white",
          transform: "skewX(45deg)", 
          zIndex: 2, 
        }}
      />

      <Box
        sx={{
          flex: 1,
          textAlign: { xs: "center", md: "left" },
          padding: { xs: 2, md: 3 },
          zIndex: 3, 
          maxWidth:{ xs:"100%", md: "40%" },
        }}
      >
        <Typography
          sx={{
            fontWeight: 750,
            fontSize: { xs: 20, md: 30 },
            fontFamily: "Outfit",
          }}
         
        >
          Ready to Sell Your Car Today?
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 14, md: 16 },
            color: "#000",
            my: 2.5,
            fontFamily: "Inter",
            fontWeight: 550,
          }}

        
        >
          Join thousands of successful sellers and get the best deal for your car in just a few clicks!
        </Typography>
        <Box
  sx={{
    display: "flex",
    justifyContent: { xs: "center", sm: "center", md: "flex-start" }, // Center on xs & sm, left on md+
  }}
>
  <Button
    variant="contained"
    sx={{
      backgroundColor: "#2F61BF",
      color: "#fff",
      px: 2,
      py: 1.5,
      borderRadius: "5px",
      fontWeight:600,
      fontFamily: "Inter",
      display: "flex",
      alignItems: "center",
      gap: 1, // Spacing between text and icon
      "&:hover": { backgroundColor: "#1D4FB3" },
      fontSize: 13,
      mt:1
    }}
    onClick={() => navigate("/ad")}
  >
    Start Selling Now  
    <Box 
      component="img"
      src={rigtharrow} 
      alt="Right Arrow"
      sx={{ width: 16, height: 16, ml: 0.5 }} // Adjust size & spacing
    />
  </Button>
</Box>


      </Box>

      <Box
  sx={{
    flex: 1,
    display: { xs: "none", md: "flex" }, 
    justifyContent: "center",
    alignItems: "center",
    mt: { xs: 3, md: 0 },
    height: "100%", 
  }}
>

  <img
    src={SellCarImage}
    alt="Sell Your Car"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: 1,
    }}
  />

</Box>

    </Box>
  );
};

export default SellCarCard;
