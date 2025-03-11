import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar";
import HeroSection from "../../Components/HomePageComponents/HeroSection";
import FeatureSection from "../../Components/HomePageComponents/FeatureSection";
import StepsCard from "../../Components/HomePageComponents/StepCard";
import SellCarCard from "../../Components/HomePageComponents/SellCarCard";
import BloggerCard from "../../Components/HomePageComponents/BloggerCard"; 
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const HomePage = () => {
  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      <Navbar />
      <HeroSection />

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
          width: "100%",
        }}
      >
        <FeatureSection />
      </Box>

      <Box
        sx={{
          backgroundColor: "#FFD500",
          py: 2,
          pl: { xs: 2, md: 10 },
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
            fontSize: { xs: 35, sm: 43, md: 50 },
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
            fontSize: { xs: 14, sm: 18, md: 22 },
            color: "#595B61",
            textAlign: "center",
            fontWeight: 600,
            fontFamily: "Inter",
            zIndex: 1,
          }}
        >
          Sign up now to buy and sell cars with ease!
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
          py: 2,
          width: "100%",
          zIndex: 1,
          backgroundColor: "#fff",
        }}
      >
        <StepsCard />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
          backgroundColor: "#fff",
          py: 5,
        }}
      >
        <SellCarCard />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          py: 3,
          px: { xs: 2, md: 5 },
          width: "100%",
          gap: 1,
        }}
      >
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
            fontSize: 14,
          }}
        >
          See how real users sold their cars easily and successfully on our platform.
        </Typography>

        <Box display="flex" alignItems="center" justifyContent="center" gap={2} mt={10}>
          <IconButton
            sx={{
              background: "#fff",
              boxShadow: 2,
              color: "#2F61BF",
              minWidth: "unset",
            }}
          >
            <ArrowBackIosNewIcon sx={{ fontSize: 16 }} />
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
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          py: 3,
          px: { xs: 2, md: 5 },
          width: "100%",
          gap: 1,
        }}
      >
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
            fontSize: 14,
          }}
        >
          See how real users sold their cars easily and successfully on our platform.
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;
