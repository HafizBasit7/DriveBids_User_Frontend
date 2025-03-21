import { Box } from "@mui/material";
import MainLayout from "../../Layouts/MainLayout";
import DealsBanner from "../../Components/HomePageComponents/DealBanner";
import CarSlider from "../../Components/CarDetailsComponent/CarSlider";
import CarDetailsComponent from "../../Components/CarDetailsComponent/Cardetailcomp";
import CarFeaturesComponent from "../../Components/CarDetailsComponent/CarFeatures";
import BidsHistory from "../../Components/CarDetailsComponent/BidsHistory";
import DescriptionBox from "../../Components/CarDetailsComponent/DescriptionBox";
import CarInspectionReport from "../../Components/CarDetailsComponent/CarInspectionReport";
import { useNavigate } from "react-router-dom";
import ChatIcon from "@mui/icons-material/Chat";

const CarDetailsPage = () => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <Box sx={{ width: "100%" }}>
        <DealsBanner
          title="1996 Ford Mustang"
          subtitle="Posted 2 days ago"
          buttonText="Message Owner"
          onClick={() => navigate("/chat-page")}
          icon={<ChatIcon sx={{ cursor: "pointer" }} />}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          mt: 2,
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "70%" },
            backgroundColor: "",
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            pt: 1,
          }}
        >
          <CarSlider />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "30%" },
            backgroundColor: "",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CarInspectionReport />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },

          gap: 2,
          mt: 1,
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "40%" },
            backgroundColor: "",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CarDetailsComponent />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "60%" },
            backgroundColor: "",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CarFeaturesComponent />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          mt: 2,
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "65%" },
            backgroundColor: "",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DescriptionBox />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "35%" },
            backgroundColor: "",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BidsHistory />
        </Box>
      </Box>
    </MainLayout>
  );
};

export default CarDetailsPage;
