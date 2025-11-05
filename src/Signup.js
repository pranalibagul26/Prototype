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
  Link,
} from "@mui/material";
import {
  PersonOutline,
  EmailOutlined,
  PhoneIphoneOutlined,
  Visibility,
  VisibilityOff,
  LockOutlined,
  Facebook,
  Google,
  Apple,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");

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
        {/* Title */}
        <Typography
          variant="h5"
          fontWeight={700}
          sx={{ color: "#444", mb: 3, lineHeight: 1.3 }}
        >
          Let’s, <br /> Create Account
        </Typography>

        {/* Full Name */}
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
          <PersonOutline sx={{ color: "#444" }} />
          <TextField
            fullWidth
            placeholder="Enter your full name"
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

        {/* Email */}
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
          <EmailOutlined sx={{ color: "#444" }} />
          <TextField
            fullWidth
            placeholder="Enter your email"
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

        {/* Phone Number */}
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
          <PhoneIphoneOutlined sx={{ color: "#444" }} />
          <TextField
            fullWidth
            placeholder="Enter your number"
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

        {/* Password */}
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
          <LockOutlined sx={{ color: "#444" }} />
          <TextField
            fullWidth
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
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

        {/* Confirm Password */}
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 3 }}>
          <LockOutlined sx={{ color: "#444" }} />
          <TextField
            fullWidth
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm your password"
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

        {/* Create Account Button */}
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
            mb: 3,
          }}
          onClick={() => alert("Account Created!")}
        >
          Create Account
        </Button>

        {/* Continue with Section */}
        <Typography
          align="center"
          sx={{ color: "#777", mb: 2, fontSize: "14px" }}
        >
          Or Continue with
        </Typography>

        <Stack direction="row" justifyContent="center" spacing={3} mb={3}>
          <IconButton sx={{ color: "#3b5998" }}>
            <Facebook />
          </IconButton>
          <IconButton sx={{ color: "#DB4437" }}>
            <Google />
          </IconButton>
          <IconButton sx={{ color: "#000" }}>
            <Apple />
          </IconButton>
        </Stack>

        {/* Already have an account */}
        <Typography
          align="center"
          sx={{ color: "#444", fontSize: "14px", mt: 1 }}
        >
          Already have an Account?{" "}
          <Link
            component="button"
            underline="none"
            sx={{ color: "#466e6b", fontWeight: 600 }}
            onClick={() => navigate("/")}
          >
            Sign-In
          </Link>
        </Typography>
      </Paper>
    </Box>
    </div>
  );
};

export default Signup;
