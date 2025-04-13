import { useState, useRef, useEffect } from "react";
import { Box, IconButton, Button } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Carimg from "../../assets/Png/cardetailimg.png";
import Carimgg from "../../assets/Png/sellcarimage.png";
import colors from "../../Style/color";
import BidModal from "../Modals/BidModal";
import { formatAmount } from "../../utils/utils";
import { useMutation } from "@tanstack/react-query";
import {placeBidOnCar, buyNowCar} from "../../api/calls/bid";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth.context";

const CarSlider = ({car}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const thumbnailRef = useRef();
  const {authState} = useAuth();

  const isMyCar = car.user._id === authState.user._id;

  const mutation = useMutation({
    mutationFn: placeBidOnCar,
  });

  const buyNowMutation = useMutation({
    mutationFn: buyNowCar,
  });

  const images = Object.values(car.images).flat().map(val => val.url);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const activeThumbnail = thumbnailRef.current?.querySelector(".active-thumb");
    activeThumbnail?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"  
    });
  }, [currentIndex]);

  return (
    <Box
      sx={{
        width: "100%",
        mx: "auto",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: 2,
      }}
    >
      <Box sx={{ position: "relative", width: "100%", overflow: "hidden" }}>
        <Box
          component="img"
          src={images[currentIndex]}
          alt="Car Image"
          sx={{
            width: "100%",
            height: { xs: "250px", sm: "350px", md: "500px" },
            objectFit: "cover",
            borderRadius: 2,
          }}
        />

        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            left: 10,
            top: "50%",
            transform: "translateY(-50%)",
            width: { xs: 40, sm: 50 },
            height: { xs: 40, sm: 50 },
            borderRadius: 2,
            backgroundColor: "rgba(0,0,0,0.30)",
            color: "white",
            "&:hover": { backgroundColor: "rgba(0,0,0,0.9)" },
          }}
        >
          <ArrowBackIos sx={{ fontSize: { xs: 20, sm: 30 } }} />
        </IconButton>

        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: 10,
            top: "50%",
            transform: "translateY(-50%)",
            width: { xs: 40, sm: 50 },
            height: { xs: 40, sm: 50 },
            borderRadius: 2,
            backgroundColor: "rgba(0,0,0,0.30)",
            color: "white",
            "&:hover": { backgroundColor: "rgba(0,0,0,0.9)" },
          }}
        >
          <ArrowForwardIos sx={{ fontSize: { xs: 20, sm: 30 } }} />
        </IconButton>

        <Box
          ref={thumbnailRef}
          sx={{
            position: "absolute",
            bottom: 10,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            backgroundColor: "transparent",
            padding: "5px 10px",
            borderRadius: 2,
            overflowX: "auto",
            maxWidth: "100%",
            whiteSpace: "nowrap",
            '&::-webkit-scrollbar': { height: '6px' },
            '&::-webkit-scrollbar-thumb': { backgroundColor: '#ccc', borderRadius: '4px' },
            '&::-webkit-scrollbar-track': { backgroundColor: 'transparent' },
          }}
        >
          {images.map((img, index) => (
            <Box
              key={index}
              component="img"
              src={img}
              alt={`Thumbnail ${index}`}
              onClick={() => setCurrentIndex(index)}
              className={currentIndex === index ? "active-thumb" : ""}
              sx={{
                display: 'inline-flex',
                width: { xs: 80, sm: 120, md: 180 },
                height: { xs: 50, sm: 70, md: 100 },
                objectFit: "cover",
                borderRadius: 1,
                cursor: "pointer",
                border: currentIndex === index ? "2px solid white" : "2px solid transparent",
                transition: "0.3s",
                mx: 0.5,
              }}
            />
          ))}
        </Box>
      </Box>

      {!isMyCar && car.status !== 'sold' && (
        <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
          mt: 4,
          width: "100%",
        }}
      >
        <Button
          variant="outlined"
          onClick={async () => {
            if(buyNowMutation.isPending) return;
            toast.promise(buyNowMutation.mutateAsync(car._id), {
              loading: 'Buying the car',
              error: (error) => error.message,
              success: 'Car is yours now.'
            })
          }}
          sx={{
            flex: 1,
            
            minWidth: "30%",
            color: "#6F6F6F",
            fontWeight: "bold",
            borderRadius: 2,
            py: 0.5,
            border: "1px solid #D9D9D9",
            fontSize: { xs: 12, sm: 14, md: 12 },
            fontFamily: "Inter",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height:50,
          }}
        >
          BUY IT NOW
          <Box sx={{ color: "#BC413A", fontSize: { xs: 12, sm: 12 }, fontWeight: 700, fontFamily: "Inter" }}>
            AED {formatAmount(car.buyNowPrice)}
          </Box>
        </Button>

        <Button
          variant="contained"
          sx={{
            flex: 1,
            minWidth: "30%",
            backgroundColor: colors.buttoncolor,
            color: "white",
            borderRadius: 2,
            py: 1.5,
            fontSize: { xs: 12, sm: 14 },
            fontWeight: 600,
            fontFamily: "Inter",
            textAlign: "center",
            height:50,
          }}
          onClick={() => setOpen(true)}
        >
          PLACE BID
        </Button>

        <Button
        onClick={async () => {
          if(mutation.isPending) return;
          toast.promise(mutation.mutateAsync({
            carId: car._id,
            bidAmount: parseInt(car.highestBid ? car.highestBid + 1 : car.staringBidPrice)
          }), {
            loading: 'Placing bid',
            error: (error) => error.message,
            success: 'Bid placed'
          })
        }}
          variant="outlined"
          sx={{
            flex: 1,
            minWidth: "30%",
            color: "#6F6F6F",
            borderRadius: 2,
            py: 1,
            border: "1px solid #D9D9D9",
            fontSize: { xs: 12, sm: 14, md: 12 },
            fontWeight: 700,
            fontFamily: "Inter",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height:50,
          }}
        >
          {mutation.isPending ? 'Placing bid' : 'QUICK BID'}
          {!mutation.isPending && (
            <Box sx={{ color: "#BC413A", fontSize: { xs: 12, sm: 14 }, fontWeight: 700, fontFamily: "Inter" }}>
            AED {formatAmount(car.highestBid > 0 ? car.highestBid + 1 : car.staringBidPrice + 1)}
          </Box>
          )}
        </Button>
      </Box>
      )}

      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", mt: 5 }}>
        <Box sx={{ flex: 1, height: 3, backgroundColor: car.status === 'sold' ? 'red' : car.reserveMet ? '#32CD32' : colors.buttoncolor }} />
        <Box
          sx={{
            padding: "10px 20px",
            border: "1px solid #D9D9D9",
            borderRadius: 2,
            color: car.status === 'sold' ? '#fff' : car.reserveMet ? '#fff' : "#2F61BF",
            fontWeight: 600,
            backgroundColor: car.status === 'sold' ? 'red' : car.reserveMet ? '#32CD32' : null,
            fontFamily: "Inter",
            fontSize: { xs: 12, sm: 14 },
            width: "33.33%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            py: 2.3,
          }}
        >
          {car.status === 'sold' ? 'CAR SOLD' : car.reserveMet ? 'RESERVE MET' : 'RESERVE NOT MET'}
        </Box>
        <Box sx={{ flex: 1, height: 3, backgroundColor: car.status === 'sold' ? 'red' : car.reserveMet ? '#32CD32' : colors.buttoncolor }} />
      </Box>

      <BidModal car={car} open={open} onClose={() => setOpen(false)} />
    </Box>
  );
};

export default CarSlider;
