import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../../Layouts/MainLayout";
import DealsBanner from "../../../../Components/HomePageComponents/DealBanner";
import colors from "../../../../Style/color";
import imgsketch2 from "../../../../assets/SVG/interiorimg2.svg";
import UploadBox from "../../../../Components/SellMyCarComponents/UploadSection";

const InteriorImagesPage2 = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <Box width="100%">
        <DealsBanner
          title="Interior Images"
          subtitle="Pick these 5 images"
          buttonText="Back"
          onClick={() => navigate("/car-interiorimg1")}
        />
      </Box>

      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>2</span> of 5
      </Typography>

      <UploadBox
        title="Speed Display"
        description="Take a picture of your car’s speed display as shown below"
        imgSketch={imgsketch2}
        onNext={() => navigate("/car-interiorimg3")}
      />
    </MainLayout>
  );
};

export default InteriorImagesPage2;
