import React from "react";
import { Modal, Box, Typography, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ScratchBanner from "../../assets/SVG/ScratchSvg.svg"; // Update path
import ScratchImage from "../../assets/Png/scratch.png"; // Use uploaded image
import DealsBanner from "../HomePageComponents/DealBanner";

const DamageModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: 2,
          width: "60%",
          
          p: 3,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: 24,
          textAlign: "center",
        }}
      >
        {/* Header */}
        <Box sx={{ width:"100%"}}>
        <DealsBanner
          title="Car Inspection Report"
          subtitle=""
          buttonText="Close"
        />
        </Box>

        {/* Damage Description */}
        <Button variant="contained" sx={{ backgroundColor: "#0052CC", borderRadius: 2, m: 2 }}>
          Damage Description
        </Button>
        <Typography
          sx={{
            fontSize: 14,
            color: "#666",
            fontWeight: 500,
            backgroundColor: "#F7F7F7",
            p: 2,
            borderRadius: 2,
          }}
        >
          There is a noticeable 6-inch scratch on the front passenger-side door, running horizontally near the center of the panel. 
          The scratch has penetrated the clear coat, exposing the paint layer beneath. If left untreated, it may lead to oxidation or further damage.
        </Typography>

        {/* Photos Section */}
        <Button variant="contained" sx={{ backgroundColor: "#0052CC", borderRadius: 2, mt: 2 }}>
          Photos
        </Button>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mt: 2,
            flexWrap: "wrap",
          }}
        >
          {[1, 2, 3].map((_, index) => (
            <img key={index} src={ScratchImage} alt="Scratch" style={{ width: "30%", borderRadius: 4 }} />
          ))}
        </Box>
      </Box>
    </Modal>
  );
};

export default DamageModal;
