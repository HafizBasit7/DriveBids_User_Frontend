import { Box, Button, InputAdornment, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import CarSelectionBox from "../../../Components/SellMyCarComponents/CarCompanyBox";
import colors from "../../../Style/color";
import { useCar } from "../../../context/car.context";
import LocationInput from "../../../Components/Location/LocationInput";
import { Search } from "@mui/icons-material";

const CityPage = () => {
  const navigate = useNavigate();
  const {carState, dispatch} = useCar();
  
  function onCangeCarDetails (value) {
    dispatch({
      type: 'UPDATE_FIELD',
      section: 'carDetails',
      field: 'location',
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
            <Box
              display="flex"
              flexDirection="column"
              p={3}
              border="1px solid #D9D9D9"
              borderRadius={2}
              sx={{backgroundColor:"white"}}
            >
              <LocationInput handleChange={onCangeCarDetails}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder={carState?.carDetails.location?.name || 'Search Location'}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search sx={{ color: "#777" }} />
                      </InputAdornment>
                    ),
                    sx: {
                      height: 40,
                      fontSize: 14,
                      padding: "0 10px",
                      borderRadius: 2,
                      backgroundColor: "#F3F3F3",
                    },
                  }}
                  sx={{
                    fontFamily: "Inter",
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: colors.buttoncolor,
                      },
                    },
                  }}
                />
              </LocationInput>
               {/* Next Step Button */}
              <Box display="flex" justifyContent="flex-end" mt={2}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    fontFamily: "Inter",
                    minWidth: 120,
                    height: 40,
                    backgroundColor: colors.buttoncolor,
                  }}
                  onClick={() => {navigate("../mileage")}}
                >
                  Next Step
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default CityPage;
