import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  Paper,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { ArrowBack, MailOutline, LockOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Forgot = () => {
  const [emailOrNumber, setEmailOrNumber] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleContinue = () => {
    if (!emailOrNumber) {
      alert("Please enter your email or number!");
      return;
    }
    alert(`OTP sent to ${emailOrNumber}`);
  };

  const handleNext = () => {
     navigate("/reset");
    if (!otp) {
      alert("Please enter OTP!");
      return;
    }
    alert("OTP verified!");
  };

  const handleBack = () => {
    navigate("/"); // back to login or home
  };

  return (
    <div className="main-container">
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#fffdd0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}

    >
               {/* Back button
        <IconButton
          onClick={handleBack}
          sx={{
            backgroundColor: "#f5f5ba",
            mb: 1,
            "&:hover": { backgroundColor: "#ecec9a" },
          }}
        >
          <ArrowBack />
        </IconButton> */}

      <Paper
        elevation={0}
        sx={{
          backgroundColor: "#fffdd0",
          p: 3,
          width: isMobile ? "100%" : "400px",
          borderRadius: 3,
          boxShadow: "none",
        }}
      >
     

        {/* Title */}
        <Typography
          variant="h5"
          fontWeight={700}
          sx={{ color: "#444", mb: 2, lineHeight: 1.3 }}
        >
          Forgot <br /> Password?
        </Typography>

        {/* Email / Mobile Input */}
        <Typography variant="body2" sx={{ color: "#555", mb: 1 }}>
          Enter associated email or mobile number.
        </Typography>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
          <MailOutline sx={{ color: "#555" }} />
          <TextField
            fullWidth
            placeholder="Enter your email or number"
            value={emailOrNumber}
            onChange={(e) => setEmailOrNumber(e.target.value)}
            variant="filled"
            InputProps={{
              disableUnderline: true,
              sx: {
                backgroundColor: "#d6e8c4",
                borderRadius: 3,
                height: "45px",
                fontSize: "14px",
              },
            }}
          />
        </Stack>

        <Button
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#466e6b",
            borderRadius: 3,
            py: 1.3,
            textTransform: "none",
            fontWeight: 600,
            mb: 3,
            "&:hover": { backgroundColor: "#395a58" },
          }}
          onClick={handleContinue}
        >
          Continue
        </Button>

        {/* OTP Input */}
        <Typography variant="body2" sx={{ color: "#555", mb: 1 }}>
          Enter OTP sent to your e-mail or mobile
        </Typography>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
          <LockOutlined sx={{ color: "#555" }} />
          <TextField
            fullWidth
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            variant="filled"
            InputProps={{
              disableUnderline: true,
              sx: {
                backgroundColor: "#d6e8c4",
                borderRadius: 3,
                height: "45px",
                fontSize: "14px",
              },
            }}
          />
        </Stack>

        <Button
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#466e6b",
            borderRadius: 3,
            py: 1.3,
            textTransform: "none",
            fontWeight: 600,
            mb: 2,
            "&:hover": { backgroundColor: "#395a58" },
          }}
          onClick={handleNext}
        >
          Next
        </Button>

        {/* Resend link */}
        <Typography variant="body2" sx={{ textAlign: "center", color: "#444" }}>
          Didn’t receive the code?{" "}
          <Typography
            component="span"
            sx={{
              color: "#466e6b",
              fontWeight: 600,
              cursor: "pointer",
            }}
            onClick={() => alert("OTP Resent!")}
          >
            RESEND
          </Typography>
        </Typography>
      </Paper>
    </Box>
    </div>
  );
};

export default Forgot;
