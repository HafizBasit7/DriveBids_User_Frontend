import { Box, Typography, Stack, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import DraftsIcon from "@mui/icons-material/Drafts";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


const SellMyCar = () => {
  const navigate = useNavigate();

  const cardStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "12px",
    padding: "16px",
    backgroundColor: "white",
    cursor: "pointer",
    transition: "all 0.3s",
    "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.05)" },
    zIndex: 1, 
  };

  return (
    <MainLayout
    title="Sell My Car"
    subtitle="Sell Your Car Hassle-Free!"
    buttonText="Back to Home"
    onClick={() => navigate("/home")}
  >
      <Box width="100%" >
        <Box
          sx={{
            width: "85%",
        
            mx: "auto",
            my: { xs: 6, md: 12 },
            px: { xs: 2, sm: 4 },
            
          }}
        >
          <Stack spacing={7}  >
            <Paper sx={cardStyle} onClick={() => navigate("/post-ad")}>
              <Box display="flex" alignItems="center" gap={2}>
                <DirectionsCarIcon sx={{ fontSize: 24, color: "black" }} />
                <Box>
                  <Typography fontWeight={600} sx={{ fontFamily: "Inter, sans-serif" }}>
                    Post a new ad
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Inter, sans-serif" }}>
                    Complete six easy steps to sell your car.
                  </Typography>
                </Box>
              </Box>
              <ArrowForwardIosIcon fontSize="small" color="action" />
            </Paper>

            <Paper sx={cardStyle} onClick={() => navigate("/drafts")}>
              <Box display="flex" alignItems="center" gap={2}>
                <DraftsIcon sx={{ fontSize: 24, color: "black" }} />
                <Box>
                  <Typography fontWeight={600} sx={{ fontFamily: "Inter, sans-serif" }}>
                    Drafts
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Inter, sans-serif" }}>
                    Clear your drafts and complete your ad today.
                  </Typography>
                </Box>
              </Box>
              <ArrowForwardIosIcon fontSize="small" color="action" />
            </Paper>
          </Stack>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default SellMyCar;
