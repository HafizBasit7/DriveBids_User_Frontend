// BackgroundImage.jsx
import { Box } from "@mui/material";
import road from "../../assets/SVG/roadsvg.svg";

const BackgroundImage = ({ width, height, top, right, sx = {} }) => {
  return (
    <Box
      component="img"
      src={road}
      alt="Road Background"
      sx={{
        position: "absolute",
        right: right || 0,
        top: top || 100,
        width: width || { xs: "60%", md: "30%" },
        height: height || 650,
        objectFit: "cover",
        zIndex: 0,
        opacity: 0.1,
        ...sx, // Allow custom overrides
      }}
    />
  );
};

export default BackgroundImage;
