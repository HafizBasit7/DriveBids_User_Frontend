import { Box, Typography, Slider, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import DealsBanner from "../../../Components/HomePageComponents/DealBanner";
import colors from "../../../Style/color";

const marks = [
  { value: 10000, label: "10K" },
  { value: 60000, label: "60K" },
  { value: 120000, label: "120K" },
  { value: 180000, label: "180K" },
  { value: 240000, label: "240K" },
  { value: 320000, label: "320K" },
];

const CarEnginePage = () => {
  const navigate = useNavigate();
  const [mileage, setMileage] = useState(50000); 

  return (
    <MainLayout>
      {/* Header Banner */}
      <Box width="100%">
        <DealsBanner
          title="Car Engine"
          subtitle="Pick The Engine Size Of Your Car"
          buttonText="Back "
          onClick={() => navigate("/car-color")}
        />
      </Box>

      {/* Step Count */}
      <Typography
        variant="h4"
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter",fontSize:30  }}
      >
        Step <span style={{ color: colors.buttoncolor }}>8</span> of 10
      </Typography>

      {/* Mileage Selection */}
      <Box
        sx={{
          width: { xs: "90%", sm: "70%", md: "70%" },
          margin: "auto",
          mt: 4,
          p: 3,
          borderRadius: 2,
          backgroundColor: "white",
          border:"1px solid #D9D9D9 "
    
        }}
      >
        <Typography fontWeight={600} textAlign="start" mb={6} sx={{ fontSize: 20 ,fontFamily:"Inter" }}>
        What’s the engine size of the car?
        </Typography>

        {/* Slider */}
        <Box px={3} mb={8}>
  <Typography textAlign="center" fontWeight={600} color={colors.buttoncolor}>
    {mileage.toLocaleString()} KM
  </Typography>
  <Typography fontWeight={500} textAlign="start" mb={3} sx={{ fontSize: 15 ,fontFamily:"Inter" }}>
  Engine Size (CCs)
        </Typography>
  <Slider
    value={mileage}
    onChange={(_, newValue) => setMileage(newValue)}
    step={1000} // Allows selection in 1K increments
    min={10000}
    max={320000}
    marks={marks}
    sx={{
      color: colors.buttoncolor, // Use dynamic color
      "& .MuiSlider-thumb": {
        backgroundColor: colors.buttoncolor, // Thumb color
        "&:hover, &.Mui-focusVisible": {
          boxShadow: `0px 0px 10px ${colors.buttoncolor}80`, // Light shadow effect
        },
      },
      "& .MuiSlider-track": {
        backgroundColor: colors.buttoncolor, // Track color
      },
      "& .MuiSlider-rail": {
        backgroundColor: `${colors.buttoncolor}40`, // Lighter rail color
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
              fontFamily:"Inter",
              backgroundColor:colors.buttoncolor,
            }}
            onClick={() => navigate("/car-transmission")}
          >
            Next Step
          </Button>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default CarEnginePage;
