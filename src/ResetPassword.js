import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  Paper,
  Stack,
  Alert,
  Snackbar,
  useMediaQuery,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  CheckCircle,
  Cancel,
  Close,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import logo from "./image/logo.png";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [alert, setAlert] = useState({ type: "", message: "" }); // alert info
  const [open, setOpen] = useState(false); // snackbar control
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleClose = () => navigate("/forgot");

  const showAlert = (type, message) => {
    setAlert({ type, message });
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };

  const handleReset = () => {
    // Reset previous alert
    setAlert({ type: "", message: "" });

    // Validation checks
    if (!password || !confirmPassword) {
      showAlert("error", "All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      showAlert("warning", "Passwords do not match!");
      return;
    }

    showAlert("success", "Password successfully reset!");

    // Redirect after success delay
    setTimeout(() => navigate("/login"), 2200);
  };

  // Password validation checks
  const validations = {
    lowercase: /[a-z]/.test(password),
    uppercase: /[A-Z]/.test(password),
    number: /\d/.test(password),
    length: password.length >= 8,
  };

  return (
    <div className="main-container">
      {/* Snackbar Alert (Top of Screen) */}
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

      {/*  Main Layout */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(230deg, #99b562ff 0%, #d6e8c4 100%)",
          p: 2,
          gap: { xs: 4, md: 6 },
        }}
      >
        {/* Fixed Logo */}
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
            textAlign: isMobile ? "center" : "left",
            maxWidth: { xs: "100%", md: "350px" },
            mb: isMobile ? 4 : 0,
          }}
        >
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{ color: "#444", lineHeight: 1.4 }}
          >
            Set Your <br /> New Password
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#555",
              mt: 2,
              maxWidth: "350px",
              fontSize: "15px",
              mx: isMobile ? "auto" : "0",
            }}
          >
            Create a strong and secure password to protect your account.
            Your new password must meet the conditions shown here.
          </Typography>
        </Box>

        {/* Right Section */}
        <Paper
          elevation={6}
          sx={{
            flex: 1,
            p: 4,
            maxWidth: "380px",
            borderRadius: "12px",
            backgroundColor: "#dde6c5ff",
            border: "1px solid #e0e0e0",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.52)",
            position: "relative",
          }}
        >
          {/* Cross Button */}
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

          {/* Password Field */}
          <Typography variant="body2" sx={{ color: "#555", mb: 1 }}>
            Password
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
            <TextField
              required
              fullWidth
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="filled"
              InputProps={{
                disableUnderline: true,
                sx: {
                  backgroundColor: "#c2dcabff",
                  borderRadius: 3,
                  height: "45px",
                  fontSize: "14px",
                  input: {
                    padding: "12px 14px",
                    display: "flex",
                    alignItems: "center",
                  },
                  "&:hover": { backgroundColor: "#a9ca8aff" },
                },
                endAdornment: (
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
            />
          </Stack>

          {/* Confirm Password Field */}
          <Typography variant="body2" sx={{ color: "#555", mb: 1 }}>
            Confirm Password
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 3 }}>
            <TextField
              required
              fullWidth
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              variant="filled"
              InputProps={{
                disableUnderline: true,
                sx: {
                  backgroundColor: "#c2dcabff",
                  borderRadius: 3,
                  height: "45px",
                  fontSize: "14px",
                  input: {
                    padding: "12px 14px",
                    display: "flex",
                    alignItems: "center",
                  },
                  "&:hover": { backgroundColor: "#a9ca8aff" },
                },
                endAdornment: (
                  <IconButton onClick={() => setShowConfirm(!showConfirm)}>
                    {showConfirm ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
            />
          </Stack>

          {/* Password Validations */}
          <Box sx={{ mb: 3 }}>
            <ValidationItem
              isValid={validations.lowercase}
              text="At least one lowercase letter"
            />
            <ValidationItem
              isValid={validations.length}
              text="Minimum 8 characters"
            />
            <ValidationItem
              isValid={validations.uppercase}
              text="At least one uppercase letter"
            />
            <ValidationItem
              isValid={validations.number}
              text="At least one number"
            />
          </Box>

          {/* Reset Button */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#466e6b",
              borderRadius: 5,
              py: 1.3,
              textTransform: "none",
              fontWeight: 600,
              "&:hover": { backgroundColor: "#395a58" },
            }}
            onClick={handleReset}
          >
            Reset Password
          </Button>
        </Paper>
      </Box>
    </div>
  );
};

// ✅ Reusable Validation Item
const ValidationItem = ({ isValid, text }) => (
  <Stack direction="row" alignItems="center" spacing={1}>
    {isValid ? (
      <CheckCircle sx={{ color: "green", fontSize: 18 }} />
    ) : (
      <Cancel sx={{ color: "#888", fontSize: 18 }} />
    )}
    <Typography
      variant="body2"
      sx={{ color: isValid ? "green" : "#666", fontSize: "14px" }}
    >
      {text}
    </Typography>
  </Stack>
);

export default ResetPassword;
