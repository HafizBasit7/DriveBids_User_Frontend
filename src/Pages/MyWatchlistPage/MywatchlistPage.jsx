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
  document.title = "Watchlist";
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page")
    ? parseInt(searchParams.get("page"))
    : 1;

  const { data, isLoading, error } = useQuery({
    queryKey: ["watchlist", page],
    queryFn: () => getWatchList(page, LIMIT),
  });

  // Safe data extraction with fallbacks
  const watchList = data?.data?.watchList || [];
  const count = data?.meta?.count || 0;
  const pages = data?.meta?.pages || 0;

  // Filter out invalid items and safely map
  const validWatchList = watchList.filter(
    (item) => item && item.car && item.car._id
  );

  const carsInWatchList = {
    data: {
      carsInWatchList: validWatchList.map((val) => ({ car: val.car._id })),
    },
  };

  // Handle loading state
  if (isLoading) {
    return (
      <MainLayout
        title="My Watchlist"
        subtitle="Loading..."
        buttonText="Back"
        onClick={() => navigate("/home")}
        isnotSellMyCar={true}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            gap: 2,
            flexWrap: "wrap",
            justifyContent: { xs: "center", lg: "start" },
          }}
        >
          <SkeletonLoader count={3} />
        </Box>
      </MainLayout>
    );
  }

  // Handle error state
  if (error) {
    return (
      <MainLayout
        title="My Watchlist"
        subtitle="Error loading watchlist"
        buttonText="Back"
        onClick={() => navigate("/home")}
        isnotSellMyCar={true}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            height: 300,
          }}
        >
          <EmptyPlaceHolder />
        </Box>
      </MainLayout>
    );
  }

  return (
    <MainLayout
      title="My Watchlist"
      subtitle={`${count} Cars Listed`}
      buttonText="Back"
      onClick={() => navigate("/home")}
      isnotSellMyCar={true}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          gap: 2,
          flexWrap: "wrap",
          justifyContent: { xs: "center", lg: "start" },
        }}
      >
        {validWatchList.length === 0 ? (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              height: 300,
            }}
          >
            <EmptyPlaceHolder />
          </Box>
        ) : (
          validWatchList.map((item, index) => (
            <CarCard
              key={item.car._id || index}
              carsInWatchList={carsInWatchList}
              ad={item.car}
            />
          ))
        )}
      </Box>

      {validWatchList.length > 0 && pages > 1 && (
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
