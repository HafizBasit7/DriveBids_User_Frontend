import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import DealsBanner from "../../../Components/HomePageComponents/DealBanner";
import colors from "../../../Style/color";

import DamageReportBox from "../../../Components/SellMyCarComponents/DamgeReportbox";
const DamgeReportPage4 = () => {
  const navigate = useNavigate();

  return (
    <MainLayout
      title="Damage Report"
      subtitle="Mark Visible Damage – Choose Label & Upload Area Image"
      buttonText="Back"
      onClick={() => navigate("../damage-3")}
    >
      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>4</span> of 4
      </Typography>

      <DamageReportBox
        title="Rear View"
        description="Please select the appropriate damage label and place it on the damaged area on the rear side of the car. If there's no damage, proceed to the next step."
        carFacing={3}
        save={true}
      />
    </MainLayout>
  );
};

export default DamgeReportPage4;
