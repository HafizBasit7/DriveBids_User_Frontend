import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import DealsBanner from "../../../Components/HomePageComponents/DealBanner";
import CarSelectionBox from "../../../Components/SellMyCarComponents/CarCompanyBox";
import colors from "../../../Style/color";
import BackgroundImage from "../backgroundsvg";

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
    <MainLayout  title="Car Colour"
    subtitle="Pick The Colour Of Your Car"
    buttonText="Back"
    onClick={() => navigate("/car-fuel")}>
      <Box width="100%" >
      

        <Box  zIndex={2}>
         

          <Typography
            variant="h4"
            fontWeight={600}
            textAlign="center"
            mt={3}
            sx={{ fontFamily: "Inter", fontSize: 30 }}
          >
            Step <span style={{ color: colors.buttoncolor }}>7</span> of 10
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
              isLocation={false}
              searchPlaceholder="Search Company"
              customPlaceholder="Enter custom company"
              onNext={() => navigate("/car-engine")}
            />
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default CarColorPage;
