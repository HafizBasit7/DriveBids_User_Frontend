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
    <MainLayout
      title="Interior Images"
      subtitle="Upload these 5 required images"
      buttonText="Back"
      onClick={() => navigate("../interior-1")}
    >
      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>2</span> of 5
      </Typography>

      <UploadBox
        title="Odometer & Dashboard Display"
        description="Please capture a clear photo of your car’s speedometer, as illustrated."
        imgSketch={imgsketch2}
        type="interior"
        index={1}
        onNext={() => navigate("../interior-3")}
      />
    </MainLayout>
  );
};

export default InteriorImagesPage2;
