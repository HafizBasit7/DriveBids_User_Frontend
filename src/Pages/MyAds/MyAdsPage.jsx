import { Box, } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";

import CarCard from "../../Components/HomePageComponents/CarCard";
import { useQuery } from "@tanstack/react-query";
import { listMyAds } from "../../api/calls/car";
import { getCarsIdInWatchList } from "../../api/calls/watchlist";

const MyAdsPage = () => {
  const navigate = useNavigate();

  //My ads query
  const {data, isLoading} = useQuery({
    queryKey: ['myAds'],
    queryFn: () => listMyAds(1, 10)
  });

  //Car ids in watchlist
  const {data: carsInWatchList} = useQuery({
    queryKey: ['carsInWatchList'],
    queryFn: getCarsIdInWatchList,
  });

  const cars = data?.data?.cars;
  

  return (
    <MainLayout  title="My Ads"
    subtitle="20 Cars Listed "
    buttonText="Back"
    onClick={() => navigate("/home")}
    isnotSellMyCar ={true}>
      <Box sx={{ width: "100%", display: "flex", flexDirection: "row", gap: 2, flexWrap: "wrap" ,justifyContent:{xs:"center" ,lg:"start"} }}>
        {cars?.map((car, index) => (
           <CarCard key={index} carsInWatchList={carsInWatchList} ad={car} />
        ))}
      </Box>

     
    </MainLayout>
  );
};

export default MyAdsPage;
