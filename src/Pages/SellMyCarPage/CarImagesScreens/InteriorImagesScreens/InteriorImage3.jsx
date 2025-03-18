import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../../Layouts/MainLayout";
import DealsBanner from "../../../../Components/HomePageComponents/DealBanner";
import colors from "../../../../Style/color";
import imgsketch3 from "../../../../assets/SVG/interiorimg3.svg";
import UploadBox from "../../../../Components/SellMyCarComponents/UploadSection";

const InteriorImagesPage3= () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <Box width="100%">
        <DealsBanner
          title="Interior Images"
          subtitle="Pick these 5 images"
          buttonText="Back to Home"
          onClick={() => navigate("/home")}
        />
      </Box>

      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>3</span> of 5
      </Typography>

      <UploadBox
        title="Back Seats"
        description="Take a picture of your car’s back seats as shown below"
        imgSketch={imgsketch3}
        onNext={() => navigate("/car-interiorimg4")}
      />
    </MainLayout>
  );
};

export default InteriorImagesPage3;
