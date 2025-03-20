import { Box, Typography, Avatar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";
import DealsBanner from "../../Components/HomePageComponents/DealBanner";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import colors from "../../Style/color";

const PasswordInput = ({ label, placeholder }) => (
  <Box mb={2}>
    <Typography fontWeight={600} mb={0.5} fontSize={15}>
      {label}
    </Typography>
    <Box
      display="flex"
      alignItems="center"
      bgcolor="#FAFAFA"
      borderRadius="8px"
      p={1.5}
    >
      <Box
        component="input"
        type="password"
        placeholder={placeholder}
        sx={{
          flex: 1,
          border: "none",
          backgroundColor: "transparent",
          outline: "none",
          fontSize: 14,
          "&::placeholder": { color: "#A0A0A0" },
        }}
      />
    
    </Box>
  </Box>
);

const ChangePasswordPage = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <Box width="100%">
        <DealsBanner
          title="Profile"
          subtitle="Change Password"
          buttonText="Back"
          onClick={() => navigate("/home")}
        />
      </Box>

      <Box
    width="70%"
        mx="auto"
        my={4}
        p={{ xs: 2, md: 4 }}
        borderRadius={2}
        boxShadow={2}
        bgcolor="#fff"
      >
        <Box display="flex" alignItems="center" gap={2}>
          <Avatar src="/profile.png" sx={{ width: 70, height: 70 }} />
          <Box>
            <Typography variant="h6">Adriana</Typography>
            <Typography color="text.secondary">Adriana123@gmail.com</Typography>
          </Box>
        </Box>

        <Box mt={4}>
          <PasswordInput label="Current Password" placeholder="Current Password" />
          <PasswordInput label="New Password" placeholder="New Password" />
          <PasswordInput label="Confirm New Password" placeholder="Confirm New Password" />
        </Box>

        <Box display="flex" justifyContent="flex-end" mt={3}>
        <Button
            variant="contained"
            color="primary"
            sx={{ textTransform: "none", px: 4, mt: { xs: 2, md: 0 },backgroundColor:colors.buttoncolor }}
          >
           Change Password
          </Button>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default ChangePasswordPage;
