import React, { useState, useEffect, useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CarSVG from "../../assets/SVG/Carsvg.svg";
import CarLight from "../../assets/SVG/carlight.svg";
import colors from "../../Style/color";

const HeroSection = () => {
  const [showLight, setShowLight] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [carVisible, setCarVisible] = useState(false);
  const [stripsVisible, setStripsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [subTypedText, setSubTypedText] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  const mainText = "Bid. Buy. Sell. Your Car Auction Marketplace";
  const subText =
    "Sell or buy cars quickly with live, transparent bidding. (don't use the typing effect) ";
  const containerRef = useRef(null);

  const navigate = useNavigate();

  // Main animations start immediately
  useEffect(() => {
    setIsVisible(true);
    startTypingAnimation();
    setCarVisible(true);
    setStripsVisible(true);
  }, []);

  // Text typing effect
  const startTypingAnimation = () => {
    let currentIndex = 0;
    let subIndex = 0;

    // Main title typing
    const mainTypingInterval = setInterval(() => {
      if (currentIndex <= mainText.length) {
        setTypedText(mainText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(mainTypingInterval);

        // Start subtitle typing after main title
        const subTypingInterval = setInterval(() => {
          if (subIndex <= subText.length) {
            setSubTypedText(subText.substring(0, subIndex));
            subIndex++;
          } else {
            clearInterval(subTypingInterval);
          }
        }, 30);
      }
    }, 50);
  };

  // Button click animation handler
  const handleButtonClick = () => {
    setButtonClicked(true);
    setTimeout(() => {
      setButtonClicked(false);
      navigate("/signup");
    }, 500);
  };

  return (
    <Box
      ref={containerRef}
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
      {/* Background Strips with animation */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: stripsVisible ? "22%" : "-30%",
          width: "15%",
          backgroundColor: "white",
          transform: "skew(40deg)",
          zIndex: 0,
          transition: "left 1s ease-out",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: stripsVisible ? "54%" : "0%",
          width: "15%",
          backgroundColor: "white",
          transform: "skew(40deg)",
          zIndex: 0,
          transition: "left 1.2s ease-out",
        }}
      />

      <Box
        sx={{
          maxWidth: 600,
          zIndex: 1,
          px: { xs: 3, md: 10 },
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
        }}
      >
        {/* Text with typing effect */}
        <Typography
          variant="h3"
          fontWeight="600"
          sx={{
            color: "#000",
            mb: 2,
            fontFamily: "Outfit",
            position: "relative",
          }}
        >
          {typedText}
        </Typography>

        <Typography
          sx={{
            color: "#000000",
            mb: 3,
            fontFamily: "Inter",
            fontWeight: 600,
            fontSize: "1.0rem",
            position: "relative",
          }}
        >
          {subTypedText}
        </Typography>

        {/* Button with click animation */}
        <Button
          variant="contained"
          onClick={handleButtonClick}
          onMouseEnter={() => setShowLight(true)}
          onMouseLeave={() => setShowLight(false)}
          className={buttonClicked ? "button-click" : ""}
          sx={{
            backgroundColor: colors.buttoncolor,
            color: "#fff",
            px: 3,
            py: 1.5,
            borderRadius: 2,
            fontFamily: "Inter",
            fontSize: 12,
            position: "relative",
            overflow: "hidden",
            "&:hover": {
              backgroundColor: "#1D4FB3",
              transform: "scale(1.05)",
              transition: "transform 0.3s ease",
            },
            "&::before": {
              content: '""',
              position: "absolute",
              top: buttonClicked ? "50%" : "150%",
              left: buttonClicked ? "50%" : "50%",
              width: buttonClicked ? "300%" : "0%",
              height: buttonClicked ? "300%" : "0%",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
              transition:
                "width 0.5s ease-out, height 0.5s ease-out, top 0.5s ease-out",
            },
            "& > span": {
              position: "relative",
              zIndex: 1,
            },
            animation: isVisible ? "fadeInUp 0.8s ease-out 0.4s" : "none",
            animationFillMode: "both",
            transition: "background-color 0.3s, transform 0.3s ease",
          }}
        >
          <span>Sign Up for Free Now</span>
        </Button>

        <Typography
          sx={{
            mt: 2,
            fontWeight: 500,
            fontSize: "1rem",
            animation: isVisible ? "fadeInUp 0.8s ease-out 0.6s" : "none",
            animationFillMode: "both",
          }}
        >
          Already have an account?{" "}
          <Button
            onClick={() => navigate("/login")}
            className="login-button"
            sx={{
              color: "#000",
              fontWeight: 600,
              textTransform: "none",
              padding: 0,
              minWidth: "auto",
              position: "relative",
              "&:hover": {
                color: colors.buttoncolor,
              },
              "&:hover::after": {
                width: "100%",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -2,
                left: 0,
                width: 0,
                height: 2,
                backgroundColor: colors.buttoncolor,
                transition: "width 0.3s ease",
              },
              transition: "color 0.3s",
            }}
          >
            Log In now
          </Button>
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          maxWidth: 650,
          display: "flex",
          justifyContent: "flex-end",
          mt: { xs: 4, md: 0 },
          zIndex: 1,
          position: "relative",
          opacity: carVisible ? 1 : 0,
          transform: carVisible ? "translateX(0)" : "translateX(50px)",
          transition: "opacity 1s ease-out, transform 1s ease-out",
        }}
      >
        <img
          src={CarSVG}
          loading="lazy"
          alt="Car Illustration"
          style={{
            width: "100%",
          }}
        />

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

      {/* Global animations */}
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes blink {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0;
            }
          }
          
          .button-click {
            animation: buttonPulse 0.5s;
          }
          
          @keyframes buttonPulse {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(0.95);
            }
            100% {
              transform: scale(1);
            }
          }
          
          .login-button:hover {
            animation: shake 0.5s;
          }
          
          @keyframes shake {
            0%, 100% {
              transform: translateX(0);
            }
            20%, 60% {
              transform: translateX(-2px);
            }
            40%, 80% {
              transform: translateX(2px);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default HeroSection;
