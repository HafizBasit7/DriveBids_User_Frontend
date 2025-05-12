import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../../Layouts/MainLayout";
import DealsBanner from "../../../../Components/HomePageComponents/DealBanner";
import colors from "../../../../Style/color";
import imgsketch4 from "../../../../assets/SVG/wheelimg4.svg";
import UploadBox from "../../../../Components/SellMyCarComponents/UploadSection";

const WheelsImagesPage4 = () => {
  const navigate = useNavigate();

  return (
    <MainLayout   title="Wheels"
    subtitle="Upload these 4 required images"
    buttonText="Back"
    onClick={() => navigate("../wheel-3")}>
     

      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>4</span> of 4
      </Typography>

      <UploadBox
        title="Rear Passenger Wheel"
        description="Upload a clear image of your car's rear passenger wheel as shown below."
        imgSketch={imgsketch4}
        type='wheels'
        index={3}
        save={true}
        onNext={() => {}}
      />
    </MainLayout>
  );
};

export default WheelsImagesPage4;
