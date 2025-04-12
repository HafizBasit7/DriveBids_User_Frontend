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

const HomePage = () => {
  const navigate = useNavigate();
  const {authState} = useAuth();

  const currentSelectedLocation = (authState.selectedLocation || authState.user.location) || {"coordinates": [73.1128313, 33.5255503]};

  const {data, isLoading} = useQuery({
    queryKey: ['cars'],
    queryFn: () => listCars(1, 10, 'recent', currentSelectedLocation.coordinates[0], currentSelectedLocation.coordinates[1]),
    staleTime: 1000 * 30,
  });

  const {data: carsInWatchList, isLoading: watchlistLoading} = useQuery({
    queryKey: ['carsInWatchList'],
    queryFn: getCarsIdInWatchList,
  });

  const {data: endingCarList, isLoading: endingCarListLoading} = useQuery({
    queryKey: ['carsEnding'],
    queryFn: () => listCars(1, 10, 'ending', currentSelectedLocation.coordinates[0], currentSelectedLocation.coordinates[1]),
    staleTime: 1000 * 30,
  });

  const {data: carsByBidCount, isLoading: carsByBidCountLoading} = useQuery({
    queryKey: ['carsByBidCount'],
    queryFn: () => listCarsByBidCount(1, 10, currentSelectedLocation.coordinates[0], currentSelectedLocation.coordinates[1]),
    staleTime: 1000 * 30,
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
        <DealsBanner title="Features Adds" subtitle={`${carsByBidCount?.meta.count || 0} Cars Available`} buttonText="View All" onClick={() => navigate("/all/bid")} 
      />
      </Box>

      <Box sx={{ width: "100%", display: "flex", flexDirection: "row", gap: 2, flexWrap: "wrap" ,mt: 2,justifyContent:{xs:"center" ,lg:"start"} }}>
        {carsByBidCount?.data.cars.map((car, index) => (
           <CarCard key={index} carsInWatchList={carsInWatchList} ad={car.car} />
        ))}
      </Box>

      <Box sx={{ width: "100%", mt: 3 }}> 
        <DealsBanner title="Ending Soonest" subtitle={`${endingCarList?.meta.count || 0} Cars Available`} buttonText="View All" onClick={() => navigate("/all/ending")} />
      </Box>

      <Box sx={{ width: "100%", display: "flex", flexDirection: "row", gap: 2, flexWrap: "wrap", mt: 2,justifyContent:{xs:"center" ,lg:"start"} }}>
        {endingCarList?.data.cars.map((car, index) => (
           <CarCard key={index} carsInWatchList={carsInWatchList} ad={car} />
        ))}
      </Box>

      <Box sx={{ width: "100%", mt: 3 }}> 
        <DealsBanner title="Newly Listed" subtitle={`${data?.meta.count || 0} Cars Available`} buttonText="View All" onClick={() => navigate("/all/recent")} />
      </Box>

      <Box sx={{ width: "100%", display: "flex", flexDirection: "row", gap: 2, flexWrap: "wrap", mt: 2 ,justifyContent:{xs:"center" ,lg:"start"} }}>
        {data?.data.cars.map((car, index) => (
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
