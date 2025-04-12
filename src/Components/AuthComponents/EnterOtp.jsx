import { useEffect, useState } from "react";
import {
  Paper,
  Button,
  Typography,
  Box,
  Link,
} from "@mui/material";
import OtpInput from "react-otp-input";
import colors from "../../Style/color";
import { useNavigate, useSearchParams } from "react-router-dom";
import {formatSeconds} from "../../utils/utils";
import toast from "react-hot-toast";
import { sendResetOtp } from "../../api/calls/reset";

const Enteropt = () => {
  const [otp, setOtp] = useState("");
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');
  const [timeLeft, setTimeLeft] = useState(300);

  useEffect(() => {
    const currentInterval = setInterval(() => {
      setTimeLeft(prevVal => {
        if(prevVal > 0) {
          return (prevVal - 1);
        } else {
          return 0;
        }
      })
    }, 1000);

    return () => clearInterval(currentInterval);
  }, []);

  const navigate = useNavigate();

  const handleResend = () => {
    if(timeLeft < 1) {
      toast.promise(async () => {
         await sendResetOtp({email});
      }, {
        loading: 'Requesting OTP...',
        error: (error) => error.message,
        success: 'You will receive OTP, if relevant account exists. Redirecting...'
      });
      setTimeLeft(300);
    }
  };

  return (
    <Paper
      elevation={4}
      sx={{
        p: 5,
        width: "100%",
        maxWidth: 450,
        py: 15,
        borderRadius: 1,
        boxShadow: "-8px 0px 20px rgba(0, 0, 0, 0.4)",
        zIndex: 1,
        textAlign: "start",
      }}
    >
      {/* Title */}
      <Typography
        fontWeight="bold"
        sx={{ mb: 0.5, fontFamily: "Outfit", fontSize: 30 }}
      >
        Enter Code
      </Typography>

      {/* Subtitle */}
      <Typography
        color="textSecondary"
        sx={{
          mb: 3,
          fontFamily: "Inter",
          fontSize: 14,
          fontWeight: 350,
        }}
      >
        Enter the Code sent to your mail.
      </Typography>

      {/* New Instruction */}
      <Typography
        sx={{
          mb: 1,
          fontFamily: "Inter",
          fontSize: 12,
          fontWeight: 500,
          color: "#1E232C",
        }}
      >
        Check your mail and enter PIN:
      </Typography>

      {/* OTP Input */}
      <Box sx={{ display: "flex", justifyContent: "start", mb: 2 }}>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          separator={<span> - </span>}
          renderInput={(props) => <input {...props} />}
          inputStyle={{
            width: "55px",
            height: "55px",
            margin: "0 7px",
            fontSize: "20px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            textAlign: "center",
            backgroundColor: "#fff",
            outline: "none",
          }}
          focusStyle={{
            border: `2px solid ${colors.buttoncolor}`,
            outline: "none",
          }}
        />
      </Box>

      {/* Resend Timer */}
      <Typography
        color="textSecondary"
        sx={{ mb: 2, fontSize: 12, display: "flex", justifyContent: "start", ml:1 }}
      >
        {formatSeconds(timeLeft)}{" "}
        <Link
          href="#"
          onClick={handleResend} 
          sx={{
            ml: 1,
            fontWeight: "bold",
            color: timeLeft > 0 ? 'grey' : colors.buttoncolor, 
            textDecoration: "none",
          }}
        >
          Resend
        </Link>
      </Typography>

      {/* Verify Button */}
      <Button
        fullWidth
        variant="contained"
        sx={{
          py: 1.5,
          fontSize: 14,
          backgroundColor: colors.buttoncolor,
          fontFamily: "Inter",
          borderRadius: 2,
          "&:hover": { backgroundColor: colors.buttoncolor },
        }}
        onClick={() => navigate(`/confirm-reset-pass?otp=${otp}`)}
        disabled={otp.length < 4}
      >
        Verify
      </Button>
    </Paper>
  );
};

export default Enteropt;
