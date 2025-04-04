import { Box, Pagination, useMediaQuery, useTheme } from "@mui/material";
import MainLayout from "../../Layouts/MainLayout";
import DealsBanner from "../../Components/HomePageComponents/DealBanner";
import CarCard from "../../Components/HomePageComponents/CarCard";
import FilterSidebar from "../../Components/FilterPageComponent/FilterSideBar.jsx";
import colors from "../../Style/color.js";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { listCars, listCarsByBidCount } from "../../api/calls/car.js";
import { getCarsIdInWatchList } from "../../api/calls/watchlist.js";

const ViewAllFilters = () => {
  const navigate = useNavigate()
  const theme = useTheme();

  const {type} = useParams();

  const {data, isLoading} = useQuery({
    queryKey: ['cars'],
    queryFn: () => listCars(1, 10, 'recent'),
    enabled: type === 'recent',
  });

  const {data: endingCarList, isLoading: endingCarListLoading} = useQuery({
    queryKey: ['carsEnding'],
    queryFn: () => listCars(1, 10, 'ending'),
    enabled: type === 'ending',
  });

  const {data: carsByBidCount, isLoading: carsByBidCountLoading} = useQuery({
    queryKey: ['carsByBidCount'],
    queryFn: () => listCarsByBidCount(1, 10),
    enabled: type === 'bid',
  });

  //Watchlist
  const {data: carsInWatchList, isLoading: watchlistLoading} = useQuery({
    queryKey: ['carsInWatchList'],
    queryFn: getCarsIdInWatchList,
  });

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  if(carsByBidCountLoading || endingCarListLoading || isLoading) {
    return <p>Loading</p>;
  }

  let cars;
  if(type === 'ending') {
    cars = endingCarList.data.cars;
  } else if(type === 'recent') {
    cars = data.data.cars;
  } else if(type === 'bid') {
    cars = carsByBidCount.data.cars;
  }


  return (
    <MainLayout title="Super Odd Deals"
      subtitle="3000 Cars Available"
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

          {cars.map((car, index) => <CarCard ad={type === 'bid' ? car.car : car}/>)}

            {/* <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard /> */}
          </Box>
{/* todo: page */}
          {/* <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              mt: 4,
            }}
          >
            <Pagination
              count={isSmallScreen ? 3 : 5}
              shape="rounded"
              sx={{
                "& .MuiPaginationItem-root": {
                  fontSize: "1.3rem",
                  padding: "20px 16px",
                  mt: 3,
                  backgroundColor: "white",
                  color: "black",
                  mx: 1.5,
                  border: "1px solid #6F6F6F",
                  borderRadius: "8px",
                },
                "& .MuiPaginationItem-root.Mui-selected": {
                  backgroundColor: colors.buttoncolor,
                  color: "white",
                  border: `1px solid ${colors.buttoncolor}`,
                },
                "& .MuiPaginationItem-previousNext": {
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "8px",
                  border: "1px solid #6F6F6F",
                  mx: 1.5,
                },
                "& .MuiPaginationItem-ellipsis": {
                  fontSize: "1.3rem",
                  padding: "5px 16px",
                  mt: 3,
                  backgroundColor: "white",
                  color: "black",
                  mx: 1.5,
                  border: "1px solid #6F6F6F",
                  borderRadius: "8px",
                },
              }}
            /> */}

          {/* </Box> */}
        </Box>

       
      </Box>
    </MainLayout>
  );
};

export default ViewAllFilters;
