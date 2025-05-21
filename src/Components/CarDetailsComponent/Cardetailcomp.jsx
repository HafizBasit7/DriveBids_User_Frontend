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
import {
  Battery1BarOutlined,
  Power,
  PowerOutlined,
  VerifiedUserSharp,
} from "@mui/icons-material";

const CarDetailsComponent = ({ car }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const carDetails = [
    { icon: <DirectionsCarIcon />, label: "MAKE", value: car.make },
    { icon: <SportsCarIcon />, label: "VARIANT", value: car.variant },
    { icon: <SpeedIcon />, label: "MILEAGE", value: `${car.mileage} KM` },
    { icon: <ColorLensIcon />, label: "COLOUR", value: car.color },
    { icon: <DateRangeIcon />, label: "MODEL", value: car.model },
    { icon: <BuildIcon />, label: "ENGINE", value: car.engineSize },
    { icon: <LocalGasStationIcon />, label: "FUEL", value: car.fuel },
    { icon: <DriveEtaIcon />, label: "Reg No", value: car.regNo },
    { icon: <SettingsIcon />, label: "TRANSMISSION", value: car.transmission },
    { icon: <Battery1BarOutlined />, label: "CONDITION", value: car.condition },
    {
      icon: <VerifiedUserSharp />,
      label: "PREVIOUS OWNERS",
      value: car?.noOfOwners ? car?.noOfOwners : "NA",
    },
    {
      icon: <PowerOutlined />,
      label: "HORSE POWER",
      value: car?.horsePower ? car?.horsePower : "NA",
    },
  ];

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
          my: 1,
        }}
      >
        {item.icon}
      </Box>
      <Typography
        variant="caption"
        color="#6F6F6F"
        fontWeight={600}
        sx={{ fontFamily: "Inter", fontSize: 12 }}
      >
        {item.label}
      </Typography>
      <Typography fontWeight={600} sx={{ fontFamily: "Inter", fontSize: 12 }}>
        {item.value}
      </Typography>
    </Box>
  );

  // Split the carDetails into chunks of 4 for each row
  const chunkSize = 4;
  const rows = [];
  for (let i = 0; i < carDetails.length; i += chunkSize) {
    rows.push(carDetails.slice(i, i + chunkSize));
  }

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

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        {rows.map((row, rowIndex) => (
          <Box
            key={rowIndex}
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 3,
            }}
          >
            {row.map((item, itemIndex) =>
              renderDetailBox(item, rowIndex * chunkSize + itemIndex)
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CarDetailsComponent;
