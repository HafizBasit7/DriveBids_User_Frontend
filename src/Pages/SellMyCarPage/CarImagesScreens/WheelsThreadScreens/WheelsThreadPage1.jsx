import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../../Layouts/MainLayout";
import colors from "../../../../Style/color";
import imgsketch1 from "../../../../assets/SVG/wheelthreadimg1.svg";
import UploadBox from "../../../../Components/SellMyCarComponents/UploadSection";

const WheelsThreadPage1 = () => {
  const navigate = useNavigate();

  return (
    <MainLayout
      title="Wheel Treads"
      subtitle="Upload these 4 required images"
      buttonText="Back"
      onClick={() => navigate("../")}
    >
      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>1</span> of 4
      </Typography>

      <UploadBox
        title="Rear tyre treads"
        description="Upload a clear image of your car's rear driver side tyre treads as illustrated."
        imgSketch={imgsketch1}
        type="tyreTreads"
        index={0}
        onNext={() => navigate("../tread-2")}
      />
    </MainLayout>
  );
};

export default WheelsThreadPage1;
