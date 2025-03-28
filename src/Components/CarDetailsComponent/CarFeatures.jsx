import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const CarFeaturesComponent = ({ car }) => {
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
        width: "100%",
        overflow: "hidden", // Ensures content stays within box
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
          gridTemplateColumns: isSmallScreen
            ? "repeat(auto-fit, minmax(120px, 1fr))"
            : "repeat(auto-fit, minmax(150px, 1fr))",
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
              wordBreak: "break-word", // Ensures text breaks properly
              overflowWrap: "break-word", // Allows wrapping on long words
            }}
          >
            <CheckCircleIcon
              sx={{ color: "#2F61BF", fontSize: isSmallScreen ? 18 : 24 }}
            />
            <Typography
              sx={{ fontSize: isSmallScreen ? 14 : 14 }}
              fontWeight={500}
            >
              {feature}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CarFeaturesComponent;
