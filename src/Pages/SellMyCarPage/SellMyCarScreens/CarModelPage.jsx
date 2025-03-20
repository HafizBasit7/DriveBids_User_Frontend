import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import DealsBanner from "../../../Components/HomePageComponents/DealBanner";
import CarSelectionBox from "../../../Components/SellMyCarComponents/CarCompanyBox";
import YearSelectionBox from "../../../Components/SellMyCarComponents/YearSelectionBox";
import colors from "../../../Style/color";

const CarModelPage = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
    
      <Box width="100%">
        <DealsBanner
          title="Car Model"
          subtitle="Pick The Model of Your Car"
          buttonText="Back "
          onClick={() => navigate("/car-varient")}
        />
      </Box>

      <Typography
        
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter",fontSize:30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>3</span> of 10
      </Typography>

      <YearSelectionBox onNext={() => navigate("/city")} />

     
    </MainLayout>
  );
};

export default CarModelPage;
