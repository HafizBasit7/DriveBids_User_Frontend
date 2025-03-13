import { useState } from "react";
import {
  AppBar,
  Toolbar,
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

const MainNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Toggle Mobile Menu
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Navigation Links
  const navItems = ["Home", "How it Works", "Contact Us"];

  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(90deg, #F7DD2F 38%, white 30%)", 
        boxShadow: "none",
       
        width: "100%",
        
        borderRadius: 3,
        
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          
          borderRadius: 5,
        
          
        }}
      >
         <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: "33%", 
                  width: "8%",
                  borderRight: "2px solid #2F61BF",
                  backgroundColor: "white",
                  transform: "skewX(45deg)", 
                  zIndex: 2, 
                }}
              />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: isMobile ? "50px" : "200px", 
            
          }}
        >
          <img src={Logosvg} alt="DriveBidz Logo" style={{ height: isMobile ? 40 : 60 }} />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
       
            justifyContent: "flex-end",
            
          
            borderRadius: 2,
            padding: "15px 15px",
            border: "2px solid #2F61BF", // Add border
            borderLeft: "none", // Remove border from left side
            width:"63%",
           
          }}
        >
          {!isMobile &&
            navItems.map((item, index) => (
              <Button key={index} sx={{ color: "black", textTransform: "none", fontFamily: "Inter", fontWeight: 400 }}>
                {item}
              </Button>
            ))}

          {/* Icons (Always Visible) */}
          <IconButton>
            <ChatBubbleOutlineIcon sx={{ color: "black" }} />
          </IconButton>
          <IconButton>
            <NotificationsNoneIcon sx={{ color: "black" }} />
          </IconButton>
          <Avatar sx={{ bgcolor: "blue", width: 32, height: 32 }}>U</Avatar>
          <KeyboardArrowDownIcon sx={{ color: "black" }} />

          {/* Search Bar (Smaller Width) */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #ccc",
              borderRadius: 2,
              px: 0.5,
              py: 0.5,
              backgroundColor: "white",
              width: isMobile ? "100px" : "150px", // Reduced width
            }}
          >
            <SearchIcon sx={{ color: "#666", fontSize: 20 }} />
            <InputBase placeholder="Find cars" sx={{ ml: 1, fontSize: "14px", color: "black" }} />
          </Box>

          {/* Show Hamburger Menu Only on Mobile */}
          {isMobile && (
            <IconButton onClick={handleDrawerToggle} sx={{ color: "black" }}>
              <MenuIcon />
            </IconButton>
          )}
        </Box>

        {/* Mobile Drawer Menu */}
        <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
          <List sx={{ width: 250 }}>
            {navItems.map((text, index) => (
              <ListItem button key={index} onClick={handleDrawerToggle}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default MainNavbar;
