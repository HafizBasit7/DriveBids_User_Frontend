import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import DealsBanner from "../../../Components/HomePageComponents/DealBanner";
import colors from "../../../Style/color";
import CarFeatureBox from "../../../Components/SellMyCarComponents/CarFeatureBox";

const CarFeaturesPage2 = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      
      <Box width="100%">
        <DealsBanner
          title="Car Features"
          subtitle="Pick The Feature of Your Car"
          buttonText="Back"
          onClick={() => navigate("/car-features1")}
        />
      </Box>

      <Typography
     
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter" ,fontSize:30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>2</span> of 3
      </Typography>

      <Box width={{ xs: "95%", sm: "80%", md: "70%" }} mx="auto" mt={3}>
      <CarFeatureBox
  carBrands={["Leather Seats", "Infotainment System", "Climate Control", "BMW", "Mercedes","Push Start", "Push Start", ]}
  title="Select Interior features"
  searchPlaceholder="enter custom feature" onNext={() => navigate("/car-features3")} />        
        
            </Box>
    </MainLayout>
  );
};

export default CarFeaturesPage2;
