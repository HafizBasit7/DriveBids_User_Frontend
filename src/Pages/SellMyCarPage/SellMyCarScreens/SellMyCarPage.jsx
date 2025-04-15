import { Box, Typography, Stack, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import DraftsIcon from "@mui/icons-material/Drafts";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MainLayout from "../../../Layouts/Mainlayout";
import { useCar } from "../../../context/car.context";

const SellMyCar = () => {
  const navigate = useNavigate();
  const {resetDraftState} = useCar();

  const cardStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "16px", // Increased radius for a softer look
    padding: "20px", // Increased padding for better spacing
    backgroundColor: "white",
    cursor: "pointer",
    transition: "all 0.3s",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", // Light shadow for depth
    zIndex: 1, 
  };

  return (
    <MainLayout
      title="Sell My Car"
      subtitle="Sell Your Car Hassle-Free!"
      buttonText="Back to Home"
      onClick={() => navigate("/home")}
    >
      <Box width="100%" sx={{ flex: 1, my: 19 }}>
        <Box
          sx={{
            width: "85%",
            mx: "auto",
            mt: { xs: 8, md: 12 },
            px: { xs: 3, sm: 5 },
          }}
        >
          <Stack spacing={10}>
            <Paper sx={cardStyle} onClick={() => {navigate("post/vehicle-register"); resetDraftState()}}>
              <Box display="flex" alignItems="center" gap={3}>
                <DirectionsCarIcon sx={{ fontSize: 36, color: "black" }} />
                <Box>
                  <Typography fontWeight={700} fontSize={20} sx={{ fontFamily: "Inter" }}>
                    Post a new ad
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontFamily: "Inter", fontSize: 16 }}>
                    Complete six easy steps to sell your car.
                  </Typography>
                </Box>
              </Box>
              <ArrowForwardIosIcon sx={{ fontSize: 22 }} color="action" />
            </Paper>

            <Paper sx={cardStyle} onClick={() => navigate("drafts")}>
              <Box display="flex" alignItems="center" gap={3}>
                <DraftsIcon sx={{ fontSize: 36, color: "black" }} />
                <Box>
                  <Typography fontWeight={700} fontSize={20} sx={{ fontFamily: "Inter" }}>
                    Drafts
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontFamily: "Inter", fontSize: 16 }}>
                    Clear your drafts and complete your ad today.
                  </Typography>
                </Box>
              </Box>
              <ArrowForwardIosIcon sx={{ fontSize: 22 }} color="action" />
            </Paper>
          </Stack>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default SellMyCar;
