import { Box, Typography, TextField, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import colors from "../../Style/color";

const ContactForm = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" fontWeight="bold" mb={1} sx={{ fontFamily: "Inter" }}>
        Discover Us
      </Typography>
      <Typography variant="body1" mb={3} sx={{ fontFamily: "Inter" }}>
        Drive Bidz is here to help you;
        Our experts are available to answer any questions you might have. We've got the answers.
      </Typography>

      {/* Visit Us Section */}
      <Typography variant="h6" fontWeight="bold" mb={1} sx={{ fontFamily: "Inter" }}>
        Visit Us
      </Typography>
      <Typography variant="body1" mb={1} sx={{ fontFamily: "Inter" }}>
        Office No. G-02, Building 1, Ground Floor, Dubai Media City – Dubai
      </Typography>
      <Typography variant="body1" mb={2} sx={{ fontFamily: "Inter" }}>
        Feel free to get in touch with us through our channels:
      </Typography>

      {/* Contact Details */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
        <EmailIcon sx={{ color: colors.buttoncolor }} />
        <Typography variant="body1" sx={{ color: colors.buttoncolor, fontFamily: "Inter" }}>
          flick@flick.com
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
        <PhoneIcon sx={{ color: colors.buttoncolor }} />
        <Typography variant="body1" sx={{ color: colors.buttoncolor, fontFamily: "Inter" }}>
          +971-4-576-6770
        </Typography>
      </Box>


      <Box
        sx={{
          background: "white",
          borderRadius: "8px",
          p: 3,
          boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
        }}
      >
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <TextField
            label="Your Name"
            fullWidth
            InputLabelProps={{
              sx: {
                color: "colors.buttoncolor", // Label color
                "&.Mui-focused": { color: colors.buttoncolor, }, // Label color when active
              },
            }}
            InputProps={{
              sx: {
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: colors.buttoncolor, // Active border color
                },
              },
            }}
          />
          <TextField
            label="Email Address"
            fullWidth
            InputLabelProps={{
              sx: {
                color: "colors.buttoncolor",
                "&.Mui-focused": { color: colors.buttoncolor, },
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
        <TextField
          label="Phone Number (optional)"
          fullWidth
          sx={{ mb: 2 }}
          InputLabelProps={{
            sx: {
              color: "colors.buttoncolor",
              "&.Mui-focused": { color: colors.buttoncolor, },
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
        <TextField
          label="Message"
          multiline
          rows={4}
          fullWidth
          sx={{ mb: 2 }}
          InputLabelProps={{
            sx: {
              color: "colors.buttoncolor",
              "&.Mui-focused": { color: colors.buttoncolor, },
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



      <Box
        sx={{
          background: colors.buttoncolor,
          color: "white",
          borderRadius: "8px",

          p: { xs: 2, md: 4 },
          mt: 4,

        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // Stack on small screens, row on large
            alignItems: "center", // Center vertically
            justifyContent: "space-between", // Space out the text and input
            py: 5,
          }}
        >
          {/* Left Section: Text Content */}
          <Box sx={{ maxWidth: "500px" }}>
            <Typography fontWeight="bold" sx={{ mb: 1, fontFamily: "Inter", fontSize: 25, fontWeight: 700 }}>
              Subscribe to our Newsletter
            </Typography>
            <Typography sx={{ fontFamily: "Inter", fontSize: 13, fontWeight: 300 }}>
              Stay informed about the latest investor updates, financial insights, and announcements by subscribing to our newsletter.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "column", md: "row" }, // Stack for XS & SM, row for MD+
              alignItems: "center",
              borderRadius: "8px",
              overflow: "hidden",
              background: "rgba(255, 255, 255, 0.15)", // Light transparent white
              height: { xs: "auto", md: "48px" }, // Auto height for small screens
              mt: { xs: 2, md: 0 },
              width: { xs: "100%", sm: "100%", md: "auto" }, // Full width on small screens
            }}
          >
            <TextField
              placeholder="Enter your email"
              variant="outlined"
              sx={{
                flex: 1,
                width: { xs: "100%", md: 350 }, // Full width on small screens, fixed width on large
                minWidth: { xs: "100%", md: "unset" }, // Prevent shrinking too much
                background: "transparent",
                borderRadius: { xs: "8px", md: "8px 0 0 8px" }, // Full rounded on XS
                "& fieldset": { border: "none" },
                "& input": {
                  color: "white",
                  padding: "12px",
                  fontSize: { xs: 14, md: 16 },
                  "::placeholder": {
                    color: "white",
                    opacity: 0.8,
                    fontSize: { xs: 12, md: 14 },
                  },
                },
              }}
            />

            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: colors.buttoncolor,
                fontWeight: 500,
                textTransform: "none",
                borderRadius: { xs: "8px", md: "0 8px 8px 0" }, // Full rounded on XS
                fontFamily: "Inter",
                px: { xs: 2, md: 3 }, // Adjust padding for small screens
                width: { xs: "100%", md: "auto" }, // Full width on small screens
                height: { xs: "44px", md: "100%" }, // Adjust height for consistency
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                },
              }}
            >
              Subscribe
            </Button>
          </Box>

        </Box>
      </Box>


    </Box>
  );
};

export default ContactForm;
