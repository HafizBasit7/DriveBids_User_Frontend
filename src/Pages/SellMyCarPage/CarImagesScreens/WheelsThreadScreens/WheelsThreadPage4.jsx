import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../../Layouts/MainLayout";
import colors from "../../../../Style/color";
import imgsketch1 from "../../../../assets/SVG/wheelthreadimg1.svg";
import UploadBox from "../../../../Components/SellMyCarComponents/UploadSection";

const WheelsThreadPage4 = () => {
  const navigate = useNavigate();

  return (
    <MainLayout   title="Wheel Treads"
    subtitle="Upload these 4 required images"
    buttonText="Back"
    onClick={() => navigate("../tread-3")}>
     

      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>4</span> of 4
      </Typography>

      <UploadBox
        title="Front Driver Tyre Treads"
        description="Upload a clear image of your car's front drive tyre treads as shown below."
        imgSketch={imgsketch1}
        type='tyreTreads'
        index={3}
        save={true}
        onNext={() => {}}
      />
    </MainLayout>
  );
};

export default WheelsThreadPage4;
