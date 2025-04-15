import { Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import colors from "../../../Style/color";
import DamageReportBox from "../../../Components/SellMyCarComponents/DamgeReportbox";

const DamgeReportPage1 = () => {
  const navigate = useNavigate();

  return (
    <MainLayout     title="Damage Report"
    subtitle="Place Pointers Accurately"
    buttonText="Back"
    onClick={() => navigate("../")}>
      

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
        carFacing={0}
        onNext={() => navigate("../damage-2")}
      />
    </MainLayout>
  );
};

export default DamgeReportPage1;
