import { Box, Typography, Avatar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";

import colors from "../../Style/color";
import { useAuth } from "../../context/auth.context";
import { useState } from "react";
import toast from "react-hot-toast";
import { updatePassword } from "../../api/calls/auth";
import { validateForm } from "../../utils/utils";
import { changePasswordValidation } from "../../validations/auth.validation";

const PasswordInput = ({ label, placeholder, disabled, setPassword, password }) => (
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
        disabled={disabled}
        component="input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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
  const {authState} = useAuth();
  const user = authState.user;

  const [loading, setLoading] = useState(false);

  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  const handlePasswordChangeClick = () => {
    toast.promise(handlePasswordChange(), {
      loading: 'Changing password',
      error: (error) => error.message,
      success: 'Password updated!'
    });
  };

  const handlePasswordChange = async () => {
    setLoading(true);
    try {
      //Validate
      validateForm([changePasswordValidation], {oldPassword, newPassword});

      await updatePassword({oldPassword, newPassword});
      setNewPassword('');
      setOldPassword('');
    }
    catch(e) {
      throw e;
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout  title="Profile"
    subtitle="Change Password"
    buttonText="Back"
    onClick={() => navigate("/home")}>
  

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
          <Avatar src={user.imgUrl || 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'} sx={{ width: 70, height: 70 }} />
          <Box>
            <Typography variant="h6">{user.name}</Typography>
            <Typography color="text.secondary">{user.email}</Typography>
          </Box>
        </Box>

        <Box mt={4}>
          <PasswordInput disabled={loading} password={oldPassword} setPassword={setOldPassword} label="Current Password" placeholder="Current Password" />
          <PasswordInput disabled={loading} password={newPassword} setPassword={setNewPassword} label="New Password" placeholder="New Password" />
          {/* <PasswordInput label="Confirm New Password" placeholder="Confirm New Password" /> */}
        </Box>

        <Box display="flex" justifyContent="flex-end" mt={3}>
        <Button
            disabled={loading}
            onClick={handlePasswordChangeClick}
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
