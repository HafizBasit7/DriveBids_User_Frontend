import { Box, Typography, Button,  } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import DealsBanner from "../../../Components/HomePageComponents/DealBanner";
import PricingBidBox from "../../../Components/SellMyCarComponents/PricingBox";
import colors from "../../../Style/color";
import { useCar } from "../../../context/car.context";

const PricingPage2 = () => {
  const navigate = useNavigate();

  const {carState, dispatch} = useCar();

  function setReservedBidPrice (value) {
   
    dispatch({
      type: 'UPDATE_FIELD',
      section: 'carPricing',
      field: 'reserveBidPrice',
      value: parseInt(value),
    });
  };

  return (
    <MainLayout title="Pricing"
    subtitle="Set The Bidding Price For Your Car"
    buttonText="Back"
    onClick={() => navigate("../pricing-1")}>
      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>2</span> of 4
      </Typography>

      <Typography
        textAlign="center"
        mt={1}
        mb={2}
        sx={{ fontFamily: "Inter", fontSize: 16, color: "gray" }}
      >
        The lowest price you're willing to sell for—if bidding doesn't reach this, the car won't sell
      </Typography>

      <PricingBidBox value={carState.carPricing.reserveBidPrice} onChange={setReservedBidPrice} text={"Enter reserve bid price for your car"} onNext={() => navigate("../pricing-3")} />
    </MainLayout>
  );
};

export default PricingPage2;
