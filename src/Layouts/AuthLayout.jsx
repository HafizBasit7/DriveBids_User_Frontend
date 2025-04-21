import { Box, useMediaQuery, useTheme } from "@mui/material"; 
import Logo from "../assets/SVG/Mainlogo.svg";
import Carfront from "../assets/SVG/carfrontsvg.svg";
import colors from "../Style/color";
import { useNavigate } from "react-router-dom";
import LazyLoad from "react-lazyload";

const AuthLayout = ({ children }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); 
  const navigate = useNavigate()

  return (
    <Box 
      sx={{ 
        height: "100vh", 
        display: "flex", 
        flexDirection: isSmallScreen ? "column" : "row",
        alignItems: "center", 
        justifyContent: "center", 
        bgcolor: colors.yellowbackground,
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: {md:"25%",lg:"23%"},
          width: "17%",
          backgroundColor: "white",
          transform: "skew(40deg)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "56%",
          width: "17%",
          backgroundColor: "white",
          transform: "skew(40deg)",
          zIndex: 0,
        }}
      />

      <Box 
        sx={{ 
          width: "100%", 
          display: "flex", 
          justifyContent: isSmallScreen ? "center" : "flex-start",
          alignItems: "center",
          mt: isSmallScreen ? 3 : 0, 
          position: "absolute",
          top: isSmallScreen ? 20 : 25, 
          left: isSmallScreen ? "50%" : 70, 
          transform: isSmallScreen ? "translateX(-50%)" : "none",
          zIndex: 2,
        }}
      >
        <img src={Logo} alt="DriveBidz Logo" width={isSmallScreen ? 200 : 180}             onClick={() => navigate("/")}
 />
      </Box>

      {!isSmallScreen && (
        <Box 
          sx={{ 
            flex: 1, 
            position: "relative", 
            height: "100%", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "flex-start",
            overflow: "hidden",
          }}
        >
                  <LazyLoad offset={100} once>

          <img 
            src={Carfront} 
            alt="Car Front" 
            style={{ width: "100%", height: "auto", objectFit: "contain" }} 
          />
                            </LazyLoad>

        </Box>
      )}

      <Box 
        sx={{ 
          flex: isSmallScreen ? "none" : 1, 
          width: isSmallScreen ? "90%" : "auto", 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          mt: isSmallScreen ? 4 : 0 
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default AuthLayout;
