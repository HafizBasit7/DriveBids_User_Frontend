import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../../Layouts/MainLayout";
import DealsBanner from "../../../../Components/HomePageComponents/DealBanner";
import colors from "../../../../Style/color";
import imgsketch3 from "../../../../assets/SVG/wheelimg3.svg";
import UploadBox from "../../../../Components/SellMyCarComponents/UploadSection";

const WheelsImagesPage3 = () => {
  const navigate = useNavigate();

  return (
    <MainLayout
      title="Wheels"
      subtitle="Upload these 4 required images"
      buttonText="Back"
      onClick={() => navigate("../wheel-2")}
    >
      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>3</span> of 4
      </Typography>

      <UploadBox
        title="Front Passenger Wheel"
        description="Upload a clear image of your car's front passenger wheel as illustrated."
        imgSketch={imgsketch3}
        type="wheels"
        index={2}
        onNext={() => navigate("../wheel-4")}
      />
    </MainLayout>
  );
};

export default WheelsImagesPage3;
