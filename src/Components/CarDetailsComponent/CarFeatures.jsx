import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
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
];

const CarFeaturesComponent = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        padding: 2.5,
        borderRadius: 2,
        border: "1px solid #D9D9D9",
        backgroundColor: "white",
        fontFamily: "Inter, sans-serif",
        minHeight: 330,
      }}
    >
      <Typography
        variant={isSmallScreen ? "h6" : "h5"}
        mb={2}
        sx={{ fontFamily: "Inter", fontWeight: 600, textAlign: "start" }}
      >
        Car Features
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: isSmallScreen ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
          gap: 2.5,
          paddingX: 1.5,
        }}
      >
        {carFeatures.map((feature, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              whiteSpace: "nowrap",
            }}
          >
            {feature.enabled ? (
              <CheckCircleIcon sx={{ color: "#2F61BF", fontSize: isSmallScreen ? 20 : 26 }} />
            ) : (
              <CancelIcon sx={{ color: "gray", fontSize: isSmallScreen ? 20 : 26 }} />
            )}
            <Typography variant={isSmallScreen ? "body2" : "body1"} fontWeight={500}>
              {feature.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CarFeaturesComponent;
