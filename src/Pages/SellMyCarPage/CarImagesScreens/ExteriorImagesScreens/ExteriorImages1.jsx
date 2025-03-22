import { Typography,  } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../../Layouts/MainLayout";
import colors from "../../../../Style/color";
import imgsketch1 from "../../../../assets/SVG/exteriorimg1.svg";
import UploadBox from "../../../../Components/SellMyCarComponents/UploadSection";

const ExteriorImages1 = () => {
  const navigate = useNavigate();

  return (
    <MainLayout title="Exterior Images"
    subtitle="Pick these 6 images"
    buttonText="Back to Home"
    onClick={() => navigate("/car-images")}>
      

      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>1</span> of 6
      </Typography>

      <UploadBox
        title="Right Front View"
        description="Take a picture of your car from the right front as shown below"
        imgSketch={imgsketch1}
        onNext={() => navigate("/car-exteriorimg2")}
      />
    </MainLayout>
  );
};

export default ExteriorImages1;
