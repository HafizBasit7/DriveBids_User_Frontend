import { Box, Typography, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";

const TermandCondition = () => {
  document.title = "Terms and Conditions";
  const navigate = useNavigate();

  const sections = [
    {
      title: "Account Requirements",
      icon: "👤",
      content: [
        "You must be at least 18 years old and capable of forming a legally binding agreement.",
        "Provide accurate, up-to-date information when creating your account.",
        "Keep your login credentials secure and confidential.",
        "You are solely responsible for any activity conducted under your account.",
      ],
    },
    {
      title: "Vehicle Listings",
      icon: "🚗",
      content: [
        "All information provided must be truthful, accurate, and complete.",
        "Vehicle must be legally owned by you with proper documentation.",
        "Clearly disclose any existing liens, damages, or mechanical issues.",
        "We reserve the right to remove fraudulent or misleading listings.",
      ],
    },
    {
      title: "Bidding Rules",
      icon: "💰",
      content: [
        "Bidding on vehicles is a legally binding action.",
        "Winning bidders must complete the purchase if reserve price is met.",
        "Failure to follow through may result in account suspension.",
        "Bid manipulation and shill bidding are strictly prohibited.",
      ],
    },
    {
      title: "Payment & Transfer",
      icon: "💳",
      content: [
        "Payment must be completed within the specified time frame.",
        "All taxes, title fees, and transfer costs are buyer's responsibility.",
        "We may provide secure payment channels but don't guarantee protection.",
        "Transaction completion is between buyer and seller.",
      ],
    },
    {
      title: "Platform Liability",
      icon: "⚖️",
      content: [
        "We act solely as a platform provider and marketplace facilitator.",
        "Not responsible for vehicle quality, condition, or legitimacy.",
        "Limited dispute resolution support may be provided.",
        "We are not obligated to mediate conflicts or assume liability.",
      ],
    },
    {
      title: "Prohibited Activities",
      icon: "🚫",
      content: [
        "Fraudulent activity and misrepresentation are strictly forbidden.",
        "Unauthorized automation or bot usage is prohibited.",
        "Abuse or harassment of other users will not be tolerated.",
        "Violations may result in account suspension or permanent ban.",
      ],
    },
  ];

  return (
    <MainLayout
      title="Terms and Conditions"
      subtitle="Please read these terms carefully"
      buttonText="Back"
      onClick={() => navigate("/home")}
      isnotSellMyCar={true}
    >
      <Box sx={{ width: "100%", maxWidth: "100%", px: { xs: 2, sm: 3 } }}>
        <Box
          sx={{
            width: "100%",
            py: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          {/* Welcome Section */}
          <Card
            sx={{
              width: "100%",
              mb: 4,
              borderRadius: 3,
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: { xs: "1.25rem", sm: "1.5rem" },
                }}
              >
                Welcome to DriveBidz!
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Inter",
                  lineHeight: 1.6,
                  opacity: 0.95,
                }}
              >
                By accessing or using our services, you agree to comply with
                these Terms of Use and our Privacy Policy. Please read them
                carefully before proceeding.
              </Typography>
            </CardContent>
          </Card>

          {/* Terms Sections */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            {sections.map((section, index) => (
              <Card
                key={index}
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  border: "1px solid #f0f0f0",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  {/* Section Header */}
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2.5 }}>
                    <Box
                      sx={{
                        fontSize: "1.5rem",
                        mr: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 48,
                        height: 48,
                        backgroundColor: "#f8f9fa",
                        borderRadius: "50%",
                      }}
                    >
                      {section.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "Inter",
                        fontWeight: 600,
                        color: "#2c3e50",
                        fontSize: { xs: "1.1rem", sm: "1.25rem" },
                      }}
                    >
                      {section.title}
                    </Typography>
                  </Box>

                  {/* Section Content */}
                  <Box sx={{ ml: { xs: 0, sm: 7 } }}>
                    {section.content.map((item, itemIndex) => (
                      <Box key={itemIndex} sx={{ mb: 1.5 }}>
                        <Typography
                          variant="body2"
                          sx={{
                            fontFamily: "Inter",
                            color: "#4a5568",
                            lineHeight: 1.6,
                            fontSize: "0.95rem",
                            display: "flex",
                            alignItems: "flex-start",
                          }}
                        >
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              backgroundColor: "#667eea",
                              borderRadius: "50%",
                              mr: 2,
                              mt: 0.75,
                              flexShrink: 0,
                            }}
                          />
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>

          {/* Footer Notice */}
          <Card
            sx={{
              width: "100%",
              mt: 4,
              borderRadius: 2,
              backgroundColor: "#fff8e1",
              border: "1px solid #ffd54f",
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Box sx={{ fontSize: "1.25rem", mr: 2, mt: 0.5 }}>⚠️</Box>
                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontFamily: "Inter",
                      fontWeight: 600,
                      color: "#f57c00",
                      mb: 1,
                    }}
                  >
                    Important Notice
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "Inter",
                      color: "#ef6c00",
                      lineHeight: 1.6,
                    }}
                  >
                    We reserve the right to modify these terms at any time
                    without prior notice. Continued use of the platform after
                    changes implies acceptance of the updated terms.
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default TermandCondition;
