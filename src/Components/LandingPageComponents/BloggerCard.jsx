import React, { useEffect, useRef } from "react";
import { Box, Typography, Avatar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import avatarimg from "../../assets/Png/avtarimg.jfif"
import { motion, useAnimation } from "framer-motion";

const BloggerCard = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "300px" },
          textAlign: "center",
          borderRadius: 3,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          p: 2,
          backgroundColor: "#FAFCFF",
          position: "relative",
          overflow: "visible", 
          border: "1px solid #E4E4E4", 
        }}
      >
        <Avatar
          src={avatarimg}
          alt="Blogger"
          sx={{
            width: 60,
            height: 60,
            position: "absolute",
            top: -35, // Moves the avatar outside the box
            left: "50%",
            transform: "translateX(-50%)",
            border: "3px solid white", // White border for clean overlap
            backgroundColor: "#fff",
          }}
        />

        <Box mt={4}>
          <Typography fontWeight="bold" sx={{ fontSize:18, fontFamily:"Inter" }}>
            Sofia
          </Typography>
          <Typography color="text.secondary" mb={1} sx={{ fontSize:18, fontFamily:"Inter" }}>
            Blogger
          </Typography>

          {/* Star Ratings */}
          <Box display="flex" justifyContent="center" mb={1}>
            <StarIcon sx={{ color: "#1E88E5" }} />
            <StarIcon sx={{ color: "#1E88E5" }} />
            <StarIcon sx={{ color: "#1E88E5" }} />
            <StarBorderIcon sx={{ color: "#B0BEC5" }} />
            <StarBorderIcon sx={{ color: "#B0BEC5" }} />
          </Box>

          {/* Description */}
          <Typography variant="body2" color="text.secondary" sx={{fontFamily:"Inter"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore.
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
};

export default BloggerCard;
