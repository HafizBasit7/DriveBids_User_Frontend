import { Box, Typography, Stack, Paper } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";
import DealsBanner from "../../Components/HomePageComponents/DealBanner";

import CarCard from "../../Components/HomePageComponents/CarCard";
import { useQuery } from "@tanstack/react-query";
import { getCarsIdInWatchList } from "../../api/calls/watchlist";
import { getCarOwnerCars } from "../../api/calls/car";

const CarListingPage = () => {
  const navigate = useNavigate();
  const {carId} = useParams();

  const {data: carsInWatchList, isLoading: watchlistLoading} = useQuery({
    queryKey: ['carsInWatchList'],
    queryFn: getCarsIdInWatchList,
  });

  const {data, isLoading} = useQuery({
    queryKey: ['carOwnerCars', carId],
    queryFn: () => getCarOwnerCars(1, 10, carId),
  });

  const cars = data?.data?.cars;
  const user = data?.data;

  if(isLoading) {
    return null;
  }

  return (
    <MainLayout>
      <Box width="100%" sx={{ mt: 2 }}>
        <DealsBanner
          title={user.name}
          subtitle={user.type === 'individual' ? 'Private Seller' : 'Trader'}
          buttonText="Back to Home"
          onClick={() => navigate("/home")}
        />
      </Box>

      <Box
        sx={{
          width: "100%",

          mx: "auto",
          mt: { xs: 4, md: 2 },
          mb: { xs: 5, md: 7 },
          display: "flex",
          flexDirection: "row",
          gap: 2,
          flexWrap: "wrap",
          justifyContent: { xs: "center", sm: "flex-start" },
        }}
      >
        {cars?.map((car, index) => (
            <CarCard carsInWatchList={carsInWatchList} ad={car}/>
        ))}

        {/* <CarCard /> */}
        
      </Box>
    </MainLayout>
  );
};

export default CarListingPage;
