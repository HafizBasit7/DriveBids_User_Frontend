import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import colors from "../../../Style/color";
import CarFeatureBox from "../../../Components/SellMyCarComponents/CarFeatureBox";
import { useCar } from "../../../context/car.context";
import toast from "react-hot-toast";

const optionsLabels = [
  "Leather Seats",
  "Power Steering",
  "Power Windows",
  "Climate Control",
  "Heated Seats",
  "Push Start Button",
  "Touchscreen Infotainment",
  "Rear AC Vents",
  "Cruise Control",
  "Wireless Charging",
  "Sunroof"
];

const CarFeaturesPage2 = () => {
  const navigate = useNavigate();

  const {carState, dispatch, draftSave} = useCar();
  
  const toggleSelection = (value) => {
    if(carState.features?.interior?.includes(value)) {
      dispatch({
        type: 'REMOVE_FEATURE',
        section: 'interior',
        value,
      });
      return;
    };

    dispatch({
      type: 'UPDATE_FEATURE',
      section: 'interior',
      value,
    });
  };

  function handleOnSave() {
    toast.promise(async () => {
      await draftSave('features')
      navigate("/ad/post")
    }, {
      loading: 'Saving draft',
      error: (error) => error.message,
      success: 'Draft is saved',
    })
  }

  return (
    <MainLayout    title="Car Features"
    subtitle="Pick The Feature of Your Car"
    buttonText="Back"
    onClick={() => navigate("../feature-1")}>
      
      

      <Typography
     
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter" ,fontSize:30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>2</span> of 2
      </Typography>

      <Box width={{ xs: "95%", sm: "80%", md: "70%" }} mx="auto" mt={3}>
      <CarFeatureBox value={carState.features?.interior}
      onChange={toggleSelection}
  carBrands={optionsLabels}
  title="Select Interior features"
  searchPlaceholder="enter custom feature" onNext={handleOnSave} buttonText="SAVE"/>        
        
            </Box>
    </MainLayout>
  );
};

export default CarFeaturesPage2;
