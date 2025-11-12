import React, { useEffect, useState } from "react";
import {
  Box,
  Avatar,
  Typography,
  IconButton,
  Stack,
  Fade,
} from "@mui/material";
import {
  CallEnd,
  Mic,
  MicOff,
  Videocam,
  VideocamOff,
  MoreVert,
  VolumeUp,
} from "@mui/icons-material";

const VideoCallScreen = ({ contact, onEndCall }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [showUI, setShowUI] = useState(false);

  // ✳️ Optional "Connecting..." fade effect
  useEffect(() => {
    const timer = setTimeout(() => setShowUI(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Fade in timeout={600}>
      <Box
        sx={{
          flex: 1,
          height: "100vh",
          background: "#cfe8a9",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: showUI ? "space-between" : "center",
          p: 3,
          transition: "all 0.3s ease",
        }}
      >
        {/* 🔹 Connecting Text */}
        {!showUI && (
          <Typography
            sx={{
              color: "#445e3c",
              fontSize: "22px",
              fontWeight: 600,
            }}
          >
            Calling {contact.name}...
          </Typography>
        )}

        {/* 🔹 Main Video / Avatar Section */}
        {showUI && (
          <>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "#d9e6b8",
                  width: 160,
                  height: 160,
                  fontSize: "64px",
                  mb: 2,
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                }}
              >
                {contact.name.charAt(0)}
              </Avatar>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "20px",
                  color: "#3a4a2f",
                }}
              >
                {contact.name}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#5b7050",
                }}
              >
                End-to-end encrypted
              </Typography>
            </Box>

            {/* 🔹 Controls */}
            <Stack
              direction="row"
              spacing={3}
              justifyContent="center"
              alignItems="center"
              sx={{
                pb: 3,
                width: "100%",
              }}
            >
              <IconButton sx={{ bgcolor: "#9fae8f" }}>
                <MoreVert />
              </IconButton>

              <IconButton
                sx={{ bgcolor: "#9fae8f" }}
                onClick={() => setIsVideoOn(!isVideoOn)}
              >
                {isVideoOn ? <Videocam /> : <VideocamOff />}
              </IconButton>

              <IconButton sx={{ bgcolor: "#9fae8f" }}>
                <VolumeUp />
              </IconButton>

              <IconButton
                sx={{ bgcolor: "#9fae8f" }}
                onClick={() => setIsMuted(!isMuted)}
              >
                {isMuted ? <MicOff /> : <Mic />}
              </IconButton>

              <IconButton
                sx={{
                  bgcolor: "#e53935",
                  "&:hover": { bgcolor: "#c62828" },
                  color: "white",
                }}
                onClick={onEndCall}
              >
                <CallEnd />
              </IconButton>
            </Stack>
          </>
        )}
      </Box>
    </Fade>
  );
};

export default VideoCallScreen;
