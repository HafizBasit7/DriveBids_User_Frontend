import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";

const PrivacyPolicy = () => {
  document.title = "Privacy Policy";
  const navigate = useNavigate();

  return (
    <MainLayout
      title="Privacy Policy"
      subtitle="Please read our privacy policy carefully"
      buttonText="Back"
      onClick={() => navigate("/home")}
      isnotSellMyCar={true}
    >
      <Box sx={{ width: "100%", maxWidth: "100%", px: { xs: 2, sm: 3 } }}>
        <Box sx={{ width: "100%", py: 3, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <Typography variant="h6" sx={{ mb: 4, fontFamily: "Inter" }}>
            Welcome to DriveBidz! This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform. Please read this privacy policy carefully.
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", mb: 3, fontFamily: "Inter" }}>
            Privacy Policy
          </Typography>

          <Typography paragraph sx={{ mb: 3, fontFamily: "Inter" }}>
            We collect information that you provide directly to us, including but not limited to your name, email address, phone number, and vehicle information when you create an account, list a vehicle, or participate in auctions. We also collect information about your use of our platform, including your browsing history, search queries, and interactions with other users.
          </Typography>

          <Typography paragraph sx={{ fontFamily: "Inter" }}>
            We use the information we collect to provide, maintain, and improve our services, to process your transactions, to communicate with you about your account or our services, and to personalize your experience. We may also use your information to detect and prevent fraud, to comply with legal obligations, and to protect our rights and the rights of our users. We may share your information with third-party service providers who assist us in operating our platform, with law enforcement when required by law, and with other users as necessary to facilitate transactions. We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. You have the right to access, correct, or delete your personal information, and to object to or restrict certain processing of your data. We may update this privacy policy from time to time, and we will notify you of any material changes by posting the new policy on this page. Your continued use of our platform after such modifications will constitute your acknowledgment of the modified policy.
          </Typography>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default PrivacyPolicy;
