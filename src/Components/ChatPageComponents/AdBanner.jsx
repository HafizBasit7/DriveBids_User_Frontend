import { Box, Typography, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord"; // Dot icon
import { useNavigate } from "react-router-dom";

const AdBanner = ({ chatHeadDataReal }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/car/${chatHeadDataReal.car._id}`);
  };

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
        src={chatHeadDataReal?.car.images.exterior[0].url}
        alt="Car"
        sx={{
          width: 55,
          height: 60,
          objectFit: "cover",
          borderRadius: 1,
          mr: 2,
        }}
      />

      <Box sx={{ flexGrow: 1, fontFamily: "Inter" }}>
        <Typography fontWeight="bold">{chatHeadDataReal?.car.title}</Typography>
        <Typography color="black" sx={{fontSize:16}}>
          Highest Bid: <strong>AED {chatHeadDataReal?.car.highestBid}</strong>
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: 0.1 }}>
          <FiberManualRecordIcon
            sx={{
              color: chatHeadDataReal?.isConnected ? "green" : "red",
              fontSize: 12,
              mr: 0.5,
            }}
          />
          <Typography sx={{ fontSize:14, color: "#333" }}>
            {chatHeadDataReal?.isConnected ? "Connected" : "Disconnected"}
          </Typography>
        </Box>
      </Box>

      <IconButton sx={{ color: "black" }}>
        <ArrowForwardIosIcon sx={{ fontSize: 18 }} onClick={handleClick} />
      </IconButton>
    </Box>
  );
};

export default AdBanner;
