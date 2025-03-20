import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../../Layouts/MainLayout";
import DealsBanner from "../../../../Components/HomePageComponents/DealBanner";
import colors from "../../../../Style/color";
import imgsketch6 from "../../../../assets/SVG/exteriorimg6.svg";
import UploadBox from "../../../../Components/SellMyCarComponents/UploadSection";

const ExteriorImages6 = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <Box width="100%">
        <DealsBanner
          title="Exterior Images"
          subtitle="Pick these 6 images"
          buttonText="Back"
          onClick={() => navigate("/car-exteriorimg5")}
        />
      </Box>

      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>6</span> of 6
      </Typography>

      <UploadBox
        title="Back View"
        description="Take a picture of your car from the  Back as shown below"
        imgSketch={imgsketch6}
        onNext={() => navigate("/car-images")}
      />
    </MainLayout>
  );
};

export default ExteriorImages6;
