import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../../Layouts/MainLayout";
import colors from "../../../../Style/color";
import VideoUploadBox from "../../../../Components/SellMyCarComponents/VideoUploadSection";

const CarVideoPage = () => {
  const navigate = useNavigate();

  return (
    <MainLayout
      title="Car Video"
      subtitle="Upload a video of your car"
      buttonText="Back"
      onClick={() => navigate("../")}
    >
      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Car Video Upload
      </Typography>

      <VideoUploadBox
        title="Car Video"
        description="Upload a video showcasing your car. Make sure to include both interior and exterior views."
        type="carVideo"
        index={0}
        save={true}
        onNext={() => {}}
      />
    </MainLayout>
  );
};

export default CarVideoPage; 