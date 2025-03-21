import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import DealsBanner from "../../../Components/HomePageComponents/DealBanner";
import YearSelectionBox from "../../../Components/SellMyCarComponents/YearSelectionBox";
import colors from "../../../Style/color";
import BackgroundImage from "../backgroundsvg";

const CarModelPage = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      {/* Main Content Wrapper with relative positioning */}
      <Box width="100%" position="relative" minHeight="80vh" >
        
        {/* Background Image */}
        <BackgroundImage
          width={{ xs: "60%", md: "50%" }}
          height={1050}
          top={20}
          right={-30}
        />

        {/* Foreground Content */}
        <Box position="relative" zIndex={2}>
          <DealsBanner
            title="Car Model"
            subtitle="Pick The Model of Your Car"
            buttonText="Back"
            onClick={() => navigate("/car-varient")}
          />

          <Typography
            fontWeight={600}
            textAlign="center"
            mt={3}
            sx={{ fontFamily: "Inter", fontSize: 30 }}
          >
            Step <span style={{ color: colors.buttoncolor }}>3</span> of 10
          </Typography>

          <Box width={{ xs: "95%", sm: "80%", md: "70%" }} mx="auto" mt={3} position="relative" zIndex={2}>
            <YearSelectionBox onNext={() => navigate("/city")} />
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default CarModelPage;
