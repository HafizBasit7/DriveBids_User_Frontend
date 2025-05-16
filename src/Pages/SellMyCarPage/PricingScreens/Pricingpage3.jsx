import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import DealsBanner from "../../../Components/HomePageComponents/DealBanner";
import PricingBidBox from "../../../Components/SellMyCarComponents/PricingBox";
import colors from "../../../Style/color";
import { useCar } from "../../../context/car.context";
import { useEffect } from "react";

const PricingPage3 = () => {
  const navigate = useNavigate();

  const { carState, dispatch } = useCar();
  useEffect(() => {
    if (!carState?.regNo) {
      navigate("/ad");
    }
  }, [carState, navigate]);
  function setBuynowPrice(value) {
    dispatch({
      type: "UPDATE_FIELD",
      section: "carPricing",
      field: "buyNowPrice",
      value: parseInt(value),
    });
  }

  return (
    <MainLayout
      title="Pricing"
      subtitle="Set The Bidding Price For Your Car"
      buttonText="Back"
      onClick={() => navigate("../pricing-2")}
    >
      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>3</span> of 4
      </Typography>

      <Typography
        textAlign="center"
        mt={1}
        mb={2}
        sx={{ fontFamily: "Inter", fontSize: 16, color: "gray" }}
      >
        Enter a price for immediate purchase (bypasses bidding)
      </Typography>

      <PricingBidBox
        value={carState.carPricing.buyNowPrice}
        onChange={setBuynowPrice}
        text={"Enter buy now price for your car"}
        onNext={() => navigate("../pricing-4")}
      />
    </MainLayout>
  );
};

export default PricingPage3;
