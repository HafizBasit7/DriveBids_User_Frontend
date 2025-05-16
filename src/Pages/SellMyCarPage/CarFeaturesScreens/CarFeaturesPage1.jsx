import { Box, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import colors from "../../../Style/color";
import CarFeatureBox from "../../../Components/SellMyCarComponents/CarFeatureBox";
import { useCar } from "../../../context/car.context";
import { useState, useEffect } from "react";

const exteriorFeaturesLabels = [
  "Sunroof",
  "Fog Lights",
  "Alloy Wheels",
  "Keyless Entry",
  "LED Headlights",
  "Rear Spoiler",
  "Roof Rails",
  "Chrome Grille",
  "Daytime Running Lights (DRLs)",
  "Power Folding Mirrors",
  "Rain Sensing Wipers",
  "Parking Sensors",
  "3D Camera",
  "Reverse Camera",
  "Immobiliser",
];

const CarFeaturesPage1 = () => {
  const navigate = useNavigate();
  const { carState, dispatch } = useCar();
  useEffect(() => {
    if (!carState?.regNo) {
      navigate("/ad");
    }
  }, [carState, navigate]);
  const [customFeatures, setCustomFeatures] = useState([]);

  useEffect(() => {
    // Get features from carState that are not in predefined list
    const existingCustomFeatures =
      carState.features?.exterior?.filter(
        (feature) => !exteriorFeaturesLabels.includes(feature)
      ) || [];
    setCustomFeatures(existingCustomFeatures);
  }, []);

  const toggleSelection = (value) => {
    if (carState.features?.exterior?.includes(value)) {
      dispatch({
        type: "REMOVE_FEATURE",
        section: "exterior",
        value,
      });
      return;
    }

    dispatch({
      type: "UPDATE_FEATURE",
      section: "exterior",
      value,
    });
  };

  const handleCustomFeature = (event) => {
    if (event.key === "Enter" && event.target.value.trim()) {
      const newFeature = event.target.value.trim();
      if (
        !exteriorFeaturesLabels.includes(newFeature) &&
        !customFeatures.includes(newFeature)
      ) {
        setCustomFeatures((prev) => [...prev, newFeature]);
        toggleSelection(newFeature);
      }
      event.target.value = "";
    }
  };

  const allFeatures = [...exteriorFeaturesLabels, ...customFeatures];

  return (
    <MainLayout
      title="Car Features"
      subtitle="Pick The Feature of Your Car"
      buttonText="Back"
      onClick={() => navigate("..")}
    >
      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>1</span> of 2
      </Typography>

      <Box width={{ xs: "95%", sm: "80%", md: "70%" }} mx="auto" mt={3}>
        <Box mb={3}>
          <Typography
            fontWeight={500}
            sx={{ fontSize: 16, mb: 2, fontFamily: "Inter" }}
          >
            Add a custom exterior feature
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter custom feature and press Enter"
            onKeyDown={handleCustomFeature}
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

        <CarFeatureBox
          value={carState.features?.exterior}
          onChange={toggleSelection}
          carBrands={allFeatures}
          title="Select exterior features"
          searchPlaceholder="enter custom feature"
          onNext={() => navigate("../feature-2")}
        />
      </Box>
    </MainLayout>
  );
};

export default CarFeaturesPage1;
