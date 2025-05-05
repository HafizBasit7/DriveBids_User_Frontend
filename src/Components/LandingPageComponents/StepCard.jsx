import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import homeimg from "../../assets/Png/homeimg.jfif";
import homeimg2 from "../../assets/Png/homeimg2.jfif";
import homeimg3 from "../../assets/Png/homeimg3.jfif";
import { motion, useAnimation } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Create an Account",
    description: [
      "Quick and free registration.",
      "Secure account setup for sellers.",
      "Start accessing our trusted auction platform.",
    ],
    image: homeimg,
  },
  {
    id: 2,
    title: "List Your Car",
    description: [
      "Quick and free registration.",
      "Secure account setup for sellers.",
      "Start accessing our trusted auction platform.",
    ],
    image: homeimg2,
  },
  {
    id: 3,
    title: "Sell to Highest Bidder",
    description: [
      "Track bids and offers in real time.",
      "Choose the highest or most suitable bid.",
      "Secure and hassle-free payment options.",
    ],
    image: homeimg3,
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
      }
    },
  };

  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 3,
        py: 2,
        width: "100%",
        zIndex: 1,
        backgroundColor: "#fff",
        px: { xs: 2 },
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
              height: "100%",
              zIndex: 1,
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              transition: "box-shadow 0.3s ease",
              '&:hover': {
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
              }
            }}
          >
            <Box
              component="img"
              src={step.image}
              alt={step.title}
              loading="lazy"
              sx={{
                width: "90%",
                height: "60%",
                objectFit: "cover",
                m: 1,
                borderRadius: 2,
              }}
            />

            <Box sx={{ p: 1 }}>
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
                  fontFamily: "Inter",
                  fontSize: 20,
                  mb: 1,
                  fontFamily: "Outfit",
                }}
              >
                {step.title}
              </Typography>

              <Box>
                {step.description.map((point, index) => (
                  <Box
                    key={index}
                    sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}
                  >
                    <CheckCircleIcon sx={{ color: "#0057FF", fontSize: 14 }} />
                    <Typography sx={{ fontSize: 12, color: "#333" }}>
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
  );
};

export default StepsCard;
