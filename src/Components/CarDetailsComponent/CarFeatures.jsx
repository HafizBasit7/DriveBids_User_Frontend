import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const carFeatures = [
  { name: "ABS", enabled: true },
  { name: "Air Conditioning", enabled: true },
  { name: "Immobilizer Key", enabled: true },
  { name: "Parking Sensor", enabled: true },
  { name: "3D Camera", enabled: true },
  { name: "Power Locks", enabled: true },
  { name: "Power Windows", enabled: true },
  { name: "AM/FM Radio", enabled: true },
  { name: "Fog Lights", enabled: true },
  { name: "Keyless Entry", enabled: true },
  { name: "Air Bags", enabled: false },
  { name: "Navigation System", enabled: false },
  { name: "Power Steering", enabled: false },
  { name: "Sun Roof", enabled: false },
  { name: "Reverse Camera", enabled: false },
  { name: "Push Start", enabled: false },
  { name: "Immobilizer", enabled: false },
  { name: "Reverse Camera", enabled: false },
  { name: "Push Start", enabled: false },
  { name: "Immobilizer", enabled: false },
  
];

const CarFeaturesComponent = () => {
  return (
    <Box
      sx={{
        padding: 2,
        borderRadius: 2,
        border:"1px solid #D9D9D9",
        backgroundColor: "white",
        fontFamily: "Inter, sans-serif",
        minHeight:300
      }}
    >
      <Typography variant="h5"  mb={2} sx={{fontFamily:"Inter", fontWeight:500 , }}>
        Car Features
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "flex-start" }}>
        {carFeatures.map((feature, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              width: "22%", 
             
            }}
          >
            {feature.enabled ? (
              <CheckCircleIcon sx={{ color: "#2F61BF" }} />
            ) : (
              <CancelIcon sx={{ color: "gray" }} />
            )}
            <Typography variant="body2" fontWeight={500}>
              {feature.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CarFeaturesComponent;
