import { Box, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import colors from "../../../Style/color";
import CarFeatureBox from "../../../Components/SellMyCarComponents/CarFeatureBox";
import { useCar } from "../../../context/car.context";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";

const optionsLabels = [
  "Leather Seats",

  "Navigation/GPS ",
  "Audio System",
  "Apple CarPlay",
  "Bluetooth",
  "USB Port",
  "Android Auto",
  "Blind Spot Monitor",
  "Power Windows",
  "Climate Control",
  "Heated Seats",
  "Push Start Button",
  "Touchscreen Infotainment",
  "Rear AC Vents",
  "Cruise Control",
  "Wireless Charging",
  "Memory Seats",
  "Power Steering",
  "Ambient Lighting",
  "Heads-up Display",
];

const CarFeaturesPage2 = () => {
  const navigate = useNavigate();
  const { carState, dispatch, draftSave } = useCar();
  const [customFeatures, setCustomFeatures] = useState([]);
  useEffect(() => {
    if (!carState?.regNo) {
      navigate("/ad");
    }
  }, [carState, navigate]);
  useEffect(() => {
    // Get features from carState that are not in predefined list
    const existingCustomFeatures =
      carState.features?.interior?.filter(
        (feature) => !optionsLabels.includes(feature)
      ) || [];
    setCustomFeatures(existingCustomFeatures);
  }, []);

  const toggleSelection = (value) => {
    if (carState.features?.interior?.includes(value)) {
      dispatch({
        type: "REMOVE_FEATURE",
        section: "interior",
        value,
      });
      return;
    }

    dispatch({
      type: "UPDATE_FEATURE",
      section: "interior",
      value,
    });
  };

  const handleCustomFeature = (event) => {
    if (event.key === "Enter" && event.target.value.trim()) {
      const newFeature = event.target.value.trim();
      if (
        !optionsLabels.includes(newFeature) &&
        !customFeatures.includes(newFeature)
      ) {
        setCustomFeatures((prev) => [...prev, newFeature]);
        toggleSelection(newFeature);
      }
      event.target.value = "";
    }
  };

  const allFeatures = [...optionsLabels, ...customFeatures];

  function handleOnSave() {
    toast.promise(
      async () => {
        await draftSave("features");
        navigate("/ad/post");
      },
      {
        loading: "Saving draft",
        error: (error) => error.message,
        success: "Draft is saved",
      }
    );
  }

  return (
    <MainLayout
      title="Car Features"
      subtitle="Pick The Feature of Your Car"
      buttonText="Back"
      onClick={() => navigate("../feature-1")}
    >
      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>2</span> of 2
      </Typography>

      <Box width={{ xs: "95%", sm: "80%", md: "70%" }} mx="auto" mt={3}>
        <Box mb={3}>
          <Typography
            fontWeight={500}
            sx={{ fontSize: 16, mb: 2, fontFamily: "Inter" }}
          >
            Add a custom interior feature
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
          value={carState.features?.interior}
          onChange={toggleSelection}
          carBrands={allFeatures}
          title="Select Interior features"
          searchPlaceholder="enter custom feature"
          onNext={handleOnSave}
          buttonText="SAVE"
        />
      </Box>
    </MainLayout>
  );
};

export default CarFeaturesPage2;
