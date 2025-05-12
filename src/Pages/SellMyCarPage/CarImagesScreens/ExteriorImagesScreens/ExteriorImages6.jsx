import { Typography, } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../../Layouts/MainLayout";
import colors from "../../../../Style/color";
import imgsketch6 from "../../../../assets/SVG/exteriorimg6.svg";
import UploadBox from "../../../../Components/SellMyCarComponents/UploadSection";

const ExteriorImages6 = () => {
  const navigate = useNavigate();

  return (
    <MainLayout   title="Exterior Images"
    subtitle="Upload these 6 required images"
    buttonText="Back"
    onClick={() => navigate("../exterior-5")}>
    

      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>6</span> of 6
      </Typography>

      <UploadBox
        title="Rear View"
        description="Upload a clear image of your car from the rear as shown below"
        imgSketch={imgsketch6}
        type='exterior'
        index={5}
        save={true}
        onNext={() => {}}
      />
    </MainLayout>
  );
};

export default ExteriorImages6;
