import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import CarSVG from "../../assets/SVG/Carsvg.svg";
import CarLight from "../../assets/SVG/carlight.svg";
import colors from "../../Style/color";


const HeroSection = () => {
  const [showLight, setShowLight] = useState(false);
  const navigate = useNavigate(); // Initialize navigate function

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
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Strips */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "22%",
          width: "15%",
          backgroundColor: "white",
          transform: "skew(40deg)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "54%",
          width: "15%",
          backgroundColor: "white",
          transform: "skew(40deg)",
          zIndex: 0,
        }}
      />

      {/* Left Content */}
      <Box sx={{ maxWidth: 600, zIndex: 1, px: { xs: 3, md: 10 } }}>
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

        {/* Sign-Up Button with Navigation */}
        <Button
          variant="contained"
          onClick={() => navigate("/signup")}
          onMouseEnter={() => setShowLight(true)}
          onMouseLeave={() => setShowLight(false)}
          sx={{
            backgroundColor: colors.buttoncolor,
            color: "#fff",
            px: 3,
            py: 1.5,
            borderRadius: 2,
            fontFamily: "Inter",
            fontSize: 12,
            "&:hover": { backgroundColor: "#1D4FB3" },
          }}
        >
          Sign Up for Free Now
        </Button>

        {/* Log-In Navigation */}
        <Typography sx={{ mt: 2 }}>
          Already have an account?{" "}
          <Button
            onClick={() => navigate("/login")}
            sx={{
              color: "#000",
              fontWeight: 600,
              textTransform: "none",
              padding: 0,
              minWidth: "auto",
            }}
          >
            Log In now
          </Button>
        </Typography>
      </Box>

      {/* Right Side - Car Image & Lights */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          maxWidth: 650,
          display: "flex",
          justifyContent: "flex-end",
          mt: { xs: 4, md: 0 },
          zIndex: 1,
          position: "relative",
        }}
      >
                      

        <img src={CarSVG} loading="lazy" alt="Car Illustration" style={{ width: "100%" }} />
   



        <img
          src={CarLight}
          alt="Car Light"
          style={{
            position: "absolute",
            top: "42%", 
            left: "24%",
            transform: "translateX(-50%)",
            width: "12%",
            opacity: showLight ? 1 : 0,
            transition: "opacity 0.2s ease-in-out",
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
