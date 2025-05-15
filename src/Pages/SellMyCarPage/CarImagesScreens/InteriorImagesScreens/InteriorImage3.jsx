import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../../Layouts/MainLayout";
import colors from "../../../../Style/color";
import imgsketch3 from "../../../../assets/SVG/interiorimg3.svg";
import UploadBox from "../../../../Components/SellMyCarComponents/UploadSection";

const InteriorImagesPage3 = () => {
  const navigate = useNavigate();

  return (
    <MainLayout
      title="Interior Images"
      subtitle="Upload these 5 required images"
      buttonText="Back"
      onClick={() => navigate("../interior-2")}
    >
      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>3</span> of 5
      </Typography>

      <UploadBox
        title="Rear Seats"
        description="Please capture an image of your car’s rear seats, as illustrated."
        imgSketch={imgsketch3}
        type="interior"
        index={2}
        onNext={() => navigate("../interior-4")}
      />
    </MainLayout>
  );
};

export default InteriorImagesPage3;
