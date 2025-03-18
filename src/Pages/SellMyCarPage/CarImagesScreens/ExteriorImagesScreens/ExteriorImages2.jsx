import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../../Layouts/MainLayout";
import DealsBanner from "../../../../Components/HomePageComponents/DealBanner";
import colors from "../../../../Style/color";
import imgsketch2 from "../../../../assets/SVG/exteriorimg2.svg";
import UploadBox from "../../../../Components/SellMyCarComponents/UploadSection";

const ExteriorImages2 = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <Box width="100%">
        <DealsBanner
          title="Exterior Images"
          subtitle="Pick these 6 images"
          buttonText="Back to Home"
          onClick={() => navigate("/home")}
        />
      </Box>

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
        onNext={() => navigate("/car-exteriorimg3")}
      />
    </MainLayout>
  );
};

export default ExteriorImages2;
