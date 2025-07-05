import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import homeimg from "../../assets/Png/homeimg.jfif";
import homeimg2 from "../../assets/Png/homeimg2.jfif";
import homeimg3 from "../../assets/Png/homeimg3.jfif";
import homeimg4 from "../../assets/Png/1.avif";
import homeimg5 from "../../assets/Png/2.avif";
import homeimg6 from "../../assets/Png/3.avif";

import { motion, useAnimation } from "framer-motion";

const sellerSteps = [
  {
    id: 1,
    title: "Create an Account",
    description: ["Quick and free registration to get you started."],
    image: homeimg,
  },
  {
    id: 2,
    title: "List Your Car in Minutes",
    description: [
      "Upload details, photos, and set your price or auction preference.",
    ],
    image: homeimg2,
  },
  {
    id: 3,
    title: "Sell to the Highest Bidder or Instantly",
    description: [
      "Track offers in real time and pick the best deal.",
      "Get paid fast with secure transactions.",
    ],
    image: homeimg3,
  },
];

const buyerSteps = [
  {
    id: 1,
    title: "Create An Account",
    description: [
      "Free sign-up to unlock full access to listings and bidding.",
    ],
    image: homeimg4,
  },
  {
    id: 2,
    title: "Browse, Bid or Buy Now",
    description: [
      "Explore a wide range of vehicles.",
      "Bid live or choose instant purchase.",
    ],
    image: homeimg6,
  },
  {
    id: 3,
    title: "Drive Away with Confidence",
    description: ["Verified listings and transparent pricing."],
    image: homeimg5,
  },
];

const StepsCard = () => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const renderSteps = (steps, title, subtitle) => (
    <Box sx={{ width: "100%", mb: 6 }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          mb: 1,
          fontWeight: 600,
          color: "#000",
          fontFamily: "Outfit",
          fontSize: { xs: 24, md: 34 },
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          mb: 4,
          color: "#666",
          fontFamily: "Inter",
          fontSize: { xs: 16, md: 18 },
        }}
      >
        {subtitle}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 3,
          width: "100%",
        }}
      >
        {steps.map((step) => (
          <motion.div
            key={step.id}
            variants={variants}
            initial="hidden"
            animate={controls}
            style={{ flex: "1 1 300px", maxWidth: "300px" }}
          >
            <Box
              sx={{
                width: "100%",
                backgroundColor: "#fff",
                borderRadius: 2,
                overflow: "hidden",
                textAlign: "left",
                height: "450px",
                zIndex: 1,
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                transition: "box-shadow 0.3s ease",
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                },
              }}
            >
              <Box
                component="img"
                src={step.image}
                alt={step.title}
                loading="lazy"
                sx={{
                  width: "90%",
                  height: "250px",
                  objectFit: "cover",
                  m: 1,
                  borderRadius: 2,
                }}
              />

              <Box
                sx={{ p: 2, flex: 1, display: "flex", flexDirection: "column" }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: 25,
                    mb: 0.1,
                    fontFamily: "Outfit",
                  }}
                >
                  <span style={{ color: "#000" }}>Step </span>
                  <span style={{ color: "#000" }}>{step.id}:</span>
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#000",
                    fontSize: 20,
                    mb: 1,
                    fontFamily: "Outfit",
                  }}
                >
                  {step.title}
                </Typography>

                <Box sx={{ flex: 1 }}>
                  {step.description.map((point, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 1,
                        mb: 1,
                      }}
                    >
                      <CheckCircleIcon
                        sx={{ color: "#0057FF", fontSize: 14, mt: 0.5 }}
                      />
                      <Typography
                        sx={{ fontSize: 14, color: "#333", lineHeight: 1.4 }}
                      >
                        {point}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );

  return (
    <Box
      ref={ref}
      sx={{
        width: "100%",
        zIndex: 1,
        backgroundColor: "#fff",
        px: { xs: 2 },
      }}
    >
      {renderSteps(sellerSteps, "For Sellers", "List and Sell With Confidence")}
      {renderSteps(
        buyerSteps,
        "For Buyers",
        "Find Your Perfect Ride, Your Way"
      )}
    </Box>
  );
};

export default StepsCard;
