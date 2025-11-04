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

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleBack = () => navigate(-1);

  const handleReset = () => {
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
        backgroundColor: "#fffdd0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
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
        {/* Back Button
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

        {/* Title */}
        <Typography
          variant="h5"
          fontWeight={700}
          sx={{ color: "#444", mb: 3, lineHeight: 1.3 }}
        >
          Set Your <br /> New Password
        </Typography>

        {/* Password Field */}
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
                backgroundColor: "#d6e8c4",
                borderRadius: 3,
                height: "45px",
                fontSize: "14px",
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
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
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
                backgroundColor: "#d6e8c4",
                borderRadius: 3,
                height: "45px",
                fontSize: "14px",
              },
              endAdornment: (
                <IconButton onClick={() => setShowConfirm(!showConfirm)}>
                  {showConfirm ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
          />
        </Stack>

        {/* Validation checklist */}
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
