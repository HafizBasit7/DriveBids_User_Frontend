import { Box, Typography, Avatar, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";
import DealsBanner from "../../Components/HomePageComponents/DealBanner";
import colors from "../../Style/color";

const CustomInput = ({ label, placeholder }) => (
  <Box>
    <Typography fontWeight={600} mb={0.5} fontSize={14}>
      {label}
    </Typography>
    <Box
      component="input"
      placeholder={placeholder}
      sx={{
        width: "100%",
        p: 1.5,
        borderRadius: "8px",
        backgroundColor: "#FAFAFA",
        fontSize: 14,
        outline: "none",
        border: "none", // Removed border
        "&::placeholder": { color: "#A0A0A0" },
      }}
    />
  </Box>
);

const EditProfilePage = () => {
  const navigate = useNavigate();

  return (
    <MainLayout
      title="Profile"
      subtitle="Edit Your Profile"
      buttonText="Back"
      onClick={() => navigate("/home")}
    >
      <Box
        width="70%"
        mx="auto"
        my={4}
        p={{ xs: 2, md: 4 }}
        borderRadius={2}
        boxShadow={2}
        bgcolor="#fff"
      >
        {/* Header */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
        >
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar src="/profile.png" sx={{ width: 70, height: 70 }} />
            <Box>
              <Typography variant="h6" sx={{ color: "#000" }}>
                Adriana
              </Typography>
              <Typography color="text.secondary">
                Adriana123@gmail.com
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Input Fields */}
        <Grid container spacing={2} mt={3}>
          <Grid item xs={12} sm={6}>
            <CustomInput label="Full Name" placeholder="Your First Name" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomInput label="Phone Number" placeholder="Your Phone Number" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomInput label="Gender" placeholder="Your Gender" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomInput label="Country" placeholder="Your Country" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomInput label="Language" placeholder="Your Language" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomInput label="Time Zone" placeholder="Your Time Zone" />
          </Grid>
        </Grid>

        {/* Email Section */}
        <Box mt={4}>
          <Typography fontWeight={600} mb={1} sx={{ fontSize: 16 }}>
            My Email Address
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            bgcolor="#F9F9F9"
            p={2}
            borderRadius={2}
          >
            <Box display="flex" alignItems="center" gap={1}>
              <Avatar sx={{ width: 24, height: 24, bgcolor: "#1976D2" }}>
                📧
              </Avatar>
              <Box>
                <Typography fontSize={14}>Adriana123@gmail.com</Typography>
                <Typography fontSize={12} color="text.secondary">
                  1 month ago
                </Typography>
              </Box>
            </Box>
          </Box>

          <Button
            sx={{
              mt: 2,
              textTransform: "none",
              color: colors.buttoncolor,
              border: "1px solid #2F61BF",
              backgroundColor: "#EAEFF9",
            }}
          >
            + Add Email Address
          </Button>
        </Box>

        {/* Next Button aligned to bottom right */}
        <Box display="flex" justifyContent="flex-end" mt={2}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              textTransform: "none",
              px: 4,
              mt: { xs: 2, md: 0 },
              backgroundColor: colors.buttoncolor,
            }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default EditProfilePage;
