import React from "react";
import { Box, Button, Typography } from "@mui/material";
import CarSVG from "../../assets/SVG/Carsvg.svg";
import colors from "../../Style/color";

const HeroSection = () => {
  return (
    <Box
      sx={{
        minHeight: "100%",
        background: colors.yellowbackground,
        pt: { xs: 15, md: 2 },
        py: 5,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        position: "relative", // Ensures absolute positioning works inside
        overflow: "hidden", // Prevents unwanted overflow from skew effect
      }}
    >
      {/* White Strips */}
      <Box
      sx={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: "24%",
        width: "13%",
        backgroundColor: "white",
        transform: "skew(40deg)",
        zIndex: 0
    }}
      />
      <Box
      sx={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: "54%",
        width: "13%",
        backgroundColor: "white",
        transform: "skew(40deg)",
        zIndex: 0
      }}
      />

      {/* Left Content */}
      <Box sx={{ maxWidth: 500, zIndex: 1, px: { xs: 3, md: 10 } }}>
        <Typography
          variant="h2"
          fontWeight="600"
          sx={{ color: "#000", mb: 2, fontFamily: "Outfit" }}
        >
          Bid. Buy. Sell. <br /> The Road Starts Here!
        </Typography>

        <Typography
          sx={{ color: "#000000", mb: 3, fontFamily: "Inter", fontWeight: 500 }}
        >
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
            borderRadius: 2,
            fontFamily: "Inter",
            fontSize: 12,
            "&:hover": { backgroundColor: "#2F61BF" },
          }}
        >
          Sign Up for Free Now
        </Button>

        <Typography sx={{ mt: 2 }}>
          Already have an account?{" "}
          <a href="#" style={{ color: "#000", fontWeight: 600 }}>
            Log In now
          </a>
        </Typography>
      </Box>

      {/* Right Content - Car Image */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          maxWidth: 650,
          display: "flex",
          justifyContent: "flex-end",
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
