import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import DealsBanner from "../HomePageComponents/DealBanner";
import ScratchImage from "../../assets/Png/scratch.png"; 
import CloseIcon from "@mui/icons-material/Close";


const DamageModal = ({ open, onClose }) => {
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
          Damage Description
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
            textAlign: "start",   // ✅ Ensures text starts from the left

          }}
        >
         There is a noticeable 6-inch scratch on the front passenger-side door, running horizontally near the center of the panel. The scratch has penetrated the clear coat, exposing the paint layer beneath. While it is not deep enough to reach the primer, the exposed area is clearly visible and may be vulnerable to further damage over time, especially due to exposure to moisture, dirt, and environmental elements. If left untreated, the affected area could deteriorate, potentially leading to paint chipping or oxidation.
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
          {[1, 2, 3].map((_, index) => (
            <img
              key={index}
              src={ScratchImage}
              alt="Scratch"
              style={{ width: "100%", maxWidth: 250, borderRadius: 4 }}
            />
          ))}
        </Box>
      </Box>
    </Modal>
  );
};

export default DamageModal;
