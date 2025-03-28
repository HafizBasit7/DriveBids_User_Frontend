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
import { useBidSocket } from "../../context/bid.socket";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { getChatId } from "../../api/calls/chat";

const SimilarCars = ({make}) => {
  const {data, isLoading} = useQuery({
    queryKey: ['similarCars'],
    queryFn: () => getSimilarCars(1, 10, make),
  });

  const {data: carsInWatchList, isLoading: watchlistLoading} = useQuery({
    queryKey: ['carsInWatchList'],
    queryFn: getCarsIdInWatchList,
    enabled: false,
});


if(isLoading) {
  return null;
}

const cars = data?.data.cars;

  return (
    <>
      <Box sx={{ width: "100%", mt: 3 }}> 
              <DealsBanner title="Similar Cars"  buttonText={make} />
            </Box>
            <Box sx={{ width: "100%", display: "flex", flexDirection: "row", gap: 2, flexWrap: "wrap", mt: 2 ,justifyContent:{xs:"center" ,lg:"start"} }}>
        {cars.map((car, index) => (
           <CarCard key={index} carsInWatchList={carsInWatchList} ad={car} />
        ))}
      </Box>
    </>
  );
};

const CarDetailsPage = () => {
  const navigate = useNavigate();
  const {carId} = useParams();

  const {authState} = useAuth();
  const socket = useBidSocket();

  useEffect(() => {
    if(socket) {
      socket.emit('join-room', {roomId: carId});
    }

    return () => {
      socket.emit('leave-room', {roomId: carId});
    };
  }, [socket]);
  
  const {data, isLoading} = useQuery({
    queryKey: ['car', carId],
    queryFn: () => getCar(carId),
  });



  if(isLoading) {
    return null;
  }
  const car = data.data.car;
  //Calculations
  const isMyCar = car.user._id === authState.user._id;

  const messageOwnerHandle = async () => {
    toast.promise(async () => {
      await getChatId(car.user._id, car._id);
      navigate('/chat')
    }, {
      loading: 'please wait',
      success: 'Redirecting...',
      error: error => error.message,
    })
  };

  return (
    <MainLayout  title={car.title}
      subtitle={`Posted ${timeAgo(car.createdAt)}`}
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
          <BidsHistory car={car?._id}/>
        </Box>
      </Box>
      <SimilarCars make={car.make}/>
      
           
    </MainLayout>
  );
};

export default CarDetailsPage;
