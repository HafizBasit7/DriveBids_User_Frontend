import { Box } from "@mui/material";
import MainNavbar from "../../Components/Navbars/MainNavbar";
import SellCarCard from "../../Components/LandingPageComponents/SellCarCard";
import DealsBanner from "../../Components/HomePageComponents/DealBanner";
import CarCard from "../../Components/HomePageComponents/CarCard";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCarsIdInWatchList } from "../../api/calls/watchlist";
import { listCars, listCarsByBidCount } from "../../api/calls/car";
import { useAuth } from "../../context/auth.context";
import SkeletonLoader from "../../Components/Loader/SkeletonLoader";
import EmptyPlaceHolder from "../../Components/Loader/Empytplaceholder";

const HomePage = () => {

  document.title = 'Home';

  const navigate = useNavigate();
  const {authState} = useAuth();

  const currentSelectedLocation = (authState.selectedLocation || authState.user.location) || {"coordinates": [73.1128313, 33.5255503]};

  const {data, isLoading} = useQuery({
    queryKey: ['cars'],
    queryFn: () => listCars(1, 4, 'recent', currentSelectedLocation.coordinates[0], currentSelectedLocation.coordinates[1]),
  });

  const {data: carsInWatchList, isLoading: watchlistLoading} = useQuery({
    queryKey: ['carsInWatchList'],
    queryFn: getCarsIdInWatchList,
  });

  const {data: endingCarList, isLoading: endingCarListLoading} = useQuery({
    queryKey: ['carsEnding'],
    queryFn: () => listCars(1, 4, 'ending', currentSelectedLocation.coordinates[0], currentSelectedLocation.coordinates[1]),
  });

  const {data: carsByBidCount, isLoading: carsByBidCountLoading} = useQuery({
    queryKey: ['carsByBidCount'],
    queryFn: () => listCarsByBidCount(1, 4, currentSelectedLocation.coordinates[0], currentSelectedLocation.coordinates[1]),
  });


  return (
    <>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        p: 3,
        px:{xs:0.5,md:4,lg:4}
      }}
    >
      <Box sx={{ width: "100%" }}>
        <MainNavbar />
      </Box>

      <Box sx={{ width: "100%" }}>
        <SellCarCard />
      </Box>

      <Box sx={{ width: "100%" ,mt: 3}}>
        <DealsBanner title="Featured Ads" subtitle={`${carsByBidCount?.meta.count || 0} ${carsByBidCount?.meta.count === 1 ? 'Car Available' : 'Cars Available'}`} buttonText="View All" onClick={() => navigate("/all/bid")} 
      />
      </Box>

      <Box sx={{ width: "100%", display: "flex", flexDirection: "row", gap: 2, flexWrap: "wrap" ,mt: 2,justifyContent:{xs:"center" ,lg:"start"} }}>
        {carsByBidCountLoading ? <SkeletonLoader count={3}/> : carsByBidCount?.data.cars.length < 1 ? <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}><EmptyPlaceHolder/></Box> : carsByBidCount?.data.cars.map((car, index) => (
           <CarCard key={index} carsInWatchList={carsInWatchList} ad={car.car} />
        ))}
      </Box>

      <Box sx={{ width: "100%", mt: 3 }}> 
        <DealsBanner title="Ending Soon" subtitle={`${endingCarList?.meta.count || 0} ${endingCarList?.meta.count === 1 ? 'Car Available' : 'Cars Available'}`} buttonText="View All" onClick={() => navigate("/all/ending")} />
      </Box>

      <Box sx={{ width: "100%", display: "flex", flexDirection: "row", gap: 2, flexWrap: "wrap", mt: 2,justifyContent:{xs:"center" ,lg:"start"} }}>
        {endingCarListLoading ? <SkeletonLoader count={3}/> : endingCarList?.data.cars?.length < 1 ? <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}><EmptyPlaceHolder/></Box> : endingCarList?.data.cars.map((car, index) => (
           <CarCard key={index} carsInWatchList={carsInWatchList} ad={car} />
        ))}
      </Box>

      <Box sx={{ width: "100%", mt: 3 }}> 
        <DealsBanner title="Newly Listed" subtitle={`${data?.meta.count || 0} ${data?.meta.count === 1 ? 'Car Available' : 'Cars Available'}`} buttonText="View All" onClick={() => navigate("/all/recent")} />
      </Box>

      <Box sx={{ width: "100%", display: "flex", flexDirection: "row", gap: 2, flexWrap: "wrap", mt: 2 ,justifyContent:{xs:"center" ,lg:"start"} }}>
        {isLoading ? <SkeletonLoader count={3}/> : data?.data.cars.length < 1 ? <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}><EmptyPlaceHolder/></Box> : data?.data.cars.map((car, index) => (
           <CarCard key={index} carsInWatchList={carsInWatchList} ad={car} />
        ))}
      </Box>

   
    </Box>
       
       <Box sx={{ width: "100%", mt: 10 }}> 
        <Footer />
      </Box>
      </>
  );
};

export default HomePage;
