import {
  Box,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
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
  { icon: <SettingsIcon />, label: "TRANSMISSION", value: "Manual" }
];

const CarDetailsComponent = ({car}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const carDetails = [
    { icon: <DirectionsCarIcon />, label: "MAKE", value: car.make },
    { icon: <SportsCarIcon />, label: "VARIANT", value: car.variant },
    { icon: <DriveEtaIcon />, label: "Registration No", value: car.regNo },
    { icon: <SpeedIcon />, label: "MILEAGE", value: `${car.mileage} KM` },
    { icon: <ColorLensIcon />, label: "COLOUR", value: car.color },
    { icon: <DateRangeIcon />, label: "MODEL", value: car.model },
    { icon: <BuildIcon />, label: "ENGINE", value: car.engineSize },
    { icon: <LocalGasStationIcon />, label: "FUEL", value: car.fuel },
    { icon: <SettingsIcon />, label: "TRANSMISSION", value: car.transmission },
  ];

  // Split the array for large screens
  const firstRow = carDetails.slice(0, 5);
  const secondRow = carDetails.slice(5);

  const renderDetailBox = (item, index) => (
    <Box
      key={index}
      sx={{
        textAlign: "center",
        fontFamily: "Inter",
      }}
    >
      <Box
        sx={{
          width: isSmallScreen ? 35 : 40,
          height: isSmallScreen ? 35 : 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 2,
          backgroundColor: "#E8F0FE",
          color: "#2F61BF",
          margin: "auto",
          my: 2,
        }}
      >
        {item.icon}
      </Box>
      <Typography
        variant="caption"
        color="#6F6F6F"
        fontWeight={600}
        sx={{ fontFamily: "Inter",fontSize: 13 }}
      >
        {item.label}
      </Typography>
      <Typography fontWeight={600} sx={{ fontFamily: "Inter", fontSize: 11 }}>
        {item.value}
      </Typography>
    </Box>
  );

  return (
    <Box
      sx={{
        padding: 2.5,
        borderRadius: 2,
        border: "1px solid #D9D9D9",
        backgroundColor: "white",
        fontFamily: "Inter",
      }}
    >
      <Typography
        variant={isSmallScreen ? "h6" : "h5"}
        mb={2}
        sx={{ fontFamily: "Inter", fontWeight: 500, pl: 1, textAlign: "start" }}
      >
        Car Details
      </Typography>

      {isSmallScreen ? (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: isSmallScreen
              ? "repeat(3, 1fr)"
              : "repeat(5, 1fr)",
            gap: 3,
            justifyContent: "center",
          }}
        >
          {carDetails.map(renderDetailBox)}
        </Box>
      ) : (
        <>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: 3,
              mb: 3,
            }}
          >
            {firstRow.map(renderDetailBox)}
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              gap: 3,
              ml: `calc(100% / 5 / 4)`, 
            }}
          >
            {secondRow.map(renderDetailBox)}
          </Box>
        </>
      )}
    </Box>
  );
};

export default CarDetailsComponent;
