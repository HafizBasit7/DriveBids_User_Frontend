import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../../Layouts/MainLayout";
import DealsBanner from "../../../../Components/HomePageComponents/DealBanner";
import colors from "../../../../Style/color";
import imgsketch1 from "../../../../assets/SVG/wheelimg1.svg";
import UploadBox from "../../../../Components/SellMyCarComponents/UploadSection";

const WheelsImagesPage1 = () => {
  const navigate = useNavigate();

  return (
    <MainLayout   title="Wheels"
    subtitle="Pick these 4 images"
    buttonText="Back"
    onClick={() => navigate("../")}>
     

      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>1</span> of 4
      </Typography>

      <UploadBox
        title="Front Driver Wheel"
        description="Take a picture of your car’s front driver wheel as shown below"
        imgSketch={imgsketch1}
        type='wheels'
        index={0}
        onNext={() => navigate("../wheel-2")}
      />
    </MainLayout>
  );
};

export default WheelsImagesPage1;
