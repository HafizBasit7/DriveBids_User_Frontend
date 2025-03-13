import React, { useState } from "react";
import { AppBar, Toolbar, Box, Button, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logosvg from "../../assets/SVG/Mainlogo.svg";
import colors from "../../Style/color";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        position="absolute"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          px: { xs: 2, sm: 4, md: 6 },
          py: 2,
          width:"100%"

        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: 3 }}>
         
          <Box>
            <img src={Logosvg} alt="DriveBidz Logo" style={{ height: 60 }} />
          </Box>

         
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", pr: { md: 6, lg: 8 } }}>
            <Button sx={{ color: "#000", mx: 1,fontSize:13,fontFamily:"Inter",fontWeight:500 }}>Home</Button>
            <Button sx={{ color: "#000", mx: 1,fontSize:13,fontFamily:"Inter",fontWeight:500 }}>How It Works</Button>
            <Button sx={{ color: "#000", mx: 1 ,fontSize:13,fontFamily:"Inter",fontWeight:500}}>Contact Us</Button>
            <Button
              sx={{
                color: "#fff",
                borderColor: "#2F61BF",
                backgroundColor: colors.buttoncolor,
                fontSize: "12px",
                width: "120px",
                height: "40px",
                borderRadius: 2,
                fontFamily:"Inter",
                ml: 3,
                "&:hover": { borderColor: "#2F61BF", backgroundColor: "#1E4BA0" },
              }}
            >
              Login
            </Button>
          </Box>

        
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", md: "none" }, color: "#000" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": { width: "70%", backgroundColor: "#fff" },
        }}
      >
        <List>
          {["Home", "How It Works", "Contact Us"].map((text, index) => (
            <ListItem button key={index} onClick={handleDrawerToggle}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          <ListItem>
            <Button
              fullWidth
              sx={{
                color: "#fff",
                borderColor: "#2F61BF",
                backgroundColor: "#2F61BF",
                fontSize: "12px",
                height: "45px",
                borderRadius: 2,
               
              }}
            >
              Login
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
