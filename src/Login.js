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
          Hey, <br /> Welcome
        </Typography>

        {/* Email Field */}
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
          <EmailOutlined sx={{ color: "#444" }} />
          <TextField
            fullWidth
            placeholder="Enter your email or number"
            variant="filled"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

        {/* Password Field */}
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
          <LockOutlined sx={{ color: "#444" }} />
          <TextField
            fullWidth
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            variant="filled"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

        {/* Forgot Password */}
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

        {/* Login Button */}
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
            mb: 2,
          }}
          onClick={handleLogin}
        >
          Login
        </Button>

        {/* Signup Section */}
        <Typography variant="body2" align="center" sx={{ color: "#555" }}>
          Don’t have an Account?
        </Typography>
        <Typography
          variant="caption"
          align="center"
          display="block"
          sx={{ mb: 2, color: "#777" }}
        >
          By signing up, you agree to our{" "}
          <Link sx={{ color: "#466e6b" }}>Terms of Use</Link> &{" "}
          <Link sx={{ color: "#466e6b" }}>Privacy Policy</Link>.
        </Typography>

        {/* Signup Button */}
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
          onClick={() => navigate("/signup")}
        >
          Sign-Up
        </Button>
      </Paper>
    </Box>
    </div>
  );
};

export default Login;
