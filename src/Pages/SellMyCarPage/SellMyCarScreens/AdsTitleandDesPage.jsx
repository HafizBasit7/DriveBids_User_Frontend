import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import colors from "../../../Style/color";
import AdsTiltleandDescrip from "../../../Components/SellMyCarComponents/AdsTiltleandDescrip";

const AdsDescription = () => {
  const navigate = useNavigate();

  return (
    <MainLayout title="Ad Description"
    subtitle="Enter Ad Title & Description"
    buttonText="Back"
    onClick={() => navigate("/car-fuel")}>
      <Box width="100%" >
       

        <Box  zIndex={2}>
         

          <Typography
            variant="h4"
            fontWeight={600}
            textAlign="center"
            mt={3}
            sx={{ fontFamily: "Inter", fontSize: 30 }}
          >
            Step <span style={{ color: colors.buttoncolor }}>10</span> of 10
          </Typography>

          <Box width={{ xs: "95%", sm: "80%", md: "70%" }} mx="auto" mt={3}>
            <AdsTiltleandDescrip onNext={() => navigate("/post-ad")} />
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default AdsDescription;
