import { Box, Typography, Slider, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import DealsBanner from "../../../Components/HomePageComponents/DealBanner";
import colors from "../../../Style/color";
import BackgroundImage from "../backgroundsvg";

const marks = [
  { value: 10000, label: "10K" },
  { value: 60000, label: "60K" },
  { value: 120000, label: "120K" },
  { value: 180000, label: "180K" },
  { value: 240000, label: "240K" },
  { value: 320000, label: "320K" },
];

const CarMileagePage = () => {
  const navigate = useNavigate();
  const [mileage, setMileage] = useState(50000);

  return (
    <MainLayout>
      {/* Wrapper for background positioning */}
      <Box width="100%" position="relative" minHeight="80vh">

        {/* Background Image */}
        <BackgroundImage
          width={{ xs: "60%", md: "50%" }}
          height={1050}
          top={20}
          right={-30}
        />

        {/* Foreground content */}
        <Box position="relative" zIndex={2}>
          <DealsBanner
            title="Car Mileage"
            subtitle="Select the Mileage of Your Car"
            buttonText="Back"
            onClick={() => navigate("/city")}
          />

          <Typography
            variant="h4"
            fontWeight={600}
            textAlign="center"
            mt={3}
            sx={{ fontFamily: "Inter", fontSize: 30 }}
          >
            Step <span style={{ color: colors.buttoncolor }}>5</span> of 10
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

              <Typography
                textAlign="center"
                mb={3}
                fontWeight={600}
                color={colors.buttoncolor}
              >
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

            {/* Next Button */}
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

export default CarMileagePage;
