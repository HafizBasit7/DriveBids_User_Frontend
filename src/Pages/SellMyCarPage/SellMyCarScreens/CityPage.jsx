import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import DealsBanner from "../../../Components/HomePageComponents/DealBanner";
import CarSelectionBox from "../../../Components/SellMyCarComponents/CarCompanyBox";

const CityPage = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      {/* Step Title */}
      <Box width="100%">
        <DealsBanner
          title="Location"
          subtitle="Pick Your City"
          buttonText="Back to Home"
          onClick={() => navigate("/home")}
        />
      </Box>

      <Typography
        variant="h5"
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter",fontSize:30  }}
      >
        Step <span style={{color: colors.buttoncolor }}>2</span> of 10
      </Typography>

      <Box width={{ xs: "95%", sm: "80%", md: "70%" }} mx="auto" mt={3}>
        <CarSelectionBox />
      </Box>
    </MainLayout>
  );
};

export default CityPage;
