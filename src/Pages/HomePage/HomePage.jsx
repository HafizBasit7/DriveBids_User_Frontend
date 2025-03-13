import { Box } from "@mui/material";
import MainNavbar from "../../Components/Navbars/MainNavbar";
import SellCarCard from "../../Components/LandingPageComponents/SellCarCard";
import DealsBanner from "../../Components/HomePageComponents/DealBanner";
import CarCard from "../../Components/HomePageComponents/CarCard";

const HomePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        p: 3,
        px:4,
       
       
   
      }}
    >
      <Box sx={{width:"100%" ,}}>
        <MainNavbar />
      </Box>

      <Box sx={{width:"100%" ,}}>
    <SellCarCard/>
      </Box>

      <Box sx={{width:"100%" , }}>
      <DealsBanner title="Super Odd Deals" subtitle="3000 Cars Available" buttonText="View All" />
      </Box>

      <Box sx={{width:"100%" ,  }}>
       <CarCard/>
      </Box>

      <Box sx={{  }}>
        {/* <Testimonials /> */}
      </Box>

      <Box sx={{ width: "100%" }}>
        {/* <Footer /> */}
      </Box>
    </Box>
  );
};

export default HomePage;
