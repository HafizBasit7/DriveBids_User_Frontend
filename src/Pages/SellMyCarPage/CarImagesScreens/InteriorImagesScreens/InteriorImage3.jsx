import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../../Layouts/MainLayout";
import colors from "../../../../Style/color";
import imgsketch3 from "../../../../assets/SVG/interiorimg3.svg";
import UploadBox from "../../../../Components/SellMyCarComponents/UploadSection";

const InteriorImagesPage3= () => {
  const navigate = useNavigate();

  return (
    <MainLayout   title="Interior Images"
    subtitle="Pick these 5 images"
    buttonText="Back"
    onClick={() => navigate("../interior-2")}>
    

      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>3</span> of 5
      </Typography>

      <UploadBox
        title="Back Seats"
        description="Take a picture of your car’s back seats as shown below"
        imgSketch={imgsketch3}
        type='interior'
        index={2}
        onNext={() => navigate("../interior-4")}
      />
    </MainLayout>
  );
};

export default InteriorImagesPage3;
