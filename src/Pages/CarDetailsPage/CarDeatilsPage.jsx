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
import { useEffect } from "react";
import toast from "react-hot-toast";
import { getChatId } from "../../api/calls/chat";
import CarLoader from "../../Components/Loader/CarLoader";
import SkeletonLoader from "../../Components/Loader/SkeletonLoader";
import EmptyPlaceHolder from "../../Components/Loader/Empytplaceholder";

import NotFound from "../../Pages/NotFounf404Page";
import { useSocket } from "../../context/socket.context";

const SimilarCars = ({make, carId}) => {
  const {data, isLoading} = useQuery({
    queryKey: ['similarCars', carId],
    queryFn: () => getSimilarCars(1, 10, carId),
  });

  const {data: carsInWatchList, isLoading: watchlistLoading} = useQuery({
    queryKey: ['carsInWatchList'],
    queryFn: getCarsIdInWatchList,
});

const cars = data?.data.cars;
const filteredCars = cars?.filter(car => car._id !== carId);

  return (
    <>
      <Box sx={{ width: "100%", mt: 3 }}> 
              <DealsBanner title="Similar Cars"  buttonText={make} />
            </Box>
            <Box sx={{ width: "100%", display: "flex", flexDirection: "row", gap: 2, flexWrap: "wrap", mt: 2 ,justifyContent:{xs:"center" ,lg:"start"} }}>
        {isLoading ?  <SkeletonLoader count={3}/> : filteredCars?.length < 1 ? <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}><EmptyPlaceHolder/></Box>: filteredCars?.map((car, index) => {
          if(car._id === carId) {
            return <></>
          }
          return <CarCard key={index} carsInWatchList={carsInWatchList} ad={car} />
        })}
      </Box>
    </>
  );
};

const CarDetailsPage = () => {
  const navigate = useNavigate();
  const {carId} = useParams();

  const {authState} = useAuth();
  const {bidSocket: socket} = useSocket();

  useEffect(() => {
    if(socket) {
      socket.emit('join-room', {roomId: carId});
    }
    return () => {
      if(socket) {
        socket.emit('leave-room', {roomId: carId});
      }
    };
  }, [socket]);
  
  const {data, isLoading, error} = useQuery({
    queryKey: ['car', carId],
    queryFn: () => getCar(carId),
  });

  if(isLoading) {
    return <CarLoader/>;
  }

  if(error?.statusCode === 404) {
    return <NotFound/>
  }

  const car = data.data.car;

  document.title = car.title;

  const messageOwnerHandle = async () => {
    toast.promise(async () => {
      const result = await getChatId({userId: car.user._id, carId: carId});
      navigate(`/chat?chatId=${result.data.chatId}`)
    }, {
      loading: 'please wait',
      success: 'Redirecting...',
      error: error => error.message,
    })
  };

  return (
    <MainLayout  title={car.title}
      subtitle={`Posted ${timeAgo(car.postedOn || car.createdAt)}`}
      buttonText="Message Owner"
      onClick={messageOwnerHandle}
      isnotSellMyCar ={true}
      icon={<ChatIcon sx={{ cursor: "pointer" }} />}>
   

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
            backgroundColor: "",
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
            backgroundColor: "",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            py:1
            
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
            backgroundColor: "",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CarDetailsComponent car={car}/>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "65%" },
            backgroundColor: "",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CarFeaturesComponent car={car}/>
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
            backgroundColor: "",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DescriptionBox description={car.description}/>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "35%" },
            backgroundColor: "",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BidsHistory car={car?._id} owner={car?.user._id}/>
        </Box>
      </Box>
      <SimilarCars make={car.make} carId={car?._id}/>
      
           
    </MainLayout>
  );
};

export default CarDetailsPage;
