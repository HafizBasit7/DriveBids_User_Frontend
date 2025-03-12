import { useState } from "react";
import {
  Paper,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Box,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import colors from "../../Style/color";

const LoginBox = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Paper
    elevation={4}
    sx={{
      p: 5,
      width: "100%",
      maxWidth: 400,
      py: 12,
      borderRadius: 1,
      boxShadow: "-8px 0px 20px rgba(0, 0, 0, 0.4)", // Left-side shadow only
      zIndex: 1,
    }}
  >
  
      {/* Title */}
      <Typography fontWeight="bold" sx={{ mb: 0.5, fontFamily: "Outfit", fontSize: 30 }}>
        Login
      </Typography>

      {/* Subtitle */}
      <Typography  color="textSecondary" sx={{ mb: 3, fontFamily: "Inter", fontSize: 15,fontWeight:400 }}>
        Please login to continue to your account.
      </Typography>

      {/* Email Input */}
      <Box sx={{ mb: 3 }}>
  <TextField
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
</Box>


      {/* Password Input with Eye Icon */}
      <Box sx={{ mb: 2 }}>
        <TextField
          label="Password"
          variant="outlined"
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
              height: 50, // Reduced height
              borderRadius: 2,
              "& fieldset": { borderColor: "#ccc" },
              "&:hover fieldset": { borderColor: "#2F61BF" },
              "&.Mui-focused fieldset": { borderColor: "#2F61BF" },
            },
            "& .MuiInputLabel-root": { color: "#888" }, // Default label color
            "& .MuiInputLabel-root.Mui-focused": { color: colors.buttoncolor }, // Active label color
          }}
        />
      </Box>

      {/* Remember Me & Forgot Password */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
        <FormControlLabel
          sx={{ fontWeight: 700, color: "#12141D" }}
          control={<Checkbox />}
          label="Remember me"
        />
        <Typography variant="body2" sx={{ cursor: "pointer", fontWeight: 500, color: colors.buttoncolor }}>
          Forgot Password?
        </Typography>
      </Box>

      {/* Login Button */}
      <Button
        fullWidth
        variant="contained"
        sx={{
          py: 1.5,
          fontSize: 10,
          backgroundColor: colors.buttoncolor,
          fontFamily: "Inter",
          borderRadius: 2,
          "&:hover": { backgroundColor: colors.buttoncolor },
        }}
      >
        Login
      </Button>

      {/* Signup Link */}
      <Typography
  sx={{
    textAlign: "center",
    mt: 2,
    cursor: "pointer",
    fontWeight: 450,
    fontFamily: "Inter",
    fontSize: 13,
    color: "#6C6C6C",
  }}
>
  Need an account?{" "}
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
  >
    Create one
  </Typography>
</Typography>

    </Paper>
  );
};

export default LoginBox;
