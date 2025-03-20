import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../../Layouts/MainLayout";
import DealsBanner from "../../../../Components/HomePageComponents/DealBanner";
import colors from "../../../../Style/color";
import imgsketch4 from "../../../../assets/SVG/interiorimg4.svg";
import UploadBox from "../../../../Components/SellMyCarComponents/UploadSection";

const InteriorImagesPage4 = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <Box width="100%">
        <DealsBanner
          title="Interior Images"
          subtitle="Pick these 5 images"
          buttonText="Back to Home"
          onClick={() => navigate("/car-interiorimg3")}
        />
      </Box>

      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>4</span> of 5
      </Typography>

      <UploadBox
        title="Dashboard"
        description="Take a picture of your car’s dashboard as shown below"
        imgSketch={imgsketch4}
        onNext={() => navigate("/car-interiorimg5")}
      />
    </MainLayout>
  );
};

export default InteriorImagesPage4;
