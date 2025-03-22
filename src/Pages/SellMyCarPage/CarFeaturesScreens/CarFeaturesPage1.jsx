import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import DealsBanner from "../../../Components/HomePageComponents/DealBanner";
import colors from "../../../Style/color";
import CarFeatureBox from "../../../Components/SellMyCarComponents/CarFeatureBox";

const CarFeaturesPage1 = () => {
  const navigate = useNavigate();

  return (
    <MainLayout   title="Car Features"
    subtitle="Pick The Feature of Your Car"
    buttonText="Back "
    onClick={() => navigate("/post-ad")}>
      
   

      <Typography
     
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter" ,fontSize:30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>1</span> of 3
      </Typography>

      <Box width={{ xs: "95%", sm: "80%", md: "70%" }} mx="auto" mt={3}>
      <CarFeatureBox
  carBrands={["Toyota", "Honda", "Ford", "BMW", "Mercedes","Toyota", "Honda", "Ford", "BMW", "Mercedes"]}
  title="Select exterior features"
  searchPlaceholder="enter custom feature" onNext={() => navigate("/car-features2")} />
      </Box>
    </MainLayout>
  );
};

export default CarFeaturesPage1;
