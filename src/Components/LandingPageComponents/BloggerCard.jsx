import React, { useEffect, useRef } from "react";
import { Box, Typography, Avatar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import avatar1 from "../../assets/Png/avtarimg.jfif";
import avatar2 from "../../assets/Png/homeimg2.jfif";
import avatar3 from "../../assets/Png/homeimg3.jfif";
import { motion, useAnimation } from "framer-motion";

const testimonials = [
  {
    name: "Ahmed Al-Kuwaiti",
    role: "Car Seller",
    rating: 5,
    review: "Sold my Range Rover in just 2 days! The bidding process was transparent and I got a better price than expected. Highly recommend DriveBids for selling luxury vehicles.",
    avatar: avatar1
  },
  {
    name: "Sarah Thompson",
    role: "First-time Buyer",
    rating: 5,
    review: "As a first-time car buyer, I was nervous about the process. But DriveBids made it so easy! The detailed car reports and transparent bidding gave me confidence in my purchase.",
    avatar: avatar2
  },
  {
    name: "Mohammed Al-Dubai",
    role: "Regular Seller",
    rating: 5,
    review: "I've sold multiple cars through DriveBids. Their inspection process is thorough and the platform attracts serious buyers. The mobile app makes it even easier to manage my listings on the go!",
    avatar: avatar3
  }
];

const BloggerCard = ({ index = 0 }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const testimonial = testimonials[index];

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
          src={testimonial.avatar}
          alt={testimonial.name}
          sx={{
            width: 60,
            height: 60,
            position: "absolute",
            top: -35,
            left: "50%",
            transform: "translateX(-50%)",
            border: "3px solid white",
            backgroundColor: "#fff",
          }}
        />

        <Box mt={4}>
          <Typography fontWeight="bold" sx={{ fontSize:18, fontFamily:"Inter" }}>
            {testimonial.name}
          </Typography>
          <Typography color="text.secondary" mb={1} sx={{ fontSize:18, fontFamily:"Inter" }}>
            {testimonial.role}
          </Typography>

          {/* Star Ratings */}
          <Box display="flex" justifyContent="center" mb={1}>
            {[...Array(5)].map((_, i) => (
              i < testimonial.rating ? 
                <StarIcon key={i} sx={{ color: "#1E88E5" }} /> : 
                <StarBorderIcon key={i} sx={{ color: "#B0BEC5" }} />
            ))}
          </Box>

          {/* Description */}
          <Typography variant="body2" color="text.secondary" sx={{fontFamily:"Inter", fontSize: 14, lineHeight: 1.6}}>
            {testimonial.review}
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
};

export default BloggerCard;
