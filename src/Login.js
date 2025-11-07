import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  Paper,
  Stack,
  Link,
  useMediaQuery,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  EmailOutlined,
  LockOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import logo from "./image/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }
    alert("Login Successful! (Add your API call here)");
  };

  return (
    <div className="main-container">
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
          Hey, <br /> Welcome Back 👋
        </Typography>
        <Typography variant="body1" sx={{ color: "#555", fontSize: "15px" }}>
          Log in to your account and continue where you left off.  
          Manage your devices and stay connected easily.
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
        }}
      >
        {/* Email Field */}
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
          <EmailOutlined sx={{ color: "#444" }} />
          <TextField
            fullWidth
            placeholder="Enter your email or number"
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
            }}
          />
        </Stack>

        {/* Password Field */}
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
          <LockOutlined sx={{ color: "#444" }} />
          <TextField
            fullWidth
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
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

        <Box textAlign="right" mb={3}>
          <Link
            component="button"
            onClick={() => navigate("/forgot")}
            underline="none"
            sx={{ color: "#466e6b", fontSize: "14px", fontWeight: 500 }}
          >
            Forgot Password?
          </Link>
        </Box>

        {/* Buttons */}
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
            mb: 2,
          }}
          onClick={() => alert("Login Successful!")}
        >
          Login
        </Button>

        <Typography
          variant="body2"
          align="center"
          sx={{ color: "#555", mt: 1 }}
        >
          Don’t have an Account?{" "}
          <Link
            component="button"
            underline="none"
            sx={{ color: "#466e6b", fontWeight: 600 }}
            onClick={() => navigate("/signup")}
          >
            Sign-Up
          </Link>
        </Typography>
      </Paper>
    </Box>
    </div>
  );
};

export default Login;
