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
  MenuItem,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import colors from "../../Style/color";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { signupUser } from "../../api/calls/auth";
import LocationInput from "../Location/LocationInput";
import { countryCodes } from "../../utils/coutrycode";
import { validateForm } from "../../utils/utils";
import {
  loginValidation,
  signupValidation,
  traderSignupValidation,
} from "../../validations/auth.validation";
import {
  generateEmailVerificationOtp,
  verifyEmailOtp,
} from "../../api/calls/reset";

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
      loading: "Creating your account",
      error: (error) => error.message,
      success: "Account, created! Please Login now.",
    });
  };

  const handleSignupUser = async () => {
    setLoading(true);
    try {
      const body = {
        email: email ? email.trim() : email,
        token,
        password,
        type: role === "Individual" ? "individual" : "trader",
        name,
        location,
        phoneNumber: {
          phoneNo: Number(phone),
          countryCode: Number(country.replace("+", "")),
        },
        businessAddress,
      };

      //Validations
      validateForm([signupValidation, loginValidation], body);
      const currentSignupType = role === "Individual" ? "individual" : "trader";
      if (currentSignupType === "trader") {
        validateForm([traderSignupValidation], body);
      }

      await signupUser(body);

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (e) {
      setLoading(false);
      throw e;
    }
  };

  const requestEmailOtp = () => {
    toast.promise(
      async () => {
        await generateEmailVerificationOtp({ email });
        setOtpSent(true);
      },
      {
        loading: "Requesting OTP",
        error: (e) => {
          if (
            e?.message === "OTP is already generated, please check your email"
          )
            setOtpSent(true);
          return e?.message;
        },
        success: (e) => "OTP sent to your email!",
      }
    );
  };

  const verifyOtpEmail = () => {
    toast.promise(
      async () => {
        try {
          const result = await verifyEmailOtp({ email, otp: parseInt(otp) });
          console.log(result);
          setToken(result.data.token);
          setOtp();
        } catch (e) {
          // setOtpSent(false);
          setToken(null);
          throw e;
        }
      },
      {
        loading: "Verifying Email",
        error: (e) => e.message,
        success: "Email Verified",
      }
    );
  };

  return (
    <Paper
      elevation={4}
      sx={{
        p: 3,
        width: "100%",
        maxWidth: 450,
        maxHeight: "90vh",
        overflowY: "auto",
        borderRadius: 1,
        boxShadow: "-8px 0px 20px rgba(0, 0, 0, 0.4)",
        zIndex: 1,
        mt: { xs: 2, sm: 3, md: 8 },
        "&::-webkit-scrollbar": {
          width: "6px",
        },
        "&::-webkit-scrollbar-track": {
          background: "#f1f1f1",
          borderRadius: "10px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#888",
          borderRadius: "10px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "#555",
        },
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
            width: "auto",
            display: "flex",
            justifyContent: "center",
            mt: 1,
            gap: 0,
            p: { xs: 0.5, sm: 0.5, md: 0.75 },
            bgcolor: "#fff",
            borderRadius: 1.5,
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "1px",
              height: "70%",
              backgroundColor: "#E0E0E0",
              transform: "translate(-50%, -50%)",
              zIndex: 0,
              pointerEvents: "none",
            },
          }}
        >
          <ToggleButton
            value="Individual"
            sx={{
              minWidth: { xs: "100px", sm: "110px", md: "120px" },
              fontSize: { xs: 12, sm: 13, md: 14 },
              textTransform: "none",
              borderRadius: "1px 0 0 1px",
              px: { xs: 1.5, sm: 2, md: 2.5 },
              py: { xs: 0.8, sm: 1, md: 1.2 },
              bgcolor: "#fff",
              borderRadius: 2,
              fontFamily: "Inter",
              color: "#000",
              transition: "all 0.2s ease",
              borderRight: "none",
              position: "relative",
              zIndex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              userSelect: "none",
              "&:hover": {
                bgcolor: "#fff",
                transform: "translateY(-1px)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              },
              "&.Mui-selected": {
                bgcolor: colors.buttoncolor,
                color: "#fff",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                "&:hover": {
                  bgcolor: colors.buttoncolor,
                  transform: "translateY(-1px)",
                },
              },
            }}
          >
            Individual
          </ToggleButton>

          <ToggleButton
            value="Trader"
            sx={{
              minWidth: { xs: "100px", sm: "110px", md: "120px" },
              fontSize: { xs: 12, sm: 13, md: 14 },
              textTransform: "none",
              borderRadius: "0 1px 1px 0",
              fontFamily: "Inter",
              px: { xs: 1.5, sm: 2, md: 2.5 },
              py: { xs: 0.8, sm: 1, md: 1.2 },
              bgcolor: "#fff",
              color: "#000",
              borderRadius: 2,
              transition: "all 0.2s ease",
              borderLeft: "none",
              position: "relative",
              zIndex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              userSelect: "none",
              "&:hover": {
                bgcolor: "#fff",
                transform: "translateY(-1px)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              },
              "&.Mui-selected": {
                bgcolor: colors.buttoncolor,
                color: "#fff",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                "&:hover": {
                  bgcolor: colors.buttoncolor,
                  transform: "translateY(-1px)",
                },
              },
            }}
          >
            Trader
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Typography
        fontWeight="bold"
        sx={{ mb: 0.5, fontFamily: "Outfit", fontSize: 24, textAlign: "start" }}
      >
        {role === "Individual" ? "Private Account" : "Business Account"}
      </Typography>
      <Typography
        color="textSecondary"
        sx={{
          mb: 1,
          fontFamily: "Inter",
          fontSize: 11,
          fontWeight: 350,
          textAlign: "start",
        }}
      >
        {role === "Individual"
          ? "Buy or sell cars for personal use."
          : "List and manage cars as a dealer or professional trader."}
      </Typography>

      <Box sx={{ mb: 1.5 }}>
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

      <Box sx={{ mb: 1.5 }}>
        <TextField
          disabled={loading}
          label="Email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            endAdornment: !otpSent && email && (
              <InputAdornment position="end">
                <Button
                  onClick={requestEmailOtp}
                  variant="text"
                  sx={{
                    textTransform: "none",
                    color: colors.buttoncolor,
                    fontWeight: 600,
                    fontSize: "13px",
                    minWidth: "auto",
                    px: 1,
                    py: 0.5,
                    "&:hover": {
                      backgroundColor: `${colors.buttoncolor}10`,
                    },
                  }}
                >
                  Request OTP
                </Button>
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
        {token && otpSent && (
          <Typography
            sx={{
              color: "success.main",
              fontWeight: 500,
              my: 0.5,
              fontSize: "13px",
            }}
          >
            Email Verified
          </Typography>
        )}
      </Box>

      {!token && otpSent && (
        <Box sx={{ mb: 1.5 }}>
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
              "& .MuiInputLabel-root.Mui-focused": {
                color: colors.buttoncolor,
              },
            }}
          />
          <Button
            onClick={verifyOtpEmail}
            variant="contained"
            sx={{
              textTransform: "none",
              backgroundColor: colors.buttoncolor,
              color: "white",
              fontWeight: 600,
              marginTop: 1,
              fontSize: "13px",
              px: 3,
              py: 1,
              borderRadius: 2,
              "&:hover": {
                backgroundColor: colors.buttoncolor,
                opacity: 0.9,
              },
            }}
          >
            Verify Email
          </Button>
        </Box>
      )}

      <Box sx={{ mb: 1.5 }}>
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
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
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

      <Box sx={{ mb: 1.5, display: "flex", gap: 1 }}>
        <FormControl sx={{ minWidth: 100, width: "auto" }}>
          <Select
            value={country}
            disabled={loading}
            onChange={(e) => setCountry(e.target.value)}
            sx={{
              height: 50,
              borderRadius: 2,
              "& .MuiOutlinedInput-notchedOutline": { borderColor: "#ccc" },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#2F61BF",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#2F61BF",
              },
              "& .MuiSelect-select": {
                display: "flex",
                alignItems: "center",
                gap: 1,
                minWidth: "80px",
              },
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  maxHeight: 300,
                  "& .MuiMenuItem-root": {
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    minWidth: "120px",
                  },
                },
              },
            }}
          >
            {countryCodes.map((item) => (
              <MenuItem key={item.code} value={item.dial_code}>
                {item.code} {item.dial_code}
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

      <Box sx={{ mb: 1.5 }}>
        <LocationInput
          value={location?.name}
          handleChange={(location) => setLocation(location)}
        />
      </Box>

      {role === "Trader" && (
        <Box sx={{ mb: 1.5 }}>
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
              "& .MuiInputLabel-root.Mui-focused": {
                color: colors.buttoncolor,
              },
            }}
          />
        </Box>
      )}

      <FormControlLabel
        control={
          <Checkbox
            sx={{
              "&:hover": {
                backgroundColor: "transparent",
              },
              "& .MuiSvgIcon-root": {
                fontSize: 16,
              },
            }}
          />
        }
        label={
          <Typography sx={{ fontSize: 13, fontFamily: "Inter" }}>
            I agree to the{" "}
            <Typography
              component="span"
              sx={{
                color: colors.buttoncolor,
                textDecoration: "underline",
                cursor: "pointer",
                fontSize: 13,
                fontFamily: "Inter",
              }}
              onClick={() => navigate("/terms-and-conditions")}
            >
              Terms and Conditions
            </Typography>
          </Typography>
        }
        sx={{
          mb: 1,
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      />

      <Button
        onClick={handleSignupClick}
        fullWidth
        variant="contained"
        disabled={!token || loading}
        sx={{
          py: 1,
          fontSize: 13,
          backgroundColor: colors.buttoncolor,
          fontFamily: "Inter",
          borderRadius: 2,
          mb: 0.5,
          "&:hover": { backgroundColor: colors.buttoncolor },
          "&.Mui-disabled": {
            backgroundColor: "#cccccc",
            color: "#666666",
          },
        }}
      >
        {!token ? "Verify Email to Continue" : "Sign Up"}
      </Button>

      <Typography
        sx={{
          textAlign: "center",
          mt: 0.5,
          mb: 0.5,
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
