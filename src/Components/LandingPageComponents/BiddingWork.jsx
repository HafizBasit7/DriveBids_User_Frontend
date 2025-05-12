import React, { useState } from "react";
import { Box, Typography, useTheme, useMediaQuery, Collapse, IconButton, Tab, Tabs } from "@mui/material";
import RightIcon from "../../assets/SVG/biddingworkright.svg";
import LeftIcon from "../../assets/SVG/biddingworkleft.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import colors from "../../Style/color";

const BiddingWork = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [expandedCard, setExpandedCard] = useState(null);
  const [selectedTab, setSelectedTab] = useState(0); // Track the active tab

  const sellerSteps = [
    {
      title: "Step 1: List Your Car — Free & Fast",
      description: "Upload your vehicle's details in minutes. You can choose to auction it or allow buyers to purchase instantly via 'Buy It Now.'"
    },
    {
      title: "Step 2: Add Full Media for Buyer Confidence",
      description: "You'll upload: Clear, labelled photos of the car from every angle (interior & exterior), a walk-around video showing the car's condition in real time, and optional inspection report or service history."
    },
    {
      title: "Step 3: Set Your Price & Preferences",
      description: "Add a reserve price (minimum you're willing to accept), set your Buy It Now price if desired, and choose communication options."
    },
    {
      title: "Step 4: Get Verified & Go Live",
      description: "All sellers must pass our ID verification to keep the marketplace secure."
    },
    {
      title: "Step 5: Accept Bids or Sell Instantly",
      description: "Watch as interested buyers place bids or buy your car outright. You'll be notified in real-time."
    },
    {
      title: "Step 6: Finalize the Deal & Get Paid",
      description: "DriveBidz manages secure payment processing so you never have to chase money. You hand over the car only when the transaction is complete."
    }
  ];

  const buyerSteps = [
    {
      title: "Step 1: Browse Verified Listings",
      description: "Search by make, model, budget, or body type. Every listing is from a verified seller."
    },
    {
      title: "Step 2: Inspect with Confidence",
      description: "Every vehicle comes with high-quality, labelled images of all sides, interior, exterior, engine bay, wheels, etc., a walk-around video, and optional inspection reports or service history."
    },
    {
      title: "Step 3: Place Bids or Buy It Now",
      description: "You can use Quick Bid to raise by small increments, set a Max Bid for auto-bidding, or tap Buy It Now to lock in the deal instantly."
    },
    {
      title: "Step 4: Win. Pay. Drive.",
      description: "We facilitate secure payment and guide you through delivery or pickup. No scams. No stress."
    }
  ];

  const renderSteps = (steps, type) => {
    return steps.map((step, index) => (
      <Box
        key={index}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          borderRadius: 2,
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          mb: 1,
          cursor: "pointer",
          transition: "all 0.3s ease",
          width: "90%",
          "&:hover": {
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            transform: "translateY(-2px)",
          },
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: 14,
                mb: 1,
                fontFamily: "Inter",
                color: "#000000",
              }}
            >
              {step.title}
            </Typography>
            <IconButton
              onClick={() => setExpandedCard(expandedCard === `${type}-${index}` ? null : `${type}-${index}`)}
              sx={{
                color: colors.buttoncolor,
                "&:hover": {
                  backgroundColor: "transparent",
                }
              }}
            >
              {expandedCard === `${type}-${index}` ? (
                <KeyboardArrowUpIcon fontSize="small" />
              ) : (
                <KeyboardArrowDownIcon fontSize="small" />
              )}
            </IconButton>
          </Box>
          <Collapse in={expandedCard === `${type}-${index}`}>
            <Typography sx={{ fontSize: 12, color: "#595B61", fontFamily: "Inter" }}>
              {step.description}
            </Typography>
          </Collapse>
        </Box>
      </Box>
    ));
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        p: 2,
      }}
    >
      {/* Tabs for Sellers & Buyers */}
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Tabs
          value={selectedTab}
          onChange={(e, newValue) => setSelectedTab(newValue)}
          centered
          sx={{
            "& .MuiTab-root": {
              fontWeight: "bold",
              fontSize: 16,
              color: colors.buttoncolor,
            },
            "& .MuiTabs-indicator": {
              backgroundColor: colors.buttoncolor,
            },
          }}
        >
          <Tab label="For Sellers" />
          <Tab label="For Buyers" />
        </Tabs>
      </Box>

      {/* Main Content Box with Two Columns */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 0.2,
          flex: 1,
        }}
      >
        {/* Left SVG (Hidden on XS & SM screens) */}
        {!isSmallScreen && (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={LeftIcon}
              alt="Left Icon"
              loading="lazy"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        )}

        {/* Content Box */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            p: 4,
            borderRadius: 3,
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
            maxWidth: { xs: "90%", md: "50%" },
            flex: 2,
            height: "100%",
          }}
        >
          {/* Render the selected section based on the active tab */}
          {selectedTab === 0 && (
            <Box sx={{ flex: 1 }}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: 16,
                  mb: 3,
                  fontFamily: "Inter",
                  color: colors.buttoncolor,
                  textAlign: "center",
                }}
              >
                For Sellers – Sell Smarter, Safer, and Without the Hassle
              </Typography>
              {renderSteps(sellerSteps, "seller")}
            </Box>
          )}

          {selectedTab === 1 && (
            <Box sx={{ flex: 1 }}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: 16,
                  mb: 3,
                  fontFamily: "Inter",
                  color: colors.buttoncolor,
                  textAlign: "center",
                }}
              >
                For Buyers – Bid Boldly. Buy Instantly. Know Exactly What You&apos;re Getting.
              </Typography>
              {renderSteps(buyerSteps, "buyer")}
            </Box>
          )}
        </Box>

        {/* Right SVG (Hidden on XS & SM screens) */}
        {!isSmallScreen && (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              loading="lazy"
              src={RightIcon}
              alt="Right Icon"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default BiddingWork;
