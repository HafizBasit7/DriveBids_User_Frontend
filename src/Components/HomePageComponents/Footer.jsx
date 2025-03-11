import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TikTokIcon from "@mui/icons-material/MusicNote"; 
import footerimg from "../../assets/Png/footerimg.png";
import logo from "../../assets/SVG/Mainlogo.svg";

const Footer = () => {
  return (
    <Box
      sx={{
        position: "relative", // Ensures proper layering
        width: "100%",
        backgroundImage: `url(${footerimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        px: { xs: 2, md: 10 },
        py: 7,
        mt: 4,
        zIndex: -1, // Background remains at the lowest layer
      }}
    >
      {/* White Strip */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: "31%",
          width: "13%",
          backgroundColor: "white",
          transform: "skew(45deg)",
          zIndex: 0, // Above background but below all other content
        }}
      />

      {/* All Content (Kept Above White Strip) */}
      <Box sx={{ position: "relative", zIndex: 1 }}>
        {/* Navigation Links */}
        <Box 
          sx={{ 
            display: "flex", 
            flexWrap: "wrap", 
            gap: 3,
            mb: 2, 
            width: "90%" 
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
                zIndex: 1
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>

        <Box sx={{ width: "90%", height: "2px", backgroundColor: "#545454", mb: 3 }} />

        {/* Footer Content */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            pr: 20,
          }}
        >
          <Box sx={{ width: "50%", p: 0.4 }}>
            <img src={logo} alt="DriveBidz" style={{ width: 180, marginBottom: 10  }} />
            <Typography sx={{ fontFamily: "Inter", ml: 1.5, fontSize: 13 }}>
              Lorem ipsum dolor s neque que quis pretium proin aliquam habitant ipsum blandit eleifend vitae pretium proin aliquam habitant ipsum blandit eleifend vitae pretium proin aliquam habitant ipsum blandit eleifend vitae.
            </Typography>
          </Box>

          <Box sx={{ width: "45%", textAlign: "right", p: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mb: 3, mr: 1 }}>
              <Box sx={{ backgroundColor: "#1976d2", color: "white", px: 2, py: 1, borderRadius: 2, display: "flex", alignItems: "center", cursor: "pointer", fontFamily: "Inter", fontSize: 12 }}>
                <AppleIcon sx={{ mr: 0.5 }} /> App Store
              </Box>
              <Box sx={{ backgroundColor: "#1976d2", color: "white", px: 2, py: 1, borderRadius: 2, display: "flex", alignItems: "center", cursor: "pointer", fontFamily: "Inter", fontSize: 12 }}>
                <AndroidIcon sx={{ mr: 0.5 }} /> Google Play
              </Box>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 0.8 }}>
              {[FacebookIcon, LinkedInIcon, LinkedInIcon, YouTubeIcon, InstagramIcon, TikTokIcon].map((Icon, index) => (
                <IconButton key={index} sx={{ color: "white" }}>
                  <Icon />
                </IconButton>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
