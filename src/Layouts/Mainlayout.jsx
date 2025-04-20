import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import MainNavbar from "../Components/Navbars/MainNavbar";
import Footer from "../Components/Footer/Footer";
import DealsBanner from "../Components/HomePageComponents/DealBanner";
import road from "../assets/SVG/roadsvg.svg";
import NewsletterSection from "../Components/ContactComponents/Newletter";

const MainLayout = ({ 
  children, 
  title,
  subtitle,
  buttonText,
  onClick,
  isnotSellMyCar,
  icon,
  ischatScreen
}) => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  return (
    <>
      <Box width="100%" minHeight="100%">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            p: 3,
            px: { xs: 0.5, md: 4, lg: 4 },
            width: "100%",
            height: "100%",
            position: "relative",
            zIndex: 2,
            minHeight: "100vh",
          }}
        >
          {!isnotSellMyCar && (
            <Box
              component="img"
              src={road}
              alt="Road SVG"
              sx={{
                position: "absolute",
                top: 130,
                right: 0,
                height: 1000,
                width: "50%",
                zIndex: 1,
                opacity: 0.2,
              }}
            />
          )}

          <Box sx={{ width: "100%", zIndex: 2 }}>
            <MainNavbar />
          </Box>

          {!ischatScreen && (
            <Box width="100%" zIndex={2} mt={1}>
              <DealsBanner
                title={title}
                subtitle={subtitle}
                buttonText={buttonText}
                onClick={onClick}
                icon={icon}
              />
            </Box>
          )}

          <Box sx={{ width: "100%", zIndex: 2 }}>
            {children}
          </Box>
        </Box>

        {/* Conditionally show newsletter only on /contact */}
        {isContactPage && (
          <Box sx={{ width: "100%" }}>
            <NewsletterSection />
          </Box>
        )}

        <Box sx={{ width: "100%" }}>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default MainLayout;
