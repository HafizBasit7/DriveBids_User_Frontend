import { Box, Typography, Stack, Paper } from "@mui/material";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";
import DealsBanner from "../../Components/HomePageComponents/DealBanner";

import CarCard from "../../Components/HomePageComponents/CarCard";
import { useQuery } from "@tanstack/react-query";
import { getCarsIdInWatchList } from "../../api/calls/watchlist";
import { getCarOwnerCars } from "../../api/calls/car";
import SkeletonLoading from "../../Components/Loader/SkeletonLoader";
import PaginationComponent from "../../Components/Common/PaginationComponent";
import EmptyPlaceHolder from "../../Components/Loader/Empytplaceholder";


const LIMIT = 10;

const CarListingPage = () => {
  const navigate = useNavigate();
  const {userId} = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') ? parseInt(searchParams.get('page')) : 1;

  const {data: carsInWatchList, isLoading: watchlistLoading} = useQuery({
    queryKey: ['carsInWatchList'],
    queryFn: getCarsIdInWatchList,
  });

  const {data, isLoading} = useQuery({
    queryKey: ['carOwnerCars', userId, page],
    queryFn: () => getCarOwnerCars(page, LIMIT, userId),
  });

  const cars = data?.data?.cars.cars;
  const user = data?.data.user;
  const count = data?.meta.count;
  const pages = data?.meta.pages;

  return (
    <MainLayout title={user?.name} onClick={() => navigate("/home")} buttonText="Back to Home" subtitle={user?.type === 'individual' ? 'Private Seller' : 'Trader'}>
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
        {isLoading ? <SkeletonLoading count={4}/> : cars?.length < 1 ? <EmptyPlaceHolder/> :  cars?.map((car, index) => (
            <CarCard carsInWatchList={carsInWatchList} ad={car}/>
        ))}

        {/* <CarCard /> */}
        
      </Box>
      {cars?.length > 0 && (<PaginationComponent page={page} pages={pages} handleChange={(event, value) => {setSearchParams({page: value})}}/>)}
    </MainLayout>
  );
};

export default CarListingPage;
