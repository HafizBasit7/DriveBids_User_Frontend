import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import DealsBanner from "../../../Components/HomePageComponents/DealBanner";
import CarSelectionBox from "../../../Components/SellMyCarComponents/CarCompanyBox";
import colors from "../../../Style/color";

const CarColorPage = () => {
  const navigate = useNavigate();
  const carBrands = [
    "Black",
    "White",
    "Green",
    "Red",
    "Yellow",
    "Pink",
   "Green",
    "Red",
    "Yellow",
    "Pink",
  ];

  return (
    <MainLayout>
      
      <Box width="100%">
        <DealsBanner
          title="Car Colour"
          subtitle="Pick The Colour Of Your Car"
          buttonText="Back to Home"
          onClick={() => navigate("/car-fuel")}
        />
      </Box>

      <Typography
        variant="h4"
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter",fontSize:30  }}
      >
        Step <span style={{ color: colors.buttoncolor }}>7</span> of 10
      </Typography>

      <Box width={{ xs: "95%", sm: "80%", md: "70%" }} mx="auto" mt={3}>
        <CarSelectionBox carBrands={carBrands}   onNext={() => navigate("/car-engine")}/>
      </Box>
    </MainLayout>
  );
};

export default CarColorPage;
