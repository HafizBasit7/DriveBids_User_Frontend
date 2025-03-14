import { Box } from "@mui/material";
import MainNavbar from "../../Components/Navbars/MainNavbar";
import SellCarCard from "../../Components/LandingPageComponents/SellCarCard";
import DealsBanner from "../../Components/HomePageComponents/DealBanner";
import CarCard from "../../Components/HomePageComponents/CarCard";
import Footer from "../../Components/Footer/Footer";

const HomePage = () => {
  return (
    <>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        p: 3,
        px:{xs:0.5,md:4,lg:4}
      }}
    >
      <Box sx={{ width: "100%" }}>
        <MainNavbar />
      </Box>

      <Box sx={{ width: "100%" }}>
        <SellCarCard />
      </Box>

      <Box sx={{ width: "100%" }}>
        <DealsBanner title="Super Odd Deals" subtitle="3000 Cars Available" buttonText="View All" />
      </Box>

      <Box sx={{ width: "100%", display: "flex", flexDirection: "row", gap: 7, flexWrap: "wrap" ,justifyContent:{xs:"center"} }}>
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </Box>

      <Box sx={{ width: "100%", mt: 5 }}> {/* Added margin-top instead of top */}
        <DealsBanner title="Spotlight Deals" subtitle="3000 Cars Available" buttonText="View All" />
      </Box>

      <Box sx={{ width: "100%", display: "flex", flexDirection: "row", gap: 7, flexWrap: "wrap", mt: 2,justifyContent:{xs:"center"}  }}>
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </Box>

      <Box sx={{ width: "100%", mt: 5 }}> {/* Added margin-top */}
        <DealsBanner title="Premium Deals" subtitle="3000 Cars Available" buttonText="View All" />
      </Box>

      <Box sx={{ width: "100%", display: "flex", flexDirection: "row", gap: 7, flexWrap: "wrap", mt: 2 ,justifyContent:{xs:"center"} }}>
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </Box>

   
    </Box>
       {/* Footer at the bottom */}
       <Box sx={{ width: "100%", mt: 10 }}> 
        <Footer />
      </Box>
      </>
  );
};

export default HomePage;
