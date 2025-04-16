import { Box } from "@mui/material";
import MainLayout from "../../Layouts/MainLayout";
import FilterSidebar from "../../Components/FilterPageComponent/FilterSideBar.jsx";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchCars } from "../../api/calls/car.js";
import CarCard from "../../Components/HomePageComponents/CarCard";
import { getCarsIdInWatchList } from "../../api/calls/watchlist.js";
import { useAuth } from "../../context/auth.context.jsx";
import PaginationComponent from "../../Components/Common/PaginationComponent.jsx";
import SkeletonLoader from "../../Components/Loader/SkeletonLoader.jsx";
import EmptyPlaceHolder from "../../Components/Loader/Empytplaceholder";


const LIMIT = 10;

const FilterPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') ? parseInt(searchParams.get('page')) : 1;

  const {authState} = useAuth();
  const currentSelectedLocation = (authState.selectedLocation || authState.user.location) || {"coordinates": [73.1128313, 33.5255503]};
  

  // State for filters
  const [filters, setFilters] = useState({});

  // Fetch cars based on filters using useQuery
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["search", filters, page],
    queryFn: () => searchCars(filters, page, LIMIT, currentSelectedLocation.coordinates[0], currentSelectedLocation.coordinates[1]),
  });

  const {data: carsInWatchList, isLoading: watchlistLoading} = useQuery({
      queryKey: ['carsInWatchList'],
      queryFn: getCarsIdInWatchList,
    });

    useEffect(() => {
      if(Object.keys(filters).length > 0) {
        setSearchParams({page: 1});
        refetch();
      }
    }, [filters])

  return (
    <MainLayout
      title="Filters"
      subtitle={`${data?.meta.count || 0} Cars Available`}
      buttonText="Home"
      onClick={() => navigate("/home")}
      isnotSellMyCar={true}
    >
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
        {/* Cars Listing Section */}
        <Box sx={{ width: { xs: "100%", md: "75%", lg: "80%" } }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              gap: 2,
              flexWrap: "wrap",
              justifyContent: { xs: "center", lg: "start" },
              borderRadius: 2,
              padding: 1,
            }}
          >
            {isLoading ? (
              <SkeletonLoader count={3}/> 
            ) : error ? (
              <p>Error fetching cars</p>
            ) : data?.data.cars.length > 0 ? (
              data.data.cars.map((car) => <CarCard carsInWatchList={carsInWatchList} key={car._id} ad={car} />)
            ) : (
              <EmptyPlaceHolder/>
            )}
          </Box>

          {/* Pagination */}
          <Box sx={{ width: "100%", display: "flex", justifyContent: "center", mt: 4 }}>
            {/* <Pagination count={isSmallScreen ? 3 : 5} shape="rounded" /> */}
          </Box>
        </Box>

        {/* Sidebar Filters */}
        <Box
          sx={{
            width: { xs: "100%", md: "25%" },
            border: "1px solid #ddd",
            borderRadius: 2,
            padding: 1,
            alignSelf: "flex-start",
            order: { xs: -1, md: 1 },
          }}
        >
          <FilterSidebar filters={filters} setFilters={setFilters} />
        </Box>
      </Box>
      {data?.data.cars.length > 0 && (<PaginationComponent page={page} pages={data?.meta.pages} handleChange={(event, value) => {setSearchParams({page: value})}}/>)}
    </MainLayout>
  );
};

export default FilterPage;
