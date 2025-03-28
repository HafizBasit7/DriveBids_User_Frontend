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
import { getCar } from "../../api/calls/car";
import { useAuth } from "../../context/auth.context";
import { timeAgo } from "../../utils/utils";
import DealsBanner from "../../Components/HomePageComponents/DealBanner";

const CarDetailsPage = () => {
  const navigate = useNavigate();
  const {carId} = useParams();

  const {authState} = useAuth();
  
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

  return (
    <MainLayout  title={car.title}
      subtitle={`Posted ${timeAgo(car.createdAt)}`}
      buttonText="Message Owner"
      onClick={() => navigate("/chat-page")}
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
          <CarInspectionReport />
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
            width: { xs: "100%", md: "40%" },
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
            width: { xs: "100%", md: "60%" },
            backgroundColor: "",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CarFeaturesComponent />
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
      <Box sx={{ width: "100%", mt: 3 }}> 
              <DealsBanner title="Similar Cars" subtitle="3000 Cars Available" buttonText=" Viewall" />
            </Box>
            <Box sx={{ width: "100%", display: "flex", flexDirection: "row", gap: 2, flexWrap: "wrap", mt: 2 ,justifyContent:{xs:"center" ,lg:"start"} }}>
        {/* {data?.data.cars.map((car, index) => (
           <CarCard key={index} carsInWatchList={carsInWatchList} ad={car} />
        ))} */}
      </Box>
      
           
    </MainLayout>
  );
};

export default CarDetailsPage;
