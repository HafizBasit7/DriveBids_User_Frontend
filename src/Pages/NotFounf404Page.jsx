import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import notFoundAnimation from "../assets/notfound.json";
import colors from "../Style/color";

const Page404 = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
    >
      <Box width={300} height={300}>
        <Lottie animationData={notFoundAnimation} loop />
      </Box>

      <Typography variant="h4" fontWeight={600} mt={2}>
        Oops! Page Not Found
      </Typography>
      <Typography variant="body1" mt={1} color="textSecondary">
        The page you are looking for doesn’t exist or has been moved.
      </Typography>

      <Button
        variant="contained"
        sx={{ mt: 3, textTransform: "none",backgroundColor:colors.buttoncolor }}
        onClick={() => navigate("/")}
      >
        Go Home
      </Button>
    </Box>
  );
};

export default Page404;
