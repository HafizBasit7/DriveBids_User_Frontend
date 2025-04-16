import { Box, Typography } from "@mui/material";
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
        <CarSelectionBox
          carBrands={makes}
          value={carState.carDetails.make}
          onChange={onChangeCarMake}
          onNext={() => navigate("../variant")}
          searchPlaceholder ={"search for company"}
          customPlaceholder ={"enter custom company"}
        />
      </Box>
    </MainLayout>
  );
};

export default CarCompanyPage;
