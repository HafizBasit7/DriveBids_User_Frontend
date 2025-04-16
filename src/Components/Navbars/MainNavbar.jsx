import { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EditLocationIcon from '@mui/icons-material/EditLocation';

import Notifications from "../Modals/Notification";
import ProfileMenu from "../Modals/Profilemenu";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useNavigate } from "react-router-dom";
import Logosvg from "../../assets/SVG/Mainlogo.svg";
import colors from "../../Style/color";
import MobileSidebar from "./Mobilesidebar";
import { useAuth } from "../../context/auth.context";
import LocationInput from "../../Components/Location/LocationInput"
import { useQueryClient } from "@tanstack/react-query";

const MainNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const {authState, dispatch} = useAuth();
  const currentSelectedLocation = (authState.selectedLocation || authState.user.location) || {"coordinates": [73.1128313, 33.5255503]};
  const queryClient = useQueryClient();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: "Home", path: "/home" },
    { label: "Browse Deals", path: "/search" },
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
            
            <LocationInput handleChange={(location) => {
              dispatch({ type: 'updateLocation', payload: location });
              setTimeout(() => {
                queryClient.invalidateQueries({ queryKey: ['cars'] });
                queryClient.invalidateQueries({ queryKey: ['carsEnding'] });
                queryClient.invalidateQueries({ queryKey: ['carsByBidCount'] });
                queryClient.invalidateQueries({ queryKey: ['carsAll'] });
                queryClient.invalidateQueries({ queryKey: ['carsEndingAll'] });
                queryClient.invalidateQueries({ queryKey: ['carsByBidCountAll'] });
              }, 200);
            }}>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #ccc",
                  borderRadius: 1,
                  px: 1,
                  py: 1.2,
                  backgroundColor: "white",
                  width: "auto",
                  cursor: "pointer",
                  maxWidth: 220
                }}
              >
                <LocationOnIcon sx={{ color: "black", fontSize: 20, mr: 1, }} />
                <Box
                  component="input"
                  placeholder={currentSelectedLocation?.name}
                  sx={{
                    border: "none",
                    outline: "none",
                    flex: 1,
                    minWidth: 0,
                    fontSize: '0.9rem'
                  }}
                />
              </Box>
            </LocationInput>
          
          )}

          {isMobile && !showSearch && (
            <IconButton onClick={() => setShowSearch(true)}>
              <EditLocationIcon sx={{ color: "black" }} />
            </IconButton>
          )}

          {isMobile && showSearch && (
           <Box
           sx={{
             display: "flex",
             alignItems: "center",
             border: "1px solid #ccc",
             borderRadius: 2,
             px: 1,
             py: 0.5,
             backgroundColor: "white",
             width: "auto",
             cursor: "pointer",
           }}
         >
           <EditLocationIcon sx={{ color: "#666", fontSize: 20, mr: 0.5 }} />
           <Typography sx={{ fontSize: "14px", color: "#000" }}>
             {user.city || "Your Location"}
           </Typography>
         </Box>
         
          )}

          {!isMobile && (
            <IconButton onClick={() => navigate("/chat")}>
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
