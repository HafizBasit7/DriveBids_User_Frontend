import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import YearSelectionBox from "../../../Components/SellMyCarComponents/YearSelectionBox";
import colors from "../../../Style/color";
import MainLayout from "../../../Layouts/Mainlayout";
import OwnerSelectionBox from "../../../Components/SellMyCarComponents/OwnerSelectionBox";
import { useCar } from "../../../context/car.context";

const CarOwnerPage = () => {
  const navigate = useNavigate();
  const {carState, dispatch} = useCar();
    
    function onCangeCarDetails (value) {
      dispatch({
        type: 'UPDATE_FIELD',
        section: 'carDetails',
        field: 'noOfOwners',
        value,
      });
    };

  return (
    <MainLayout
    title="Car Owner"
    subtitle="Select the number of Owners"
    buttonText="Back"
    onClick={() => navigate("../transmission")}>
      <Box width="100%"  >
        
       

        <Box  zIndex={2}>
         

          <Typography
            fontWeight={600}
            textAlign="center"
            mt={3}
            sx={{ fontFamily: "Inter", fontSize: 30 }}
          >
            Step <span style={{ color: colors.buttoncolor }}>10</span> of 14
          </Typography>

          <Box width={{ xs: "95%", sm: "80%", md: "70%" }} mx="auto" mt={3} position="relative" zIndex={2}>
            <OwnerSelectionBox value={carState.carDetails.noOfOwners} onChange={onCangeCarDetails}  onNext={() => navigate("../horse-power")} />
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default CarOwnerPage;
