import { useState } from "react";
import { Box, IconButton, Button } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Carimg from "../../assets/Png/cardetailimg.png"
import colors from "../../Style/color";
import BidModal from "../Modals/BidModal";

const images = [
    Carimg,
    Carimg,
    Carimg,
    Carimg,
    Carimg,
];

const CarSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [open, setOpen] = useState(false);


  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* Main Image Box */}
      <Box sx={{ position: "relative", width: "100%",}}>
        <Box
          component="img"
          src={images[currentIndex]}
          alt="Car Image"
          sx={{
            width: "100%",
           height:"500px",
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
    width: 55,
    height: 55, 
    borderRadius: 2, 
    backgroundColor: "rgba(0,0,0,0.30)",
    color: "white",
    
    "&:hover": { backgroundColor: "rgba(0,0,0,0.9)" },
  }}
>
  <ArrowBackIos sx={{ fontSize: 30 , }} /> 
</IconButton>
<IconButton
  onClick={handleNext}
  sx={{
    position: "absolute",
    right: 10,
    top: "50%",
    transform: "translateY(-50%)",
    width: 55, 
    height: 55, 
    borderRadius: 2, 
    backgroundColor: "rgba(0, 0, 0, 0.30)",
    color: "white",
    "&:hover": { backgroundColor: "rgba(0,0,0,0.9)" },
  }}
>
  <ArrowForwardIos sx={{ fontSize: 30 }} /> 
</IconButton>

        
        <Box
          sx={{
            position: "absolute",
            bottom: 10,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 1,
            backgroundColor: "transparent",
            padding: "5px 10px",
            borderRadius: 2,
          }}
        >
          {images.map((img, index) => (
            <Box
              key={index}
              component="img"
              src={img}
              alt={`Thumbnail ${index}`}
              onClick={() => setCurrentIndex(index)}
              sx={{
                width: 180,
                height: 100,
                objectFit: "cover",
                borderRadius: 1,
                cursor: "pointer",
                border: currentIndex === index ? "2px solid white" : "2px solid transparent",
                transition: "0.3s",
              }}
            />
          ))}
        </Box>
      </Box>

   {/* Top Three Buttons */}
<Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", gap: 2, mt: 2 }}>
  <Button
    variant="outlined"
    sx={{
      flex: 1,
      color: "#6F6F6F",
      fontWeight: "bold",
      borderRadius: 2,
      py: 0.5,
      border: "1px solid #D9D9D9",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontSize: 16, 
      fontWeight:700,
       fontFamily:"Inter"
    }}
  >
    BUY IT NOW
    <Box sx={{ color: "#BC413A",  fontSize: 14, fontFamily:"Inter", 
      fontWeight:700 }}>$28000</Box>
  </Button>

  <Button
    variant="contained"
    sx={{
      flex: 1,
      backgroundColor: colors.buttoncolor,
      color: "white",
      borderRadius: 2,
      py: 2,
      fontSize: 14, 
      fontWeight:600,
      fontFamily:"Inter"
    }}
    onClick={() => setOpen(true)}
  >
    PLACE BID
  </Button>

  <Button
    variant="outlined"
    sx={{
      flex: 1,
      color: "#6F6F6F",
      borderRadius: 2,
      py: 0.5,
      border: "1px solid #D9D9D9",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontSize: 16, 
      fontWeight:700,
       fontFamily:"Inter"
    }}
  >
    QUICK BID
    <Box sx={{ color: "#BC413A", fontSize: 14, fontWeight:700 , fontFamily:"Inter"}}>$28100</Box>
  </Button>
</Box>

{/* Reserve Status with Side Lines */}
<Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", mt: 2 }}>
  <Box sx={{ flex: 1, height: 3, backgroundColor: colors.buttoncolor }} /> 
  <Box
    sx={{
      padding: "10px 20px",
      border: "1px solid #D9D9D9",
      borderRadius: 2,
      color: "#2F61BF",
      fontWeight: 700,
      fontFamily: "Inter",
      mx: 2,
      py: 2.3,
      fontSize: 15,
      width: "33.33%", // Matches PLACE BID button width
      textAlign: "center",
    }}
  >
    RESERVE NOT MET
  </Box>
  <Box sx={{ flex: 1, height: 3, backgroundColor: colors.buttoncolor }} /> 
</Box>
<BidModal open={open} onClose={() => setOpen(false)} />
    </Box>
  );
};

export default CarSlider;
