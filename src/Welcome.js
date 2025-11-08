import React, { useState, useEffect } from "react";
import { Box, Typography, Button, MobileStepper,Fade } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import student from "./image/student.png";
import welcome5 from "./image/welcome5.png";
import welcome3 from "./image/welcome3.png";
import logo from "./image/logo.png";
const Welcome = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const navigate = useNavigate();
  const maxSteps = 3;

  // Slides content
  const slides = [
    {
     img: welcome5,
      title: "Welcome to Prototype",
      desc: "Easily connect and control your smart devices from one place.",
    },
    {
      img: student,
      title: "Stay Organized",
      desc: "Manage your home and track performance in a smarter way.",
    },
    {
      img: welcome3,
      title: "Get Started Now",
      desc: "Experience convenience at your fingertips!",
    },
  ];

  // Auto-slide with fade animation
  useEffect(() => {
    const timer = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setActiveStep((prev) => (prev + 1) % maxSteps);
        setFadeIn(true);
      }, 400); // fade out before switching
    }, 3500); // slide every 2.5s
    return () => clearInterval(timer);
  }, []);


  return (
    <div className="main-container">
    {/* <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(230deg, #99b562ff 0%, #d6e8c4 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        //justifyContent: "flex-start",
        justifyContent: "space-between",
        //py: 4,
        //px: 2,
        p:3
      }} */}
        <Box
      sx={{
        minHeight: "100vh",
        overflow: "hidden",  
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        //justifyContent:"flex-start",
        alignItems: "center",
        background: "linear-gradient(360deg, #fdfdfaff 0%, #a7b94fff 100%)",
        p: 3,
        position:'relative',
      }}
    >
{/* 🔹 Top Bar: Logo Left + Skip Right */}
<Box
  sx={{
    width: "100%",
    position: "absolute",
    top: 3,
    left: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    px: 2,       // reduced horizontal padding (was 3)
  //  pt: 1,       // reduced top padding (was 2)
    zIndex: 10,
    overflow:'hidden'
  }}
>
  {/* Logo */}
  <Box
    component="img"
    src={logo}
    alt="App Logo"
    sx={{
      overflow:'hidden',
      height: 120,        // slightly smaller for tighter look
      width: "auto",
      objectFit: "contain",
    //  ml: 0.5,           // less margin on the left (was 1)
    }}
  />

  {/* Skip Button */}
  <Button
    onClick={() => navigate("/login")}
    sx={{
      textTransform: "none",
      color: "#2d4739",
      fontWeight: 600,
      fontSize: "16px",
      mr: 3,
    }}
  >
    Skip
  </Button>
</Box>


      {/* Slide Section */}
      <Fade in={fadeIn} timeout={600}>
        <Box
          key={activeStep}
          sx={{
            textAlign: "center",
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            mt: 3,
          }}
        >
          <Box
            component="img"
            src={slides[activeStep].img}
            alt="Welcome"
            sx={{
              width: "75%",
              maxWidth: 650,
              height: "auto",
              mb: 3,
              borderRadius: 2,
             // boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            }}
          />
          <Typography
            variant="h5"
            sx={{ fontWeight: 700, color: "#2f3e46", mb: 1 }}
          >
            {slides[activeStep].title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#384f3e",
              fontSize: "15px",
              maxWidth: "80%",
              mx: "auto",
            }}
          >
            {slides[activeStep].desc}
          </Typography>
        </Box>
      </Fade>

      {/* Stepper Dots */}
      <MobileStepper
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{
          bgcolor: "transparent",
          "& .MuiMobileStepper-dot": {
            backgroundColor: "#a5c59a",
          },
          "& .MuiMobileStepper-dotActive": {
            backgroundColor: "#466e6b",
          },
          mb: 1,
        }}
        nextButton={null}
        backButton={null}
      />

      {/* Get Started Button */}
      <Button
        variant="contained"
        onClick={() => navigate("/login")}
        sx={{
          width: "30%",
          mb: 5,
          backgroundColor: "#466e6b",
          borderRadius: 5,
          py: 1.3,
          fontWeight: 600,
          textTransform: "none",
          boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
          "&:hover": { backgroundColor: "#395a58" },
        }}
      >
        Get Started
      </Button>
    </Box>
    </div>
  );
};

export default Welcome;
