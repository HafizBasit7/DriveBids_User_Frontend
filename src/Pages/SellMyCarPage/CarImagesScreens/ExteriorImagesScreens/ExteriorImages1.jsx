import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../../Layouts/MainLayout";
import colors from "../../../../Style/color";
import imgsketch1 from "../../../../assets/SVG/exteriorimg1.svg";
import UploadBox from "../../../../Components/SellMyCarComponents/UploadSection";

const ExteriorImages1 = () => {
  const navigate = useNavigate();

  return (
    <MainLayout
      title="Exterior Images"
      subtitle="Upload these 6 required images"
      buttonText="Back"
      onClick={() => navigate("../")}
    >
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
        description="Please take a photo of your car from the front-right angle, as illustrated."
        imgSketch={imgsketch1}
        type="exterior"
        index={0}
        onNext={() => navigate("../exterior-2")}
      />
    </MainLayout>
  );
};

export default ExteriorImages1;
