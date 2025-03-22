import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";
import DealsBanner from "../../Components/HomePageComponents/DealBanner";
import bmw from "../../assets/SVG/BMW.svg";
import colors from "../../Style/color";

const AdsSuccessScreen = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <Box width="100%">
        <DealsBanner
          title="Ad Posted"
          subtitle="Congrats on Posting Your Ad"
          buttonText="Back"
          onClick={() => navigate("/home")}
        />
      </Box>

      <Box
        sx={{
          width: "100%",
        height:500,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          backgroundColor: "#fff",
          p: { xs: 2, md: 4 },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            top: "60%",
            transform: "translateY(-50%)",
            display: { xs: "none", md: "flex" }, 
            justifyContent: "space-between",
            zIndex: 1,
            pointerEvents: "none", 
          }}
        >
          <Box
            component="img"
            src={bmw}
            alt="Car Left"
            sx={{
              width: { md: 400, lg: 500 },
            }}
          />

          <Box
            component="img"
            src={bmw}
            alt="Car Right"
            sx={{
              width: { md: 400, lg: 500 },
              transform: "scaleX(-1)",
            }}
          />
        </Box>

        <Box
          sx={{
            textAlign: "center",
            maxWidth: "600px",
            zIndex: 2,
            px: 2,
            mb: { xs: 8, md: 15 },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Outfit",
              fontWeight: 800,
              fontSize: { xs: 22, md: 28 },
              mb: 1,
            }}
          >
            Ad Posted Successfully
          </Typography>

          <Typography
            sx={{
              fontFamily: "Outfit",
              fontWeight: 400,
              fontSize: { xs: 14, md: 18 },
              mb: 4,
            }}
          >
            Click the button below to view your ad.
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: colors.buttoncolor,
              color: "#fff",
              fontWeight: 550,
              px: 4,
              py: 1.2,
              textTransform: "none",
              "&:hover": {
                backgroundColor: colors.buttoncolor,
              },
            }}
            onClick={() => navigate("/post-ad")}
          >
            Go to Ad Page →
          </Button>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default AdsSuccessScreen;
