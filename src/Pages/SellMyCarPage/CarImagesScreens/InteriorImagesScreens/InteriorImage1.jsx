import {  Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../../Layouts/MainLayout";
import colors from "../../../../Style/color";
import imgsketch1 from "../../../../assets/SVG/interiorimg1.svg";
import UploadBox from "../../../../Components/SellMyCarComponents/UploadSection";

const InteriorImagesPage1 = () => {
  const navigate = useNavigate();

  return (
    <MainLayout  title="Interior Images"
    subtitle="Upload these 5 required images"
    buttonText="Back"
    onClick={() => navigate("../")}>
      

      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>1</span> of 5
      </Typography>

      <UploadBox
        title="Front Seats"
        description="Take a picture of your car from the  front seats as shown below"
        imgSketch={imgsketch1}
        type='interior'
        index={0}
        onNext={() => navigate("../interior-2")}
      />
    </MainLayout>
  );
};

export default InteriorImagesPage1;
