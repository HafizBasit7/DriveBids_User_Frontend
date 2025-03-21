import { Box, Typography, Radio, RadioGroup, FormControlLabel, Button, Paper } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import DealsBanner from "../../../Components/HomePageComponents/DealBanner";
import colors from "../../../Style/color";
import BackgroundImage from "../backgroundsvg";

const transmissionTypes = ["AGS", "Manual", "CVT", "DCT"];

const CarTransmissionPage = () => {
  const navigate = useNavigate();
  const [transmission, setTransmission] = useState("AGS");

  return (
    <MainLayout>
      <Box width="100%" position="relative" minHeight="80vh">
        {/* Background SVG */}
        <BackgroundImage
          width={{ xs: "60%", md: "50%" }}
          height={1000}
          top={20}
          right={-30}
        />

        {/* Content over the background */}
        <Box position="relative" zIndex={2}>
          <DealsBanner
            title="Transmission"
            subtitle="Pick The Transmission Type Of Your Car"
            buttonText="Back"
            onClick={() => navigate("/car-engine")}
          />

          <Typography
            variant="h4"
            fontWeight={600}
            textAlign="center"
            mt={3}
            sx={{ fontFamily: "Inter", fontSize: 30 }}
          >
            Step <span style={{ color: colors.buttoncolor }}>9</span> of 10
          </Typography>

          {/* Transmission Form */}
          <Box
            component={Paper}
            elevation={3}
            sx={{
              width: { xs: "90%", sm: "70%", md: "60%" },
              margin: "auto",
              mt: 4,
              p: 4,
              borderRadius: 2,
            }}
          >
            <Typography fontWeight={600} sx={{ fontSize: 20, mb: 4, fontFamily: "Inter" }}>
              What’s the transmission type of the car?
            </Typography>

            <RadioGroup
              value={transmission}
              onChange={(e) => setTransmission(e.target.value)}
            >
              {transmissionTypes.map((type) => (
                <FormControlLabel
                  key={type}
                  value={type}
                  control={
                    <Radio
                      sx={{
                        color: colors.buttoncolor,
                        "&.Mui-checked": { color: colors.buttoncolor },
                      }}
                    />
                  }
                  label={type}
                  sx={{
                    fontFamily: "Inter",
                    fontSize: 16,
                    mb: 1,
                  }}
                />
              ))}
            </RadioGroup>

            {/* Next Step Button */}
            <Box display="flex" justifyContent="flex-end" mt={5}>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  minWidth: 120,
                  height: 40,
                  fontFamily: "Inter",
                  backgroundColor: colors.buttoncolor,
                  "&:hover": {
                    backgroundColor: colors.buttoncolor,
                  },
                }}
                onClick={() => navigate("/car-addtitle")}
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

export default CarTransmissionPage;
