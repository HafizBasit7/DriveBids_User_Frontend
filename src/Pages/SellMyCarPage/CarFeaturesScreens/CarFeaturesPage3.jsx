import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import DealsBanner from "../../../Components/HomePageComponents/DealBanner";
import CarSelectionBox from "../../../Components/SellMyCarComponents/CarCompanyBox";
import colors from "../../../Style/color";

const CarFeaturesPage3 = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      
      <Box width="100%">
        <DealsBanner
          title="Car Features"
          subtitle="Pick The Feature of Your Car"
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
        Step <span style={{ color: colors.buttoncolor }}>3</span> of 3
      </Typography>

      <Box width={{ xs: "95%", sm: "80%", md: "70%" }} mx="auto" mt={3}>
        <CarSelectionBox />
      </Box>
    </MainLayout>
  );
};

export default CarFeaturesPage3;
