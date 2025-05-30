import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getSimilarCars } from "../../api/calls/car";
import { getCarsIdInWatchList } from "../../api/calls/watchlist";
import CarCard from "../../Components/HomePageComponents/CarCard";
import DealsBanner from "../../Components/HomePageComponents/DealBanner";
import SkeletonLoader from "../../Components/Loader/SkeletonLoader";
import EmptyPlaceHolder from "../../Components/Loader/Empytplaceholder";

const SimilarCars = ({ make, carId }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["similarCars", carId],
    queryFn: () => getSimilarCars(1, 10, carId),
  });

  const { data: carsInWatchList } = useQuery({
    queryKey: ["carsInWatchList"],
    queryFn: getCarsIdInWatchList,
  });

  const cars = data?.data.cars;
  const filteredCars = cars?.filter((car) => car._id !== carId);

  return (
    <>
      <Box sx={{ width: "100%", mt: 3 }}>
        <DealsBanner title="Similar Cars" buttonText={make} />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          gap: 2,
          flexWrap: "wrap",
          mt: 2,
          justifyContent: { xs: "center", lg: "start" },
        }}
      >
        {isLoading ? (
          <SkeletonLoader count={3} />
        ) : filteredCars?.length < 1 ? (
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <EmptyPlaceHolder />
          </Box>
        ) : (
          filteredCars?.map((car, index) => (
            <CarCard key={index} carsInWatchList={carsInWatchList} ad={car} />
          ))
        )}
      </Box>
    </>
  );
};

export default SimilarCars; 