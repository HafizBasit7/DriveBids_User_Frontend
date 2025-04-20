import { Box, Typography, TextField, Button } from "@mui/material";
import colors from "../../Style/color";

const NewsletterSection = () => {
  return (
    <Box
      sx={{
        background: colors.buttoncolor,
        color: "white",
        width: "100%",
        p: { xs: 2, md: 4 },
        my: 5,
        
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          py: 5,
          px: 6,
        }}
      >
        {/* Left: Text */}
        <Box sx={{ maxWidth: 500 }}>
          <Typography
            sx={{
              mb: 1,
              fontFamily: "Inter",
              fontSize: 25,
              fontWeight: 700,
            }}
          >
            Subscribe to our Newsletter
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: 13,
              fontWeight: 300,
            }}
          >
            Stay informed about the latest investor updates, financial insights,
            and announcements by subscribing to our newsletter.
          </Typography>
        </Box>

        {/* Right: Input & Button */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            borderRadius: 2,
            overflow: "hidden",
            background: "rgba(255, 255, 255, 0.15)",
            height: { xs: "auto", md: 48 },
            mt: { xs: 2, md: 0 },
            width: { xs: "100%", md: "auto" },
          }}
        >
          <TextField
            placeholder="Enter your email"
            variant="outlined"
            sx={{
              width: { xs: "100%", md: 350 },
              background: "transparent",
              borderRadius: { xs: 2, md: "8px 0 0 8px" },
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
              borderRadius: { xs: 2, md: "0 8px 8px 0" },
              fontFamily: "Inter",
              px: { xs: 2, md: 3 },
              width: { xs: "100%", md: "auto" },
              height: { xs: 44, md: "100%" },
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
  );
};

export default NewsletterSection;
