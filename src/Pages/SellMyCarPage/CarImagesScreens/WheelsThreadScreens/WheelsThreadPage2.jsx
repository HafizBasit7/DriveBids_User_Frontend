import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../../Layouts/MainLayout";
import DealsBanner from "../../../../Components/HomePageComponents/DealBanner";
import colors from "../../../../Style/color";
import imgsketch1 from "../../../../assets/SVG/wheelthreadimg2.svg";
import UploadBox from "../../../../Components/SellMyCarComponents/UploadSection";

const WheelsThreadPage2 = () => {
  const navigate = useNavigate();

  return (
    <MainLayout title="Wheel Treads"
    subtitle="Pick these 4 images"
    buttonText="Back"
    onClick={() => navigate("../tread-1")}>
     

      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>2</span> of 4
      </Typography>

      <UploadBox
        title="Back Passenger Tyre Treads"
        description="Take a picture of your car’s back passenger tyre treads as shown below"
        imgSketch={imgsketch1}
        type='tyreTreads'
        index={1}
        onNext={() => navigate("../tread-3")}
      />
    </MainLayout>
  );
};

export default WheelsThreadPage2;
