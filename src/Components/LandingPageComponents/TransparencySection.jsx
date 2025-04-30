import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import colors from "../../Style/color";
import ChecklistIcon from "@mui/icons-material/Checklist";
import VideocamIcon from "@mui/icons-material/Videocam";
import DescriptionIcon from "@mui/icons-material/Description";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

const TransparencySection = () => {
  const features = [
    {
      icon: <ChecklistIcon sx={{ fontSize: 40, color: colors.buttoncolor }} />,
      title: "Mandatory Photo Checklist",
      description: "Using our built-in camera feature, sellers must provide:",
      points: [
        "Clear photos from all exterior angles (front, back, sides, roof)",
        "Full set of interior photos (dashboard, seats, steering, controls)",
        "Detailed shots of wheels and tires",
        "Close-ups of any scratches, dents, or visible defects"
      ]
    },
    {
      icon: <VideocamIcon sx={{ fontSize: 40, color: colors.buttoncolor }} />,
      title: "Guided Walk-Around Video",
      description: "Sellers must submit a comprehensive walk-around video showing the entire car, inside and out, allowing buyers to inspect every detail from the comfort of their screen."
    },
    {
      icon: <DescriptionIcon sx={{ fontSize: 40, color: colors.buttoncolor }} />,
      title: "Mandatory Inspection Report",
      description: "Every car listed comes with a completed inspection checklist. Any defaults, defects, or issues must be disclosed upfront — no hidden surprises, ever."
    }
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        py: 8,
        backgroundColor: "#fff",
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: "90%", md: "80%" },
          mx: "auto",
        }}
      >
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box
                sx={{
                  height: "100%",
                  p: 3,
                  borderRadius: 3,
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: 18,
                    fontFamily: "Inter",
                    color: colors.buttoncolor,
                    mb: 2,
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    color: "#595B61",
                    fontFamily: "Inter",
                    mb: 2,
                  }}
                >
                  {feature.description}
                </Typography>
                {feature.points && (
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    {feature.points.map((point, pointIndex) => (
                      <Typography
                        key={pointIndex}
                        sx={{
                          fontSize: 12,
                          color: "#595B61",
                          fontFamily: "Inter",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            color: colors.buttoncolor,
                            mr: 1,
                            fontSize: 16,
                          }}
                        >
                          •
                        </Box>
                        {point}
                      </Typography>
                    ))}
                  </Box>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Why It Matters Section */}
        <Box
          sx={{
            mt: 6,
            p: 4,
            borderRadius: 3,
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <VerifiedUserIcon sx={{ fontSize: 40, color: colors.buttoncolor, mr: 2 }} />
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: 24,
                fontFamily: "Inter",
                color: colors.buttoncolor,
              }}
            >
              Why It Matters
            </Typography>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Typography
                sx={{
                  fontSize: 14,
                  color: "#595B61",
                  fontFamily: "Inter",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    color: colors.buttoncolor,
                    mr: 1,
                    fontSize: 16,
                  }}
                >
                  •
                </Box>
                Buyers know exactly what they&apos;re getting — no mystery, no guesswork.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography
                sx={{
                  fontSize: 14,
                  color: "#595B61",
                  fontFamily: "Inter",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    color: colors.buttoncolor,
                    mr: 1,
                    fontSize: 16,
                  }}
                >
                  •
                </Box>
                Sellers build trust and receive more serious bids, faster.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography
                sx={{
                  fontSize: 14,
                  color: "#595B61",
                  fontFamily: "Inter",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    color: colors.buttoncolor,
                    mr: 1,
                    fontSize: 16,
                  }}
                >
                  •
                </Box>
                DriveBidz keeps the marketplace safe, transparent, and high-quality for everyone.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default TransparencySection; 