import { Box, Typography, Slider, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import colors from "../../../Style/color";
import { useCar } from "../../../context/car.context";

const marks = [
  { value: 800, label: "800CC" },
  { value: 1500, label: "1500CC" },
  { value: 2000, label: "2000CC" },
  { value: 2500, label: "2500CC" },
  { value: 3000, label: "3000CC" },
  { value: 8000, label: "8000CC" },
];

const CarEnginePage = () => {
  const navigate = useNavigate();

  const { carState, dispatch } = useCar();
  useEffect(() => {
    if (!carState?.regNo) {
      navigate("/ad");
    }
  }, [carState, navigate]);
  function onCangeCarDetails(value) {
    dispatch({
      type: "UPDATE_FIELD",
      section: "carDetails",
      field: "engineSize",
      value,
    });
  }

  return (
    <MainLayout
      title="Car Engine"
      subtitle="Pick The Engine Size Of Your Car"
      buttonText="Back "
      onClick={() => navigate("../color")}
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
            Step <span style={{ color: colors.buttoncolor }}>8</span> of 14
          </Typography>

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
              sx={{ fontSize: 20, fontFamily: "Inter" }}
            >
              What's the engine size of the car?
            </Typography>

            <Box px={3} mb={8}>
              <Typography
                fontWeight={500}
                textAlign="start"
                mb={3}
                sx={{ fontSize: 18, fontFamily: "Inter" }}
              >
                Engine Size (CCs)
              </Typography>
              <Box mb={3}>
                <TextField
                  fullWidth
                  placeholder="Enter your car engine size in CC"
                  value={(carState.carDetails.engineSize || 0).toString()}
                  onChange={(e) => onCangeCarDetails(parseInt(e.target.value))}
                  sx={{
                    fontFamily: "Inter",
                    "& .MuiOutlinedInput-root": {
                      height: 40, // reduced height
                      fontSize: 14,
                      "& input": {
                        padding: 2,
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

            <Box display="flex" justifyContent="flex-end" mt={3}>
              <Button
                variant="contained"
                disabled={!carState.carDetails.engineSize}
                sx={{
                  textTransform: "none",
                  minWidth: "120px",
                  height: "40px",
                  fontFamily: "Inter",
                  backgroundColor: colors.buttoncolor,
                  "&.Mui-disabled": {
                    backgroundColor: "#E0E0E0",
                    color: "#9E9E9E",
                    cursor: "not-allowed",
                  },
                  "&:hover": {
                    backgroundColor: colors.buttoncolor,
                    opacity: 0.9,
                  },
                }}
                onClick={() => navigate("../transmission")}
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

export default CarEnginePage;
