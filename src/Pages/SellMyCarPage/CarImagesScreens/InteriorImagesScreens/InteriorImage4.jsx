import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../../Layouts/MainLayout";
import colors from "../../../../Style/color";
import imgsketch4 from "../../../../assets/SVG/interiorimg4.svg";
import UploadBox from "../../../../Components/SellMyCarComponents/UploadSection";

const InteriorImagesPage4 = () => {
  const navigate = useNavigate();

  return (
    <MainLayout
      title="Interior Images"
      subtitle="Upload these 5 required images"
      buttonText="Back"
      onClick={() => navigate("../interior-3")}
    >
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
        description="Please capture a photo of your car’s dashboard, as illustrated."
        imgSketch={imgsketch4}
        type="interior"
        index={3}
        onNext={() => navigate("../interior-5")}
      />
    </MainLayout>
  );
};

export default InteriorImagesPage4;
