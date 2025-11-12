import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  IconButton,
  Avatar,
  TextField,
  Paper,
  Tooltip,
} from "@mui/material";
import {
  Chat,
  Send,
  Call,
  VideoCall,
  ArrowBack,
} from "@mui/icons-material";
import VoiceCallScreen from "./VoiceCallScreen";
import VideoCallScreen from "./VideoCallScreen";

// ✅ ChatWindow Component
const ChatWindow = ({ contact, onBack }) => {
  const [messages, setMessages] = useState([
    { from: "other", text: `Hello ${contact.name.split(" ")[0]}! How are you?` },
    { from: "me", text: "Hey there!" },
  ]);
  const [isOn, setIsOn] = useState(true);
  const [isVoiceCallActive, setIsVoiceCallActive] = useState(false);
  const [isVideoCallActive, setIsVideoCallActive] = useState(false);

  const [newMsg, setNewMsg] = useState("");

  // ✅ Send Message
  const sendMessage = () => {
    if (!newMsg.trim()) return;
    setMessages([...messages, { from: "me", text: newMsg }]);
    setNewMsg("");
  };

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#f7fbd7",
      }}
    >
     {/* 🔹 Header (Hidden during voice call) */}
{!isVoiceCallActive && !isVideoCallActive && (
   <Box
        sx={{
          background: "linear-gradient(130deg, #d6e8c4 0%,  #a9c966ff 100%)",
          p: { xs: 1, sm: 1.5 },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: 1,
          position: "relative",
          flexShrink: 0,
        }}
      >
        {/* 🔙 Back + Name */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={{ xs: 0.5, sm: 1 }}
          sx={{ minWidth: 0 }}
        >
          <IconButton
            onClick={onBack}
            sx={{
              color: "#466e6b",
              "&:hover": { backgroundColor: "#d6e8c4" },
            }}
          >
            <ArrowBack />
          </IconButton>

          <Avatar
            sx={{
              bgcolor: "#b1d88f",
              width: { xs: 32, sm: 40 },
              height: { xs: 32, sm: 40 },
            }}
          >
            {contact.name.charAt(0)}
          </Avatar>

          <Box sx={{ overflow: "hidden" }}>
            <Typography
              noWrap
              sx={{ fontWeight: 600, fontSize: { xs: "14px", sm: "16px" } }}
            >
              {contact.name}
            </Typography>
            <Typography
              noWrap
              sx={{ fontSize: { xs: "11px", sm: "13px" }, color: "#466e6b" }}
            >
              {contact.relation}
            </Typography>
          </Box>
        </Stack>

        {/* ✅ Safe Mode Toggle */}
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              color: "black",
              fontSize: { xs: "12px", sm: "16px" },
              whiteSpace: "nowrap",
            }}
          >
            Safe Mode
          </Typography>

          <Box
            onClick={() => setIsOn(!isOn)}
            sx={{
              width: { xs: 65, sm: 60 },
              height: { xs: 28, sm: 32 },
              borderRadius: 25,
              backgroundColor: isOn ? "#5fae1eff" : "#e53935",
              display: "flex",
              alignItems: "center",
              justifyContent: isOn ? "flex-end" : "flex-start",
              px: 0.6,
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "inset 0 0 5px rgba(0,0,0,0.3)",
              position: "relative",
            }}
          >
            <Typography
              sx={{
                position: "absolute",
                left: isOn ? "10px" : "auto",
                right: isOn ? "auto" : "10px",
                color: "#000000ff",
                fontSize: "12px",
                fontWeight: 700,
                transition: "all 0.3s ease",
              }}
            >
              {isOn ? "ON" : "OFF"}
            </Typography>

            <Box
              sx={{
                width: { xs: 20, sm: 24 },
                height: { xs: 20, sm: 24 },
                borderRadius: "50%",
                backgroundColor: "#a4a0a0ff",
                transition: "all 0.3s ease",
              }}
            />
          </Box>
        </Box>

        {/* 📞 Call + Video + Menu */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 0.3, sm: 0.8 },
            mr: { xs: 1, sm: 2 },
          }}
        >
          <Tooltip title="Voice Call">
            <IconButton
              color="success"
              size="small"
              onClick={() => setIsVoiceCallActive(true)}
            >
              <Call />
            </IconButton>
          </Tooltip>

          <Tooltip title="Video Call">
            <IconButton color="primary" size="small"
                onClick={() => setIsVideoCallActive(true)}
                >
              <VideoCall />
            </IconButton>
          </Tooltip>

          <Tooltip title="More Options">
            <IconButton size="small" sx={{ color: "#3e493a" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: 16,
                }}
              >
                {[...Array(3)].map((_, i) => (
                  <Box
                    key={i}
                    sx={{
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      backgroundColor: "#3e493a",
                    }}
                  />
                ))}
              </Box>
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
)}
      {/* 🔹 Right Side (Chat or Voice Call) */}
      {isVoiceCallActive ? (
  <VoiceCallScreen
    contact={contact}
    onEndCall={() => setIsVoiceCallActive(false)}
  />
) : isVideoCallActive ? (
  <VideoCallScreen
    contact={contact}
    onEndCall={() => setIsVideoCallActive(false)}
  />
) : (
  <>
          {/* 💬 Messages Area */}
          <Box
            sx={{
              flex: 1,
              overflowY: "auto",
              backgroundColor: "#dfecc7",
              p: { xs: 1, sm: 2 },
            }}
          >
            {messages.map((msg, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  justifyContent:
                    msg.from === "me" ? "flex-end" : "flex-start",
                  mb: 1,
                }}
              >
                <Paper
                  sx={{
                    px: 2,
                    py: 1,
                    maxWidth: "75%",
                    backgroundColor:
                      msg.from === "me" ? "#cfe8a9" : "#e9f3c4",
                    borderRadius:
                      msg.from === "me"
                        ? "20px 20px 0 20px"
                        : "20px 20px 20px 0",
                    boxShadow: 1,
                    fontSize: { xs: "13px", sm: "14px" },
                  }}
                >
                  <Typography>{msg.text}</Typography>
                </Paper>
              </Box>
            ))}
          </Box>

          {/* 📝 Input Area */}
          <Box
            sx={{
              p: { xs: 1, sm: 1.5 },
              display: "flex",
              alignItems: "center",
              borderTop: "1px solid #c5d9a8",
              backgroundColor: "#f2f8e5",
              flexShrink: 0,
            }}
          >
            <TextField
              fullWidth
              placeholder="Type a message"
              value={newMsg}
              onChange={(e) => setNewMsg(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "30px",
                  backgroundColor: "#fff",
                  fontSize: { xs: "13px", sm: "14px" },
                },
              }}
            />
            <IconButton
              onClick={sendMessage}
              sx={{
                ml: 1,
                backgroundColor: "#a3c27d",
                color: "white",
                "&:hover": { backgroundColor: "#8fb164" },
                width: { xs: 36, sm: 40 },
                height: { xs: 36, sm: 40 },
              }}
            >
              <Send />
            </IconButton>
          </Box>
        </>
      )}
    </Box>
  );
};

export default ChatWindow;
