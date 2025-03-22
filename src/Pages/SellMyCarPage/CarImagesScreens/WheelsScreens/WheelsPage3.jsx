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
    <MainLayout  title="Wheels"
    subtitle="Pick these 4 images"
    buttonText="Back to Home"
    onClick={() => navigate("/car-wheelimg2")}>
    

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
        description="Take a picture of your car’s front passenger wheel as shown below"
        imgSketch={imgsketch3}
        onNext={() => navigate("/car-wheelimg4")}
      />
    </MainLayout>
  );
};

export default WheelsImagesPage3;
