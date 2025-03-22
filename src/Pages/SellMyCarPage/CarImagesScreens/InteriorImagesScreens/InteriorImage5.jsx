import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../../Layouts/MainLayout";
import colors from "../../../../Style/color";
import imgsketch5 from "../../../../assets/SVG/interiorimg5.svg";
import UploadBox from "../../../../Components/SellMyCarComponents/UploadSection";

const InteriorImagesPage5 = () => {
  const navigate = useNavigate();

  return (
    <MainLayout  title="Interior Images"
    subtitle="Pick these 5 images"
    buttonText="Back"
    onClick={() => navigate("/car-interiorimg4")}>
      

      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>5</span> of 5
      </Typography>

      <UploadBox
        title="Trunk"
        description="Take a picture of your car’s open trunk as shown below"
        imgSketch={imgsketch5}
        onNext={() => navigate("/car-images")}
      />
    </MainLayout>
  );
};

export default InteriorImagesPage5;
