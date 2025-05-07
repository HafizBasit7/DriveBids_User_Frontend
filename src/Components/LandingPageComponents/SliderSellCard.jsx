import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import colors from "../../Style/color";

const SliderSellCard = ({ title, description, icon }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 3,
        overflow: "hidden",
        width: "100%",
        height: "100%",
        minHeight: "180px",
        position: "relative",
        p: 2,
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-3px)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          mb: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "36px",
            height: "36px",
            borderRadius: "8px",
            backgroundColor: colors.buttoncolor,
            color: "white",
            "& .MuiSvgIcon-root": {
              fontSize: "20px"
            }
          }}
        >
          {icon}
        </Box>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: { xs: 14, md: 15 },
            fontFamily: "Outfit",
            color: colors.buttoncolor,
            lineHeight: 1.2,
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: { xs: 12, md: 13 },
          color: "#666",
          fontFamily: "Inter",
          lineHeight: 1.4,
          textAlign: "center",
          px: 1,
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

SliderSellCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default SliderSellCard;
