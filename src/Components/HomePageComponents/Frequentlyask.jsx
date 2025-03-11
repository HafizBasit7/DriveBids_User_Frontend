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
    question: "Is it possible to sell my car with a financing option?",
    answer:
      "You don’t have to have paid off all of the finance already; but subject to your contract, there may be a minimum repayment before you have the right to sell.",
  },
  { question: "Does Drivebids allow me to sell my car for free?", answer: "" },
  { question: "What’s the quickest way to sell my car?", answer: "" },
  { question: "What is the estimated value of my car?", answer: "" },
  { question: "Who are the potential buyers for my car?", answer: "" },
  { question: "What documents are required to sell my car?", answer: "" },
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
          minHeight: 400, // Ensures SVGs don't move
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
                    pl: 4,
                    pt: 1,
                    fontFamily: "Inter",
                    fontSize: { xs: "12px", sm: "14px", md: "16px" },
                    textAlign: "start",
                  }}
                >
                  {faq.answer}
                </Typography>
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
            width: { xs: 0, md: 220 },
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
            right: { xs: 0, md: 270 },
            width: { xs: 0, md: 220 },
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
            top: "50px",
            right: "130px",
            width: { xs: 0, md: 165 },
            height: "auto",
            borderRadius: 2,
            transform: "translateY(0)", // Prevents movement
            zIndex: 1,
          }}
        />
        <Box
          component="img"
          src={qimg2}
          sx={{
            position: "absolute",
            top: "170px",
            right: "45px",
            width: { xs: 0, md: 165 },
            height: "auto",
            borderRadius: 2,
            transform: "translateY(0)", // Prevents movement
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
            width: { xs: 0, md: 160 },
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
