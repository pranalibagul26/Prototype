import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { InputAdornment } from "@mui/material";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "./image/logo.png";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:900px)");

  const handleSendOtp = () => {
    if (!email) {
      alert("Please enter your email or mobile number!");
      return;
    }
    alert(`OTP sent to ${email}`);
  };

  const handleNext = () => {
    navigate("/reset");
    if (!otp) {
      alert("Please enter the OTP!");
      return;
    }
    
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
        gap: { xs: 4, md: 6 },
        p: 2,
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          flex: 1,
          textAlign: { xs: "center", md: "left" },
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
        }}
      >
        <Typography variant="body2" sx={{ color: "#555", mb: 1, fontSize:16 }}>
          Enter your email or number
        </Typography>

        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
          {/* //<FaEnvelope style={{ color: "#444" }} /> */}
          <TextField
            fullWidth
            variant="filled"
            placeholder="Enter your email or number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              disableUnderline: true,
    //            startAdornment: (
    //   <InputAdornment position="start" sx={{ alignItems: "center" }}>
    //     <FaEnvelope style={{ color: "#466e6b",fontSize: "16px", marginBottom: "2px"}} />
    //   </InputAdornment>
    // ),
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
              }}
            }}
          />
        </Stack>

        <Button
        fullWidth
          sx={{
            height:45,
            backgroundColor: "#466e6b",
            color: "#fff",
            py: 1.3,
            borderRadius: 3,
            mb: 3,
            fontWeight: 600,
            "&:hover": { backgroundColor: "#395a58" },
          }}
          onClick={handleSendOtp}
        >
          Send OTP
        </Button>

        <Typography variant="body2" sx={{ color: "#555", mb: 1, fontSize:16 }}>
          Enter OTP
        </Typography>

        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 3 }}>
          {/* <FaLock style={{ color: "#444" }} /> */}
          <TextField
            fullWidth
            variant="filled"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            InputProps={{
              disableUnderline: true,
    //            startAdornment: (
    //   <InputAdornment position="start" sx={{ display: "flex", alignItems: "center" }}>
    //     <FaLock style={{ color: "#466e6b", fontSize: "16px", marginBottom: "2px"}} />
    //   </InputAdornment>
    // ),
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
              }
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
            "&:hover": { backgroundColor: "#395a58" },
          }}
          onClick={handleNext}
        >
          Next
        </Button>
      </Paper>
    </Box>
    </div>
  );
};

export default Forgot;
