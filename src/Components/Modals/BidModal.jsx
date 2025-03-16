import React, { useState } from "react";
import { Modal, Box, Typography, Button, TextField, useMediaQuery } from "@mui/material";
import DealsBanner from "../HomePageComponents/DealBanner";

const colors = {
  buttoncolor: "#0052CC",
  warning: "#D32F2F",
  borderColor: "#ddd",
};

const BidModal = ({ open, onClose }) => {
  const [bid, setBid] = useState(28000);
  const minBid = 30100; // Minimum bid required
  const suggestedBids = [31000, 30500, 32000];

  // Check screen size for responsiveness
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: 2,
          width: isSmallScreen ? "95%" : "50%", // Responsive width
          p: 3,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: 24,
          textAlign: "center",
        }}
      >
        {/* Header Banner */}
        <Box sx={{ width: "100%" }}>
          <DealsBanner title="Max Bid" subtitle="" buttonText="Place Bid" />
        </Box>

        {/* Bid Description */}
        <Typography sx={{ mt: 2, fontSize: 14, color: "#979797", fontWeight: 500 }}>
          We'll automatically raise your bid in small increments up to this limit until the auction concludes or you win the item.
        </Typography>

        {/* Max Bid Input */}
        <Typography sx={{ mt: 3, fontWeight: 500 }}>Place your max bid</Typography>
        <Box
          sx={{
            border: `2px solid ${colors.borderColor}`,
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            py: 2,
            mt: 1,
            mx: "auto",
            width: isSmallScreen ? "90%" : 400, // Adjust width for small screens
          }}
        >
          <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>$</Typography>
          <TextField
            variant="standard"
            inputProps={{
              style: {
                textAlign: "center",
                fontSize: 28,
                fontWeight: "bold",
                width: 100,
                border: "none",
                outline: "none",
              },
            }}
            value={bid}
            onChange={(e) => setBid(Number(e.target.value))}
          />
        </Box>

        {/* Warning Message */}
        {bid < minBid && (
          <Typography sx={{ color: "#B7342C", mt: 1, fontSize: 15 }}>
            Please bid ${minBid} or higher.
          </Typography>
        )}

        {/* Suggested Bids - Responsive Layout */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isSmallScreen ? "column" : "row", // Stack vertically on small screens
            gap: 2,
            mt: 2,
            width: "100%",
          }}
        >
          {suggestedBids.map((amount) => (
            <Button
              key={amount}
              variant="outlined"
              sx={{
                borderRadius: 2,
                borderColor: "#2F61BF",
                color: "#2F61BF",
                width: "100%", // Full width
                border: "1px solid #2F61BF",
                py: 1,
              }}
              onClick={() => setBid(amount)}
            >
              ${amount.toLocaleString()}
            </Button>
          ))}
        </Box>
      </Box>
    </Modal>
  );
};

export default BidModal;
