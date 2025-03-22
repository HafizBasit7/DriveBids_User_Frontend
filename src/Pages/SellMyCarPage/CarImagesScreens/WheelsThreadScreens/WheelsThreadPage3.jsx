import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../../Layouts/MainLayout";
import DealsBanner from "../../../../Components/HomePageComponents/DealBanner";
import colors from "../../../../Style/color";
import imgsketch1 from "../../../../assets/SVG/wheelthreadimg3.svg";
import UploadBox from "../../../../Components/SellMyCarComponents/UploadSection";

const WheelsThreadPage3 = () => {
  const navigate = useNavigate();

  return (
    <MainLayout  title="Wheel Treads"
    subtitle="Pick these 4 images"
    buttonText="Back to Home"
    onClick={() => navigate("/car-tyrethread2")}>

      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>3</span> of 4
      </Typography>

      <UploadBox
        title="Front Passenger Tyre Treads"
        description="Take a picture of your car’s front passenger tyre treads as shown below"
        imgSketch={imgsketch1}
        onNext={() => navigate("/car-tyrethread4")}
      />
    </MainLayout>
  );
};

export default WheelsThreadPage3;
