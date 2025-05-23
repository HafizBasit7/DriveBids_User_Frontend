import { Box, Typography, Divider, Paper, Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";

const BuyerandSellerProtection = () => {
  document.title = "Buyer and Seller Protection";
  const navigate = useNavigate();

  const buyerProtections = [
    {
      title: "Vehicle Verification",
      icon: "✅",
      content: [
        "Comprehensive documentation checks for all listed vehicles",
        "Mandatory vehicle history reports and condition assessments",

        "Inspection reports",
      ],
    },

    {
      title: "Dispute Resolution",
      icon: "⚖️",
      content: [
        "Dedicated dispute resolution team for quick assistance",
        "Mediation services for transaction conflicts",

        "Fair resolution based on documented evidence",
      ],
    },
  ];

  const sellerProtections = [
    {
      title: "Buyer Verification",
      icon: "🔍",
      content: [
        "Identity verification for all registered buyers",

        "Prevention of fraudulent or fake buyer accounts",
      ],
    },
  ];

  const platformCommitments = [
    {
      title: "Fraud Prevention",
      icon: "🛡️",
      content: [
        "Advanced fraud detection algorithms and monitoring",
        "24/7 security team monitoring suspicious activities",
        "Immediate action against policy violations",
        "Regular security audits and system improvements",
      ],
    },
    {
      title: "Customer Support",
      icon: "🎧",
      content: ["Dedicated support team available during business hours"],
    },
    {
      title: "Continuous Improvement",
      icon: "📈",
      content: [
        "Regular platform updates and security enhancements",
        "User feedback integration for service improvements",
        "Industry best practices implementation",
        "Compliance with evolving regulatory requirements",
      ],
    },
  ];

  const ProtectionSection = ({ title, protections, bgColor = "#fff" }) => (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 3,
          fontFamily: "Inter",
          color: "primary.main",
          textAlign: "center",
        }}
      >
        {title}
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {protections.map((protection, index) => (
          <Paper
            key={index}
            elevation={2}
            sx={{
              p: { xs: 3, sm: 4 },
              borderRadius: 3,
              border: "1px solid",
              borderColor: "grey.200",
              backgroundColor: bgColor,
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
                {protection.icon}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  fontFamily: "Inter",
                  color: "primary.main",
                }}
              >
                {protection.title}
              </Typography>
            </Box>

            <Box sx={{ pl: { xs: 0, sm: 6 } }}>
              {protection.content.map((item, itemIndex) => (
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
    </Box>
  );

  return (
    <MainLayout
      title="Buyer and Seller Protection"
      subtitle="Your safety and security are our top priorities"
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
            color: "black",
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
            }}
          >
            Buyer and Seller Protection
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Inter",
              textAlign: "center",
              lineHeight: 1.6,
            }}
          >
            At DriveBidz, we are committed to ensuring a safe and secure
            environment for both buyers and sellers. Our comprehensive
            protection policies safeguard your interests throughout the entire
            vehicle transaction process.
          </Typography>
        </Paper>

        {/* Protection Level Indicator */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <Chip
            label="🛡️ Premium Protection Level "
            variant="outlined"
            sx={{
              fontFamily: "Inter",
              fontSize: "0.875rem",
              fontWeight: "medium",
            }}
          />
        </Box>

        {/* Buyer Protection Section */}
        <ProtectionSection
          title="🛒 Buyer Protection"
          protections={buyerProtections}
        />

        <Divider sx={{ my: 5 }} />

        {/* Seller Protection Section */}
        <ProtectionSection
          title="💼 Seller Protection"
          protections={sellerProtections}
        />

        <Divider sx={{ my: 5 }} />

        {/* Platform Commitments Section */}
        <ProtectionSection
          title="🏢 Our Platform Commitments"
          protections={platformCommitments}
        />

        {/* Emergency Contact */}
        <Paper
          elevation={0}
          sx={{
            mt: 4,
            p: { xs: 3, sm: 4 },
            backgroundColor: "#F7DD2F",
            borderRadius: 3,
            border: "2px solid",
            borderColor: "error.main",
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
            🚨 Emergency Support
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              lineHeight: 1.7,
              color: "error.dark",
              mb: 2,
            }}
          >
            If you encounter any fraudulent activity or urgent issues during a
            transaction:
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              lineHeight: 1.7,
              color: "error.dark",
            }}
          >
            <strong>Emergency Hotline:</strong> 1-800-DRIVEBIDZ (1-800-374-8324)
            <br />
            <strong>Email:</strong> emergency@drivebidz.com
            <br />
            <strong>Response Time:</strong> Within 1 hour during business hours
          </Typography>
        </Paper>

        {/* Trust Indicators */}
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Divider sx={{ mb: 3 }} />
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Inter",
              color: "text.secondary",
              mb: 2,
            }}
          >
            🏆 A+ Better Business Bureau Rating | 🌟 99.9% Customer Satisfaction
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Inter",
              color: "text.secondary",
            }}
          ></Typography>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default BuyerandSellerProtection;
