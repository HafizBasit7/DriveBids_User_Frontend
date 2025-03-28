import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import YearSelectionBox from "../../../Components/SellMyCarComponents/YearSelectionBox";
import colors from "../../../Style/color";
import MainLayout from "../../../Layouts/Mainlayout";
import OwnerSelectionBox from "../../../Components/SellMyCarComponents/OwnerSelectionBox";

const CarOwnerPage = () => {
  const navigate = useNavigate();

  return (
    <MainLayout
    title="Car Owner"
    subtitle="Select the number of Owners"
    buttonText="Back"
    onClick={() => navigate("/car-varient")}>
      <Box width="100%"  >
        
       

        <Box  zIndex={2}>
         

          <Typography
            fontWeight={600}
            textAlign="center"
            mt={3}
            sx={{ fontFamily: "Inter", fontSize: 30 }}
          >
            Step <span style={{ color: colors.buttoncolor }}>10</span> of 14
          </Typography>

          <Box width={{ xs: "95%", sm: "80%", md: "70%" }} mx="auto" mt={3} position="relative" zIndex={2}>
            <OwnerSelectionBox onNext={() => navigate("/city")} />
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default CarOwnerPage;
