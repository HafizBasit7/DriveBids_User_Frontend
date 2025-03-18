import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import DealsBanner from "../../../Components/HomePageComponents/DealBanner";
import CarSelectionBox from "../../../Components/SellMyCarComponents/CarCompanyBox";

const CarCompanyPage = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      
      <Box width="100%">
        <DealsBanner
          title="Sell My Car"
          subtitle="Sell Your Car Hassle-Free!"
          buttonText="Back to Home"
          onClick={() => navigate("/home")}
        />
      </Box>

      <Typography
     
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter" ,fontSize:30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>1</span> of 10
      </Typography>

      <Box width={{ xs: "95%", sm: "80%", md: "70%" }} mx="auto" mt={3}>
        <CarSelectionBox />
      </Box>
    </MainLayout>
  );
};

export default CarCompanyPage;
