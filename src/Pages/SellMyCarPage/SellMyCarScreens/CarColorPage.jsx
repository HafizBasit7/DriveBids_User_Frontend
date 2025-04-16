import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import CarSelectionBox from "../../../Components/SellMyCarComponents/CarCompanyBox";
import colors from "../../../Style/color";
import { useCar } from "../../../context/car.context";

const CarColorPage = () => {
  const navigate = useNavigate();
  const carBrands = [
    "Black",
    "White",
    "Green",
    "Red",
    "Yellow",
    "Pink",
    "Orange",
  ];
  const {carState, dispatch} = useCar();
    
    function onCangeCarDetails (value) {
      dispatch({
        type: 'UPDATE_FIELD',
        section: 'carDetails',
        field: 'color',
        value,
      });
    };

  return (
    <MainLayout  title="Car Colour"
    subtitle="Pick The Colour Of Your Car"
    buttonText="Back"
    onClick={() => navigate("../fuel")}>
      <Box width="100%" >
      

        <Box  zIndex={2}>
         

          <Typography
            variant="h4"
            fontWeight={600}
            textAlign="center"
            mt={3}
            sx={{ fontFamily: "Inter", fontSize: 30 }}
          >
            Step <span style={{ color: colors.buttoncolor }}>7</span> of 14
          </Typography>

          <Box
            width={{ xs: "95%", sm: "80%", md: "70%" }}
            mx="auto"
            mt={3}
            position="relative"
            zIndex={2}
          >
            <CarSelectionBox 
            value={carState.carDetails.color}
            onChange={onCangeCarDetails}
              carBrands={carBrands}
              isColor={true} 
              isLocation={false}
              searchPlaceholder="Search Company"
              customPlaceholder="Enter custom company"
              onNext={() => navigate("../engine")}
            />
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default CarColorPage;
