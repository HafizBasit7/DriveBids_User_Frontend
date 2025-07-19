import { useState, useRef, useEffect } from "react";
import {
  Box,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
  Typography,
  ClickAwayListener,
  Fade,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import Notifications from "../Modals/Notification";
import ProfileMenu from "../Modals/Profilemenu";
import { useNavigate } from "react-router-dom";
import Logosvg from "../../assets/Png/Logo.png";
import colors from "../../Style/color";
import MobileSidebar from "./Mobilesidebar";
import { useAuth } from "../../context/auth.context";
import LocationInput from "../../Components/Location/LocationInput";
import { useQueryClient } from "@tanstack/react-query";

const MainNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showLocationInput, setShowLocationInput] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef(null);
  const locationInputRef = useRef(null);

  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:730px)"); // Custom breakpoint at 730px
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));
  const navigate = useNavigate();
  const { authState, dispatch } = useAuth();
  const showSearchInput = authState.searchOpen;
  const currentSelectedLocation = authState.selectedLocation ||
    authState.user?.location || { coordinates: [73.1128313, 33.5255503] };
  const queryClient = useQueryClient();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLocationClick = () => {
    setShowLocationInput(true);
    dispatch({ type: "setSearchOpen", payload: false });
  };

  const handleSearchClick = () => {
    if (!window.location.pathname.includes("search")) {
      navigate("/search");
    }
    dispatch({ type: "setSearchOpen", payload: true });
    setShowLocationInput(false);
  };

  const handleSearchNavigate = () => {
    if (!window.location.pathname.includes("search")) {
      navigate("/search");
    }
  };

  const closeAllInputs = () => {
    setShowLocationInput(false);
    dispatch({ type: "setSearchOpen", payload: false });
  };

  const handleLocationChange = (location) => {
    dispatch({ type: "updateLocation", payload: location });
    setTimeout(() => {
      queryClient.invalidateQueries({ queryKey: ["cars"] });
      queryClient.invalidateQueries({ queryKey: ["carsEnding"] });
      queryClient.invalidateQueries({ queryKey: ["carsByBidCount"] });
      queryClient.invalidateQueries({ queryKey: ["carsAll"] });
      queryClient.invalidateQueries({ queryKey: ["carsEndingAll"] });
      queryClient.invalidateQueries({ queryKey: ["carsByBidCountAll"] });
      queryClient.invalidateQueries({ queryKey: ["search"] });
    }, 200);
    closeAllInputs();
  };

  const handleSearchSubmit = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
      closeAllInputs();
    }
  };

  // Focus input when expanded
  useEffect(() => {
    if (showSearchInput && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearchInput]);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Listings", path: "/home" },
    { label: "Search Deals", path: "/search" },
    { label: "My Ads", path: "/my-ads" },
    // { label: "Contact Us", path: "/contact" },
  ];

  const getLocationDisplayName = () => {
    if (currentSelectedLocation?.name) {
      const locationName = currentSelectedLocation.name;
      return locationName.length > 10
        ? locationName.substring(0, 15) + ""
        : locationName;
    }
    return "Location";
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: { xs: "70px", sm: "75px", md: "80px" }, // Responsive height
          background: "#F7DD2F",
          borderRadius: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: {
              xs: "60px",
              sm: "80px",
              md: "80px",
              lg: "140px",
              xl: "180px",
            }, // Responsive width
            px: { xs: 0.5, sm: 1, md: 1, lg: 2.5, xl: 3 },
            minWidth: {
              xs: "60px",
              sm: "80px",
              md: "80px",
              lg: "140px",
              xl: "180px",
            }, // Responsive minimum width
          }}
        >
          <Box
            component="img"
            src={Logosvg}
            alt="DriveBidz Logo"
            onClick={() => navigate("/home")}
            sx={{
              height: { xs: 80, sm: 100, md: 120, lg: 140 }, // Much smaller on small screens
              width: "auto",
              maxWidth: "100%",
              cursor: "pointer",
              objectFit: "contain",
            }}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            height: "100%",
            width: {
              xs: "80%",
              sm: "75%",
              md: "75%",
              lg: "68%",
              xl: "64%",
            }, // Responsive width for tabs section
            display: "flex",
            alignItems: "center",
            gap: { xs: 0.2, sm: 0.3, md: 0.5, lg: 1 },
            justifyContent: "flex-end",
            borderRadius: 2,
            border: "none",
            backgroundColor: "#F7DD2F",
            paddingX: { xs: 0.2, sm: 0.3, md: 0.5, lg: 1 },
            pr: { xs: 0.3, sm: 0.5, md: 1, lg: 1.5 },
            zIndex: 1,
            clipPath: "none",
          }}
        >
          {!isMobile &&
            navItems.map((item, index) => (
              <Button
                key={index}
                sx={{
                  color: "black",
                  textTransform: "none",
                  fontSize: { xs: 9, sm: 10, md: 11, lg: 12 }, // Even smaller text
                  fontFamily: "Inter",
                  fontWeight: 500,
                  px: { xs: 0.2, sm: 0.3, md: 0.5, lg: 1 }, // Even more reduced padding
                  mx: { xs: 0.1, sm: 0.2, md: 0.3, lg: 0.5 }, // Even more reduced margin
                  "&:hover": {
                    backgroundColor: "rgba(0,0,0,0.04)",
                  },
                }}
                onClick={() => navigate(item.path)}
              >
                {item.label}
              </Button>
            ))}

          <ClickAwayListener onClickAway={closeAllInputs}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 0.2, sm: 0.3, md: 0.5 },
              }}
            >
              {/* Location Input - Full on desktop, icon on mobile */}
              {!isMobile ? (
                <Box
                  sx={{
                    position: "relative",
                    display: "block",
                  }}
                >
                  <LocationInput handleChange={handleLocationChange}>
                    <Box
                      component="div"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        border: "1px solid #eaeaea",
                        borderRadius: 2,
                        px: { xs: 1, sm: 1.5 },
                        py: { xs: 0.8, sm: 1 },
                        backgroundColor: "white",
                        width: { xs: 180, sm: 200, md: 220 },
                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                      }}
                      ref={locationInputRef}
                    >
                      <LocationOnIcon
                        sx={{
                          color: "#333",
                          fontSize: { xs: 18, sm: 20 },
                          mr: { xs: 0.5, sm: 1 },
                        }}
                      />
                      <Box
                        component="input"
                        placeholder={getLocationDisplayName()}
                        sx={{
                          border: "none",
                          outline: "none",
                          flex: 1,
                          minWidth: 0,
                          fontSize: { xs: "0.8rem", sm: "0.9rem" },
                        }}
                        autoFocus
                      />
                      <IconButton
                        size="small"
                        onClick={closeAllInputs}
                        sx={{ color: "#999" }}
                      >
                        <CloseIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </LocationInput>
                </Box>
              ) : (
                <IconButton
                  onClick={handleLocationClick}
                  sx={{
                    color: "#333",
                    "&:hover": {
                      backgroundColor: "rgba(0,0,0,0.04)",
                    },
                  }}
                >
                  <LocationOnIcon />
                </IconButton>
              )}

              {/* Search button right after location */}
              {!isMobile && !showSearchInput && (
                <IconButton
                  onClick={handleSearchClick}
                  sx={{
                    color: "#333",
                    "&:hover": {
                      backgroundColor: "rgba(0,0,0,0.04)",
                    },
                  }}
                >
                  <SearchIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
                </IconButton>
              )}

              {/* Expanded Search Input */}
              <Fade in={showSearchInput}>
                <Box
                  component="div"
                  sx={{
                    display: showSearchInput ? "flex" : "none",
                    alignItems: "center",
                    border: "1px solid #eaeaea",
                    borderRadius: 2,
                    px: { xs: 1, sm: 1.5 },
                    py: { xs: 0.6, sm: 0.8 },
                    backgroundColor: "white",
                    width: { xs: 180, sm: 200, md: 220 },
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  }}
                >
                  <SearchIcon
                    sx={{
                      color: "#333",
                      fontSize: { xs: 18, sm: 20 },
                      mr: { xs: 0.5, sm: 1 },
                    }}
                  />
                  <Box
                    component="input"
                    placeholder="Search cars..."
                    value={authState.title}
                    onClick={handleSearchNavigate}
                    onChange={(e) =>
                      dispatch({ type: "updateTitle", payload: e.target.value })
                    }
                    onKeyDown={handleSearchSubmit}
                    sx={{
                      border: "none",
                      outline: "none",
                      flex: 1,
                      minWidth: 0,
                      fontSize: { xs: "0.8rem", sm: "0.9rem" },
                    }}
                    ref={searchInputRef}
                  />
                  <IconButton
                    size="small"
                    onClick={closeAllInputs}
                    sx={{ color: "#999" }}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Fade>
            </Box>
          </ClickAwayListener>

          {/* Mobile search handling */}
          {isMobile && (
            <>
              <IconButton
                onClick={handleSearchClick}
                sx={{
                  color: "#333",
                  "&:hover": {
                    backgroundColor: "rgba(0,0,0,0.04)",
                  },
                }}
              >
                <SearchIcon />
              </IconButton>
            </>
          )}

          {/* Mobile expanded inputs */}
          {isMobile && (showLocationInput || showSearchInput) && (
            <ClickAwayListener onClickAway={closeAllInputs}>
              <Box
                sx={{
                  position: "absolute",
                  top: "80px",
                  left: 0,
                  width: "100%",
                  zIndex: 10,
                  p: 1.5,
                  backgroundColor: "white",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                }}
              >
                {showLocationInput && (
                  <LocationInput handleChange={handleLocationChange}>
                    <Box
                      component="div"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        border: "1px solid #eaeaea",
                        borderRadius: 2,
                        px: 1.5,
                        py: 1.2,
                        backgroundColor: "white",
                        width: "100%",
                      }}
                    >
                      <LocationOnIcon
                        sx={{ color: "#333", fontSize: 20, mr: 1 }}
                      />
                      <Box
                        component="input"
                        placeholder="Enter location"
                        sx={{
                          border: "none",
                          outline: "none",
                          flex: 1,
                          minWidth: 0,
                          fontSize: "0.9rem",
                        }}
                        autoFocus
                      />
                      <IconButton
                        size="small"
                        onClick={closeAllInputs}
                        sx={{ color: "#999" }}
                      >
                        <CloseIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </LocationInput>
                )}

                {showSearchInput && (
                  <Box
                    component="div"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      border: "1px solid #eaeaea",
                      borderRadius: 2,
                      px: 1.5,
                      py: 1.2,
                      backgroundColor: "white",
                      width: "100%",
                    }}
                  >
                    <SearchIcon sx={{ color: "#333", fontSize: 20, mr: 1 }} />
                    <Box
                      component="input"
                      placeholder="Search cars..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={handleSearchSubmit}
                      sx={{
                        border: "none",
                        outline: "none",
                        flex: 1,
                        minWidth: 0,
                        fontSize: "0.9rem",
                      }}
                      ref={searchInputRef}
                      autoFocus
                    />
                    <IconButton
                      size="small"
                      onClick={closeAllInputs}
                      sx={{ color: "#999" }}
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </Box>
                )}
              </Box>
            </ClickAwayListener>
          )}

          {!isMobile && (
            <IconButton
              onClick={() => navigate("/chat")}
              sx={{
                color: "#333",
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.04)",
                },
              }}
            >
              <ChatBubbleOutlineIcon />
            </IconButton>
          )}

          <Notifications />
          <ProfileMenu />

          {isMobile && (
            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                color: "#333",
                ml: 0.5,
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.04)",
                },
              }}
            >
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
