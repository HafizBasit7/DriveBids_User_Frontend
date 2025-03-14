import { Box } from "@mui/material";
import MainLayout from "../../Layouts/MainLayout";
import DealsBanner from "../../Components/HomePageComponents/DealBanner";
import CarSlider from "../../Components/CarDetailsComponent/CarSlider";
import CarDetailsComponent from "../../Components/CarDetailsComponent/Cardetailcomp";
import CarFeaturesComponent from "../../Components/CarDetailsComponent/CarFeatures";

const CarDetailsPage = () => {
  return (
    <MainLayout>
      {/* Deals Banner */}
      <Box sx={{ width: "100%" }}>
        <DealsBanner title="1996 Ford Mustang" subtitle="Posted 2 days ago" buttonText="Message O" />
      </Box>

      {/* Section 1: Left 70% - Right 30% */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          mt: 2,
          width: "100%",
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "70%" }, backgroundColor: "", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <CarSlider />
        </Box>
        <Box sx={{ width: { xs: "100%", md: "30%" }, height: 200, backgroundColor: "#0af", display: "flex", justifyContent: "center", alignItems: "center" }}>
          Right Box 30%
        </Box>
      </Box>

     {/* Section 2: Left 70% - Right 30% */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          mt: 2,
          width: "100%",
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "40%" },  backgroundColor: "", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <CarDetailsComponent/>
        </Box>
        <Box sx={{ width: { xs: "100%", md: "60%" },  backgroundColor: "", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <CarFeaturesComponent/>
        </Box>
      </Box>

      {/* Section 3: Left 70% - Right 30% */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          mt: 2,
          width: "100%",
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "70%" }, height: 200, backgroundColor: "#0fa", display: "flex", justifyContent: "center", alignItems: "center" }}>
          Left Box 70%
        </Box>
        <Box sx={{ width: { xs: "100%", md: "30%" }, height: 200, backgroundColor: "#f55", display: "flex", justifyContent: "center", alignItems: "center" }}>
          Right Box 30%
        </Box>
      </Box>
    </MainLayout>
  );
};

export default CarDetailsPage;
