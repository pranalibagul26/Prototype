import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Stack,
  IconButton,
  Paper,
} from "@mui/material";
import { Chat, Call } from "@mui/icons-material";

const contacts = [
  {
    name: "Joseph Morgan",
    relation: "Boss",
    type: "Work",
    phone: "+91 9938567890",
    email: "surjasingh@gmail.com",
  },
  {
    name: "Surya Pratap Singh",
    relation: "Friend",
    type: "Social",
    phone: "+91 9938567890",
    email: "surjasingh@gmail.com",
  },
  {
    name: "Khushi",
    relation: "Teacher",
    type: "Education",
    phone: "+91 9938567890",
    email: "surjasingh@gmail.com",
  },
  {
    name: "Shreya Singh",
    relation: "Girlfriend",
    type: "Personal",
    phone: "+91 9938567890",
    email: "surjasingh@gmail.com",
  },
  {
    name: "Surya Pratap Singh",
    relation: "Brother",
    type: "Family",
    phone: "+91 9938567890",
    email: "surjasingh@gmail.com",
  },
];

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 380,
        backgroundColor: "#f7fbd7",
        borderRight: "2px solid #a3c27d",
        height: "100vh",
        overflowY: "auto",
        p: 1.5,
      }}
    >
      {/* Contacts List Only */}
      {contacts.map((c, index) => (
        <Paper
          key={index}
          elevation={3}
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#e9f3c4",
            borderRadius: 3,
            p: 1.2,
            mb: 2,
          }}
        >
          <Avatar
            sx={{
              width: 48,
              height: 48,
              mr: 1.5,
              backgroundColor: "#c7e1a3",
            }}
          >
            {c.name.charAt(0)}
          </Avatar>
          <Box flex={1}>
            <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>
              {c.name}
            </Typography>
            <Typography sx={{ color: "#466e6b", fontSize: "13px" }}>
              {c.relation}
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#666" }}>
              {c.type}
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#666" }}>
              {c.phone}
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#666" }}>
              {c.email}
            </Typography>
          </Box>
          <Stack spacing={1}>
            <IconButton size="small" color="success">
              <Call fontSize="small" />
            </IconButton>
            <IconButton size="small" color="primary">
              <Chat fontSize="small" />
            </IconButton>
          </Stack>
        </Paper>
      ))}
    </Box>
  );
};

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
        background: "linear-gradient(230deg, #99b562ff 0%, #d6e8c4 100%)",
      }}
    >
      <Sidebar />
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#333",
          fontSize: "20px",
          fontWeight: 600,
        }}
      >
        {/* Right Section / Empty space for now */}
      </Box>
    </Box>
  );
};

export default Home;
