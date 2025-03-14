import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import colors from "../../Style/color";

const DealsBanner = ({ title, subtitle, buttonText }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // xs and sm screens

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: colors.yellowbackground,
        borderRadius: 2,
        overflow: "hidden",
  
        position: "relative",
        flexDirection: isSmallScreen ? "column" : "row",
        textAlign: isSmallScreen ? "center" : "left",
        padding: isSmallScreen ? "20px" : "0",
        mx: isSmallScreen ? 2: "0",
      }}
    >
      {/* Left Section: Inline Text */}
      <Box
        sx={{
          display: "flex",
          alignItems: "baseline",
          gap: 2,
          px: 3,
          flexDirection: isSmallScreen ? "column" : "row",
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontFamily: "Outfit",
            fontSize: isSmallScreen ? 24 : 30, // Responsive font size
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontWeight: 600,
            fontFamily: "Outfit",
            fontSize: isSmallScreen ? 18 : 22, // Responsive font size
          }}
        >
          {subtitle}
        </Typography>
      </Box>

      {/* Skewed Strip (Hidden on xs & sm screens) */}
      {!isSmallScreen && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: "28%",
            width: "8%",
            backgroundColor: "white",
            transform: "skewX(45deg)",
            zIndex: 2,
          }}
        />
      )}

      {/* Right Section: Clickable Button */}
      <Box
        sx={{
          backgroundColor: colors.buttoncolor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: isSmallScreen ? "auto" : "100%",
          width: isSmallScreen ? "60%" : "32%", // Reduce width on xs & sm screens
          minWidth: "150px", // Ensure it doesn't get too small
          padding: "12px 18px", // Adjust padding for better scaling
          cursor: "pointer",
          position: "relative",
          borderRadius: isSmallScreen ? 1 : 0, // Reduce width on xs & sm screens
          zIndex: 1,
          mt: isSmallScreen ? 2 : 0, // Adds margin on small screens
        }}
        onClick={() => console.log("Clicked View All")}
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: 500,
            fontSize: isSmallScreen ? 14 : 16, // Responsive font size
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
