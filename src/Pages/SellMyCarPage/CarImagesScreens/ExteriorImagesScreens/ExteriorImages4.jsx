import { Typography, } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../../Layouts/MainLayout";
import colors from "../../../../Style/color";
import imgsketch4 from "../../../../assets/SVG/exteriorimg4.svg";
import UploadBox from "../../../../Components/SellMyCarComponents/UploadSection";

const ExteriorImages4 = () => {
  const navigate = useNavigate();

  return (
    <MainLayout title="Exterior Images"
    subtitle="Pick these 6 images"
    buttonText="Back"
    onClick={() => navigate("../exterior-3")}>


      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>4</span> of 6
      </Typography>

      <UploadBox
        title="Right Back View"
        description="Take a picture of your car from the right Back as shown below"
        imgSketch={imgsketch4}
        type='exterior'
        index={3}
        onNext={() => navigate("../exterior-5")}
      />
    </MainLayout>
  );
};

export default ExteriorImages4;
