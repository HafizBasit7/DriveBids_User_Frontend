import { useState } from "react";
import {
  Box,
  Button,
  InputBase,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Notifications from "../Modals/Notification";
import ProfileMenu from "../Modals/Profilemenu";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useNavigate } from "react-router-dom";
import Logosvg from "../../assets/SVG/Mainlogo.svg";
import colors from "../../Style/color";
import MobileSidebar from "./Mobilesidebar";

const MainNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: "Home", path: "/home" },
    { label: "Browse Deals", path: "/filter" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "80px",
          background: "linear-gradient(90deg, #F7DD2F 38%, white 30%)",
          borderRadius: 3,
          [theme.breakpoints.up("md")]: {
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              bottom: 0,
              left: "33%",
              width: "8%",
              borderRight: "2px solid #dbdbdb",
              backgroundColor: "white",
              transform: "skewX(45deg)",
              zIndex: 2,
            },
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: isMobile ? "50px" : "200px",
            px: isMobile ? 0 : 7,
          }}
        >
          <img
            src={Logosvg}
            alt="DriveBidz Logo"
            style={{ height: isMobile ? 50 : 62, cursor: "pointer" }}
            onClick={() => navigate("/")}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            height: "100%",
            width: { xs: "65%", md: "63%" },
            display: "flex",
            alignItems: "center",
            gap: isMobile ? 1 : 2,
            justifyContent: "flex-end",
            borderRadius: 2,
            border: isMobile ? "none" : "2px solid #dbdbdb",
            borderLeft: "none",
            backgroundColor: isMobile ? colors.yellowbackground : "white",
            paddingX: 1,
            pr: 2,
            zIndex: 1,
            clipPath: "polygon(-5% 0, 100% 0, 100% 100%, -5% 100%)",
          }}
        >
          {!isMobile &&
            navItems.map((item, index) => (
              <Button
                key={index}
                sx={{ color: "black", textTransform: "none" }}
                onClick={() => navigate(item.path)}
              >
                {item.label}
              </Button>
            ))}

          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #ccc",
                borderRadius: 2,
                px: 0.5,
                py: 0.5,
                backgroundColor: "white",
                width: 170,
              }}
            >
              <SearchIcon sx={{ color: "#666", fontSize: 20 }} />
              <InputBase
                placeholder="Find cars"
                sx={{ ml: 1, fontSize: "14px", color: "black" }}
              />
            </Box>
          )}

          {isMobile && !showSearch && (
            <IconButton onClick={() => setShowSearch(true)}>
              <SearchIcon sx={{ color: "black" }} />
            </IconButton>
          )}

          {isMobile && showSearch && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #ccc",
                borderRadius: 2,
                px: 0.5,
                py: 0.5,
                backgroundColor: "white",
                width: "100px",
              }}
            >
              <SearchIcon sx={{ color: "#666", fontSize: 20 }} />
              <InputBase
                placeholder="Find cars"
                sx={{ ml: 1, fontSize: "14px", color: "black" }}
              />
            </Box>
          )}

          {!isMobile && (
            <IconButton onClick={() => navigate("/chat-page")}>
              <ChatBubbleOutlineIcon sx={{ color: "black" }} />
            </IconButton>
          )}

          <Notifications />
          <ProfileMenu />

          {isMobile && (
            <IconButton onClick={handleDrawerToggle} sx={{ color: "black" }}>
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Box>

      <MobileSidebar
        open={mobileOpen}
        handleClose={handleDrawerToggle}
        navigate={navigate}
      />
    </>
  );
};

export default MainNavbar;
