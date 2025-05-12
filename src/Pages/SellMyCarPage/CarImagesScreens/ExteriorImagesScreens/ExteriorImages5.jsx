import {  Typography, } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../../Layouts/MainLayout";
import colors from "../../../../Style/color";
import imgsketch5 from "../../../../assets/SVG/exteriorimg5.svg";
import UploadBox from "../../../../Components/SellMyCarComponents/UploadSection";

const ExteriorImages5 = () => {
  const navigate = useNavigate();

  return (
    <MainLayout title="Exterior Images"
    subtitle="Upload these 6 required images"
    buttonText="Back"
    onClick={() => navigate("../exterior-4")}>
      

      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>5</span> of 6
      </Typography>

      <UploadBox
        title="Front View"
        description="Take a picture of your car from the Front as shown below"
        imgSketch={imgsketch5}
        type='exterior'
        index={4}
        onNext={() => navigate("../exterior-6")}
      />
    </MainLayout>
  );
};

export default ExteriorImages5;
