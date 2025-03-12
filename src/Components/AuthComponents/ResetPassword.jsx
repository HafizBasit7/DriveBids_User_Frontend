import { useState } from "react";
import {
  Paper,
  Button,
  Typography,
 
  Box,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import colors from "../../Style/color";

const ResetPassword = () => {
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
      py: 13,
      borderRadius: 1,
      boxShadow: "-8px 0px 20px rgba(0, 0, 0, 0.4)", 
      zIndex: 1,
    }}
  >
  
      {/* Title */}
      <Typography fontWeight="bold" sx={{ mb: 0.5, fontFamily: "Outfit", fontSize: 30 }}>
      Reset Password      </Typography>

      {/* Subtitle */}
      <Typography  color="textSecondary" sx={{ mb: 5, fontFamily: "Inter", fontSize: 15,fontWeight:350 }}>
      Enter your new password.    </Typography>

 <Box sx={{ mb: 3 }}>
        <TextField
          label=" New Password"
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


      {/* Password Input with Eye Icon */}
      <Box sx={{ mb: 5 }}>
        <TextField
          label=" Confirm New Password"
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
        Reset Password 
      </Button>


    </Paper>
  );
};

export default ResetPassword;
