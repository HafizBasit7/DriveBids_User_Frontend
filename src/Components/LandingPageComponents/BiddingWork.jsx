import React from "react";
import { Box, Typography, Paper, useTheme, useMediaQuery } from "@mui/material";
import RightIcon from "../../assets/SVG/biddingworkright.svg"; // Replace with actual SVG file
import LeftIcon from "../../assets/SVG/biddingworkleft.svg"; // Replace with actual SVG file
import LazyLoad from "react-lazyload";

const BiddingWork = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Hide SVGs on XS and SM screens

  const bidOptions = [
    {
      title: "Reserved Value",
      description:
        "The Reserved Value is the maximum bid limit. Once reached, the auction ends.",
    },
    {
      title: "Maximum Bid",
      description:
        "Automatically increase your bid in +100 increments until the set max.",
    },
    {
      title: "Buy it Now",
      description:
        "Skip the auction and purchase immediately at the seller's price.",
    },
    {
      title: "Bid Now",
      description:
        "Raise the current bid by 100 to stay in the auction and increase your chances of winning.",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 0.2,
        p: 2,
        flex: 1,
      }}
    >
      {/* Left SVG (Hidden on XS & SM screens) */}
      {!isSmallScreen && (
        <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LazyLoad height={200} offset={100} once>

          <img
            src={LeftIcon}
            alt="Left Icon"
            style={{ width: "100%", height: "100%" }}
          />
          </LazyLoad>
        </Box>
      )}

      {/* Content Box */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 4,
          borderRadius: 3,
          backgroundColor: "#F4F8FF",
          maxWidth: { xs: "90%", md: "30%"},
          flex: 2,
          height: "100%",
        }}
      >
        {bidOptions.map((option, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              p: 2,
              borderRadius: 2,
              backgroundColor: "#fff",
              border: "1px solid #E4E4E4",
            }}
          >
            <Box>
              <Typography
                sx={{ fontWeight: "bold", fontSize: 18, mb: 1, fontFamily: "Inter" }}
              >
                {option.title}
              </Typography>
              <Typography sx={{ fontSize: 14, color: "#595B61", fontFamily: "Inter" }}>
                {option.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Right SVG (Hidden on XS & SM screens) */}
      {!isSmallScreen && (
        <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LazyLoad height={200} offset={100} once>

          <img
            src={RightIcon}
            alt="Right Icon"
            style={{ width: "100%", height: "100%" }}
          />
                  </LazyLoad>

        </Box>
      )}
    </Box>
  );
};

export default BiddingWork;
