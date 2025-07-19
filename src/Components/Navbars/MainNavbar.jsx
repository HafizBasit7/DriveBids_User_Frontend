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
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Back to "sm" so laptops show desktop version
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
          background: "linear-gradient(90deg, #F7DD2F 38%, white 30%)",
          borderRadius: 3,
          [theme.breakpoints.up("sm")]: {
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              bottom: 0,
              left: "29%",
              width: "10%",
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
            width: { xs: "80px", sm: "120px", md: "160px", lg: "200px" }, // Better responsive width
            px: { xs: 1, sm: 2, md: 3 },
            minWidth: { xs: "80px", sm: "120px", md: "160px", lg: "200px" }, // Ensure minimum width
          }}
        >
          <Box
            component="img"
            src={Logosvg}
            alt="DriveBidz Logo"
            onClick={() => navigate("/home")}
            sx={{
              height: { xs: 120, sm: 130, md: 140, lg: 150 }, // Better responsive height
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
              xs: "70%",
              sm: "68%",
              md: "65%",
              lg: "63%",
            }, // Better responsive width distribution
            display: "flex",
            alignItems: "center",
            gap: { xs: 0.2, sm: 0.3, md: 0.5, lg: 1 },
            justifyContent: "flex-end",
            borderRadius: 2,
            border: isMobile ? "none" : "2px solid #dbdbdb",
            borderLeft: "none",
            backgroundColor: isMobile ? colors.yellowbackground : "white",
            paddingX: { xs: 0.2, sm: 0.3, md: 0.5, lg: 1 },
            pr: { xs: 0.3, sm: 0.5, md: 1, lg: 1.5 },
            zIndex: 1,
            clipPath: isMobile
              ? "none"
              : "polygon(-5% 0, 100% 0, 100% 100%, -5% 100%)",
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
              {/* Compact Location button */}
              {!isMobile && !showLocationInput && (
                <Box
                  onClick={handleLocationClick}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderRadius: 2,
                    px: { xs: 0.6, sm: 0.8, md: 1 },
                    py: { xs: 0.4, sm: 0.5, md: 0.6 },
                    backgroundColor: "white",
                    cursor: "pointer",
                    minWidth: "auto",
                    maxWidth: { xs: 80, sm: 90, md: 100 },
                    transition: "all 0.2s ease",
                  }}
                >
                  <LocationOnIcon
                    sx={{
                      color: "#333",
                      fontSize: { xs: 14, sm: 16, md: 18 },
                      mr: { xs: 0.2, sm: 0.3 },
                      mb: { xs: 0.2, sm: 0.3 },
                    }}
                  />
                  <Typography
                    noWrap
                    sx={{
                      fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" },
                      color: "#333",
                      textDecoration: "underline",
                      fontWeight: 500,
                    }}
                  >
                    {getLocationDisplayName()}
                  </Typography>
                </Box>
              )}

              <Fade in={showLocationInput}>
                <Box
                  sx={{
                    position: "relative",
                    display: showLocationInput ? "block" : "none",
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
              </Fade>

              {/* Compact Search button */}
              {!isMobile && !showSearchInput && (
                <IconButton
                  onClick={handleSearchClick}
                  sx={{
                    border: "1px solid #eaeaea",
                    borderRadius: 2,
                    backgroundColor: "white",
                    p: { xs: 0.8, sm: 1 },
                    color: "#333",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      borderColor: "#ddd",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
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

          {/* Mobile location and search handling */}
          {isMobile && (
            <>
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
