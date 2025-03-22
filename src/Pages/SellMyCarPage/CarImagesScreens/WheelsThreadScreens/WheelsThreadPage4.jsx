import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../../Layouts/MainLayout";
import DealsBanner from "../../../../Components/HomePageComponents/DealBanner";
import colors from "../../../../Style/color";
import imgsketch1 from "../../../../assets/SVG/wheelthreadimg1.svg";
import UploadBox from "../../../../Components/SellMyCarComponents/UploadSection";

const WheelsThreadPage4 = () => {
  const navigate = useNavigate();

  return (
    <MainLayout   title="Wheel Treads"
    subtitle="Pick these 4 images"
    buttonText="Back to Home"
    onClick={() => navigate("/car-tyrethread3")}>
     

      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>4</span> of 4
      </Typography>

      <UploadBox
        title="Front Driver Tyre Treads"
        description="Take a picture of your car’s front drive tyre treads as shown below"
        imgSketch={imgsketch1}
        onNext={() => navigate("/car-images")}
      />
    </MainLayout>
  );
};

export default WheelsThreadPage4;
