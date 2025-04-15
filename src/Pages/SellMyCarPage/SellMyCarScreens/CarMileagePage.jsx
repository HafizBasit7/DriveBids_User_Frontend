import { Box, Typography, Slider, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import colors from "../../../Style/color";
import { useCar } from "../../../context/car.context";


const marks = [
  { value: 20, label: "20" },
  { value: 40, label: "40" },
  { value: 60, label: "60" },
  { value: 80, label: "80" },
  { value: 100, label: "100" },
];

const CarMileagePage = () => {
  const navigate = useNavigate();

  const {carState, dispatch} = useCar();
    
  function onCangeCarDetails (value) {
    dispatch({
      type: 'UPDATE_FIELD',
      section: 'carDetails',
      field: 'mileage',
      value,
    });
  };

  return (
    <MainLayout  title="Car Mileage"
    subtitle="Enter the Mileage of Your Car"
    buttonText="Back"
    onClick={() => navigate("../city")}>
      <Box width="100%">

       

        <Box  zIndex={2}>
         

          <Typography
            variant="h4"
            fontWeight={600}
            textAlign="center"
            mt={3}
            sx={{ fontFamily: "Inter", fontSize: 30 }}
          >
            Step <span style={{ color: colors.buttoncolor }}>5</span> of 14
          </Typography>

          {/* Mileage Box */}
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
              Car’s mileage?
            </Typography>

            {/* Slider */}
            <Box px={3} mb={8}>
              <Typography
                fontWeight={500}
                textAlign="start"
                mb={2}
                sx={{ fontSize: 18, fontFamily: "Inter" }}
              >
                Mileage in KMs
              </Typography>
              <Box mb={3}>
                <TextField
                  fullWidth
                  placeholder="Enter your car mileage"
                  value={(carState.carDetails.mileage || 0).toString()}
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

              {/* <Typography
                textAlign="center"
                mb={3}
                fontWeight={600}
                color={colors.buttoncolor}
              >
                {carState.carDetails.mileage} KM
              </Typography> */}

              {/* <Slider
                value={carState.carDetails.mileage}
                onChange={(_, newValue) => onCangeCarDetails(parseInt(newValue))}
                step={1}
                min={10}
                max={100}
                marks={marks}
                sx={{
                  color: colors.buttoncolor,
                  "& .MuiSlider-thumb": {
                    backgroundColor: colors.buttoncolor,
                    "&:hover, &.Mui-focusVisible": {
                      boxShadow: `0px 0px 10px ${colors.buttoncolor}80`,
                    },
                  },
                  "& .MuiSlider-track": {
                    backgroundColor: colors.buttoncolor,
                  },
                  "& .MuiSlider-rail": {
                    backgroundColor: `${colors.buttoncolor}40`,
                  },
                }}
              /> */}
            </Box>

          
            <Box display="flex" justifyContent="flex-end" mt={3}>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  minWidth: "120px",
                  height: "40px",
                  fontFamily: "Inter",
                  backgroundColor: colors.buttoncolor,
                }}
                onClick={() => navigate("../fuel")}
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

export default CarMileagePage;
