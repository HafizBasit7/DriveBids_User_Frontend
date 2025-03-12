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
  ToggleButtonGroup
} from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import colors from "../../Style/color";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState(""); // For trader
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("Individual"); 

  return (
    <Paper
      elevation={4}
      sx={{
        p: 5,
        width: "100%",
        maxWidth: 400,
        py: 12,
        borderRadius: 1,
        boxShadow: "-8px 0px 20px rgba(0, 0, 0, 0.4)", 
        zIndex: 1,
      }}
    >
     <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
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
     
    }}
  >
    <ToggleButton
      value="Individual"
      sx={{
        flex: 1,
        fontSize: 12,
        textTransform: "none",
        borderRadius:2,
        px: 0.5,
        py: 1.5,
        my:1,
        bgcolor: "#fff",
        fontFamily:"Inter",
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
        fontSize: 12,
        textTransform: "none",
        borderRadius: 2,
        fontFamily:"Inter",
        px: 0.5,
        py: 1.5,
        m:1,
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

      <Typography fontWeight="bold" sx={{ mb: 0.5, fontFamily: "Outfit", fontSize: 30, textAlign: "start" }}>
        Create An Account
      </Typography>
      <Typography color="textSecondary" sx={{ mb: 2, fontFamily: "Inter", fontSize: 12, fontWeight: 350, textAlign: "start" }}>
        Sign up to enjoy the features of DriveBidz
      </Typography>
      <Box sx={{ mb: 2 }}>
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

      <Box sx={{ mb: 2 }}>
        <TextField
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
       {role === "Trader" && (
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Phone Number"
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
      )}

      <Button
        fullWidth
        variant="contained"
        sx={{
          py: 1.5,
          fontSize: 10,
          backgroundColor: colors.buttoncolor,
          fontFamily: "Inter",
          borderRadius: 2,
          mb:3,
          "&:hover": { backgroundColor: colors.buttoncolor },
        }}
      >
        Sign Up
      </Button>

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
        >
          Sign in
        </Typography>
      </Typography>
    </Paper>
  );
};

export default Signup;
