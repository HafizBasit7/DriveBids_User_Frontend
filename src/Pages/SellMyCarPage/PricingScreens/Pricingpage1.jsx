import { Box, Typography, Button,  } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import DealsBanner from "../../../Components/HomePageComponents/DealBanner";
import PricingBidBox from "../../../Components/SellMyCarComponents/PricingBox";
import colors from "../../../Style/color";
import { useCar } from "../../../context/car.context";

const PricingPage1 = () => {
  const navigate = useNavigate();

  const {carState, dispatch} = useCar();

  function setStartingBidPrice (value) {
    dispatch({
      type: 'UPDATE_FIELD',
      section: 'carPricing',
      field: 'staringBidPrice',
      value: parseInt(value),
    });
  };

  return (
    <MainLayout  title="Pricing"
    subtitle="Set The Bidding Price For Your Car"
    buttonText="Back"
    onClick={() => navigate("..")}>
    

      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>1</span> of 4
      </Typography>

      <PricingBidBox value={carState.carPricing.staringBidPrice} onChange={setStartingBidPrice}  text={"Enter starting bid price for your car"} onNext={() => navigate("../pricing-2")} />
    </MainLayout>
  );
};

export default PricingPage1;
