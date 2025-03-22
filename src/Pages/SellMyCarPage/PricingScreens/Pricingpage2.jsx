import { Box, Typography, Button,  } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import DealsBanner from "../../../Components/HomePageComponents/DealBanner";
import PricingBidBox from "../../../Components/SellMyCarComponents/PricingBox";
import colors from "../../../Style/color";

const PricingPage2 = () => {
  const navigate = useNavigate();

  return (
    <MainLayout title="Pricing"
    subtitle="Set The Bidding Price For Your Car"
    buttonText="Back"
    onClick={() => navigate("/pricing1")}>
     

      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>2</span> of 4
      </Typography>

      <PricingBidBox text={"Enter starting bid price for your car"} onNext={() => navigate("/pricing3")} />
    </MainLayout>
  );
};

export default PricingPage2;
