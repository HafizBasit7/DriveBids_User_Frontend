import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import DealsBanner from "../../../Components/HomePageComponents/DealBanner";
import CarSelectionBox from "../../../Components/SellMyCarComponents/CarCompanyBox";
import colors from "../../../Style/color";
import BackgroundImage from "../backgroundsvg";

const CarVarient = () => {
  const navigate = useNavigate();

  const carBrands = [
    "Suzuki",
    "Toyota",
    "Honda",
    "Hyundai",
    "Ford",
    "Porsche",
    "Tesla",
    "Lamborghini",
    "Bentley",
  ];

  return (
    <MainLayout>
      {/* Main Content Wrapper with relative position */}
      <Box width="100%" position="relative" minHeight="80vh" >
        
        {/* Background Image placed behind */}
        <BackgroundImage 
          width={{ xs: "60%", md: "50%" }} 
          height={1000}
          top={20} 
          right={-30} 
        />

        {/* Foreground Content */}
        <Box position="relative" zIndex={2}>
          <DealsBanner
            title="Car Variant"
            subtitle="Pick The Variant of Your Car"
            buttonText="Back"
            onClick={() => navigate("/car-company")}
          />

          <Typography
            variant="h4"
            fontWeight={600}
            textAlign="center"
            mt={3}
            sx={{ fontFamily: "Inter", fontSize: 30 }}
          >
            Step <span style={{ color: colors.buttoncolor }}>2</span> of 10
          </Typography>

          <Box
            width={{ xs: "95%", sm: "80%", md: "70%" }}
            mx="auto"
            mt={3}
            position="relative"
            zIndex={2}
          >
            <CarSelectionBox
              carBrands={carBrands}
              onNext={() => navigate("/car-modal")}
            />
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default CarVarient;
