import { Box, Typography, Slider, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import colors from "../../../Style/color";
import MainLayout from "../../../Layouts/Mainlayout";
import { useCar } from "../../../context/car.context";


const CarHorsePower = () => {
  const navigate = useNavigate();

    const {carState, dispatch} = useCar();

    console.log(carState.carDetails);
    
    function onCangeCarDetails (value) {
      dispatch({
        type: 'UPDATE_FIELD',
        section: 'carDetails',
        field: 'horsePower',
        value,
      });

    };

  return (
    <MainLayout
      title="Car HorsePower"
      subtitle="Select the horse-power of Your Car"
      buttonText="Back"
      onClick={() => navigate("../owner")}
    >
      <Box width="100%">
        <Box zIndex={2}>
          <Typography
            variant="h4"
            fontWeight={600}
            textAlign="center"
            mt={3}
            sx={{ fontFamily: "Inter", fontSize: 30 }}
          >
            Step <span style={{ color: colors.buttoncolor }}>11</span> of 14
          </Typography>

          {/* Horsepower Selection Box */}
          <Box
            sx={{
              width: { xs: "90%", sm: "70%", md: "70%" },
              margin: "auto",
              mt: 4,
              p: 3,
              borderRadius: 2,
              backgroundColor: "white",
              border: "1px solid #D9D9D9",
            }}
          >
            <Typography
              fontWeight={600}
              textAlign="start"
              mb={6}
              sx={{ fontSize: 25, fontFamily: "Inter" }}
            >
              Car's Horse Power?
            </Typography>

            {/* Slider */}
            <Box px={3} mb={8}>
              <Typography
                fontWeight={500}
                textAlign="start"
                mb={2}
                sx={{ fontSize: 18, fontFamily: "Inter" }}
              >
                Horse Power
              </Typography>
              <Box mb={3}>
                <TextField
                  fullWidth
                  placeholder="Enter your car horse power"
                  value={(carState.carDetails.horsePower || 0).toString()}
                  onChange={(e) => onCangeCarDetails(parseInt(e.target.value))}
                  sx={{
                    fontFamily: "Inter",
                    "& .MuiOutlinedInput-root": {
                      height: 40, // reduced height
                      fontSize: 14,
                      "& input": {
                        padding:2,
                        fontFamily: "Inter",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: colors.buttoncolor,
                      },
                    },
                  }}
                />
              </Box>
            </Box>

            {/* Next Step Button */}
            <Box display="flex" justifyContent="flex-end" mt={3}>
              <Button
                variant="contained"
                disabled={!carState.carDetails.horsePower}
                sx={{
                  textTransform: "none",
                  minWidth: "120px",
                  height: "40px",
                  fontFamily: "Inter",
                  backgroundColor: colors.buttoncolor,
                  '&.Mui-disabled': {
                    backgroundColor: '#E0E0E0',
                    color: '#9E9E9E',
                    cursor: 'not-allowed'
                  },
                  '&:hover': {
                    backgroundColor: colors.buttoncolor,
                    opacity: 0.9
                  }
                }}
                onClick={() => navigate("../condition")}
              >
                Next Step
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default CarHorsePower;
