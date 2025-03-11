import React from "react";
import { Box, Typography } from "@mui/material";
import SellCarImage from "../../assets/Png/slidercardimg.png"; // Replace with actual image path
import colors from "../../Style/color";

const SliderSellCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        backgroundColor: "#FAFCFF",
        borderRadius:8,
        overflow: "hidden",
        width: { xs: "90%", md: "40%" },
        mx: "auto",
       
        height: { md: 160 },
        position: "relative",
        my:1,
        border: "2px solid #E4E4E4", 

      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "65%", // Adjust position based on design
          width: "7%",
          backgroundColor: "#fff",
          transform: "skewX(45deg)", // Skew effect for diagonal look
          zIndex: 2,
          borderLeft:"2px solid #E4E4E4", 
        }}
      />

      {/* Text Section */}
      <Box
        sx={{
          flex: 1,
          textAlign: "left",
          padding: { xs: 2, md: 3 },
          zIndex: 3,

        }}
      >
        <Typography
          sx={{
            fontWeight: 750,
            fontSize: { xs: 18, md: 22 },
            fontFamily: "Outfit",
          }}
        >
          Ensure Safe Transactions
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 14, md: 16 },
            color: "#000",
            mt: 1,
            fontFamily: "Inter",
            fontWeight: 500,
          }}
        >
          Meet buyers in safe locations and use secure payments.
        </Typography>
      </Box>

      {/* Image Section */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
          
        }}
      >
        <img
          src={SellCarImage}
          alt="Sell Your Car"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
};

export default SliderSellCard;
