import { Box, CardMedia, Button, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import colors from "../../Style/color";
import cardimg from "../../assets/Png/placeholder.png";
import { useCar } from "../../context/car.context";
import { loadDraft } from "../../api/calls/car";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const DraftCard = ({ draft }) => {
  const { dispatch } = useCar();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [loadedDraftData, setLoadedDraftData] = useState(null);

  const allImages = Object.values(draft.images || {}).flatMap((arr) => arr);
  const imgUrl = allImages[0] || null;

  useEffect(() => {
    // Navigate only after the draft has been set in state
    if (loadedDraftData) {
      dispatch({ type: "SET_DRAFT", payload: loadedDraftData });
      navigate("/ad/post/vehicle-register");
      // Reset the state after navigation
      setLoadedDraftData(null);
    }
  }, [loadedDraftData, dispatch, navigate]);

  const loadDraftCar = async () => {
    if (isLoading) return; // Prevent multiple clicks

    setIsLoading(true);
    toast.promise(handleLoadDraft(), {
      loading: "Loading draft",
      error: (error) => {
        setIsLoading(false);
        return error.message;
      },
      success: "Draft loaded",
    });
  };

  const handleLoadDraft = async () => {
    try {
      const response = await loadDraft(draft._id);
      // Store the loaded draft in state, which will trigger the useEffect
      setLoadedDraftData(response.data.draft);
      return response;
    } catch (e) {
      setIsLoading(false);
      throw e;
    }
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

const StepItem = ({ label, completed }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: 120, // Increased width to avoid text wrapping
        gap: 0.5,
        fontFamily: "Inter",
        my: 0.2,
      }}
    >
      {completed ? (
        <CheckCircleIcon sx={{ color: "#1976D2", fontSize: 18 }} />
      ) : (
        <CancelIcon sx={{ color: "#C4C4C4", fontSize: 18 }} />
      )}
      <Typography
        sx={{ fontSize: 13, fontFamily: "Inter", whiteSpace: "nowrap" }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default DraftCard;
