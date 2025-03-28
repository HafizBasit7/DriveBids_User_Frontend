import { Box, Typography, Slider, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import colors from "../../../Style/color";
import MainLayout from "../../../Layouts/Mainlayout";

const marks = [
  { value: 20, label: "20" },
  { value: 100, label: "100" },
  { value: 200, label: "200" },
  { value: 400, label: "400" },
  { value: 600, label: "600" },
  { value: 1000, label: "1000" },
];

const CarHorsePower = () => {
  const navigate = useNavigate();
  const [horsepower, setHorsepower] = useState(150); // Default to 150 HP

  return (
    <MainLayout
      title="Car HorsePower"
      subtitle="Select the horse-power of Your Car"
      buttonText="Back"
      onClick={() => navigate("/city")}
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
            Step <span style={{ color: colors.buttoncolor }}>5</span> of 10
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
              Car’s Horse Power?
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

              <Typography
                textAlign="center"
                mb={3}
                fontWeight={600}
                color={colors.buttoncolor}
              >
                {horsepower} HP
              </Typography>

              <Slider
                value={horsepower}
                onChange={(_, newValue) => setHorsepower(newValue)}
                step={10}
                min={20}
                max={1000}
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
              />
            </Box>

            {/* Next Step Button */}
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
                onClick={() => navigate("/car-fuel")}
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
