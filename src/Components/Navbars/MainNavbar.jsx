import { useState } from "react";
import {
  Box,
  Button,
  InputBase,
  IconButton,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useTheme, useMediaQuery } from "@mui/material";
import Logosvg from "../../assets/SVG/Mainlogo.svg";
import colors from "../../Style/color";
import Notifications from "../Modals/Notification";

const MainNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = ["Home", "How it Works", "Contact Us"];

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "80px",
        background: "linear-gradient(90deg, #F7DD2F 38%, white 30%)",
        boxShadow: "none",
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
      {/* Logo */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: isMobile ? "50px" : "200px",
          px: isMobile ? 0 : 7,
        }}
      >
        <img src={Logosvg} alt="DriveBidz Logo" style={{ height: isMobile ? 50 : 62 }} />
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
            <Button key={index} sx={{ color: "black", textTransform: "none" }}>
              {item}
            </Button>
          ))}

        {/* Search Bar (Always visible on large screens) */}
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
              width: "150px",
            }}
          >
            <SearchIcon sx={{ color: "#666", fontSize: 20 }} />
            <InputBase placeholder="Find cars" sx={{ ml: 1, fontSize: "14px", color: "black" }} />
          </Box>
        )}

        {/* Search Icon for Small Screens */}
        {isMobile && !showSearch && (
          <IconButton onClick={() => setShowSearch(true)}>
            <SearchIcon sx={{ color: "black" }} />
          </IconButton>
        )}

        {/* Expandable Search Bar for Small Screens */}
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
            <InputBase placeholder="Find cars" sx={{ ml: 1, fontSize: "14px", color: "black" }} />
          </Box>
        )}

       
        {!isMobile && (
          <IconButton>
            <ChatBubbleOutlineIcon sx={{ color: "black" }} />
          </IconButton>
        )}
        <Notifications />
        <Avatar sx={{ bgcolor: "blue", width: 32, height: 32 }}>U</Avatar>

        
        {isMobile && (
          <IconButton onClick={handleDrawerToggle} sx={{ color: "black" }}>
            <MenuIcon />
          </IconButton>
        )}
      </Box>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <List sx={{ width: 250 }}>
          {navItems.map((text, index) => (
            <ListItem button key={index} onClick={handleDrawerToggle}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          <ListItem button onClick={handleDrawerToggle}>
            <ListItemText primary="Chat" />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default MainNavbar;