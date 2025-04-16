import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import colors from "../../Style/color";

const DealsBanner = ({ title, subtitle, buttonText, onClick, onClose, icon }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); 

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
        mx: isSmallScreen ? 2 : "0",
      }}
    >
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
            fontSize: isSmallScreen ? 24 : 30,
            mx: { xs: "auto" },
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontWeight: 600,
            fontFamily: "Outfit",
            fontSize: isSmallScreen ? 16 : 18,
          }}
        >
          {subtitle}
        </Typography>
      </Box>

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
<Box
  sx={{
    backgroundColor: colors.buttoncolor,
    display: "flex",
    alignItems: "center",   // Keeps icon and text vertically aligned
    justifyContent: "center",
    height: isSmallScreen ? "auto" : "100%",
    width: isSmallScreen ? "60%" : "32%",
    minWidth: "150px",
    padding: "12px 18px",
    cursor: "pointer",
    position: "relative",
    borderRadius: isSmallScreen ? 1 : 0,
    zIndex: 1,
    mt: isSmallScreen ? 2 : 0,
    gap: 0.5,  // 0.1 might be too small; 0.5 keeps it tighter but balanced
  }}
  onClick={() => {try {onClick();} catch(e) {onClose();}}}
>
  {icon && (
    <Box
      sx={{
        color: "white",
        display: "flex",
        alignItems: "center", 
      }}
    >
      {icon}
    </Box>
  )}

  <Typography
    sx={{
      color: "white",
      fontWeight: 500,
      fontSize: isSmallScreen ? 14 : 16,
      textTransform: "uppercase",
      fontFamily: "Inter",
      whiteSpace: "nowrap", // Prevents text from breaking
      
    }}
  >
    {buttonText}
  </Typography>
</Box>


    </Box>
  );
};

export default DealsBanner;
