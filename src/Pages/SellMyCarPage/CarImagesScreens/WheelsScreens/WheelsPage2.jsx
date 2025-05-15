import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../../Layouts/MainLayout";
import DealsBanner from "../../../../Components/HomePageComponents/DealBanner";
import colors from "../../../../Style/color";
import imgsketch2 from "../../../../assets/SVG/wheelimg2.svg";
import UploadBox from "../../../../Components/SellMyCarComponents/UploadSection";

const WheelsImagesPage2 = () => {
  const navigate = useNavigate();

  return (
    <MainLayout
      title="Wheels"
      subtitle="Upload these 4 required images"
      buttonText="Back"
      onClick={() => navigate("../wheel-1")}
    >
      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>2</span> of 4
      </Typography>

      <UploadBox
        title="Rear Driver Wheel"
        description="Upload a clear image of your car's rear driver wheel as illustrated."
        imgSketch={imgsketch2}
        type="wheels"
        index={1}
        onNext={() => navigate("../wheel-3")}
      />
    </MainLayout>
  );
};

export default WheelsImagesPage2;
