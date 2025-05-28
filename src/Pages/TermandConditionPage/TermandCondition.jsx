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
      subtitle="Please read these terms carefully "
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

          <Typography paragraph sx={{ fontFamily: "Inter" }}>
          When listing a vehicle for auction, you must ensure that all
          information provided is truthful, accurate, and complete. The vehicle
          must be legally owned by you, and any existing liens, damages, or
          issues must be clearly disclosed. We reserve the right to remove
          listings that appear fraudulent or misleading. Bidding on vehicles is
          a binding action. If you place the highest bid and meet any applicable
          reserve price, you are required to complete the purchase. Failing to
          follow through on a winning bid may result in suspension or
          termination of your account. Any form of bid manipulation, including
          shill bidding, is strictly prohibited. Buyers must complete payment
          within the specified time frame after the auction ends. All applicable
          taxes, title fees, and transfer costs are the responsibility of the
          buyer unless otherwise stated. We may provide channels,
          but we do not directly handle transactions or guarantee payment
          protection unless explicitly stated. We act solely as a platform
          provider and are not responsible for the quality, condition, or
          legitimacy of any vehicle listed. In the event of a dispute between
          buyer and seller, we may offer limited support to assist in
          resolution, but we are not obligated to mediate or assume liability.
          Any misuse of the platform, including fraudulent activity,
          unauthorized automation, or abuse of other users, may result in
          account suspension or permanent banning. We reserve the right to
          modify these terms at any time without prior notice. Continued use of
          the platform after changes implies acceptance of the updated terms.
          </Typography>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default TermandCondition;
