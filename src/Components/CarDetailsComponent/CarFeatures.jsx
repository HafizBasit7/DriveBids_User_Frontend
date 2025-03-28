import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


const CarFeaturesComponent = ({car}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  
  const features = Object.values(car.features).flat();

  return (
    <Box
      sx={{
        padding: 2.5,
        borderRadius: 2,
        border: "1px solid #D9D9D9",
        backgroundColor: "white",
        fontFamily: "Inter",
        minHeight: 340,
      }}
    >
      <Typography
        variant={isSmallScreen ? "h6" : "h5"}
        mb={4}
        sx={{ fontFamily: "Inter", fontWeight: 500, textAlign: "start" }}
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
        {features.map((feature, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              whiteSpace: "nowrap",
            }}
          >
            <CheckCircleIcon sx={{ color: "#2F61BF", fontSize: isSmallScreen ? 20 : 26 }} />
            <Typography variant={isSmallScreen ? "body2" : "body1"} fontWeight={500}>
              {feature}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CarFeaturesComponent;
