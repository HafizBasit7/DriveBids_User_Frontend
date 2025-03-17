import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
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
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));

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
        sx={{ fontFamily: "Inter", fontWeight: 500, pl: 3, textAlign: "start" }}
      >
        Car Details
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: isExtraSmallScreen
            ? "repeat(2, 1fr)"
            : isSmallScreen
            ? "repeat(3, 1fr)"
            : "repeat(5, 1fr)",
          gap: 2,
          justifyContent: "center",
        }}
      >
        {carDetails.map((item, index) => (
          <Box
            key={index}
            sx={{
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                width: isSmallScreen ? 40 : 50,
                height: isSmallScreen ? 40 : 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
                backgroundColor: "#E8F0FE",
                color: "#2F61BF",
                margin: "auto",
                my: 1,
              }}
            >
              {item.icon}
            </Box>
            <Typography
              variant="caption"
              color="#6F6F6F"
              fontWeight={600}
              sx={{ fontFamily: "Inter" }}
            >
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
