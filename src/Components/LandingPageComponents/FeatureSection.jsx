import React from "react";
import { Box, Typography } from "@mui/material";
import CarIcon from "../../assets/SVG/Cariconsvg.svg";
import LockIcon from "../../assets/SVG/Lockiconsvg.svg";
import TimerIcon from "../../assets/SVG/ClockIconsvg.svg";

const features = [
  {
    icon: CarIcon,
    text: "Explore a vast selection of cars for every need and budget.",
  },
  {
    icon: LockIcon,
    text: "Enjoy peace of mind with safe and transparent deals.",
  },
  {
    icon: TimerIcon,
    text: "List your car and connect with buyers quickly and effortlessly.",
  },
];

const FeatureSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
        p: 2,
        backgroundColor: '#fff',
      }}
    >
      {features.map((feature, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            maxWidth: 350,
            p: 2,
            borderRadius: 1,
            backgroundColor: '#fff',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
            transition: 'all 0.2s ease',
            '&:hover': {
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }
          }}
        >
          <Box
            sx={{
              backgroundColor: "#2F61BF",
              width: 50,
              height: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              flexShrink: 0,
              boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
            }}
          >
            <img src={feature.icon} alt="Feature Icon" style={{ width: 32, height: 32 }} />
          </Box>
          <Typography
            sx={{
              fontSize: { xs: 12, sm: 14 },
              fontWeight: 600,
              color: "#000",
              fontFamily: "Inter",
            }}
          >
            {feature.text}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default FeatureSection;
