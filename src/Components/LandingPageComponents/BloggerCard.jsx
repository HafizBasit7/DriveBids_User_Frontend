import React, { useEffect, useRef } from "react";
import { Box, Typography, Avatar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
// import avatar1 from "../../assets/Png/avtarimg.jfif";
// import avatar2 from "../../assets/Png/homeimg2.jfif";
// import avatar3 from "../../assets/Png/homeimg3.jfif";
import { motion, useAnimation } from "framer-motion";
import avatar1 from "../../assets/Png/avatar_sara.jpg";
import avatar2 from "../../assets/Png/avatar_noor.jpg";
import avatar3 from "../../assets/Png/avatar_mohammad.jpg";


const testimonials = [
  {
    name: "Sara Thompson",
    role: "Verified Buyer",
    rating: 5,
    review:
      "As a first-time buyer, I was impressed by how smooth the entire process was. The bidding feature gave me full control, and I love my new car!",
    avatar: avatar2,
  },
  {
    name: "Mohammad Ahmad",
    role: "Professional Seller",
    rating: 5,
    review:
      "I’ve listed multiple cars on DriveBidz. It’s reliable, attracts serious buyers, and their support team is incredibly responsive.",
    avatar: avatar3,
  },
  {
    name: "Noor Hajri",
    role: "First-time Seller",
    rating: 5,
    review:
      "I wasn’t sure what to expect, but I sold my car in less than 3 days! I appreciated the detailed vehicle reports and secure transaction.",
    avatar: avatar1,
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
          <Typography
  variant="subtitle1"
  fontWeight="bold"
  sx={{ fontFamily: "Inter", color: "#000" }}
>
            {testimonial.name}
          </Typography>
         <Typography
  variant="body2"
  color="text.secondary"
  sx={{ fontFamily: "Inter", mb: 1 }}
>
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
