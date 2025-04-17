import { Box } from "@mui/material";
import MainLayout from "../../Layouts/Mainlayout.jsx";
import CarCard from "../../Components/HomePageComponents/CarCard";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { listCars, listCarsByBidCount } from "../../api/calls/car.js";
import { getCarsIdInWatchList } from "../../api/calls/watchlist.js";
import { useAuth } from "../../context/auth.context";
import PaginationComponent from "../../Components/Common/PaginationComponent.jsx";
import SkeletonLoader from "../../Components/Loader/SkeletonLoader.jsx";
import EmptyPlaceHolder from "../../Components/Loader/Empytplaceholder";


const LIMIT = 10;

const ViewAllFilters = () => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') ? parseInt(searchParams.get('page')) : 1;
  
  const {authState} = useAuth();
  const currentSelectedLocation = (authState.selectedLocation || authState.user.location) || {"coordinates": [73.1128313, 33.5255503]};

  const {type} = useParams();

  const getQueryKey = (type) => {
    switch (type) {
      case 'recent':
        return ['carsAll', page];
      case 'ending':
        return ['carsEndingAll', page];
      default:
        return ['carsByBidCountAll', page];
    }
  };

  const getQueryFn = (type) => {
    return () => {
      switch (type) {
        case 'recent':
          return listCars(page, LIMIT, 'recent', currentSelectedLocation.coordinates[0], currentSelectedLocation.coordinates[1]);
        case 'ending':
          return listCars(page, LIMIT, 'ending', currentSelectedLocation.coordinates[0], currentSelectedLocation.coordinates[1]);
        default:
          return listCarsByBidCount(page, LIMIT, currentSelectedLocation.coordinates[0], currentSelectedLocation.coordinates[1]);
      }
    };
  };


  //Watchlist
  const {data: carsInWatchList, isLoading: watchlistLoading} = useQuery({
    queryKey: ['carsInWatchList'],
    queryFn: getCarsIdInWatchList,
  });

  const {data, isLoading} = useQuery({
    queryKey: getQueryKey(type),
    queryFn: getQueryFn(type)
  });

  const cars = data?.data.cars;
  const pages = data?.meta.pages;
  const count = data?.meta.count;

  return (
    <MainLayout title={type === 'bid' ? 'Featured Adds' : type === 'ending' ? 'Ending Soonest' : 'Newly Listed'}
      subtitle={`${count || 0} Cars Available`}
      buttonText="Back"
      onClick={() => navigate("/home")}
      isnotSellMyCar={true}>



      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 0.2,
          mt: 3,
          alignItems: "flex-start",
        }}
      >
        <Box sx={{ width: '100%' }}>
          <Box sx={{
            width: "100%", display: "flex", flexDirection: "row", gap: 2, flexWrap: "wrap", justifyContent: {
              xs: "center", lg: "start", borderRadius: 2,
              padding: 1,
            }
          }}>

          {isLoading ? <SkeletonLoader count={3}/> : cars.length < 1 ? <EmptyPlaceHolder/> : (
            cars.map((car, index) => <CarCard key={index} ad={type === 'bid' ? car.car : car} carsInWatchList={carsInWatchList}/>)
          )}
          </Box>
        </Box>
        
          
       
      </Box>
      {cars?.length > 0 && (<PaginationComponent page={page} pages={pages} handleChange={(event, value) => {setSearchParams({page: value})}}/>)}
    </MainLayout>
  );
};

export default ViewAllFilters;
