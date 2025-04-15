import { Box, } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";

import CarCard from "../../Components/HomePageComponents/CarCard";
import { useQuery } from "@tanstack/react-query";
import { listMyAds } from "../../api/calls/car";
import { getCarsIdInWatchList } from "../../api/calls/watchlist";
import PaginationComponent from "../../Components/Common/PaginationComponent";
import SkeletonLoader from "../../Components/Loader/SkeletonLoader";

const LIMIT = 10;

const MyAdsPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') ? parseInt(searchParams.get('page')) : 1;

  //My ads query
  const {data, isLoading} = useQuery({
    queryKey: ['myAds', page],
    queryFn: () => listMyAds(page, LIMIT)
  });

  //Car ids in watchlist
  const {data: carsInWatchList} = useQuery({
    queryKey: ['carsInWatchList'],
    queryFn: getCarsIdInWatchList,
  });

  const cars = data?.data?.cars;
  const count = data?.meta.count;
  const pages = data?.meta.pages;
  
  return (
    <MainLayout  title="My Ads"
    subtitle={`${count || 0} Cars Listed `}
    buttonText="Back"
    onClick={() => navigate("/home")}
    isnotSellMyCar ={true}>
      <Box sx={{ width: "100%", display: "flex", flexDirection: "row", gap: 2, flexWrap: "wrap" ,justifyContent:{xs:"center" ,lg:"start"} }}>
        {isLoading ? <SkeletonLoader count={3}/> : cars?.map((car, index) => (
           <CarCard key={index} carsInWatchList={carsInWatchList} ad={car} />
        ))}
      </Box>

     <PaginationComponent page={page} pages={pages} handleChange={(event, value) => {setSearchParams({page: value})}}/>

     
    </MainLayout>
  );
};

export default MyAdsPage;
