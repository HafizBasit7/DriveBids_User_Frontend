import { useState } from "react";
import {
  Paper,
  Button,
  Typography,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import colors from "../../Style/color";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { signupUser } from "../../api/calls/auth";
import LocationInput from "../Location/LocationInput";
import { countryCodes } from "../../utils/coutrycode";
import {validateForm} from "../../utils/utils";
import { loginValidation, signupValidation, traderSignupValidation } from "../../validations/auth.validation";
import { generateEmailVerificationOtp, verifyEmailOtp } from "../../api/calls/reset";


const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();

  const [country, setCountry] = useState("+92");
  const [phone, setPhone] = useState();

  const [location, setLocation] = useState();
  const [businessAddress, setBusinessAddress] = useState();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [role, setRole] = useState("Individual");
  
  const [token, setToken] = useState();
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState();

  const navigate = useNavigate(); 

  const handleSignupClick = () => {
    toast.promise(handleSignupUser(), {
      loading: 'Creating your account',
      error: (error) => error.message,
      success: 'Account, created! Please Login now.'
    });
  };

  const handleSignupUser = async () => {
    setLoading(true);
    try {
      const body = {
        email: email ? email.trim() : email, 
        token,
        password, 
        type: role === 'Individual' ? 'individual' : 'trader',
        name,
        location, 
        phoneNumber: {
          phoneNo: Number(phone),
          countryCode: Number(country.replace("+", "")), 
        },
        businessAddress 
      };

      //Validations
      validateForm([signupValidation, loginValidation], body);
      const currentSignupType = role === 'Individual' ? 'individual' : 'trader';
      if(currentSignupType === 'trader') {
        validateForm([traderSignupValidation], body);
      }

      await signupUser(body);

      setTimeout(() => {
        navigate('/login')
      }, 2000);
    }
    catch(e) {
      setLoading(false);
      throw e;
    }
  };

  const requestEmailOtp = () => {
    toast.promise(async () => {
      await generateEmailVerificationOtp({email});
      setOtpSent(true);
    }, {
      loading: 'Requesting OTP',
      error: e => {
        if(e?.message === 'OTP is already generated, please check your email') setOtpSent(true);
        return e?.message;
      },
      success: (e) => "OTP sent to your email!",
    });
  };

  const verifyOtpEmail = () => {
    toast.promise(async () => {
      try {
        const result = await verifyEmailOtp({email, otp: parseInt(otp)});
        setToken(result.data.token);
        setOtp();
      }
      catch(e) {
        // setOtpSent(false);
        setToken(null);
        throw e;
      } 
    }, {
      loading: 'Verifying Email',
      error: e => e.message,
      success: 'Email Verified',
    });
  };

  return (
    <Paper
      elevation={4}
      sx={{
        p: 5,
        width: "100%",
        maxWidth: 450,
        py: {sm:1,md:1},
        borderRadius: 1,
        boxShadow: "-8px 0px 20px rgba(0, 0, 0, 0.4)", 
        zIndex: 1,
      }}
    >
    <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
  <ToggleButtonGroup
    value={role}
    exclusive
    onChange={(event, newRole) => {
      if (newRole !== null) setRole(newRole);
    }}
    sx={{
      width: "80%",
      display: "flex",
      justifyContent: "center",
      mt: 1,
    }}
  >
    <ToggleButton
      value="Individual"
      sx={{
        flex: 1,
        width: "100%", // Ensures full width for better clicking
        fontSize: 14,
        textTransform: "none",
        borderRadius: 2,
        px: 2, // Increased padding for a larger click area
        py: 1.5, // More height for better UI
        bgcolor: "#fff",
        fontFamily: "Inter",
        color: "#000",
        "&.Mui-selected": {
          bgcolor: colors.buttoncolor,
          color: "#fff",
          "&:hover": {
            bgcolor: colors.buttoncolor,
          },
        },
      }}
    >
      Individual
    </ToggleButton>

    <ToggleButton
      value="Trader"
      sx={{
        flex: 1,
        width: "100%", // Same as above
        fontSize: 14,
        textTransform: "none",
        borderRadius: 2,
        fontFamily: "Inter",
        px: 2, // Increased padding
        py: 1.5, // Better click target
        bgcolor: "#fff",
        color: "#000",
        "&.Mui-selected": {
          bgcolor: colors.buttoncolor,
          color: "#fff",
          "&:hover": {
            bgcolor: colors.buttoncolor,
          },
        },
      }}
    >
      Trader
    </ToggleButton>
  </ToggleButtonGroup>
</Box>


      <Typography fontWeight="bold" sx={{ mb: 0.5, fontFamily: "Outfit", fontSize: 27, textAlign: "start" }}>
        Create An Account
      </Typography>
      <Typography color="textSecondary" sx={{ mb: 2, fontFamily: "Inter", fontSize: 11, fontWeight: 350, textAlign: "start" }}>
        Sign up to enjoy the features of DriveBidz
      </Typography>
      
      <Box sx={{ mb: 2 }}>
        <TextField
          disabled={loading}
          label="Full Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              height: 50, 
              borderRadius: 2,
              "& fieldset": { borderColor: "#ccc" },
              "&:hover fieldset": { borderColor: "#2F61BF" },
              "&.Mui-focused fieldset": { borderColor: "#2F61BF" },
            },
            "& .MuiInputLabel-root": { color: "#888" }, 
            "& .MuiInputLabel-root.Mui-focused": { color: colors.buttoncolor }, 
          }}
        />
      </Box>
      
      <Box sx={{ mb: 2 }}>
        <TextField
          disabled={loading}
          label="Email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              height: 50, 
              borderRadius: 2,
              "& fieldset": { borderColor: "#ccc" },
              "&:hover fieldset": { borderColor: "#2F61BF" },
              "&.Mui-focused fieldset": { borderColor: "#2F61BF" },
            },
            "& .MuiInputLabel-root": { color: "#888" }, 
            "& .MuiInputLabel-root.Mui-focused": { color: colors.buttoncolor }, 
          }}
        />
        {(!otpSent && email) && (
          <Button
            onClick={requestEmailOtp}
            variant="text"
            sx={{
              textTransform: 'none',
              padding: 0,
              minWidth: 'auto',
              color: 'primary.main',
              fontWeight: 500,
              marginTop: 0.5,
              marginBottom: 0.3,
              fontSize: '12px',
              textDecoration: 'underline',
              '&:hover': {
                textDecoration: 'none',
                backgroundColor: 'transparent',
              },
            }}
          >
            Request OTP
          </Button>
        )}
        {(token && otpSent) && (
          <Typography
            sx={{
              color: 'success.main',
              fontWeight: 500,
              my: 0.5,
              fontSize: '13px',
            }}
          >
            Email Verified
          </Typography>
        )}
      </Box>

      {(!token && otpSent) && (
        <Box sx={{ mb: 2 }}>
          <TextField
            disabled={loading}
            label="OTP"
            fullWidth
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                height: 50, 
                borderRadius: 2,
                "& fieldset": { borderColor: "#ccc" },
                "&:hover fieldset": { borderColor: "#2F61BF" },
                "&.Mui-focused fieldset": { borderColor: "#2F61BF" },
              },
              "& .MuiInputLabel-root": { color: "#888" }, 
              "& .MuiInputLabel-root.Mui-focused": { color: colors.buttoncolor }, 
            }}
          />
          <Button
            onClick={verifyOtpEmail}
            variant="text"
            sx={{
              textTransform: 'none',
              padding: 0,
              minWidth: 'auto',
              color: 'primary.main',
              fontWeight: 500,
              marginTop: 0.5,
              marginBottom: 0.3,
              fontSize: '12px',
              textDecoration: 'underline',
              '&:hover': {
                textDecoration: 'none',
                backgroundColor: 'transparent',
              },
            }}
          >
            Verify Email
          </Button>
        </Box>
      )}

      <Box sx={{ mb: 2 }}>
        <TextField
          disabled={loading}
          label="Password"
          fullWidth
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              height: 50, 
              borderRadius: 2,
              "& fieldset": { borderColor: "#ccc" },
              "&:hover fieldset": { borderColor: "#2F61BF" },
              "&.Mui-focused fieldset": { borderColor: "#2F61BF" },
            },
            "& .MuiInputLabel-root": { color: "#888" }, 
            "& .MuiInputLabel-root.Mui-focused": { color: colors.buttoncolor }, 
          }}
        />
      </Box>

      <Box sx={{ mb: 2, display: "flex", gap: 1 }}>
  <FormControl sx={{ minWidth: 80, width: "auto" }}>
    <InputLabel
      id="country-code-label"
      sx={{
        color: "#888",
        "&.Mui-focused": { color: colors.buttoncolor },
      }}
    >
      {
        countryCodes.find((item) => item.code === country)?.dial_code || "+971"
      }
    </InputLabel>

    <Select
      labelId="country-code-label"
      id="country-code-select"
      value={country}
      disabled={loading}
      onChange={(e) => setCountry(e.target.value)}
      label="Code"
      renderValue={(selected) => selected} // Show only country code like PK, AUS, etc.
      sx={{
        height: 50,
        borderRadius: 2,
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
          {item.code} ({item.dial_code})
        </MenuItem>
      ))}
    </Select>
  </FormControl>

  <TextField
    label="Phone Number"
    disabled={loading}
    fullWidth
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    sx={{
      "& .MuiOutlinedInput-root": {
        height: 50,
        borderRadius: 2,
        "& fieldset": { borderColor: "#ccc" },
        "&:hover fieldset": { borderColor: "#2F61BF" },
        "&.Mui-focused fieldset": { borderColor: "#2F61BF" },
      },
      "& .MuiInputLabel-root": { color: "#888" },
      "& .MuiInputLabel-root.Mui-focused": { color: colors.buttoncolor },
    }}
  />
</Box>

      <Box sx={{ mb: 2 }}>
        <LocationInput value={location?.name} handleChange={(location) => setLocation(location)}/>
       
      </Box>

    

       {role === "Trader" && (
        <Box sx={{ mb: 2 }}>
          <TextField
            disabled={loading}
            label="Business Address"
            fullWidth
            value={businessAddress}
            onChange={(e) => setBusinessAddress(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                height: 50,
                borderRadius: 2,
                "& fieldset": { borderColor: "#ccc" },
                "&:hover fieldset": { borderColor: "#2F61BF" },
                "&.Mui-focused fieldset": { borderColor: "#2F61BF" },
              },
              "& .MuiInputLabel-root": { color: "#888" }, 
              "& .MuiInputLabel-root.Mui-focused": { color: colors.buttoncolor }, 
            }}
          />
        </Box>
      )}

      <Button
        onClick={handleSignupClick}
        fullWidth
        variant="contained"
        sx={{
          py: 1.5,
          fontSize: 10,
          backgroundColor: colors.buttoncolor,
          fontFamily: "Inter",
          borderRadius: 2,
          fontSize:15,
          mb:1,
          "&:hover": { backgroundColor: colors.buttoncolor },
        }}
      >
        Sign Up
      </Button>

      <Typography
        sx={{
          textAlign: "center",
          mt:1,
          cursor: "pointer",
          fontWeight: 450,
          fontFamily: "Inter",
          fontSize: 13,
          color: "#6C6C6C",
        }}
      >
        Already have an account?{" "}
        <Typography
          component="span"
          sx={{
            cursor: "pointer",
            fontWeight: 500,
            fontFamily: "Inter",
            fontSize: 15,
            color: colors.buttoncolor,
            textDecoration: "underline",
          }}
          onClick={() => navigate("/login")}
        >
          Sign in
        </Typography>
      </Typography>
    </Paper>
  );
};

export default Signup;
