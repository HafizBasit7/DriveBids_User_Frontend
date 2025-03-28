import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CarSelectionBox from "../../../Components/SellMyCarComponents/CarCompanyBox";
import colors from "../../../Style/color";
import MainLayout from "../../../Layouts/Mainlayout";
import { useCar } from "../../../context/car.context";

const CarCompanyPage = () => {
  const navigate = useNavigate();

  const {carState, dispatch} = useCar();

  function onChangeCarMake (value) {
    dispatch({
      type: 'UPDATE_FIELD',
      section: 'carDetails',
      field: 'make',
      value,
    });
  };

  const carBrands = [
    "Suzuki",
    "Toyota",
    "Honda",
    "Hyundai",
    "Ford",
    "Porsche",
    "Tesla",
    "Lamborghini",
    "Bentley",
  ];

  return (
    <MainLayout
      title="Car Company"
      subtitle="Pick The Company of Your Car"
      buttonText="Back"
      onClick={() => navigate("..")}
    >
      
      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>1</span> of 14
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
          value={carState.carDetails.make}
          onChange={onChangeCarMake}
          onNext={() => navigate("../variant")}
          searchPlaceholder ={"search for company"}
          customPlaceholder ={"enter custom company"}
        />
      </Box>
    </MainLayout>
  );
};

export default CarCompanyPage;
