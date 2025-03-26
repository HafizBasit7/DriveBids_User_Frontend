import { Box, } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";

import CarCard from "../../Components/HomePageComponents/CarCard";
import { useQuery } from "@tanstack/react-query";
import {getWatchList} from "../../api/calls/watchlist";

const MyWatchPage = () => {
  const navigate = useNavigate();

  const {data, isLoading} = useQuery({
    queryKey: ['watchlist'],
    queryFn: getWatchList,
  });

  console.log(data);

  return (
    <MainLayout  title="My Watchlist"
    // subtitle="20 Cars Listed "
    buttonText="Back"
    onClick={() => navigate("/home")}
    isnotSellMyCar ={true}>
    
      
      <Box sx={{ width: "100%", display: "flex", flexDirection: "row", gap: 2, flexWrap: "wrap" ,justifyContent:{xs:"center" ,lg:"start"} }}>
        <CarCard isMyAdsPage={true} />
        <CarCard isMyAdsPage={true} />

        <CarCard isMyAdsPage={true} />

        <CarCard isMyAdsPage={true} />

        <CarCard isMyAdsPage={true} />

        <CarCard isMyAdsPage={true} />
        <CarCard isMyAdsPage={true} />

        <CarCard isMyAdsPage={true} />
        <CarCard isMyAdsPage={true} />


        

      
        
        
      </Box>

     
      
    </MainLayout>
  );
};

export default MyWatchPage;
