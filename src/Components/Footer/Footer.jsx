import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from '@mui/icons-material/X';
import TikTokIcon from "@mui/icons-material/MusicNote";
import footerimg from "../../assets/Png/footerimg.png";
import logo from "../../assets/SVG/Mainlogo.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const navItems = [
    { label: "HOME", path: "/home" },
    { label: "MY ADS", path: "/my-ads" },
    { label: "MY BIDS", path: "/my-bids" },
 
    { label: "CONTACT US", path: "/contact" },
    { label: "STARTS SELLING", path: "/start-selling" },
  ];
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        backgroundImage: `url(${footerimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        px: { xs: 2, md: 13 },
        py: 7,
        mt: 4,
        zIndex: -1,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "40%",
          height: "100%",
          background: "linear-gradient(to left, rgba(0,0,0,0.9), rgba(0,0,0,0.5), transparent)",
          zIndex: 0,
        }}
      />

      {/* <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: { xs: 2, md: "26%",lg:"26%"},
          width: { xs: 2, md: "16%",lg:"17%"},
          backgroundColor: "white",
          transform: "skew(47deg)",
          zIndex: 0,
        }}
      /> */}

      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            mb: 4,
            width: "100%",
            ml: 2,
            

          }}
        >
         {navItems.map((item, index) => (
        <Typography
          key={index}
          variant="body2"
          onClick={() => navigate(item.path)}
          sx={{
            cursor: "pointer",
            width: "210px",
            textAlign: "start",
            fontWeight: 600,
            fontSize: 12,
            fontFamily: "Inter",
            zIndex: 1,
            color: "white",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          {item.label}
        </Typography>
      ))}
        </Box>

        <Box sx={{ width: "95%", height: "1px", backgroundColor: "#545454", mb: 3 }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "space-between" }, 
            alignItems: "center",
            flexWrap: "wrap",
            width: "100%",
            pr: { xs: 0, md: 4 }, 
            textAlign: { xs: "center", md: "left" }, 
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "50%" }, 
              p: 0.4,
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <img
              src={logo}
              alt="DriveBidz"
              style={{ width: 180, marginBottom: 10 }}
            />
            <Typography
              sx={{
                fontFamily: "Inter",
                ml: { xs: 0, md: 1.5 },
                fontSize: 13,
                textAlign: { xs: "center", md: "left" },
              }}
            >
             Providing you the best  Real Time Bidding experince and selling your cars.
            </Typography>
          </Box>

          <Box
            sx={{
              width: { xs: "100%", md: "45%" },
              textAlign: { xs: "center", md: "right" },
              p: 2,
              mr: { xs: 0, md: 0 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
                gap: 2,
                mb: 3,
               
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#1976d2",
                  color: "white",
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  fontFamily: "Inter",
                  fontSize: 12,
                }}
              >
                <AppleIcon sx={{ mr: 0.5 }} /> App Store
              </Box>
              <Box
                sx={{
                  backgroundColor: "#1976d2",
                  color: "white",
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  fontFamily: "Inter",
                  fontSize: 14,
                  
                }}
              >
                <AndroidIcon sx={{ mr: 0.5 }} /> Google Play
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
                gap: 0.7,
                
                
              }}
            >
              {[FacebookIcon, XIcon, LinkedInIcon, YouTubeIcon, InstagramIcon, TikTokIcon].map(
                (Icon, index) => (
                  <IconButton
                    key={index}
                    sx={{ color: index < 3 ? "white" : "white" }}
                  >
                    <Icon />
                  </IconButton>
                )
              )}
            </Box>
          </Box>
        </Box>

      </Box>
    </Box>
  );
};

export default Footer;
