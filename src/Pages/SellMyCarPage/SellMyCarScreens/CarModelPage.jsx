import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import YearSelectionBox from "../../../Components/SellMyCarComponents/YearSelectionBox";
import colors from "../../../Style/color";
import { useCar } from "../../../context/car.context";

const CarModelPage = () => {
  const navigate = useNavigate();
  const {carState, dispatch} = useCar();

  return (
    <MainLayout
    title="Car Model"
    subtitle="Pick The Model of Your Car"
    buttonText="Back"
    onClick={() => navigate("../variant")}>
      <Box width="100%"  >
        
       

        <Box  zIndex={2}>
         

          <Typography
            fontWeight={600}
            textAlign="center"
            mt={3}
            sx={{ fontFamily: "Inter", fontSize: 30 }}
          >
            Step <span style={{ color: colors.buttoncolor }}>3</span> of 14
          </Typography>

          <Box width={{ xs: "95%", sm: "80%", md: "70%" }} mx="auto" mt={3} position="relative" zIndex={2}>
            <YearSelectionBox onNext={() => navigate("../city")} />
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default CarModelPage;
