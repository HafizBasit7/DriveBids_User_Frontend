import React, { useState } from "react";
import {
  Box,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import colors from "../../Style/color";
import cardimg from "../../assets/Png/placeholder.png";
import { useCar } from "../../context/car.context";
import { loadDraft } from "../../api/calls/car";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const DraftCard = ({draft}) => {

  const {dispatch} = useCar();
  const navigate = useNavigate();

  
  const allImages = Object.values(draft.images || {}).flatMap(arr => arr);
  const imgUrl = allImages[0] || null;

  const loadDraftCar = () => {
    toast.promise(handleLoadDraft(), {
      loading: 'Loading draft',
      error: (error) => error.message,
      success: 'Draft loaded'
    })
  };

  const handleLoadDraft = async () => {
    try {
      const Loadeddraft = await loadDraft(draft._id);
      navigate('/ad/post/vehicle-register');
      setTimeout(() => {
        dispatch({type: 'SET_DRAFT', payload: Loadeddraft.data.draft});    
      }, 300);
    }
    catch(e) {
      throw e;
    }
  };

  // const steps = [
  //   { label: "Car Images", completed: true },
  //   { label: "Car Features", completed: true },
  //   { label: "Car Pricing", completed: false },
  //   { label: "Damage Report", completed: false },
  //   { label: "Car Detail", completed: false },
  //   { label: "Inspection Report", completed: false },
  // ];

  // const renderStepRows = () => {
  //   const rows = [];
  //   for (let i = 0; i < steps.length; i += 2) {
  //     rows.push(
  //       <Box
  //         key={i}
  //         sx={{
  //           display: "flex",
  //           justifyContent: "center",
  //           alignItems: "center",
  //           gap: 0.5, 
  //           mb: 1,
  //         }}
  //       >
  //         <StepItem label={steps[i].label} completed={steps[i].completed} />
  //         {steps[i + 1] && (
  //           <StepItem
  //             label={steps[i + 1].label}
  //             completed={steps[i + 1].completed}
  //           />
  //         )}
  //       </Box>
  //     );
  //   }
  //   return rows;
  // };

  return (
    <Box
      sx={{
        width: 310,
        borderRadius: 3,
        overflow: "hidden",
        border: "1px solid #E5E7E8",
        backgroundColor: "#fff",
        boxShadow: 2,
        fontFamily: "Inter",
      }}
    >
      {/* Image */}
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="180"
          image={imgUrl?.url || cardimg}
          alt="Car"
          sx={{ width: "100%", objectFit: "cover" }}
        />
      </Box>

      {/* Reg No */}
      <Typography
        sx={{
          fontSize: 16,
          fontWeight: 600,
          mt: 1.5,
          mb: 1.5,
          textAlign: "center",
          fontFamily: "Inter",
        }}
      >
        Reg No: {draft.regNo}
      </Typography>

      {/* Steps */}
      {/* <Box>{renderStepRows()}</Box> */}

      {/* Complete Registration Button */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2, mb: 2 }}>
        <Button
          onClick={loadDraftCar}
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
            fontFamily: "Inter",
          }}
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
};

// Step Item with reduced width and font size for tighter alignment
const StepItem = ({ label, completed }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: 120,  // Increased width to avoid text wrapping
        gap: 0.5,
        fontFamily: "Inter",
        my:0.2,
      }}
    >
      {completed ? (
        <CheckCircleIcon sx={{ color: "#1976D2", fontSize: 18 }} />
      ) : (
        <CancelIcon sx={{ color: "#C4C4C4", fontSize: 18 }} />
      )}
      <Typography sx={{ fontSize: 13, fontFamily: "Inter", whiteSpace: "nowrap" }}>
        {label}
      </Typography>
    </Box>
  );
};


export default DraftCard;
