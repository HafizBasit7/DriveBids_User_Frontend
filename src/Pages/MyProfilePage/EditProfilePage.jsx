import { Box, Typography, Avatar, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";
import colors from "../../Style/color";
import { useAuth } from "../../context/auth.context";
import { useState } from "react";
import toast from "react-hot-toast";
import { updateProfile } from "../../api/calls/auth";

const CustomInput = ({ label, placeholder, value, setValue, disabled }) => (
  <Box>
    <Typography fontWeight={600} mb={0.5} fontSize={14}>
      {label}
    </Typography>
    <Box
      disabled={disabled}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      component="input"
      placeholder={placeholder}
      sx={{
        width: "100%",
        p: 1.5,
        borderRadius: "8px",
        backgroundColor: "#FAFAFA",
        fontSize: 14,
        outline: "none",
        border: "none",
        "&::placeholder": { color: "#A0A0A0" },
      }}
    />
  </Box>
);

const EditProfilePage = () => {
  const navigate = useNavigate();
  const {authState, dispatch} = useAuth();
  const user = authState.user;
  
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phoneNumber);
  const [city, setCity] = useState(user.city);
  const [country, setCountry] = useState(user.country);

  //Trader
  const [businessAddress, setBusinessAddress] = useState(user.businessAddress);

  const handleSaveClick = () => {
    toast.promise(handleSave(), {
      loading: 'Saving profile...',
      error: (error) => error.message,
      success: 'Profile Updated!'
    });
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const data = await updateProfile({name, city, country, phoneNumber: phone, businessAddress});
      dispatch({type: 'setUser', payload: data.data.user});
    } catch(e) {
      throw e;
    } finally {
      setLoading(false);
    }
  };

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

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
        >
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar src={user.imgUrl || 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'} sx={{ width: 70, height: 70 }} />
            <Box>
              <Typography variant="h6" sx={{ color: "#000" }}>
                {user.name}
              </Typography>
              <Typography color="text.secondary">
                {user.email}
              </Typography>
            </Box>
          </Box>
        </Box>


        <Grid container spacing={2} mt={3}>
          <Grid item xs={12} sm={6}>
            <CustomInput disabled={loading} value={name} setValue={setName} label="Full Name" placeholder="Your First Name" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomInput disabled={loading} value={phone} setValue={setPhone} label="Phone Number" placeholder="Your Phone Number" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomInput disabled={loading} value={city} setValue={setCity} label="City" placeholder="Enter city" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomInput disabled={loading} value={country} setValue={setCountry} label="Country" placeholder="Your Country" />
          </Grid>
          {user.type == 'trader' && (
            <Grid item xs={12} sm={6}>
              <CustomInput disabled={loading} value={businessAddress} setValue={setBusinessAddress} label="Language" placeholder="Your Language" />
            </Grid>
          )}
          {/* <Grid item xs={12} sm={6}>
            <CustomInput label="Time Zone" placeholder="Your Time Zone" />
          </Grid> */}
        </Grid>

        {/* TODO: OK  */}
        {/* <Box mt={4}>
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
        </Box> */}


        <Box display="flex" justifyContent="flex-end" mt={2}>
          <Button
            disabled={loading}
            onClick={handleSaveClick}
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
