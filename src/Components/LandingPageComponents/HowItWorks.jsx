import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import colors from "../../Style/color";

const HowItWorks = () => {
  const sellerSteps = [
    {
      step: "Step 1: List Your Car — Free & Fast",
      description: "Upload your vehicle's details in minutes. You can choose to auction it or allow buyers to purchase instantly via 'Buy It Now.'"
    },
    {
      step: "Step 2: Add Full Media for Buyer Confidence",
      description: "You'll upload: Clear, labelled photos of the car from every angle (interior & exterior), A walk-around video showing the car's condition in real time, Optional inspection report or service history. This transparency builds trust and helps your listing stand out."
    },
    {
      step: "Step 3: Set Your Price & Preferences",
      description: "Add a reserve price (minimum you're willing to accept), set your Buy It Now price if desired, and choose communication options."
    },
    {
      step: "Step 4: Get Verified & Go Live",
      description: "All sellers must pass our ID verification to keep the marketplace secure."
    },
    {
      step: "Step 5: Accept Bids or Sell Instantly",
      description: "Watch as interested buyers place bids or buy your car outright. You'll be notified in real-time."
    },
    {
      step: "Step 6: Finalize the Deal & Get Paid",
      description: "DriveBidz manages  processing so you never have to chase money. You hand over the car only when the transaction is complete."
    }
  ];

  const buyerSteps = [
    {
      step: "Step 1: Browse Verified Listings",
      description: "Search by make, model, budget, or body type. Every listing is from a verified seller."
    },
    {
      step: "Step 2: Inspect with Confidence",
      description: "Every vehicle comes with: High-quality, labelled images of all sides, interior, exterior, engine bay, wheels, etc. A walk-around video so you can see the car in motion. Optional inspection reports or service history. No surprises. Just informed buying."
    },
    {
      step: "Step 3: Place Bids or Buy It Now",
      description: "You can: Use Quick Bid to raise by small increments. Set a Max Bid for auto-bidding. Or tap Buy It Now to lock in the deal instantly"
    },
    {
      step: "Step 4: Win. Pay. Drive.",
      description: "We facilitate  and guide you through delivery or pickup. No scams. No stress."
    }
  ];

  return (
    <Box sx={{ py: 6, backgroundColor: "#fff" }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          mb: 2,
          fontWeight: 600,
          color: "#000",
          fontFamily: "Outfit",
          fontSize: { xs: 24, md: 34 },
        }}
      >
        How DriveBidz Works
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          mb: 6,
          color: "#666",
          fontFamily: "Inter",
          fontSize: { xs: 16, md: 18 },
          maxWidth: "800px",
          mx: "auto",
          px: 2,
        }}
      >
        A seamless, secure platform for both buyers and sellers.
      </Typography>

      <Grid container spacing={4} sx={{ px: { xs: 2, md: 4 }, maxWidth: "1200px", mx: "auto" }}>
        {/* Seller Column */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              height: "100%",
              backgroundColor: "#F8F9FA",
              borderRadius: 2,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                mb: 3,
                fontWeight: 600,
                color: colors.buttoncolor,
                fontFamily: "Outfit",
                fontSize: { xs: 20, md: 24 },
              }}
            >
              For Sellers – Sell Smarter, Safer, and Without the Hassle
            </Typography>
            {sellerSteps.map((step, index) => (
              <Box key={index} sx={{ mb: 3 }}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: "#000",
                    fontFamily: "Outfit",
                    fontSize: { xs: 16, md: 18 },
                    mb: 1,
                  }}
                >
                  {step.step}
                </Typography>
                <Typography
                  sx={{
                    color: "#666",
                    fontFamily: "Inter",
                    fontSize: { xs: 14, md: 15 },
                    lineHeight: 1.6,
                  }}
                >
                  {step.description}
                </Typography>
              </Box>
            ))}
          </Paper>
        </Grid>

        {/* Buyer Column */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              height: "100%",
              backgroundColor: "#F8F9FA",
              borderRadius: 2,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                mb: 3,
                fontWeight: 600,
                color: colors.buttoncolor,
                fontFamily: "Outfit",
                fontSize: { xs: 20, md: 24 },
              }}
            >
              For Buyers – Bid Boldly. Buy Instantly. Know Exactly What You're Getting.
            </Typography>
            {buyerSteps.map((step, index) => (
              <Box key={index} sx={{ mb: 3 }}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: "#000",
                    fontFamily: "Outfit",
                    fontSize: { xs: 16, md: 18 },
                    mb: 1,
                  }}
                >
                  {step.step}
                </Typography>
                <Typography
                  sx={{
                    color: "#666",
                    fontFamily: "Inter",
                    fontSize: { xs: 14, md: 15 },
                    lineHeight: 1.6,
                  }}
                >
                  {step.description}
                </Typography>
              </Box>
            ))}

            {/* Why Trust DriveBidz section */}
            <Box sx={{ mt: 4, pt: 3, borderTop: "1px solid #E4E4E4" }}>
              <Typography
                sx={{
                  fontWeight: 600,
                  color: "#000",
                  fontFamily: "Outfit",
                  fontSize: { xs: 16, md: 18 },
                  mb: 2,
                }}
              >
                Why Trust DriveBidz?
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                }}
              >
                {[
                  "Full vehicle transparency",
                  "ID-verified users only",
                  "Secure platform-managed payment",
                  "Live support from real humans"
                ].map((item, index) => (
                  <Typography
                    key={index}
                    sx={{
                      color: "#666",
                      fontFamily: "Inter",
                      fontSize: { xs: 14, md: 15 },
                      backgroundColor: "#fff",
                      p: 1,
                      borderRadius: 1,
                      border: "1px solid #E4E4E4",
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HowItWorks; 