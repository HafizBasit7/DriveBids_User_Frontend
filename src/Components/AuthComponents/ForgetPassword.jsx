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
import { useNavigate } from "react-router-dom";
import {sendResetOtp} from "../../api/calls/reset";
import toast from "react-hot-toast";
import { validateForm } from "../../utils/utils";
import { resetPasswordValidation } from "../../validations/auth.validation";

const ForgetPassword = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate(); 
    const [loading, setLoading] = useState(false);


    const handleSendCode = () => {
        toast.promise(sendCode(), {
            loading: 'Requesting OTP...',
            error: (error) => error.message,
            success: 'You will receive OTP, if relevant account exists. Redirecting...'
        });
    };

    const sendCode = async () => {
        setLoading(true);
        try {
            validateForm([resetPasswordValidation], {email: email ? email.trim() : email})
            await sendResetOtp({email});
            setTimeout(() => {
                navigate(`/otp?email=${email}`)
            }, 2000);
        }
        catch(e) {
            setLoading(false);
        throw e;
        }
    };

    return (
        <Paper
            elevation={4}
            sx={{
                p: 5,
                width: "100%",
                maxWidth: 450,
                py: 17,
                borderRadius: 1,
                boxShadow: "-8px 0px 20px rgba(0, 0, 0, 0.4)",
                zIndex: 1,
                height: 500
            }}
        >

            <Typography fontWeight="bold" sx={{ mb: 0.5, fontFamily: "Outfit", fontSize: 30 }}>
                Forget Password?
            </Typography>

            <Typography color="textSecondary" sx={{ mb: 3, fontFamily: "Inter", fontSize: 13, fontWeight: 350 }}>
                Enter you email to recover your account.        </Typography>

            {/* Email Input */}
            <Box sx={{ mb: 3 }}>
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
            </Box>






            <Button
                disabled={loading}
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
                onClick={handleSendCode}
            >
                Send Code
            </Button>



        </Paper>
    );
};

export default ForgetPassword;
