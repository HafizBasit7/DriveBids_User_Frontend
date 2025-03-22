import { Box, Typography, Slider, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import DealsBanner from "../../../Components/HomePageComponents/DealBanner";
import colors from "../../../Style/color";
import BackgroundImage from "../backgroundsvg"; // ✅ Background SVG Import

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
    <MainLayout
    title="Car Engine"
    subtitle="Pick The Engine Size Of Your Car"
    buttonText="Back "
    onClick={() => navigate("/car-color")}>

      <Box width="100%" >
        

        <Box  zIndex={2}>
          

          <Typography
            variant="h4"
            fontWeight={600}
            textAlign="center"
            mt={3}
            sx={{ fontFamily: "Inter", fontSize: 30 }}
          >
            Step <span style={{ color: colors.buttoncolor }}>8</span> of 10
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
            <Typography fontWeight={600} textAlign="start" mb={6} sx={{ fontSize: 20, fontFamily: "Inter" }}>
              What’s the engine size of the car?
            </Typography>

            <Box px={3} mb={8}>
              <Typography fontWeight={500} textAlign="start" mb={3} sx={{ fontSize: 18, fontFamily: "Inter" }}>
                Engine Size (CCs)
              </Typography>
              <Typography textAlign="center" mb={3} fontWeight={600} color={colors.buttoncolor}>
                {mileage.toLocaleString()} KM
              </Typography>
              <Slider
                value={mileage}
                onChange={(_, newValue) => setMileage(newValue)}
                step={1000}
                min={10000}
                max={320000}
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
                onClick={() => navigate("/car-transmission")}
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
