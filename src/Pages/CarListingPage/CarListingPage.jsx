import { Box, Typography, Stack, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";
import DealsBanner from "../../Components/HomePageComponents/DealBanner";

import CarCard from "../../Components/HomePageComponents/CarCard";

const CarListingPage = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <Box width="100%" sx={{ mt: 2 }}>
        <DealsBanner
          title="Adam William"
          subtitle="Private Seller"
          buttonText="Back to Home"
          onClick={() => navigate("/sellmycar")}
        />
      </Box>

      <Box
        sx={{
          width: "100%",

          mx: "auto",
          mt: { xs: 4, md: 2 },
          mb: { xs: 5, md: 7 },
          display: "flex",
          flexDirection: "row",
          gap: 2,
          flexWrap: "wrap",
          justifyContent: { xs: "center", sm: "flex-start" },
        }}
      >
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />

        <CarCard />

        <CarCard />
      </Box>
    </MainLayout>
  );
};

export default CarListingPage;
