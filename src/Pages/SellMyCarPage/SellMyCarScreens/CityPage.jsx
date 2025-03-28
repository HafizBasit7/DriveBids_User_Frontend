import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import CarSelectionBox from "../../../Components/SellMyCarComponents/CarCompanyBox";
import colors from "../../../Style/color";
import { useCar } from "../../../context/car.context";

const CityPage = () => {
  const navigate = useNavigate();
  const {carState, dispatch} = useCar();
  
  function onCangeCarDetails (value) {
    dispatch({
      type: 'UPDATE_FIELD',
      section: 'carDetails',
      field: 'city',
      value,
    });
  };


  const carBrands = [
    "Karachi",
    "Lahore",
    "Islamabad",
    "Rawalpindi",
    "Faisalabad",
    "Multan",
    "Peshawar",
    "Quetta",
    "Sialkot",
    "Gujranwala",
  ];

  return (
    <MainLayout
    title="Location"
            subtitle="Pick Your City"
            buttonText="Back"
            onClick={() => navigate("../model")}
  >
      <Box width="100%" >
        
        

        <Box  zIndex={2}>
          

          <Typography
            variant="h5"
            fontWeight={600}
            textAlign="center"
            mt={3}
            sx={{ fontFamily: "Inter", fontSize: 30 }}
          >
            Step <span style={{ color: colors.buttoncolor }}>4</span> of 14
          </Typography>

          <Box
            width={{ xs: "95%", sm: "80%", md: "70%" }}
            mx="auto"
            mt={3}
            position="relative"
            zIndex={2}
          >
            <CarSelectionBox
              value={carState.carDetails.city}
              onChange={onCangeCarDetails}
              isLocation={true}
              searchPlaceholder="Search City"
              carBrands={carBrands}
              onNext={() => navigate("../mileage")}
            />
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default CityPage;
