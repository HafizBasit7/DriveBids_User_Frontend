import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import colors from "../../../Style/color";
import CarFeatureBox from "../../../Components/SellMyCarComponents/CarFeatureBox";

const CarFeaturesPage3 = () => {
  const navigate = useNavigate();

  return (
    <MainLayout    title="Car Features"
    subtitle="Pick The Feature of Your Car"
    buttonText="Back"
    onClick={() => navigate("/car-features2")}>
      
     

      <Typography
     
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter" ,fontSize:30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>3</span> of 3
      </Typography>

      <Box width={{ xs: "95%", sm: "80%", md: "70%" }} mx="auto" mt={3}>
      <CarFeatureBox
  carBrands={["Airbags ", "Anti-Lock Braking System (ABS)", "Anti-Lock Reverse Camera",  "Immobilizer","Traction Control", "Traction Control", "Push Start"]}
  title="Select Security features"
  searchPlaceholder="enter custom feature" onNext={() => navigate("/post-ad")} />      </Box>
    </MainLayout>
  );
};

export default CarFeaturesPage3;
