import { Box } from "@mui/material";
import Lottie from "lottie-react";
import loaderAnimation from "../../assets/loader.json"; 

const Loader = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width="100%"
    >
      <Box width={150} height={150}>
        <Lottie animationData={loaderAnimation} loop />
      </Box>
    </Box>
  );
};

export default Loader;
