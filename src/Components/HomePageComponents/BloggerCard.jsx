import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import avatarimg from "../../assets/Png/avtarimg.jfif"

const BloggerCard = () => {
  return (
    <Box
      sx={{
        width: 250,
        textAlign: "center",
        borderRadius: 3,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        p: 2,
        backgroundColor: "#FAFCFF",
        position: "relative",
        overflow: "visible", // Ensure avatar is visible outside the box
        border: "1px solid #E4E4E4", // Add border with color
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
  );
};

export default BloggerCard;
