import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../../Layouts/MainLayout";
import DealsBanner from "../../../../Components/HomePageComponents/DealBanner";
import colors from "../../../../Style/color";
import imgsketch5 from "../../../../assets/SVG/exteriorimg5.svg";
import UploadBox from "../../../../Components/SellMyCarComponents/UploadSection";

const ExteriorImages5 = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <Box width="100%">
        <DealsBanner
          title="Exterior Images"
          subtitle="Pick these 6 images"
          buttonText="Back"
          onClick={() => navigate("/car-exteriorimg4")}
        />
      </Box>

      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>5</span> of 6
      </Typography>

      <UploadBox
        title="Front View"
        description="Take a picture of your car from the Front as shown below"
        imgSketch={imgsketch5}
        onNext={() => navigate("/car-exteriorimg6")}
      />
    </MainLayout>
  );
};

export default ExteriorImages5;
