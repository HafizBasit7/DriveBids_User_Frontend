import { Box, Typography, Stack, Button } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import ArticleIcon from '@mui/icons-material/Article';
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ImageIcon from "@mui/icons-material/Image";
import GppGoodIcon from '@mui/icons-material/GppGood';
import ReportIcon from "@mui/icons-material/Report";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import colors from "../../../Style/color";
import MainLayout from "../../../Layouts/Mainlayout";
import {useCar} from "../../../context/car.context";
import { carDamageReportValidation, carDetailsValidation, carFeaturesValidation, carInspectionReportValidation, carPricingValidation, imagesValidation } from "../../../validations/car.validation";
import toast from "react-hot-toast";



const routes = [
  "company",
  "feature-1",
  "images",
  "inspection-1",
  "damage-1",
  "pricing-1",
];

const PostAds = () => {
  document.title = 'Post Ad';
  const navigate = useNavigate();


  const {carState, carPostAd} = useCar();
  const carPricingCompletion = carPricingValidation.safeParse(carState.carPricing);
  const carInspectionReportCompletion = carInspectionReportValidation.safeParse(carState.carInspectionReport);
  const carDetailsCompletion = carDetailsValidation.safeParse(carState.carDetails);
  const imageCompletion = imagesValidation.safeParse(carState.images);
  const carDamageReportComplection = carDamageReportValidation.safeParse(carState.carDamageReport || undefined);
  const carFeaturesCompletion = carFeaturesValidation.safeParse(carState.features);

  const postAdAllow = (carPricingCompletion.success && carInspectionReportCompletion.success && carDetailsCompletion.success && imageCompletion.success
    && carDamageReportComplection.success && carFeaturesCompletion.success
  );

  const steps = [
    { title: "Car Details", status: carDetailsCompletion.success, steps: 14, icon: <ArticleIcon fontSize="large" /> },
    { title: "Car Features", status: carFeaturesCompletion.success, steps: 2, icon: <DirectionsCarIcon fontSize="large" /> },
    { title: "Car Images", status: imageCompletion.success, steps: 4, icon: <ImageIcon fontSize="large" /> },
    { title: "Inspection Report", status: carInspectionReportCompletion.success, steps: 3, icon: <GppGoodIcon fontSize="large" /> },
    { title: "Damage Report", status: carDamageReportComplection.success, steps: 4, icon: <ReportIcon fontSize="large" /> },
    { title: "Car Pricing", status: carPricingCompletion.success, steps: 4, icon: <MonetizationOnIcon fontSize="large" /> },
  ];

  const handlePostAd = () => {
    toast.promise(async () => {
      await carPostAd();
      navigate('/ad/post/success');
    }, {
      loading: 'Posting ad',
      error: e => e.message,
      success: 'Ad Successfully posted',
    })
  };


  if(location.pathname.endsWith('/post') || location.pathname.endsWith('/post/'))
  {
    return (
      <MainLayout
      title="Post Ad"
      subtitle="Complete 6 Easy Steps"
      buttonText="Back"
      onClick={() => navigate("vehicle-register")}
    >
        <Box width="100%" sx={{ mt: 2,  }}>
          
          <Box width={{ xs: "95%", sm: "80%", md: "70%" }} mx="auto" mt={4} sx={{ position: "relative", zIndex: 1 }}>
            <Stack spacing={2}>
              {steps.map((item, index) => (
                <Box
                  key={index}
                  onClick={() => navigate(routes[index])}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: 1.5,
                    border: "1px solid #D9D9D9",
                    borderRadius: 2,
                    cursor: "pointer",
                    fontFamily: "Inter",
                    backgroundColor: "#fff",
                    "&:hover": { backgroundColor: "#f9f9f9" },
                  }}
                >
                  {/* Left Side */}
                  <Box display="flex" alignItems="center" gap={2}>
                    <Box
                      sx={{
                        minWidth: 50,
                        minHeight: 55,
                        backgroundColor: item.status ? colors.buttoncolor : "#F2EFF2",
                        color: item.status ? "white" : "#6F6F6F",
                        borderRadius: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {item.icon}
                    </Box>
  
                    <Box sx={{ ml: 2 }}>
                      <Typography fontWeight={600} sx={{ fontFamily: "Inter", fontSize: 16 }}>
                        {item.title}
                      </Typography>
                     
                      <Box display="flex" alignItems="center" gap={0.3} mt={0.5}>
                        {item.status ? (
                          <CheckCircleIcon sx={{ color: "#2F61BF", fontSize: 16 }} /> 
                        ) : (
                          <CancelIcon sx={{ color: "#6F6F6F", fontSize: 16 }} /> 
                        )}
                        <Typography
                          variant="body2"
                          color={item.status ? "#2F61BF" : "#6F6F6F"}
                          sx={{ fontFamily: "Inter" }}
                        >
                          {item.status ? 'Complete' : 'In-Complete'}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
  
               
                  <Box display="flex" alignItems="center" gap={2} justifyContent="flex-end">
                    <Typography fontSize={14} fontWeight={500} color="#6F6F6F" sx={{ fontFamily: "Inter" }}>
                      {item.steps} Steps
                    </Typography>
                    <ArrowForwardIosIcon fontSize="small" color="action" />
                  </Box>
                </Box>
              ))}
            </Stack>
  
           
            {postAdAllow && (
              <Box display="flex" justifyContent="flex-end" mt={3}>
                <Button
                  variant="contained"
                  sx={{
                    fontFamily: "Inter",
                    borderRadius: 1.5,
                    width: 150,
                    py: 1,
                    backgroundColor: colors.buttoncolor,
                  }}
                  onClick={handlePostAd}
                >
                  Post Ad
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </MainLayout>
    );
  }

  return <Outlet/>
 
};

export default PostAds;
