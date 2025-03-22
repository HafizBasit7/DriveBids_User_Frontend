import { Box } from "@mui/material";
import MainNavbar from "../../Components/Navbars/MainNavbar";
import SellCarCard from "../../Components/LandingPageComponents/SellCarCard";
import DealsBanner from "../../Components/HomePageComponents/DealBanner";
import CarCard from "../../Components/HomePageComponents/CarCard";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate =useNavigate()
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

      <Box sx={{ width: "100%" ,mt: 2}}>
        <DealsBanner title="Super Odd Deals" subtitle="3000 Cars Available" buttonText="View All"             onClick={() => navigate("/filter")} 
 />
      </Box>

      <Box sx={{ width: "100%", display: "flex", flexDirection: "row", gap: 2, flexWrap: "wrap" ,justifyContent:{xs:"center" ,lg:"start"} }}>
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        
        
      </Box>

      <Box sx={{ width: "100%", mt: 3 }}> 
        <DealsBanner title="Spotlight Deals" subtitle="3000 Cars Available" buttonText="View All" />
      </Box>

      <Box sx={{ width: "100%", display: "flex", flexDirection: "row", gap: 2, flexWrap: "wrap", mt: 2,justifyContent:{xs:"center" ,lg:"start"} }}>
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </Box>

      <Box sx={{ width: "100%", mt: 5 }}> 
        <DealsBanner title="Premium Deals" subtitle="3000 Cars Available" buttonText="View All" />
      </Box>

      <Box sx={{ width: "100%", display: "flex", flexDirection: "row", gap: 2, flexWrap: "wrap", mt: 2 ,justifyContent:{xs:"center" ,lg:"start"} }}>
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </Box>

   
    </Box>
       
       <Box sx={{ width: "100%", mt: 10 }}> 
        <Footer />
      </Box>
      </>
  );
};

export default HomePage;
