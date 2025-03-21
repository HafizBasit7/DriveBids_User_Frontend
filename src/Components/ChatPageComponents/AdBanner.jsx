import { Box, Typography, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import img from "../../assets/Png/prseller.png"

const AdBanner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 2,
        boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
        p: 2,
        my: 1, 
      }}
    >
      <Box
        component="img"
        src={img}
        alt="Car"
        sx={{
          width: 50,
          height: 50,
          objectFit: "cover",
          borderRadius: 1, 
          mr: 2,
        }}
      />

      <Box sx={{ flexGrow: 1,fontFamily:"Inter" }}>
        <Typography fontWeight="bold">Reliable 2015 Honda Accord</Typography>
        <Typography color="black">
          Highest Bid: <strong>$25,000</strong>
        </Typography>
      </Box>
      
      <IconButton sx={{color:"black"}}>
      <ArrowForwardIosIcon sx={{ fontSize: 18 }} />

      </IconButton>
    </Box>
  );
};

export default AdBanner;
