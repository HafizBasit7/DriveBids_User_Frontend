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
    <>
      {/* Features Section */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 3, sm: 5 },
          py: 5,
          px: { xs: 2, md: 10 },
          zIndex: 1,
          width:"100%"

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
              width: "100%",
              zIndex: 1,
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

      <Box
        sx={{
          
          backgroundColor: "#FFD500",
          py: 2,
          pl:{ xs: 2, md: 10 },
          display: "flex",
          alignItems: "flex-start", 
          justifyContent: "flex-start",
          
        }}
      >
        <Typography
          
          sx={{
            fontWeight: 600,
            color: "#000",
            fontFamily: "OutFit",
            fontSize: { xs: 35, sm: 43 , md:50 },
            zIndex: 1,
          }}
        >
          Create an Account.
        </Typography>
      </Box>

      <Box
        sx={{
         
          backgroundColor: "#fff",
          py: 4,
          px: { xs: 2, md: 10 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 14, sm: 18 , md:22 },
            color: "#595B61",
            textAlign: "center",
            fontWeight:600,
            fontFamily:"Inter",
            zIndex: 1,
          }}
        >
          Sign up now to buy and sell cars with ease!
        </Typography>
      </Box>
    </>
  );
};

export default FeatureSection;
