import {  Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../../Layouts/MainLayout";
import colors from "../../../../Style/color";
import imgsketch2 from "../../../../assets/SVG/exteriorimg2.svg";
import UploadBox from "../../../../Components/SellMyCarComponents/UploadSection";

const ExteriorImages2 = () => {
  const navigate = useNavigate();

  return (
    <MainLayout title="Exterior Images"
    subtitle="Pick these 6 images"
    buttonText="Back"
    onClick={() => navigate("../exterior-1")}>
      

      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>2</span> of 6
      </Typography>

      <UploadBox
        title="Left Front View"
        description="Take a picture of your car from the left front as shown below"
        imgSketch={imgsketch2}
        type='exterior'
        index={1}
        onNext={() => navigate("../exterior-3")}
      />
    </MainLayout>
  );
};

export default ExteriorImages2;
