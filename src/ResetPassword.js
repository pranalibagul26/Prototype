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
import {
  ArrowBack,
  Visibility,
  VisibilityOff,
  CheckCircle,
  Cancel,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import logo from "./image/logo.png"
const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleBack = () => navigate(-1);

  const handleReset = () => {
    navigate("/login");
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Password successfully reset!");
  };

  // Password Validation
  const validations = {
    lowercase: /[a-z]/.test(password),
    uppercase: /[A-Z]/.test(password),
    number: /\d/.test(password),
    length: password.length >= 8,
  };

  return (
     <div className="main-container">
   <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
       // backgroundColor: "#fffdd0ff",
         background: "linear-gradient(230deg, #99b562ff 0%, #d6e8c4 100%)",
        p: 2,
        gap: { xs: 4, md: 6 }, // reduces space between boxes
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          flex: 1,
          textAlign: isMobile ? "center" : "left",
          maxWidth: { xs: "100%", md: "350px" },
          mb: isMobile ? 4 : 0,
        }}
      >
         <Box
            component="img"
            src={logo}
            alt="App Logo"
            sx={{
              width: "auto",
              height: 120,
              position: { xs: "static", md: "absolute" },
              top: { md: "30px" },
              left: { md: "30px" },
              mb: { xs: 2, md: 0 },
            }}
          />
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
        }}
      >
        {/* Password */}
        <Typography variant="body2" sx={{ color: "#555", mb: 1 }}>
          Password
        </Typography>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
          <TextField
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
        textAlignVertical: "center",
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

        {/* Confirm Password */}
        <Typography variant="body2" sx={{ color: "#555", mb: 1 }}>
          Confirm Password
        </Typography>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 3 }}>
          <TextField
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
        textAlignVertical: "center",
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

        {/* Validation Checklist */}
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
            borderRadius: 3,
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

// ✅ Small reusable component for validation items
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
