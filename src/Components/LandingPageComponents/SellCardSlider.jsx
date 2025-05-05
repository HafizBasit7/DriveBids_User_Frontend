import React, { useEffect, useRef } from "react";
import { Box, Typography, Grid } from "@mui/material";
import SliderSellCard from "./SliderSellCard";
import CarRepairIcon from '@mui/icons-material/CarRepair';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import DashboardIcon from '@mui/icons-material/Dashboard';
import colors from "../../Style/color";
import { motion, useAnimation } from "framer-motion";

const FeatureGrid = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.15
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const subtitleVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  const descriptionVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const features = [
    {
      title: "Comprehensive Car Checks",
      description: "Every listed vehicle undergoes multi-point inspection or comes with verified service history, giving you peace of mind before you place a bid.",
      icon: <CarRepairIcon />
    },
    {
      title: "Verified Sellers",
      description: "Every seller is ID-verified to keep you protected.",
      icon: <VerifiedUserIcon />
    },
    {
      title: "Secure Payments",
      description: "Encrypted payments methods. Auto-Bidding Tech - Set it and forget it — we'll bid smart on your behalf.",
      icon: <SecurityIcon />
    },
    {
      title: "Real Human Support",
      description: "Talk to our team anytime — no bots.",
      icon: <SupportAgentIcon />
    },
    {
      title: "One Platform, Full Journey",
      description: "Buy, sell, bid, and message — all from our platform.",
      icon: <DashboardIcon />
    }
  ];

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <Box sx={{ py: 4, backgroundColor: "#fff" }}>
        <Box sx={{ mb: 4 }}>
          <motion.div variants={titleVariants}>
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
              Why DriveBidz?
            </Typography>
          </motion.div>

          <motion.div variants={subtitleVariants}>
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                mb: 2,
                color: "#666",
                fontFamily: "Inter",
                fontSize: { xs: 16, md: 18 },
              }}
            >
              Trusted, Transparent, and Built Around You
            </Typography>
          </motion.div>

          <motion.div variants={descriptionVariants}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "center",
                mb: 4,
                color: "#666",
                fontFamily: "Inter",
                fontSize: { xs: 14, md: 15 },
              }}
            >
              We&apos;re not just another car platform — here&apos;s why thousands of users trust us.
            </Typography>
          </motion.div>
        </Box>

        <Box 
          sx={{ 
            maxWidth: "1000px",
            margin: "0 auto",
            px: { xs: 2, sm: 3, md: 4 }
          }}
        >
          {/* First row with 3 cards */}
          <Grid container spacing={3} sx={{ mb: 3 }}>
            {features.slice(0, 3).map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div variants={itemVariants}>
                  <SliderSellCard
                    title={feature.title}
                    description={feature.description}
                    icon={feature.icon}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Second row with 2 centered cards */}
          <Grid 
            container 
            spacing={3} 
            sx={{ 
              justifyContent: "center",
              "& > .MuiGrid-item": {
                maxWidth: { xs: "100%", sm: "calc(50% - 12px)", md: "calc(33.33% - 12px)" }
              }
            }}
          >
            {features.slice(3).map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index + 3}>
                <motion.div variants={itemVariants}>
                  <SliderSellCard
                    title={feature.title}
                    description={feature.description}
                    icon={feature.icon}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </motion.div>
  );
};

export default FeatureGrid;
