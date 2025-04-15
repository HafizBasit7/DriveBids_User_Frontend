import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import DealsBanner from "../HomePageComponents/DealBanner";
import ScratchImage from "../../assets/Png/scratch.png"; 
import CloseIcon from "@mui/icons-material/Close";


const DamageModal = ({ open, onClose, damage }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: 2,
          width: { xs: "90%", sm: "80%", md: "70%" }, 
          p: { xs: 2, sm: 3 }, 
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: 24,
          textAlign: "center",
          height:600
        }}
      >
        {/* Header */}
        <Box sx={{ width: "100%" }}>
          <DealsBanner
            title="Car Inspection Report"
            subtitle=""
            buttonText="Close"
            showClose 
                      onClose={onClose}
                      icon={<CloseIcon sx={{ cursor: 'pointer' }} onClick={onClose} />}

          />
        </Box>

        {/* Damage Description */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#2F61BF",
            borderRadius: 2,
            m: { xs: 1, sm: 2 }, // Adjust margin for small screens
            fontSize: { xs: "0.8rem", sm: "1rem" }, // Responsive font size
            fontWeight: 600,
            fontFamily:"Inter",
            textTransform:"none"
          }}
        >
          {damage?.damageType}
        </Button>
        <Typography
          sx={{
            fontSize: { xs: "12px", sm: "14px" }, // Adjust text size for readability
            color: "#000",
            fontWeight: 400,
            backgroundColor: "#fff",
            p: { xs: 1, sm: 2 },
            borderRadius: 2,
            fontFamily:"Inter",
            textAlign: "center",   // ✅ Ensures text starts from the left

          }}
        >
          {damage?.description}
        </Typography>

        {/* Photos Section */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#2F61BF",
            borderRadius: 2,
            mt: { xs: 1, sm: 2 },
            fontSize: { xs: "0.8rem", sm: "1rem" },
            fontWeight: 600,
            textTransform:"none"

          }}
        >
          Photos
        </Button>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: { xs: 1, sm: 2 },
            mt: { xs: 1, sm: 2 },
            flexWrap: "wrap",
          }}
        >
          
            <img
              src={damage?.imageUrl}
              alt="Scratch"
              style={{ width: "100%", maxWidth: 250, borderRadius: 4 }}
            />
         
        </Box>
      </Box>
    </Modal>
  );
};

export default DamageModal;
