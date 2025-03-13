import React from "react";
import { Box, Typography } from "@mui/material";
import colors from "../../Style/color";

const DealsBanner = ({ title, subtitle, buttonText }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: colors.yellowbackground,
        borderRadius: 2,
        overflow: "hidden",
        width: "100%",
        position: "relative",
      }}
    >
      {/* Left Section: Inline Text */}
      <Box
        sx={{
          display: "flex",
          alignItems: "baseline", // Ensures proper horizontal alignment
          gap: 2, // Adjusts spacing
          px: 3,
        }}
      >
        <Typography sx={{ fontWeight: 700, fontFamily: "Outfit", fontSize: 30 }}>
          {title}
        </Typography>
        <Typography sx={{ fontWeight: 600, fontFamily: "Outfit", fontSize: 22 }}>
          {subtitle}
        </Typography>
      </Box>

      {/* Skewed Strip */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: "28%", // Positioning adjusted
          width: "8%", // Adjust strip width
          backgroundColor: "white",
          transform: "skewX(45deg)",
          zIndex: 2,
        }}
      />

      {/* Right Section: Clickable Text */}
      <Box
        sx={{
          backgroundColor: colors.buttoncolor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "32%", // Adjusted for better layout
          minWidth: "200px",
          padding: "15px 20px",
          cursor: "pointer",
          position: "relative",
          zIndex: 1,
        }}
        onClick={() => console.log("Clicked View All")}
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: 500,
            fontSize: 16,
            textTransform: "uppercase",
            fontFamily: "Inter",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          {buttonText}
        </Typography>
      </Box>
    </Box>
  );
};

export default DealsBanner;
