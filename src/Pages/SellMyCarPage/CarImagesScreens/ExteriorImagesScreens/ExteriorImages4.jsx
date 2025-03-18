import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../../Layouts/MainLayout";
import DealsBanner from "../../../../Components/HomePageComponents/DealBanner";
import colors from "../../../../Style/color";
import imgsketch4 from "../../../../assets/SVG/exteriorimg4.svg";
import UploadBox from "../../../../Components/SellMyCarComponents/UploadSection";

const ExteriorImages4 = () => {
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
        Step <span style={{ color: colors.buttoncolor }}>4</span> of 6
      </Typography>

      <UploadBox
        title="Right Back View"
        description="Take a picture of your car from the right Back as shown below"
        imgSketch={imgsketch4}
        onNext={() => navigate("/car-exteriorimg5")}
      />
    </MainLayout>
  );
};

export default ExteriorImages4;
