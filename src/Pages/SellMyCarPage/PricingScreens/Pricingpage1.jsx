import { Box, Typography, Button,  } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import DealsBanner from "../../../Components/HomePageComponents/DealBanner";
import PricingBidBox from "../../../Components/SellMyCarComponents/PricingBox";
import colors from "../../../Style/color";

const PricingPage1 = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <Box width="100%">
        <DealsBanner
          title="Pricing"
          subtitle="Set The Bidding Price For Your Car"
          buttonText="Back"
          onClick={() => navigate("/post-ad")}
        />
      </Box>

      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>1</span> of 4
      </Typography>

      <PricingBidBox  text={"Enter starting bid price for your car"} onNext={() => navigate("/pricing2")} />
    </MainLayout>
  );
};

export default PricingPage1;
