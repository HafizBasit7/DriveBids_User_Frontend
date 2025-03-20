import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import DealsBanner from "../../../Components/HomePageComponents/DealBanner";
import colors from "../../../Style/color";
import imgsketch2 from "../../../assets/SVG/backdamage.svg";
import DamageReportBox from "../../../Components/SellMyCarComponents/DamgeReportbox";

const DamgeReportPage2 = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <Box width="100%">
        <DealsBanner
          title="Damage Report"
          subtitle="Place Pointers Accurately"
          buttonText="Back"
          onClick={() => navigate("/damage-report1")}
        />
      </Box>

      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>2</span> of 4
      </Typography>

      <DamageReportBox
        title="Back View"
        description="Please pick the damage label and place it on the Back part of the car that is damaged"
        imgSketch={imgsketch2}
        onNext={() => navigate("/damage-report3")}
      />
    </MainLayout>
  );
};

export default DamgeReportPage2;
