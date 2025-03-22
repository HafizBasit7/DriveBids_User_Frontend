import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../../Layouts/MainLayout";
import DealsBanner from "../../../../Components/HomePageComponents/DealBanner";
import colors from "../../../../Style/color";
import imgsketch3 from "../../../../assets/SVG/exteriorimg3.svg";
import UploadBox from "../../../../Components/SellMyCarComponents/UploadSection";

const ExteriorImages3 = () => {
  const navigate = useNavigate();

  return (
    <MainLayout  title="Exterior Images"
    subtitle="Pick these 6 images"
    buttonText="Back to Home"
    onClick={() => navigate("/car-exteriorimg2")}>
      

      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>3</span> of 6
      </Typography>

      <UploadBox
        title="Left Back View"
        description="Take a picture of your car from the left Back as shown below"
        imgSketch={imgsketch3}
        onNext={() => navigate("/car-exteriorimg4")}
      />
    </MainLayout>
  );
};

export default ExteriorImages3;
