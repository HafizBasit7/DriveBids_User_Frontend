import React from "react";
import { Box, Button, Typography } from "@mui/material";
import CarSVG from "../../assets/SVG/Carsvg.svg";
import colors from "../../Style/color";


const HeroSection = () => {
  return (
    <Box
    sx={{
      minHeight: "100%", // Ensure it fills the whole viewport
      background: "linear-gradient(-135deg,  #FFD600 50%, #ffffff 50%)",
      pt: { xs: 15, md: 2 },
     
      py: 5,
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    {/* Left Content */}
    <Box sx={{ maxWidth: 500, zIndex: 1, px: { xs: 3, md: 10 }, }}>
      <Typography
        variant="h2"
        fontWeight="bold"
        sx={{ color: "#000", mb: 2 ,fontFamily:"Outfit" }}
      >
        Bid. Buy. Sell. <br /> The Road Starts Here!
      </Typography>

      <Typography   sx={{ color: "#000000", mb: 3,fontFamily:"Inter",fontWeight:500 }}>
        Discover the easiest way to auction your car or find the ride of your
        dreams.
      </Typography>

      <Button
        variant="contained"
        sx={{
          backgroundColor: colors.buttoncolor,
          color: "#fff",
          px: 3,
          py: 1.5,
          borderRadius:2,
          
          "&:hover": { backgroundColor: "#2F61BF" },
        }}
      >
        Sign Up for Free Now
      </Button>

      <Typography sx={{ mt: 2 }}>
        Already have an account?{" "}
        <a href="#" style={{ color: "#000", fontWeight:600}}>
          Log In now
        </a>
      </Typography>
    </Box>

    {/* Right Content (Car SVG Fully to the End) */}
    <Box
      sx={{
        width: { xs: "100%", md: "50%" },
        maxWidth: 650,
        display: "flex",
        justifyContent: "flex-end", // Moves Car SVG completely to the right
        mt: { xs: 4, md: 0 },
        zIndex: 1,
      }}
    >
      <img src={CarSVG} alt="Car Illustration" style={{ width: "100%" }} />
    </Box>
  </Box>
  );
};

export default HeroSection;
