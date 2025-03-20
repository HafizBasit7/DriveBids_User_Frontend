import React, { useState } from "react";
import {
  Box,
  CardMedia,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import colors from "../../Style/color";
import cardimg from "../../assets/Png/cardimg.png";

const DraftCard = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };

  const steps = [
    { label: "Car Images", completed: true },
    { label: "Car Features", completed: true },
    { label: "Car Pricing", completed: false },
    { label: "Damage Report", completed: false },
    { label: "Car Detail", completed: false },
    { label: "Inspection Report", completed: false },
  ];

  const renderStepRows = () => {
    const rows = [];
    for (let i = 0; i < steps.length; i += 2) {
      rows.push(
        <Box
          key={i}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,  // Reduced horizontal gap
            mb: 1,
          }}
        >
          <StepItem label={steps[i].label} completed={steps[i].completed} />
          {steps[i + 1] && (
            <StepItem
              label={steps[i + 1].label}
              completed={steps[i + 1].completed}
            />
          )}
        </Box>
      );
    }
    return rows;
  };

  return (
    <Box
      sx={{
        width: 310,
        borderRadius: 3,
        overflow: "hidden",
        border: "1px solid #E5E7E8",
        backgroundColor: "#fff",
        boxShadow: 2,
      }}
    >
      {/* Image */}
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="180"
          image={cardimg}
          alt="Car"
          sx={{ width: "100%", objectFit: "cover" }}
        />

        <IconButton
          onClick={handleFavoriteClick}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            backgroundColor: "#363D2D",
            color: "#FFFFFF",
            width: 34,
            height: 34,
            borderRadius: 2,
          }}
        >
          {isFavorited ? (
            <FavoriteIcon sx={{ color: "white" }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
      </Box>

      {/* Reg No */}
      <Typography
        sx={{
          fontSize: 16,
          fontWeight: 600,
          mt: 1.5,
          mb: 1.5,
          textAlign: "center",
        }}
      >
        Reg No: J 12345
      </Typography>

      {/* Steps */}
      <Box>{renderStepRows()}</Box>

      {/* Complete Registration Button */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2, mb: 2 }}>
        <Button
          variant="contained"
          sx={{
            borderRadius: 3,
            backgroundColor: colors.buttoncolor,
            color: "white",
            fontWeight: 500,
            fontSize: 14,
            textTransform: "none",
            px: 3,
            py: 1.5,
            "&:hover": { backgroundColor: colors.buttoncolor },
          }}
        >
          Complete Registration
        </Button>
      </Box>
    </Box>
  );
};

// Step Item with fixed width for alignment
const StepItem = ({ label, completed }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: 125,  // Fixed width to maintain alignment
        gap: 0.5,
      }}
    >
      {completed ? (
        <CheckCircleIcon sx={{ color: "#1976D2", fontSize: 18 }} />
      ) : (
        <CancelIcon sx={{ color: "#C4C4C4", fontSize: 18 }} />
      )}
      <Typography sx={{ fontSize: 14 }}>{label}</Typography>
    </Box>
  );
};

export default DraftCard;
