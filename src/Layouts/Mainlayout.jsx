import { Box } from "@mui/material";
import MainNavbar from "../Components/Navbars/MainNavbar";
import Footer from "../Components/Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      {/* Navbar */}
     

      {/* Main Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          p: 3,
          px: { xs: 0.5, md: 4, lg: 4 },
          width: "100%",
          height:"100%",
        }}
      >
         <Box sx={{ width: "100%" }}>
        <MainNavbar />
      </Box  >
        {children}
      </Box>

      {/* Footer */}
      <Box sx={{ width: "100%", }}>
        <Footer />
      </Box>
    </>
  );
};

export default MainLayout;
