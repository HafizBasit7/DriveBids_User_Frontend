import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import DealsBanner from "../../../Components/HomePageComponents/DealBanner";
import colors from "../../../Style/color";
import imgsketch1 from "../../../assets/SVG/frontdamage.svg";
import DamageReportBox from "../../../Components/SellMyCarComponents/DamgeReportbox";

const DamgeReportPage1 = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <Box width="100%">
        <DealsBanner
          title="Damage Report"
          subtitle="Place Pointers Accurately"
          buttonText="Back"
          onClick={() => navigate("/post-ad")}
        />
      </Box>

      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>1</span> of 4
      </Typography>

      <DamageReportBox
        title="Front View"
        description="Please pick the damage label and place it on the front part of the car that is damaged"
        imgSketch={imgsketch1}
        onNext={() => navigate("/damage-report2")}
      />
    </MainLayout>
  );
};

export default DamgeReportPage1;
