import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";

const TermandCondition = () => {
  document.title = "Terms and Conditions";
  const navigate = useNavigate();

  return (
    <MainLayout
      title="Terms and Conditions"
      subtitle="Please read these terms carefully"
      buttonText="Back"
      onClick={() => navigate("/home")}
      isnotSellMyCar={true}
    >
      <Box sx={{ width: "100%", maxWidth: "100%",  px: { xs: 2, sm: 3 } }}>
        <Box sx={{ width: "100%", py: 3, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
       
          
          <Typography variant="h6" sx={{ mb: 4, fontFamily: "Inter" }}>
          Welcome to DriveBidz! By accessing or using our services, you agree to
          comply with these Terms of Use and our Privacy Policy. Please read
          them carefully.          </Typography>

          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", mb: 3, fontFamily: "Inter" }}>
            Terms and Conditions
          </Typography>

          <Typography paragraph sx={{ mb: 3, fontFamily: "Inter" }}>
          To use this platform, you must be at least 18 years old and capable of
          forming a legally binding agreement. When creating an account, you
          agree to provide accurate, up-to-date information and to keep your
          login credentials secure. You are solely responsible for any activity
          conducted under your account.
          </Typography>

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
          buyer unless otherwise stated. We may provide secure payment channels,
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
