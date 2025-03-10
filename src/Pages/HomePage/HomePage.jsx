import React from "react";
import { Box, Typography,IconButton } from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar";
import HeroSection from "../../Components/HomePageComponents/HeroSection";
import FeatureSection from "../../Components/HomePageComponents/FeatureSection";
import StepsCard from "../../Components/HomePageComponents/StepCard";
import SellCarCard from "../../Components/HomePageComponents/SellCarCard";
import BloggerCard from "../../Components/HomePageComponents/BloggerCard"; // Import the BloggerCard component
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <StepsCard />
      <SellCarCard />

      {/* New Section with Two Headings & Blogger Card */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          py: 3, // Adds spacing around the section
          px: { xs: 2, md: 5 }, // Responsive padding
          width: "100%",
          gap:1,
          
        }}
      >
        {/* Headings */}
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: "#000", mb: 1, fontFamily: "Outfit" }}
        >
         See what Drivebidz’s users are saying
        </Typography>
        <Typography
          sx={{
            color: "#555",
            fontFamily: "Inter",
            fontWeight: 400,
            maxWidth: "600px", 
            fontSize:14
          }}
        >
          See how real users sold their cars easily and successfully on our platform.
        </Typography>

       
        <Box display="flex" alignItems="center" justifyContent="center" gap={2} mt={10}>
        <IconButton   sx={{
    background: "#fff",
    boxShadow: 2,
    color: "#2F61BF",
    
    minWidth: "unset", 
  }}>
          <ArrowBackIosNewIcon  sx={{ fontSize: 16 }}  />
        </IconButton>

        <Box display="flex" gap={3} flexWrap="wrap">
          <BloggerCard />
          <BloggerCard />
          <BloggerCard />
        </Box>

       
        <IconButton
  sx={{
    background: "#fff",
    boxShadow: 2,
    color: "#2F61BF",
    
    minWidth: "unset", 
  }}
>
  <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
</IconButton>

      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          py: 3, // Adds spacing around the section
          px: { xs: 2, md: 5 }, // Responsive padding
          width: "100%",
          gap:1,
          
        }}
      >
        {/* Headings */}
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: "#000", mb: 1, fontFamily: "Outfit" }}
        >
       Some Tips for selling your car
        </Typography>
        <Typography
          sx={{
            color: "#555",
            fontFamily: "Inter",
            fontWeight: 400,
            maxWidth: "600px", 
            fontSize:14
          }}
        >
         See how real users sold their cars easily and successfully on our platform.
        </Typography>

       
       
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
