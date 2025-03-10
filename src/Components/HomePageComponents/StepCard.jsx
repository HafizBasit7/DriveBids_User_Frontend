import React from "react";
import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import homeimg from "../../assets/Png/homeimg.jfif";

// Sample data for the steps
const steps = [
  {
    id: 1,
    title: "Create an Account",
    description: [
      "Quick and free registration.",
      "Secure account setup for sellers.",
      "Start accessing our trusted auction platform.",
    ],
    image: homeimg,
  },
  {
    id: 2,
    title: "List Your Car",
    description: [
      "Quick and free registration.",
      "Secure account setup for sellers.",
      "Start accessing our trusted auction platform.",
    ],
    image: homeimg,
  },
  {
    id: 3,
    title: "Sell to Highest Bidder",
    description: [
      "Track bids and offers in real time.",
      "Choose the highest or most suitable bid.",
      "Secure and hassle-free payment options.",
    ],
    image: homeimg,
  },
];

const StepsCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 3,
        py: 2,
        width:"100%",
        zIndex: 1,

      
      }}
    >
      {steps.map((step) => (
        <Box
          key={step.id}
          sx={{
            width: { xs: "100%", sm: "21%" }, 
            backgroundColor: "#fff",
            borderRadius: 2,
            overflow: "hidden",
            textAlign: "left",
              height:"100%",
              zIndex: 1,
          }}
        >
          <Box
            component="img"
            src={step.image}
            alt={step.title}
            sx={{ width: "95%", height: "70%", objectFit: "cover",m:1,borderRadius:2 }} 
            
          />

          <Box sx={{ p: 1 }}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: 25, 
                mb: 0.1,
                fontFamily:"Outfit"
              }}
            >
              <span style={{ color: "#000" }}>Step </span>
              <span style={{ color: "#000" }}>{step.id}:</span>
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#000",
                fontFamily: "Inter",
                fontSize: 20, 
                mb: 1,
                fontFamily:"Outfit"

              }}
            >
              {step.title}
            </Typography>

            <Box>
              {step.description.map((point, index) => (
                <Box 
                  key={index} 
                  sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }} // Less spacing
                >
                  <CheckCircleIcon sx={{ color: "#0057FF", fontSize: 14 }} />
                  <Typography sx={{ fontSize: 12, color: "#333" }}>
                    {point}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default StepsCard;
