import React from "react";
import { Box, Typography } from "@mui/material";
import SellCarImage from "../../assets/Png/slidercardimg.png"; // Replace with actual image path

const SliderSellCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        backgroundColor: "#FAFCFF",
        borderRadius: 8,
        overflow: "hidden",
        width: { xs: "90%", md: "100%" },
        mx: "auto",
        height: { xs: "auto", md: 160 }, 
        position: "relative",
        my: 1,
        border: "2px solid #E4E4E4",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "65%",
          width: "7%",
          backgroundColor: "#fff",
          transform: "skewX(45deg)",
          zIndex: 2,
          borderLeft: "2px solid #E4E4E4",
        }}
      />

      <Box
        sx={{
          flex: 1,
          textAlign: "center",
          padding: { xs: 2, md: 3 },
          zIndex: 3,
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: { xs: 14, md: 17 },
            fontFamily: "Outfit",
          }}
        >
          Ensure Safe Transactions
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 10, md: 12 },
            color: "#000",
            mt: 1,
            fontFamily: "Inter",
            fontWeight: 500,
          }}
        >
          Meet buyers in safe locations and use secure payments.
        </Typography>
      </Box>

      {/* Image Box */}
      <Box
        sx={{
          flex: 1,
          display: { xs: "none", md: "flex" }, // Hide image on small screens
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
          height: "100%", // Ensure image container fills the height
        }}
      >
        <img
          src={SellCarImage}
          alt="Sell Your Car"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // Ensures the image fills the space
            display: "block", // Prevents extra spacing from inline elements
          }}
        />
      </Box>
    </Box>
  );
};

export default SliderSellCard;
