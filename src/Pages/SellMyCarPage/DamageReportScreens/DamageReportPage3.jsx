import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import DealsBanner from "../../../Components/HomePageComponents/DealBanner";
import colors from "../../../Style/color";
import imgsketch3 from "../../../assets/SVG/leftdamage.svg";
import DamageReportBox from "../../../Components/SellMyCarComponents/DamgeReportbox";

const DamgeReportPage3 = () => {
  const navigate = useNavigate();

  return (
    <MainLayout     title="Damage Report"
    subtitle="Place Pointers Accurately"
    buttonText="Back"
    onClick={() => navigate("/damage-report2")}>
      

      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>3</span> of 4
      </Typography>

      <DamageReportBox
        title="Left Side View"
        description="Please pick the damage label and place it on the left part of the car that is damaged"
        imgSketch={imgsketch3}
        onNext={() => navigate("/damage-report4")}
      />
    </MainLayout>
  );
};

export default DamgeReportPage3;
