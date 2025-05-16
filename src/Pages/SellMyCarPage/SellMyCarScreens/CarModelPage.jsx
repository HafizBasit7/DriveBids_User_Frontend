import { Box, Typography, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import colors from "../../../Style/color";
import { useCar } from "../../../context/car.context";
import { useEffect } from "react";

const CarModelPage = () => {
  const navigate = useNavigate();

  const { carState, dispatch } = useCar();
  console.log(carState.carDetails.make);
  console.log(carState.carDetails.variant);

  useEffect(() => {
    if (!carState?.regNo) {
      navigate("/ad");
    }
  }, [carState, navigate]);
  const currentYear = new Date().getFullYear();
  const minYear = 1900;

  function onChangeCarModel(event) {
    const newValue = parseInt(event.target.value);
    dispatch({
      type: "UPDATE_FIELD",
      section: "carDetails",
      field: "model",
      value: newValue,
    });
  }

  return (
    <MainLayout
      title="Car Model Year"
      subtitle="Pick The Model Year of Your Car"
      buttonText="Back"
      onClick={() => navigate("../variant")}
    >
      <Box width="100%">
        <Box zIndex={2}>
          <Typography
            fontWeight={600}
            textAlign="center"
            mt={3}
            sx={{ fontFamily: "Inter", fontSize: 30 }}
          >
            Step <span style={{ color: colors.buttoncolor }}>3</span> of 14
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
              What is the model year of your car?
            </Typography>

            <Box px={3} mb={8}>
              <Typography
                fontWeight={500}
                textAlign="start"
                mb={3}
                sx={{ fontSize: 18, fontFamily: "Inter" }}
              >
                Model Year
              </Typography>
              <Box mb={3}>
                <TextField
                  fullWidth
                  type="number"
                  placeholder="Enter model year"
                  value={carState.carDetails.model || ""}
                  onChange={onChangeCarModel}
                  sx={{
                    fontFamily: "Inter",
                    "& .MuiOutlinedInput-root": {
                      height: 40,
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
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "Inter",
                  color: "rgba(0, 0, 0, 0.5)",
                  fontSize: "14px",
                }}
              >
                Enter the model year of your car.
              </Typography>
            </Box>

            <Box display="flex" justifyContent="flex-end" mt={3}>
              <Button
                variant="contained"
                disabled={!carState.carDetails.model}
                onClick={() => navigate("../city")}
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

export default CarModelPage;
