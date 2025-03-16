import { Box, Typography } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SportsCarIcon from "@mui/icons-material/EmojiTransportation";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import SettingsIcon from "@mui/icons-material/Settings";
import SpeedIcon from "@mui/icons-material/Speed";
import DateRangeIcon from "@mui/icons-material/DateRange";
import BuildIcon from "@mui/icons-material/Build";
import DriveEtaIcon from "@mui/icons-material/DriveEta";

const carDetails = [
  { icon: <DirectionsCarIcon />, label: "MAKE", value: "Ford" },
  { icon: <SportsCarIcon />, label: "VARIANT", value: "Mustang" },
  { icon: <DriveEtaIcon />, label: "BODYTYPE", value: "Sedan" },
  { icon: <SpeedIcon />, label: "MILEAGE", value: "200,000" },
  { icon: <ColorLensIcon />, label: "COLOUR", value: "Red" },
  { icon: <DateRangeIcon />, label: "REGISTERED", value: "1996, California" },
  { icon: <BuildIcon />, label: "ENGINE", value: "Mustang" },
  { icon: <LocalGasStationIcon />, label: "FUEL", value: "Sedan" },
  { icon: <SettingsIcon />, label: "TRANSMISSION", value: "Manual" },
];

const CarDetailsComponent = () => {
  return (
    <Box
      sx={{
        padding: 2.5,
        borderRadius: 2,
       border:"1px solid #D9D9D9",
        backgroundColor: "white",
        fontFamily: "Inter",
        
      }}
    >
      <Typography variant="h5"  mb={2} sx={{fontFamily:"Inter", fontWeight:500 , pl:3}} >
        Car Details
      </Typography>

      
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {carDetails.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: "20%", 
            
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                width: 50,
                height: 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
                backgroundColor: "#E8F0FE",
                color: "#2F61BF",
                margin: "auto",
                my:1
              }}
            >
              {item.icon}
            </Box>
            <Typography variant="caption" color="#6F6F6F" fontWeight={600}  sx={{fontFamily:"Inter"}}>
              {item.label}
            </Typography>
            <Typography variant="body2" fontWeight={600}>
              {item.value}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CarDetailsComponent;
