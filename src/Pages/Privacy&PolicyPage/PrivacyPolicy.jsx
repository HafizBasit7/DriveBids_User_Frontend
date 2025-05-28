import { Box, Typography, Divider, Paper, Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";

const PrivacyPolicy = () => {
  document.title = "Privacy Policy";
  const navigate = useNavigate();

  const sections = [
    {
      title: "Information We Collect",
      icon: "📊",
      content: [
        "Personal information you provide directly (name, email, phone number, address)",
        "Vehicle information when listing or bidding on auctions",
        "Account credentials and profile information",
        "Payment and billing information for transactions",

        "Usage data including browsing history, search queries, and platform interactions",
      ],
    },
    {
      title: "How We Use Your Information",
      icon: "🔧",
      content: [
        "Provide, maintain, and improve our auction platform services",
        "Process transactions and facilitate communication between buyers and sellers",
        "Personalize your experience and show relevant vehicle listings",
        "Send important account notifications and service updates",
        "Detect and prevent fraud, abuse, and security threats",
        "Comply with legal obligations and protect our rights and users' rights",
      ],
    },
    {
      title: "Information Sharing",
      icon: "🤝",
      content: [
        "With other users as necessary to facilitate auction transactions",
        "With third-party service providers who assist in platform operations",
        "With payment processors for secure transaction handling",
        "With law enforcement when required by legal obligations",
      ],
    },
    {
      title: "Data Security",
      icon: "🔒",
      content: [
        "Industry-standard encryption for data transmission and storage",

        "Secure servers with restricted access and monitoring",
        "Employee training on data protection and privacy practices",
      ],
    },

    {
      title: "Cookies & Tracking",
      icon: "🍪",
      content: [
        "Essential cookies for platform functionality and security",
        "Analytics cookies to understand user behavior and improve services",
      ],
    },
    {
      title: "Data Retention",
      icon: "📅",
      content: [
        "Account information retained while your account is active",
        "Transaction records kept for legal and business purposes",
        "Communications stored for customer service and dispute resolution",

        "Some information may be retained longer for legal compliance",
      ],
    },
  ];

  return (
    <MainLayout
      title="Privacy Policy"
      subtitle="Your privacy is important to us. Learn how we protect your data"
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
            Privacy Policy
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
            Welcome to DriveBidz! This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you use our
            platform. Your privacy is our priority.
          </Typography>
        </Paper>

        {/* Last Updated */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <Chip
            label="Effective Date: May 2025"
            variant="outlined"
            sx={{
              fontFamily: "Inter",
              fontSize: "0.875rem",
            }}
          />
        </Box>

        {/* Privacy Sections */}
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

        {/* GDPR Notice */}
        <Paper
          elevation={0}
          sx={{
            mt: 4,
            p: { xs: 3, sm: 4 },
            background: "#F7DD2F",
            borderRadius: 3,
            border: "2px solid",
            borderColor: "info.main",
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
            🌍 International Users
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              lineHeight: 1.7,
              color: "info.dark",
              mb: 2,
            }}
          >
            For users in the European Union, we comply with GDPR requirements.
            You have additional rights including the right to data portability
            and the right to be forgotten.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              lineHeight: 1.7,
              color: "info.dark",
            }}
          >
            For California residents, we comply with CCPA requirements regarding
            personal information disclosure and sale.
          </Typography>
        </Paper>

        {/* Contact Information */}
        <Paper
          elevation={0}
          sx={{
            mt: 3,
            p: { xs: 3, sm: 4 },
            background: "#F7DD2F",
            borderRadius: 3,
            border: "2px solid",
            borderColor: "success.main",
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
            📧 Contact Our Privacy Team
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              lineHeight: 1.7,
              color: "success.dark",
              mb: 1,
            }}
          >
            <strong>Email:</strong> privacy@drivebidz.com
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              lineHeight: 1.7,
              color: "success.dark",
              mb: 1,
            }}
          >
            <strong>Mail:</strong> DriveBidz Privacy Officer, 123 Auction
            Street, City, State 12345
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              lineHeight: 1.7,
              color: "success.dark",
            }}
          >
            <strong>Response Time:</strong> We respond to privacy requests
            within 30 days
          </Typography>
        </Paper>

        {/* Updates Notice */}
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Divider sx={{ mb: 3 }} />
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Inter",
              color: "text.secondary",
              mb: 1,
            }}
          >
            This Privacy Policy may be updated periodically. We will notify
            users of material changes via email or platform notification.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Inter",
              color: "text.secondary",
            }}
          >
            Last updated: December 2024 | Version 2.1
          </Typography>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default PrivacyPolicy;
