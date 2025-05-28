import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import halfcircle1 from "../../assets/SVG/halfcircle.svg";
import halfcircle2 from "../../assets/SVG/halfcircle2.svg";
import qimg1 from "../../assets/SVG/qimg1.svg";
import qimg2 from "../../assets/SVG/qimg2.svg";
import qimg3 from "../../assets/SVG/qimg3.svg";

const faqs = [
  {
    question: "How does DriveBidz work?",
    answer: "Sellers list their cars with either a Buy It Now price or set up an auction. Buyers can bid or purchase instantly. Our platform supports verified users for a seamless experience.",
  },
  {
    question: "Is DriveBidz free to use?",
    answer: "Creating an account and browsing is free. Listing fees and small success fees may apply for sellers — no hidden charges.",
  },
  {
    question: "How do I know if a car is legit?",
    answer: 
      "· Multi-angle photos of the car using our built-in camera guide.<br>" +
      "· A fault checklist highlighting any known issues.<br>" +
      "· A detailed description of the car’s condition.<br>" +
      "Some listings may include service history or inspection reports, but this is optional.<br>" +
      "We recommend reviewing the full listing carefully and messaging the seller with any questions before placing a bid."
  },
  {
    question: "What payment options are available?",
    answer: "Buyers can use bank transfers or escrow (coming soon) for added security. Payment methods will be shown at checkout.",
  },
  {
    question: "Can I retract or change a bid?",
    answer: "Bids are binding. If you placed a bid in error, contact support immediately — we'll do our best to help.",
  },
  {
    question: "What documents do I need to list my car?",
    answer: "You'll need your car's registration, a valid ID, and any service history or finance details.",
  },
  {
    question: "How do I get paid?",
    answer: "Once the sale is confirmed, payment is processed securely via our platform. You can choose your preferred payout method.",
  },
  {
    question: "What's a reserve price and should I set one?",
    answer: "A reserve price is the minimum you're willing to accept. It helps protect your sale but may limit bidders. We recommend setting it slightly below market value for best results.",
  },
];

const AskQuestions = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#F4F8FF",
        borderRadius: 3,
        p: 2,
        width: { xs: "90%", md: "75%" },
        mx: "auto",
        position: "relative",
      }}
    >
      <Box sx={{ position: "relative", zIndex: 2 }}>
        {faqs.map((faq, index) => (
          <Box
            key={index}
            sx={{
              py: 2,
              width: { xs: "100%", md: "65%" },
            }}
          >
            <Box display="flex" alignItems="center">
              <IconButton
                onClick={() => handleToggle(index)}
                sx={{ color: "#2F3C7E", mr: 1 }}
              >
                {expandedIndex === index ? (
                  <CancelIcon fontSize="medium" />
                ) : (
                  <AddCircleOutlineIcon fontSize="medium" />
                )}
              </IconButton>
              <Typography
                onClick={() => handleToggle(index)}
                sx={{
                  fontWeight: 400,
                  color: "#000",
                  cursor: "pointer",
                  fontFamily: "Inter",
                  fontSize: { xs: "14px", sm: "16px", md: "18px" },
                  textAlign: "start",
                }}
              >
                {faq.question}
              </Typography>
            </Box>
            {expandedIndex === index && faq.answer && (
              <Typography
                sx={{
                  color: "#2F61BF",
                  pl: 6,
                  pt: 1,
                  fontFamily: "Inter",
                  fontSize: { xs: "12px", sm: "14px", md: "16px" },
                  textAlign: "start",
                }}
                dangerouslySetInnerHTML={{ __html: faq.answer }}  // Use dangerouslySetInnerHTML
              />
            )}
          </Box>
        ))}
      </Box>

      {/* Decorative Images - Fixed Positions */}
      <Box
        component="img"
        src={halfcircle1}
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: { xs: 0, md: 280 },
          height: "auto",
          zIndex: 1,
        }}
      />
      <Box
        component="img"
        src={halfcircle2}
        sx={{
          position: "absolute",
          bottom: 0,
          right: { xs: 0, md: 320 },
          width: { xs: 0, md: 280 },
          height: "auto",
          zIndex: 1,
        }}
      />

      {/* Other SVG Images - Prevent movement */}
      <Box
        component="img"
        src={qimg1}
        sx={{
          position: "absolute",
          top: "70px",
          right: "130px",
          width: { xs: 0, md: 200 },
          height: "auto",
          borderRadius: 2,
          transform: "translateY(0)",
          zIndex: 1,
        }}
      />
      <Box
        component="img"
        src={qimg2}
        sx={{
          position: "absolute",
          top: "240px",
          right: "45px",
          width: { xs: 0, md: 200 },
          height: "auto",
          borderRadius: 2,
          transform: "translateY(0)",
          zIndex: 1,
        }}
      />
      <Box
        component="img"
        src={qimg3}
        sx={{
          position: "absolute",
          bottom: "30px",
          right: "190px",
          width: { xs: 0, md: 200 },
          height: "auto",
          borderRadius: 2,
          transform: "translateY(0)",
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default AskQuestions;
