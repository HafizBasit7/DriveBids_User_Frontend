import { Box, Typography, TextField, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import colors from "../../Style/color";
import animationData from "../../assets/animation.json";
import Lottie from "lottie-react";
import { useState } from "react";
import NewsletterSection from "./Newletter";

const ContactForm = () => {

  return (
    <Box sx={{ p: 3, height: { xs: "190vh", md: "120vh" } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "50%", } }}>
          <Typography
            variant="h5"
            fontWeight="bold"
            mb={1}
            sx={{ fontFamily: "Inter" }}
          >
            Discover Us
          </Typography>
          <Typography variant="body1" mb={3} sx={{ fontFamily: "Inter" }}>
            Drive Bidz is here to help you; Our experts are available to answer
            any questions you might have. We've got the answers.
          </Typography>

          <Typography
            variant="h6"
            fontWeight="bold"
            mb={1}
            sx={{ fontFamily: "Inter" }}
          >
            Visit Us
          </Typography>
          <Typography variant="body1" mb={1} sx={{ fontFamily: "Inter" }}>
            Office No. G-02, Building 1, Ground Floor, Dubai Media City – Dubai
          </Typography>
          <Typography variant="body1" mb={2} sx={{ fontFamily: "Inter" }}>
            Feel free to get in touch with us through our channels:
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            <EmailIcon sx={{ color: colors.buttoncolor }} />
            <Typography
              variant="body1"
              sx={{ color: colors.buttoncolor, fontFamily: "Inter" }}
            >
              flick@flick.com
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
            <PhoneIcon sx={{ color: colors.buttoncolor }} />
            <Typography
              variant="body1"
              sx={{ color: colors.buttoncolor, fontFamily: "Inter" }}
            >
              +971-4-576-6770
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            zIndex: 2,
            pointerEvents: "none",
            mx: "auto",
            pl: { xs: 0, md: 20 },
          }}
        >
          <Lottie
            animationData={animationData}
            loop
            style={{
              width: 350,
              height: 350,
            }}
          />
        </Box>
      </Box>

      <Box
  sx={{
    background: "white",
    borderRadius: "8px",
    p: 3,
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.09)",
    mt: 3,
   
    
    height:"40%"

  }}
>
  <Box
    sx={{
      display: "flex",
      gap: 2,
      mb: 2,
      flexDirection: { xs: "column", sm: "row" },
    }}
  >
    {/* Name */}
    <Box sx={{ flex: 1 }}>
      <TextField
        label="Your Name"
        fullWidth
        InputLabelProps={{
          sx: {
            color: "black",
            "&.Mui-focused": { color: colors.buttoncolor },
          },
        }}
        InputProps={{
          sx: {
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: colors.buttoncolor,
            },
          },
        }}
      />
    </Box>

    {/* Email */}
    <Box sx={{ flex: 1 }}>
      <TextField
        label="Email Address"
        fullWidth
        InputLabelProps={{
          sx: {
            color: "black",
            "&.Mui-focused": { color: colors.buttoncolor },
          },
        }}
        InputProps={{
          sx: {
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: colors.buttoncolor,
            },
          },
        }}
      />
    </Box>

    {/* Phone */}
    <Box sx={{ flex: 1 }}>
      <TextField
        label="Phone Number (optional)"
        fullWidth
        InputLabelProps={{
          sx: {
            color: "black",
            "&.Mui-focused": { color: colors.buttoncolor },
          },
        }}
        InputProps={{
          sx: {
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: colors.buttoncolor,
            },
          },
        }}
      />
    </Box>
  </Box>

  {/* Message */}
  <Box sx={{ mb: 2, display: "flex", justifyContent: "flex-start" }}>
    <TextField
      label="Message"
      multiline
      rows={4}
      fullWidth
      InputLabelProps={{
        sx: {
          color: "black",
          "&.Mui-focused": { color: colors.buttoncolor },
        },
      }}
      InputProps={{
        sx: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: colors.buttoncolor,
          },
        },
      }}
    />
  </Box>

  {/* Submit Button */}
  <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
    <Button
      variant="contained"
      sx={{
        textTransform: "none",
        width: "200px",
        backgroundColor: colors.buttoncolor,
        "&:hover": {
          backgroundColor: colors.buttoncolor,
          opacity: 0.9,
        },
      }}
    >
      Leave us a Message →
    </Button>
  </Box>
</Box>


    </Box>
  );
};

export default ContactForm;
