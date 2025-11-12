import React from "react";
import {
  Box,
  Avatar,
  Typography,
  IconButton,
  Tooltip,
  Fade,
} from "@mui/material";
import {
  CallEnd,
  MicOff,
  VolumeUp,
  MoreVert,
  Videocam,
} from "@mui/icons-material";

const VoiceCallScreen = ({ contact, onEndCall }) => {
  return (
    <Fade in={true} timeout={600}>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          background: "linear-gradient(180deg, #d8e8c4 0%, #cfe4b4 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          p: 3,
          borderLeft: "2px solid #a3c27d",
          position: "relative",
          animation: "fadeIn 0.5s ease-in-out",
          "@keyframes fadeIn": {
            from: { opacity: 0, transform: "scale(0.98)" },
            to: { opacity: 1, transform: "scale(1)" },
          },
        }}
      >
        {/* Header */}
        <Box sx={{ textAlign: "center", mt: 3 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, fontSize: { xs: "16px", sm: "18px" } }}
          >
            {contact.name}
          </Typography>
          <Typography sx={{ fontSize: 13, color: "#555" }}>
            End-to-end encrypted
          </Typography>
        </Box>

        {/* Avatar */}
        <Avatar
          sx={{
            bgcolor: "#f2f5d4",
            color: "#777",
            width: 150,
            height: 150,
            boxShadow: "0 4px 25px rgba(0,0,0,0.25)",
          }}
        >
          <Typography sx={{ fontSize: 70, fontWeight: 300 }}>
            {contact.name.charAt(0)}
          </Typography>
        </Avatar>

        {/* Bottom Call Controls */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            mb: 4,
          }}
        >
          <Tooltip title="More Options">
            <IconButton sx={{ backgroundColor: "#bfbfbf" }}>
              <MoreVert />
            </IconButton>
          </Tooltip>

          <Tooltip title="Video Call">
            <IconButton sx={{ backgroundColor: "#bfbfbf" }}>
              <Videocam />
            </IconButton>
          </Tooltip>

          <Tooltip title="Speaker">
            <IconButton sx={{ backgroundColor: "#bfbfbf" }}>
              <VolumeUp />
            </IconButton>
          </Tooltip>

          <Tooltip title="Mute">
            <IconButton sx={{ backgroundColor: "#bfbfbf" }}>
              <MicOff />
            </IconButton>
          </Tooltip>

          <Tooltip title="End Call">
            <IconButton
              onClick={onEndCall}
              sx={{
                backgroundColor: "#e53935",
                "&:hover": { backgroundColor: "#d32f2f" },
              }}
            >
              <CallEnd sx={{ color: "#fff" }} />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Fade>
  );
};

export default VoiceCallScreen;
