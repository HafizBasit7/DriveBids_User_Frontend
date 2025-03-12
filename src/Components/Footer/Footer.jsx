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

const Footer = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        backgroundImage: `url(${footerimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        px: { xs: 2, md: 14 },
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

      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: "31.5%",
          width: "15%",
          backgroundColor: "white",
          transform: "skew(47deg)",
          zIndex: 0,
        }}
      />

      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            mb: 2,
            width: "90%",
            ml: 2
          }}
        >
          {[
            "HOME", "ABOUT US", "HOW IT WORKS", "CONTACT US",
            "PRIVACY POLICY", "CONTACT US", "HELP CENTER", "FAQS", "HELP CENTER"
          ].map((item, index) => (
            <Typography
              key={index}
              variant="body2"
              sx={{
                cursor: "pointer",
                width: "210px",
                textAlign: "start",
                fontWeight: 500,
                fontSize: 12,
                fontFamily: "Inter",
                zIndex: 1,
                color: index === 3 || index === 8 ? "black" : "white", 
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>

        <Box sx={{ width: "90%", height: "2px", backgroundColor: "#545454", mb: 3 }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "space-between" }, 
            alignItems: "center",
            flexWrap: "wrap",
            pr: { xs: 0, md: 20 }, 
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
              Lorem ipsum dolor s neque que quis pretium proin aliquam habitant ipsum
              blandit eleifend vitae.
            </Typography>
          </Box>

          <Box
            sx={{
              width: { xs: "100%", md: "45%" },
              textAlign: { xs: "center", md: "right" },
              p: 2,
              mr: { xs: 0, md: 1 },
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
                  fontSize: 12,
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
                    sx={{ color: index < 3 ? "black" : "white" }}
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
