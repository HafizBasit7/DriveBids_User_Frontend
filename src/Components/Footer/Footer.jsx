import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import TikTokIcon from "@mui/icons-material/MusicNote";
import footerimg from "../../assets/Png/footerimg.png";
import logo from "../../assets/SVG/Mainlogo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const navItems = [
    { label: "HOME", path: "/" },
    { label: "BROWSE CARS", path: "/home" },
    { label: "MY BIDS", path: "/my-bids" },
    { label: "MY ADS", path: "/my-ads" },
    { label: "START SELLING", path: "/ad" },
    { label: "CONTACT US", path: "/contact" },
    { label: "FAQ / HELP CENTER", path: "/#faq" },
  ];

  const policyItems = [
    { label: "PRIVACY POLICY", path: "/privacy-policy" },
    { label: "TERMS & CONDITIONS", path: "/terms-and-conditions" },
    { label: "BUYER & SELLER PROTECTION", path: "/buyer-seller-protection" },
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
        // zIndex: -1,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "40%",
          height: "100%",
          background:
            "linear-gradient(to left, rgba(0,0,0,0.9), rgba(0,0,0,0.5), transparent)",
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
        {/* Navigation Links */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: 1, md: 2 },
            mb: 4,
            width: "100%",
            ml: { xs: 0, md: 2 },
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              style={{
                textDecoration: "none",
                width: { xs: "45%", md: "180px" },
                textAlign: { xs: "center", md: "start" },
              }}
            >
              <Typography
                sx={{
                  cursor: "pointer",
                  width: { xs: "45%", md: "180px" },
                  textAlign: { xs: "center", md: "start" },
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
            </Link>
          ))}
        </Box>

        <Box
          sx={{
            width: "99%",
            height: "1px",
            backgroundColor: "#545454",
            mb: 3,
          }}
        />

        {/* Main Content */}
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: { xs: "center", md: "flex-start" },
            flexWrap: "wrap",
            width: "100%",
            gap: { xs: 4, md: 0 },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "30%" },
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <img
              src={logo}
              alt="DriveBidz"
              style={{ width: 200, marginBottom: 10 }}
            />
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: 13,
                textAlign: { xs: "center", md: "left" },
                mb: 2,
                ml: 3,
                opacity: 0.5,
                maxWidth: "300px",
              }}
            >
              Experience seamless auctions, instant buys, and effortless car
              sales — all in one place.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              {policyItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Typography
                    sx={{
                      cursor: "pointer",
                      textAlign: { xs: "center", md: "left" },
                      fontWeight: 600,
                      fontSize: 12,
                      fontFamily: "Inter",
                      ml: 3,
                      opacity: 0.5,
                      color: "#fff",
                      "&:hover": {
                        textDecoration: "underline",
                        opacity: 1,
                      },
                    }}
                  >
                    {item.label}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              width: { xs: "100%", md: "45%" },
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-end" },
              gap: 3,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: 11,
                  mb: 2,
                  color: "white",
                  width: 270,
                  opacity: 0.5,
                  textAlign: { xs: "center", md: "center" },
                }}
              >
                Download the app and start bidding in seconds.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-end" },
                  gap: 2,
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
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#1565c0",
                    },
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
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#1565c0",
                    },
                  }}
                >
                  <AndroidIcon sx={{ mr: 0.5 }} /> Google Play
                </Box>
              </Box>
            </Box>

            {/* Social Media Section */}
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-end" },
                  gap: 0.7,
                }}
              >
                {[
                  FacebookIcon,
                  XIcon,
                  LinkedInIcon,
                  YouTubeIcon,
                  InstagramIcon,
                  TikTokIcon,
                ].map((Icon, index) => (
                  <IconButton
                    key={index}
                    sx={{
                      color: "white",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                      },
                    }}
                  >
                    <Icon />
                  </IconButton>
                ))}
              </Box>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: 11,
                  mt: 2,
                  color: "white",
                  opacity: 0.5,
                  textAlign: { xs: "center", md: "center" },
                  width: 270,
                }}
              >
                Follow us for car deals, auction tips, and feature updates.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
