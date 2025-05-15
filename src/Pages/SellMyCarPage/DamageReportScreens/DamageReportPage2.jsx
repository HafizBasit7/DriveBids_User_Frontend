import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import DealsBanner from "../../../Components/HomePageComponents/DealBanner";
import colors from "../../../Style/color";

import DamageReportBox from "../../../Components/SellMyCarComponents/DamgeReportbox";

const DamgeReportPage2 = () => {
  const navigate = useNavigate();

  return (
    <MainLayout
      title="Damage Report"
      subtitle="Mark Visible Damage – Choose Label & Upload Area Image"
      buttonText="Back"
      onClick={() => navigate("../damage-1")}
    >
      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>2</span> of 4
      </Typography>

      <DamageReportBox
        title="Right Side View"
        description="Please select the appropriate damage label and place it on the damaged area at the rear of the car. If there's no damage, proceed to the next step."
        carFacing={1}
        onNext={() => navigate("../damage-3")}
      />
    </MainLayout>
  );
};

export default DamgeReportPage2;
