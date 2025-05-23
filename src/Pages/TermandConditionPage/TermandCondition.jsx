import { Box, Typography, Divider, Paper, Chip } from "@mui/material";
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
      subtitle="Please read these terms carefully before using our platform"
      buttonText="Back to Home"
      onClick={() => navigate("/home")}
      isnotSellMyCar={true}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "100%",
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 2, sm: 3 },
        }}
      >
        {/* Header Section */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, sm: 4 },
            mb: 4,
            background: "#F7DD2F",
            color: "white",
            borderRadius: 3,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontFamily: "Inter",
              textAlign: "center",
              color: "black",
            }}
          >
            Terms and Conditions
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Inter",
              textAlign: "center",
              opacity: 0.95,
              lineHeight: 1.6,
              color: "black",
            }}
          >
            Welcome to DriveBidz! By accessing or using our services, you agree
            to comply with these Terms of Use and our Privacy Policy. Please
            read them carefully before proceeding.
          </Typography>
        </Paper>

        {/* Last Updated */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <Chip
            label="Last Updated: May 2025"
            variant="outlined"
            sx={{
              fontFamily: "Inter",
              fontSize: "0.875rem",
            }}
          />
        </Box>

        {/* Terms Sections */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {sections.map((section, index) => (
            <Paper
              key={index}
              elevation={2}
              sx={{
                p: { xs: 3, sm: 4 },
                borderRadius: 3,
                border: "1px solid",
                borderColor: "grey.200",
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Typography
                  sx={{
                    fontSize: "2rem",
                    mr: 2,
                    filter: "grayscale(0.3)",
                  }}
                >
                  {section.icon}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Inter",
                    color: "primary.main",
                  }}
                >
                  {section.title}
                </Typography>
              </Box>

              <Box sx={{ pl: { xs: 0, sm: 6 } }}>
                {section.content.map((item, itemIndex) => (
                  <Box
                    key={itemIndex}
                    sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}
                  >
                    <Typography
                      sx={{
                        color: "primary.main",
                        mr: 2,
                        fontWeight: "bold",
                        minWidth: "8px",
                      }}
                    >
                      •
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Inter",
                        lineHeight: 1.7,
                        color: "text.primary",
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          ))}
        </Box>

        {/* Important Notice */}
        <Paper
          elevation={0}
          sx={{
            mt: 4,
            p: { xs: 3, sm: 4 },
            background: "#F7DD2F",
            borderRadius: 3,
            border: "2px solid",
            borderColor: "warning.main",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontFamily: "Inter",
              color: "black",
              display: "flex",
              alignItems: "center",
            }}
          >
            ⚠️ Important Notice
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              lineHeight: 1.7,
              color: "black",
            }}
          >
            We reserve the right to modify these terms at any time without prior
            notice. Continued use of the platform after changes implies
            acceptance of the updated terms. For questions regarding these
            terms, please contact our support team.
          </Typography>
        </Paper>

        {/* Contact Section */}
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Divider sx={{ mb: 3 }} />
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Inter",
              color: "text.secondary",
            }}
          >
            Questions about these terms? Contact us at{" "}
            <Typography
              component="span"
              sx={{
                color: "primary.main",
                fontWeight: "medium",
                textDecoration: "underline",
              }}
            >
              legal@drivebidz.com
            </Typography>
          </Typography>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default TermandCondition;
