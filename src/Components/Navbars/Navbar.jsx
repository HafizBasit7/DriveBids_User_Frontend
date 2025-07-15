import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logosvg from "../../assets/Png/Logo.png";
import colors from "../../Style/color";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth.context";

const Navbar = ({ howItWorksRef }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // or 'md' for tablets
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const { authState } = useAuth();
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
          width: "100%",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: 3 }}>
         <Box>
      <Box
        component="img"
        src={Logosvg}
        alt="DriveBidz Logo"
        sx={{
          height: isMobile ? 150 : 130,     // 50px on small screens, 100px on larger
          width: 'auto',
        }}
      />
    </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              pr: { md: 6, lg: 8 },
            }}
          >
            <Button
              sx={{
                color: "#000",
                mx: 1,
                fontSize: 13,
                fontFamily: "Inter",
                fontWeight: 500,
              }}
              onClick={() => navigate("/home")}
            >
              Home
            </Button>
            <Button
              sx={{
                color: "#000",
                mx: 1,
                fontSize: 13,
                fontFamily: "Inter",
                fontWeight: 500,
              }}
              onClick={() =>
                howItWorksRef?.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              How It Works
            </Button>
            <Button
              sx={{
                color: "#000",
                mx: 1,
                fontSize: 13,
                fontFamily: "Inter",
                fontWeight: 500,
              }}
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </Button>
            <Button
              sx={{
                color: "#fff",
                backgroundColor: colors.buttoncolor,
                textTransform: "none",
                fontSize: 13,
                fontFamily: "Inter",
                fontWeight: 500,
                width: "120px",
                height: "40px",
                borderRadius: 2,
                mx: 1,
                "&:hover": {
                  backgroundColor: "#1E4BA0",
                },
              }}
              onClick={() => navigate("/ad")}
            >
              Start Selling
            </Button>
            {!authState.isAuthenticated && (
              <Button
                sx={{
                  color: "#fff",
                  borderColor: "#2F61BF",
                  backgroundColor: colors.buttoncolor,
                  textTransform: "none",
                  fontSize: 13,
                  fontFamily: "Inter",
                  fontWeight: 500,
                  width: "120px",
                  height: "40px",
                  borderRadius: 2,
                  ml: 3,
                  "&:hover": {
                    borderColor: "#2F61BF",
                    backgroundColor: "#1E4BA0",
                  },
                }}
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            )}
          </Box>

          <IconButton
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", md: "none" }, color: "#000" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

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
                backgroundColor: colors.buttoncolor,
                textTransform: "none",
                fontSize: 13,
                fontFamily: "Inter",
                fontWeight: 500,
                height: "45px",
                borderRadius: 2,
                mb: 2,
                "&:hover": {
                  backgroundColor: "#1E4BA0",
                },
              }}
              onClick={() => {
                navigate("/ad");
                handleDrawerToggle();
              }}
            >
              Start Selling
            </Button>
          </ListItem>
          {!authState.isAuthenticated && (
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
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            </ListItem>
          )}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
