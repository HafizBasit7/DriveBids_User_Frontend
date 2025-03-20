import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import DealsBanner from "../../../Components/HomePageComponents/DealBanner";
import CarSelectionBox from "../../../Components/SellMyCarComponents/CarCompanyBox";
import colors from "../../../Style/color";

const CarFeaturesPage1 = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      
      <Box width="100%">
        <DealsBanner
          title="Car Features"
          subtitle="Pick The Feature of Your Car"
          buttonText="Back to Home"
          onClick={() => navigate("/post-ad")}
        />
      </Box>

      <Typography
     
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter" ,fontSize:30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>1</span> of 3
      </Typography>

      <Box width={{ xs: "95%", sm: "80%", md: "70%" }} mx="auto" mt={3}>
        <CarSelectionBox  onNext={() => navigate("/car-features2")} />
      </Box>
    </MainLayout>
  );
};

export default CarFeaturesPage1;
