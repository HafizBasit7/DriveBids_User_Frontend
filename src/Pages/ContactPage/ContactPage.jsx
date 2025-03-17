import { useNavigate } from "react-router-dom";
import DealsBanner from "../../Components/HomePageComponents/DealBanner";
import MainLayout from "../../Layouts/MainLayout";
import { Box } from "@mui/material";
import ContactForm from "../../Components/ContactComponents/ContatcComponent";

const ContactPage = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          gap: 4,
          px: 2,
          py: 4,
        }}
      >
        <Box sx={{ width: "100%" }}>
          <DealsBanner
            title="Contact Us"
            subtitle="Get in Touch – We're Here to Help!"
            buttonText="Back to Home "
            onClick={() => navigate("/home")}
          />
        </Box>

        
        <ContactForm />
      </Box>
    </MainLayout>
  );
};

export default ContactPage;
