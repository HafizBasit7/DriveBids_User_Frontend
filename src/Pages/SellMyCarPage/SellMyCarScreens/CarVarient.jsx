import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import CarSelectionBox from "../../../Components/SellMyCarComponents/CarCompanyBox";
import colors from "../../../Style/color";
import { useCar } from "../../../context/car.context";

const CarVarient = () => {
  const navigate = useNavigate();
  const {carState, dispatch} = useCar();

  const carBrands = [
    "Mehran",
    "Corolla",
    "Civic",
    "Alto",
    "City",
    "Passo",
    "Yaris",
    "V8",
    "Nissan Patrol",
  ];

  function onChangeCarVariant (value) {
    dispatch({
      type: 'UPDATE_FIELD',
      section: 'carDetails',
      field: 'variant',
      value,
    });
  };

  return (
    <MainLayout title="Car Variant"
    subtitle="Pick The Variant of Your Car"
    buttonText="Back"
    onClick={() => navigate("../company")}>

      <Box width="100%"  >
        
       

        <Box zIndex={2}>
        

          <Typography
            variant="h4"
            fontWeight={600}
            textAlign="center"
            mt={3}
            sx={{ fontFamily: "Inter", fontSize: 30 }}
          >
            Step <span style={{ color: colors.buttoncolor }}>2</span> of 14
          </Typography>

          <Box
            width={{ xs: "95%", sm: "80%", md: "70%" }}
            mx="auto"
            mt={3}
            position="relative"
            zIndex={2}
          >
            <CarSelectionBox
              carBrands={carBrands}
              value={carState.carDetails.variant}
              onChange={onChangeCarVariant}
              onNext={() => navigate("../model")}
            />
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default CarVarient;
