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
    <MainLayout>
      <Box width="100%">
        <DealsBanner
          title="Wheels"
          subtitle="Pick these 4 images"
          buttonText="Back to Home"
          onClick={() => navigate("/car-wheelimg3")}
        />
      </Box>

      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>4</span> of 4
      </Typography>

      <UploadBox
        title="Back Passenger Wheel"
        description="Take a picture of your car’s back passenger wheel as shown below"
        imgSketch={imgsketch4}
        onNext={() => navigate("/car-images")}
      />
    </MainLayout>
  );
};

export default WheelsImagesPage4;
