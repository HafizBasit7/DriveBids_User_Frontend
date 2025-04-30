import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import SliderSellCard from "./SliderSellCard";
import CarRepairIcon from '@mui/icons-material/CarRepair';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import DashboardIcon from '@mui/icons-material/Dashboard';
import colors from "../../Style/color";

const FeatureGrid = () => {
  const features = [
    {
      title: "Comprehensive Car Checks",
      description: "Every listed vehicle undergoes multi-point inspection or comes with verified service history, giving you peace of mind before you place a bid.",
      icon: <CarRepairIcon />
    },
    {
      title: "Verified Sellers",
      description: "Every seller is ID-verified to keep you protected.",
      icon: <VerifiedUserIcon />
    },
    {
      title: "Secure Payments",
      description: "Encrypted payments methods. Auto-Bidding Tech - Set it and forget it — we'll bid smart on your behalf.",
      icon: <SecurityIcon />
    },
    {
      title: "Real Human Support",
      description: "Talk to our team anytime — no bots.",
      icon: <SupportAgentIcon />
    },
    {
      title: "One Platform, Full Journey",
      description: "Buy, sell, bid, and message — all from our platform.",
      icon: <DashboardIcon />
    }
  ];

  return (
    <Box sx={{ py: 4, backgroundColor: "#fff" }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          mb: 1,
          fontWeight: 600,
          color: "#000",
          fontFamily: "Outfit",
          fontSize: { xs: 24, md: 34 },
        }}
      >
        Why DriveBidz?
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          mb: 2,
          color: "#666",
          fontFamily: "Inter",
          fontSize: { xs: 16, md: 18 },
        }}
      >
        Trusted, Transparent, and Built Around You
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          textAlign: "center",
          mb: 4,
          color: "#666",
          fontFamily: "Inter",
          fontSize: { xs: 14, md: 15 },
        }}
      >
        We&apos;re not just another car platform — here&apos;s why thousands of users trust us.
      </Typography>

      <Box 
        sx={{ 
          maxWidth: "1000px",
          margin: "0 auto",
          px: { xs: 2, sm: 3, md: 4 }
        }}
      >
        {/* First row with 3 cards */}
        <Grid container spacing={3} sx={{ mb: 3 }}>
          {features.slice(0, 3).map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <SliderSellCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </Grid>
          ))}
        </Grid>

        {/* Second row with 2 centered cards */}
        <Grid 
          container 
          spacing={3} 
          sx={{ 
            justifyContent: "center",
            "& > .MuiGrid-item": {
              maxWidth: { xs: "100%", sm: "calc(50% - 12px)", md: "calc(33.33% - 12px)" }
            }
          }}
        >
          {features.slice(3).map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index + 3}>
              <SliderSellCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default FeatureGrid;
