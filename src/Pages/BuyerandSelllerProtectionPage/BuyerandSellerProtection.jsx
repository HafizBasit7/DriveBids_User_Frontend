import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";

const BuyerandSellerProtection = () => {
  document.title = "Buyer and Seller Protection";
  const navigate = useNavigate();

  return (
    <MainLayout
      title="Buyer and Seller Protection"
      subtitle="Learn about our protection policies"
      buttonText="Back"
      onClick={() => navigate("/home")}
      isnotSellMyCar={true}
    >
      <Box sx={{ width: "100%", maxWidth: "100%", px: { xs: 2, sm: 3 } }}>
        <Box sx={{ width: "100%", py: 3, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <Typography variant="h6" sx={{ mb: 4, fontFamily: "Inter" }}>
            At DriveBidz, we are committed to ensuring a safe and secure environment for both buyers and sellers. Our protection policies are designed to safeguard your interests throughout the vehicle transaction process.
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", mb: 3, fontFamily: "Inter" }}>
            Buyer Protection
          </Typography>

          <Typography paragraph sx={{ mb: 3, fontFamily: "Inter" }}>
            As a buyer, you are protected by our comprehensive verification system. All listed vehicles undergo thorough documentation checks, and sellers are required to provide accurate information about the vehicle's condition, history, and legal status. We implement  processing and escrow services to ensure your funds are protected until the transaction is completed. In case of any discrepancies between the listed vehicle and the actual condition, our dispute resolution team will assist you in resolving the matter.
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", mb: 3, fontFamily: "Inter" }}>
            Seller Protection
          </Typography>

          <Typography paragraph sx={{ fontFamily: "Inter" }}>
            Sellers on our platform benefit from our buyer verification process  handling. We verify buyer identities and ensure they have the necessary funds before allowing them to participate in auctions. Our platform provides detailed vehicle history reports and condition documentation to help you present your vehicle accurately. In case of any payment issues or disputes, our support team will work with you to resolve the situation. We also offer insurance options for vehicle transportation and provide guidance on proper documentation and legal requirements for vehicle sales.
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", mb: 3, fontFamily: "Inter" }}>
            Our Commitment
          </Typography>

          <Typography paragraph sx={{ fontFamily: "Inter" }}>
            We continuously monitor and improve our protection measures to ensure a fair and secure marketplace. Our team is available to assist both buyers and sellers throughout the transaction process. We maintain strict policies against fraud and misrepresentation, and we take immediate action against any violations of our terms of service. Your trust and safety are our top priorities, and we are dedicated to providing a reliable platform for vehicle transactions.
          </Typography>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default BuyerandSellerProtection;
