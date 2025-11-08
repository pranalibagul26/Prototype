import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Stack,
  IconButton,
  Snackbar,
  Alert,
  useMediaQuery,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import logo from "./image/logo.png";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [alert, setAlert] = useState({ type: "", message: "" });
  const [open, setOpen] = useState(false); // Snackbar state
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:900px)");

  // Function to show snackbar alerts
  const showAlert = (type, message) => {
    setAlert({ type, message });
    setOpen(true);
    setTimeout(() => setOpen(false), 2000);
  };

  // Cross (close) button — go back to login
  const handleClose = () => navigate("/login");

  // Send OTP handler
  const handleSendOtp = () => {
    if (!email) {
      showAlert("error", "Please enter your email or mobile number!");
      return;
    }
    showAlert("success", `OTP sent to ${email}`);
  };

  // Next button handler
  const handleNext = () => {
    if (!otp) {
      showAlert("warning", "Please enter the OTP!");
      return;
    }
    showAlert("success", "OTP verified successfully!");
    setTimeout(() => navigate("/reset"), 2200);
  };

  return (
    <div className="main-container">
      {/* ✅ Snackbar Alert */}
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{ mt: 2 }}
      >
        <Alert
          severity={alert.type}
          variant="filled"
          sx={{
            fontWeight: 500,
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
          }}
        >
          {alert.message}
        </Alert>
      </Snackbar>

      {/* 🌿 Main Container */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(230deg, #99b562ff 0%, #d6e8c4 100%)",
          gap: { xs: 4, md: 6 },
          p: 2,
        }}
      >
        {/* 🟢 Logo */}
        <Box
          component="img"
          src={logo}
          alt="App Logo"
          sx={{
            position: "fixed",
            top: 20,
            left: 20,
            width: "auto",
            height: 120,
            zIndex: 10,
          }}
        />

        {/* Left Section */}
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "left" },
            maxWidth: { xs: "100%", md: "350px" },
            mb: isMobile ? 4 : 0,
          }}
        >
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{ color: "#444", mb: 2, lineHeight: 1.3 }}
          >
            Forgot <br /> Your Password?
          </Typography>
          <Typography variant="body1" sx={{ color: "#555", fontSize: "15px" }}>
            Don’t worry! Just enter your registered email or mobile number,  
            and we’ll send you a verification code to reset your password.
          </Typography>
        </Box>

        {/* Right Section */}
        <Paper
          elevation={6}
          sx={{
            flex: 1,
            p: 4,
            maxWidth: "400px",
            borderRadius: "12px",
            backgroundColor: "#dde6c5ff",
            border: "1px solid #e0e0e0",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.52)",
            position: "relative",
          }}
        >
          {/* ❌ Cross Button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "#444",
              "&:hover": { color: "#000" },
            }}
          >
            <Close />
          </IconButton>

          {/* Email Field */}
          <Typography variant="body2" sx={{ color: "#555", mb: 1, fontSize: 16 }}>
            Enter your email or number
          </Typography>

          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
            <TextField
              fullWidth
              variant="filled"
              placeholder="Enter your email or number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                disableUnderline: true,
                sx: {
                  backgroundColor: "#c2dcabff",
                  borderRadius: 3,
                  height: "45px",
                  "&:hover": { backgroundColor: "#a9ca8aff" },
                  fontSize: "14px",
                  input: {
                    padding: "12px 14px",
                    textAlignVertical: "center",
                    display: "flex",
                    alignItems: "center",
                  },
                },
              }}
            />
          </Stack>

          {/* Send OTP Button */}
          <Button
            fullWidth
            sx={{
              height: 45,
              backgroundColor: "#466e6b",
              color: "#fff",
              py: 1.3,
              borderRadius: 5,
              mb: 3,
              fontWeight: 600,
              "&:hover": { backgroundColor: "#395a58" },
            }}
            onClick={handleSendOtp}
          >
            SEND OTP
          </Button>

          {/* OTP Field */}
          <Typography variant="body2" sx={{ color: "#555", mb: 1, fontSize: 16 }}>
            Enter OTP
          </Typography>

          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 3 }}>
            <TextField
              fullWidth
              variant="filled"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              InputProps={{
                disableUnderline: true,
                sx: {
                  backgroundColor: "#c2dcabff",
                  borderRadius: 3,
                  height: "45px",
                  "&:hover": { backgroundColor: "#a9ca8aff" },
                  fontSize: "14px",
                  input: {
                    padding: "12px 14px",
                    textAlignVertical: "center",
                    display: "flex",
                    alignItems: "center",
                  },
                },
              }}
            />
          </Stack>

          {/* Next Button */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#466e6b",
              borderRadius: 5,
              py: 1.3,
              mt: -1,
              textTransform: "none",
              fontWeight: 600,
              "&:hover": { backgroundColor: "#395a58" },
            }}
            onClick={handleNext}
          >
            NEXT
          </Button>
        </Paper>
      </Box>
    </div>
  );
};

export default Forgot;
