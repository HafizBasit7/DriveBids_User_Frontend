import { Box } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";
import CarCard from "../../Components/HomePageComponents/CarCard";
import { useQuery } from "@tanstack/react-query";
import { getWatchList } from "../../api/calls/watchlist";
import PaginationComponent from "../../Components/Common/PaginationComponent";
import SkeletonLoader from "../../Components/Loader/SkeletonLoader";
import EmptyPlaceHolder from "../../Components/Loader/Empytplaceholder";


const LIMIT = 10;

const MyWatchPage = () => {
  document.title = 'Watchlist';
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') ? parseInt(searchParams.get('page')) : 1;

  const { data, isLoading } = useQuery({
    queryKey: ['watchlist', page],
    queryFn: () => getWatchList(page, LIMIT),
  });

  const watchList = data?.data?.watchList;
  const count = data?.meta?.count;
  const pages = data?.meta?.pages;
  
  const carsInWatchList = {
    data: {
      carsInWatchList: watchList?.map(val => ({ car: val.car._id })),
    }
  };

  return (
    <MainLayout
      title="My Watchlist"
      subtitle={`${count || 0} Cars Listed`}
      buttonText="Back"
      onClick={() => navigate("/home")}
      isnotSellMyCar={true}
    >
      <Box sx={{ 
        width: "100%", 
        display: "flex", 
        flexDirection: "row", 
        gap: 2, 
        flexWrap: "wrap",
        justifyContent: { xs: "center", lg: "start" } 
      }}>
        {isLoading ? <SkeletonLoader count={3}/> : watchList?.length < 1 ? <Box sx={{ width: "100%", display: "flex", justifyContent: "center",height:300 }}><EmptyPlaceHolder/></Box>  : watchList?.map((item, index) => (
          <CarCard 
            key={index} 
            carsInWatchList={carsInWatchList} 
            ad={item.car} 
          />
        ))}
      </Box>

     {watchList?.length > 0 && (
       <PaginationComponent 
        page={page} 
        pages={pages} 
        handleChange={(event, value) => {
          setSearchParams({ page: value });
        }} 
      />
     )}
    </MainLayout>
  );
};

export default MyWatchPage;