import { Box, Typography, Avatar, Button, Grid, Select, FormControl, InputLabel, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";
import colors from "../../Style/color";
import { useAuth } from "../../context/auth.context";
import { useState } from "react";
import toast from "react-hot-toast";
import { updateProfile } from "../../api/calls/auth";
import { countryCodes } from "../../utils/coutrycode";
import LocationInput from "../../Components/Location/LocationInput"

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
        width: '100%',
        p: 1.5,
        borderRadius: "8px",
        backgroundColor: "#FAFAFA",
        fontSize: 14,
        outline: "none",
        border: "1px solid #ccc",
        "&::placeholder": { color: "#A0A0A0" },
      }}
    />
  </Box>
);

const EditProfilePage = () => {
  document.title = 'Edit Profile';
  const navigate = useNavigate();
  const {authState, dispatch} = useAuth();
  const user = authState.user;
  
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState(user.name);
  const [location, setLocation] = useState(user.location);

  const [country, setCountry] = useState(`+${user.phoneNumber.countryCode}`);
  const [phone, setPhone] = useState(user.phoneNumber.phoneNo.toString());
  
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
      const body = {
        name,
        location,
        phoneNumber:  {
          phoneNo: Number(phone),
          countryCode: Number(country.replace("+", "")),
        },
        businessAddress,
      };

      if(user.type !== 'trader') {
        delete body['businessAddress'];
      }

      const data = await updateProfile(body);
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
        width={{ xs: '95%', sm: '90%', md: '80%', lg: '70%' }}
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
          gap={2}
        >
          <Box display="flex" alignItems="center" gap={2} flexWrap="wrap">
            <Avatar src={user.imgUrl || 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'} sx={{ width: { xs: 50, sm: 70 }, height: { xs: 50, sm: 70 } }} />
            <Box>
              <Typography variant="h6" sx={{ color: "#000", fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                {user.name}
              </Typography>
              <Typography color="text.secondary" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
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
  <Typography fontWeight={600} mb={0.5} fontSize={14}>
    Phone Number
  </Typography>
  <Box sx={{ display: "flex", gap: 1, flexDirection: { xs: 'column', sm: 'row' } }}>
    <FormControl sx={{ minWidth: { xs: '100%', sm: 80 }, width: { xs: '100%', sm: 'auto' } }}>
      {/* <InputLabel
        id="country-code-label"
      
        sx={{
          color: "#888",
          "&.Mui-focused": { color: colors.buttoncolor },
        }}
      >
        {countryCodes.find((item) => item.code === country)?.dial_code || "+971"}
      </InputLabel> */}
      <Select
        labelId="country-code-label"
        value={country}
        disabled={loading}
        onChange={(e) => setCountry(e.target.value)}
        renderValue={(selected) =>
          countryCodes.find((item) => item.code === selected)?.dial_code || selected
        }
        sx={{
          height: 40,
          borderRadius: 2,
          backgroundColor: "#FAFAFA",

          "& .MuiOutlinedInput-notchedOutline": { borderColor: "#ccc" },
          "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#2F61BF" },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#2F61BF" },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              maxHeight: 5 * 38,
              overflowY: "auto",
              "&::-webkit-scrollbar": { width: 0 },
              "&::-webkit-scrollbar-thumb": { backgroundColor: "transparent" },
            },
          },
        }}
      >
        {countryCodes.map((item) => (
          <MenuItem key={item.code} value={item.dial_code}>
            {`${item.code} (${item.dial_code})`}
          </MenuItem>
        ))}
      </Select>
    </FormControl>

    <Box
      disabled={loading}
      component="input"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      placeholder="Your Phone Number"
      sx={{
        flex: 1,
        p: 1.5,
        borderRadius: "8px",
        backgroundColor: "#FAFAFA",
        fontSize: 14,
        outline: "none",
        border: "1px solid #ccc",
        "&::placeholder": { color: "#A0A0A0" },
      }}
    />
  </Box>
</Grid>

          {/* <Grid item xs={12} sm={6}>
            <CustomInput disabled={loading} value={city} setValue={setCity} label="City" placeholder="Enter city" />
          </Grid> */}
          <Grid item xs={12} sm={6}>
            <LocationInput 
              value={location?.name} 
              handleChange={(location) => setLocation(location)}
            >
              <CustomInput disabled={loading} setValue={() => {}} placeholder={location?.name} label="Location" />
            </LocationInput>
          </Grid>

          {user.type == 'trader' && (
            <Grid item xs={12} sm={6}>
              <CustomInput disabled={loading} value={businessAddress} setValue={setBusinessAddress} label="Business Address" placeholder="Business Address" />
            </Grid>
          )}
          {/* <Grid item xs={12} sm={6}>
            <CustomInput label="Time Zone" placeholder="Your Time Zone" />
          </Grid> */}
        </Grid>

       


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
