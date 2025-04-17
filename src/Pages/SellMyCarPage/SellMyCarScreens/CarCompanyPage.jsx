import { Box, Button, CircularProgress, FormControlLabel, Grid, Radio, RadioGroup, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CarSelectionBox from "../../../Components/SellMyCarComponents/CarCompanyBox";
import colors from "../../../Style/color";
import MainLayout from "../../../Layouts/Mainlayout";
import { useCar } from "../../../context/car.context";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../../../api/client";

const CarCompanyPage = () => {
  const navigate = useNavigate();

  const {carState, dispatch} = useCar();

  const {data, isLoading} = useQuery({
    queryKey: ['make'],
    queryFn: async () => {
      const result = await apiClient.get('/makes');
      return result.data;
    },
    refetchOnMount: false,
  });
  const makes = data?.Makes;

  function onChangeCarMake (value) {
    dispatch({
      type: 'UPDATE_FIELD',
      section: 'carDetails',
      field: 'make',
      value,
    });
    dispatch({
      type: 'UPDATE_FIELD',
      section: 'carDetails',
      field: 'variant',
      value: null,
    });
  };

  return (
    <MainLayout
      title="Car Company"
      subtitle="Pick The Company of Your Car"
      buttonText="Back"
      onClick={() => navigate("..")}
    >
      
      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>1</span> of 14
      </Typography>

      <Box
        width={{ xs: "95%", sm: "80%", md: "70%" }}
        mx="auto"
        mt={3}
        position="relative"
        zIndex={2}
      >
        <Box
          display="flex"
          flexDirection="column"
          p={3}
          border="1px solid #D9D9D9"
          borderRadius={2}
          sx={{backgroundColor:"white"}}
          
        >

          <RadioGroup
              value={carState.carDetails.make}
              onChange={(e) => onChangeCarMake(e.target.value)}
            >
              <Grid container spacing={2}>
                {isLoading ? <CircularProgress sx={{mx:'auto', my: 5}} size={24}/> : makes.map((brand, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <FormControlLabel
                      value={brand.make_display}
                      control={<Radio />}
                      label={
                        <Typography sx={{ fontFamily: "Inter" }}>{brand.make_display}</Typography>
                      }
                    />
                  </Grid>
                ))}
              </Grid>
            </RadioGroup>

            <Box display="flex" justifyContent="flex-end" mt={2}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  fontFamily: "Inter",
                  minWidth: 120,
                  height: 40,
                  backgroundColor: colors.buttoncolor,
                }}
                onClick={() => {
                  if(carState.carDetails.make) {
                    navigate("../variant")
                  }
                }}
              >
                Next Step
              </Button>
            </Box>
        </Box>


      </Box>
    </MainLayout>
  );
};

export default CarCompanyPage;
