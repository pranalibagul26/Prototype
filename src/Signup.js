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
import logo from "./image/logo.png";

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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
     background: "linear-gradient(230deg, #99b562ff 0%, #d6e8c4 100%)",
    gap: { xs: 4, md: 6 },
    p: 2,
  }}
>
      {/* Left box with title */}
  <Box
    sx={{
      flex: 1,
      textAlign: { xs: "center", md: "left" },
      maxWidth: { xs: "100%", md: "350px" },
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
      sx={{ color: "#444", mb: 2, lineHeight: 1.3 }}
    >
      Let’s, <br /> Create Account
    </Typography>
    <Typography variant="body1" sx={{ color: "#555", fontSize: "15px" }}>
      Join us today and manage your smart home devices  
      all in one place — quick, simple, and secure.
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
                backgroundColor: "#c2dcabff",
                borderRadius: 3,
                height: "45px",
                fontSize: "14px",
                 "&:hover": { backgroundColor: "#a9ca8aff" },
                  fontSize: "14px",
                  input: {
                  padding: "12px 14px",
                   textAlignVertical: "center",
                   display: "flex",
                   alignItems: "center",
                  }
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
                backgroundColor: "#c2dcabff",
                borderRadius: 3,
                height: "45px",
                fontSize: "14px",
                 "&:hover": { backgroundColor: "#a9ca8aff" },
                  fontSize: "14px",
                  input: {
                  padding: "12px 14px",
                   textAlignVertical: "center",
                   display: "flex",
                   alignItems: "center",
              }
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
                backgroundColor: "#c2dcabff",
                borderRadius: 3,
                height: "45px",
                fontSize: "14px",
                 "&:hover": { backgroundColor: "#a9ca8aff" },
                  fontSize: "14px",
                  input: {
                  padding: "12px 14px",
                   textAlignVertical: "center",
                   display: "flex",
                   alignItems: "center",
              }
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
            onClick={() => navigate("/login")}
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
