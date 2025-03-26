import { Box, Typography, Stack, Button } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
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

const steps = [
  { title: "Car Details", status: "Complete", steps: 10, icon: <ArticleIcon fontSize="large" /> },
  { title: "Car Features", status: "Incomplete", steps: 3, icon: <DirectionsCarIcon fontSize="large" /> },
  { title: "Car Images", status: "Incomplete", steps: 4, icon: <ImageIcon fontSize="large" /> },
  { title: "Inspection Report", status: "Incomplete", steps: 3, icon: <GppGoodIcon fontSize="large" /> },
  { title: "Damage Report", status: "Incomplete", steps: 4, icon: <ReportIcon fontSize="large" /> },
  { title: "Car Pricing", status: "Incomplete", steps: 4, icon: <MonetizationOnIcon fontSize="large" /> },
];

const routes = [
  "/car-company",
  "/car-features1",
  "/car-images",
  "/inspection-report1",
  "/damage-report1",
  "/pricing1",
];

const PostAds = () => {
  const navigate = useNavigate();


  if(location.pathname.endsWith('/post') || location.pathname.endsWith('/post/'))
  {
    return (
      <MainLayout
      title="Post Ad"
      subtitle="Complete 6 Easy Steps"
      buttonText="Back to Home"
      onClick={() => navigate("/sellmycar")}
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
                        backgroundColor: item.status === "Complete" ? colors.buttoncolor : "#F2EFF2",
                        color: item.status === "Complete" ? "white" : "#6F6F6F",
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
                        {item.status === "Complete" ? (
                          <CheckCircleIcon sx={{ color: "#2F61BF", fontSize: 16 }} /> 
                        ) : (
                          <CancelIcon sx={{ color: "#6F6F6F", fontSize: 16 }} /> 
                        )}
                        <Typography
                          variant="body2"
                          color={item.status === "Complete" ? "#2F61BF" : "#6F6F6F"}
                          sx={{ fontFamily: "Inter" }}
                        >
                          {item.status}
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
              >
                Post Ad
              </Button>
            </Box>
          </Box>
        </Box>
      </MainLayout>
    );
  }

  return <Outlet/>
 
};

export default PostAds;
