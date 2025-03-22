import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import CarSelectionBox from "../../../Components/SellMyCarComponents/CarCompanyBox";
import colors from "../../../Style/color";

const CityPage = () => {
  const navigate = useNavigate();

  const carBrands = [
    "Karachi",
    "Lahore",
    "Islamabad",
    "Rawalpindi",
    "Faisalabad",
    "Multan",
    "Peshawar",
    "Quetta",
    "Sialkot",
    "Gujranwala",
  ];

  return (
    <MainLayout
    title="Location"
            subtitle="Pick Your City"
            buttonText="Back"
            onClick={() => navigate("/car-modal")}
  >
      <Box width="100%" >
        
        

        <Box  zIndex={2}>
          

          <Typography
            variant="h5"
            fontWeight={600}
            textAlign="center"
            mt={3}
            sx={{ fontFamily: "Inter", fontSize: 30 }}
          >
            Step <span style={{ color: colors.buttoncolor }}>4</span> of 10
          </Typography>

          <Box
            width={{ xs: "95%", sm: "80%", md: "70%" }}
            mx="auto"
            mt={3}
            position="relative"
            zIndex={2}
          >
            <CarSelectionBox
              isLocation={true}
              searchPlaceholder="Search City"
              carBrands={carBrands}
              onNext={() => navigate("/car-mileage")}
            />
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default CityPage;
