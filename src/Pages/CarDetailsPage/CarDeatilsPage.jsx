import { Box } from "@mui/material";
import MainLayout from "../../Layouts/MainLayout";
import CarSlider from "../../Components/CarDetailsComponent/CarSlider";
import CarDetailsComponent from "../../Components/CarDetailsComponent/Cardetailcomp";
import CarFeaturesComponent from "../../Components/CarDetailsComponent/CarFeatures";
import BidsHistory from "../../Components/CarDetailsComponent/BidsHistory";
import DescriptionBox from "../../Components/CarDetailsComponent/DescriptionBox";
import CarInspectionReport from "../../Components/CarDetailsComponent/CarInspectionReport";
import { useNavigate, useParams } from "react-router-dom";
import ChatIcon from "@mui/icons-material/Chat";
import { useQuery } from "@tanstack/react-query";
import { getCar, getSimilarCars } from "../../api/calls/car";
import { useAuth } from "../../context/auth.context";
import { timeAgo } from "../../utils/utils";
import DealsBanner from "../../Components/HomePageComponents/DealBanner";
import { getCarsIdInWatchList } from "../../api/calls/watchlist";
import CarCard from "../../Components/HomePageComponents/CarCard";
import { useEffect, useState, useRef } from "react";
import toast from "react-hot-toast";
import { getChatId } from "../../api/calls/chat";
import CarLoader from "../../Components/Loader/CarLoader";
import SkeletonLoader from "../../Components/Loader/SkeletonLoader";
import EmptyPlaceHolder from "../../Components/Loader/Empytplaceholder";
import NotFound from "../../Pages/NotFounf404Page";
import { useSocket } from "../../context/socket.context";

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

const CarDetailsPage = () => {
  const navigate = useNavigate();
  const { carId } = useParams();
  const { authState } = useAuth();
  const { bidSocket: socket } = useSocket();
  const [isProcessing, setIsProcessing] = useState(false);
  const processingRef = useRef(false);

  useEffect(() => {
    if (socket) {
      socket.emit("join-room", { roomId: carId });
    }
    return () => {
      if (socket) {
        socket.emit("leave-room", { roomId: carId });
      }
    };
  }, [socket, carId]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["car", carId],
    queryFn: () => getCar(carId),
  });

  if (isLoading) {
    return <CarLoader />;
  }

  if (error?.statusCode === 404) {
    return <NotFound />;
  }

  const car = data.data.car;
  document.title = car.title;

  const messageOwnerHandle = async () => {
    // Check both state and ref to prevent multiple clicks
    if (isProcessing || processingRef.current) return;

    // Set both state and ref to prevent race conditions
    setIsProcessing(true);
    processingRef.current = true;
    const toastId = toast.loading("Connecting to chat...");

    try {
      const result = await getChatId({ userId: car.user._id, carId: carId });
      toast.dismiss(toastId);

      // Force the navigation to happen synchronously
      window.location.href = `/chat?chatId=${result.data.chatId}`;
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.message || "Failed to start chat");
      // Reset both state and ref in case of error
      setIsProcessing(false);
      processingRef.current = false;
    }
  };

  return (
    <MainLayout
      title={car.title}
      subtitle={`Posted ${timeAgo(car.postedOn || car.createdAt)}`}
      buttonText={isProcessing ? "Connecting..." : "Message Owner"}
      onClick={messageOwnerHandle}
      isnotSellMyCar={true}
      icon={<ChatIcon sx={{ cursor: "pointer" }} />}
      buttonDisabled={isProcessing} // This helps prevent multiple clicks
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          mt: 2,
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "70%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            pt: 1,
          }}
        >
          <CarSlider car={car} />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "30%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            py: 1,
          }}
        >
          <CarInspectionReport car={car} />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          mt: 1,
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "35%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CarDetailsComponent car={car} />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "65%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CarFeaturesComponent car={car} />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          mt: 3,
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "65%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DescriptionBox description={car.description} />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "35%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BidsHistory
            car={car?._id}
            owner={car?.user._id}
            isSold={car.status === "sold"}
          />
        </Box>
      </Box>

      <SimilarCars make={car.make} carId={car?._id} />
    </MainLayout>
  );
};

export default CarDetailsPage;
