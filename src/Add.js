import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  IconButton,
  Typography,
  Avatar,
  Popover,
  Stack,
  Button,
  Divider,
  Tooltip,
  Paper,
  Grid,
} from "@mui/material";
import {
  Search,
  Chat,
  Call,
  VideoCall,
  Phone,
  Menu as MenuIcon,
  Home as HomeIcon, // Used for Home menu item
  Schedule as RecentIcon, // Used for Recent menu item
  AddCircle as AddIcon, // Used for Add menu item
  Videocam as VideoIcon, // Used for Video menu item
  Settings as SettingIcon, // Used for Settings menu item
  Apps as AppsIcon, // Used for Menu menu item
} from "@mui/icons-material";
import { DataSet } from "vis-data";
import { Network } from "vis-network";
import logo1 from "./image/logo1.png";
import {
  Group as FamilyIcon,
  Person as PersonalIcon,
  School as EducationIcon,
  Work as WorkIcon,
  PeopleAlt as SocialIcon,
  Apps as AllIcon,
} from "@mui/icons-material";
import {
  WorkOutline as WorkOutlineIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  CreditCard as CreditCardIcon,
  Tag as CategoryIcon,
} from "@mui/icons-material";


// --- EXISTING CONTACTS DATA (KEEP AS IS) ---
const contacts = [
  {
    name: "Joseph Morgan",
    relation: "Boss",
    type: "Work",
    phone: "+91 9938567890",
    email: "surjasingh@gmail.com",
    ac: "5437-2458-7893",
  },
  {
    name: "Surya Pratap Singh",
    relation: "Friend",
    type: "Social",
    phone: "+91 9938567890",
    email: "surjasingh@gmail.com",
    ac: "5437-2458-7893",
  },
  {
    name: "Khushi",
    relation: "Teacher",
    type: "Education",
    phone: "+91 9938567890",
    email: "surjasingh@gmail.com",
    ac: "5437-2458-7893",
  },
  {
    name: "Shreya Singh",
    relation: "Girlfriend",
    type: "Personal",
    phone: "+91 9938567890",
    email: "surjasingh@gmail.com",
    ac: "5437-2458-7893",
  },
  {
    name: "Surya Pratap Singh",
    relation: "Brother",
    type: "Family",
    phone: "+91 9938567890",
    email: "surjasingh@gmail.com",
    ac: "5437-2458-7893",
  },
];

// --- EXISTING CONTACT ACTIONS (KEEP AS IS) ---
const ContactActions = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleCallClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const open = Boolean(anchorEl);

  return (
    <>
      <Stack spacing={1}>
        {/* Call Icon (Main trigger) */}
        <Tooltip title="Call Options">
          <IconButton size="small" color="success" onClick={handleCallClick}>
            <Call fontSize="small" />
          </IconButton>
        </Tooltip>

        {/* Chat Icon */}
        <Tooltip title="Chat">
          <IconButton size="small" color="primary">
            <Chat fontSize="small" />
          </IconButton>
        </Tooltip>
      </Stack>

      {/* Popover for Voice/Video Call */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        PaperProps={{
          sx: {
            p: 1,
            borderRadius: 2,
            backgroundColor: "#f0f8e2",
            boxShadow: 3,
          },
        }}
      >
        <Stack direction="row" spacing={1}>
          <Tooltip title="Voice Call">
            <IconButton color="success" onClick={handleClose}>
              <Phone />
            </IconButton>
          </Tooltip>
          <Tooltip title="Video Call">
            <IconButton color="primary" onClick={handleClose}>
              <VideoCall />
            </IconButton>
          </Tooltip>
        </Stack>
      </Popover>
    </>
  );
};
// 🆕 New MiniSidebar Component for constant icons
const MiniSidebar = ({ onMenuClick }) => {
    const navigate = useNavigate();
  const menuItems = [
    { name: "Home", icon: HomeIcon, path:"/home" },
    { name: "Recent", icon: RecentIcon },
    { name: "Add", icon: AddIcon },
    { name: "Video", icon: VideoIcon },
    { name: "Settings", icon: SettingIcon },
    { name: "Menu", icon: AppsIcon },
  ];

  return (
    <Box
      sx={{
        width: 60, // Thin width for icons
        backgroundColor: "#e9f3c4",
        borderRight: "2px solid #a3c27d",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // pt: 2,
        // pb: 2,
      }}
    >
      {/* 🧩 Baatology Logo */}
      <Box
        component="img"
        src={logo1}
        alt="Baatology Logo"
        sx={{
          position :"fixed",
          // left: 0, 
          top:-10,
          width: 90,
          height: 90,
          borderRadius: "12px",
          // mb: 5,
          cursor: "pointer",
        }}
      />

      {/* 🆕 Top Menu Button */}
<Tooltip title="Open Menu" placement="right">
  <IconButton
    size="large"
    onClick={onMenuClick}
    sx={{
      color: "#466e6b",
      backgroundColor: "#e9f3c4",
      "&:hover": { backgroundColor: "#cce3a1", color: "#99b562" },
      // mb: 0.2,
      mt:8
    }}
  >
    <MenuIcon fontSize="medium" />
  </IconButton>
</Tooltip>


      <Stack spacing={0.3} >
        {menuItems.map((item) => (
          <Tooltip title={item.name} placement="right" key={item.name}>
            <IconButton
              size="large"
              onClick={() => navigate(item.path)}
              sx={{
                color: "#466e6b",
                "&:hover": { color: "#99b562", backgroundColor: "#cce3a1" },
              }}
            >
              <item.icon fontSize="medium" />
            </IconButton>
          </Tooltip>
        ))}
      </Stack>
    </Box>
  );
};

// 🆕 New Menu Sidebar Component
const MenuSidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    { name: "Home", icon: HomeIcon },
    { name: "Recent", icon: RecentIcon },
    { name: "Add", icon: AddIcon },
    { name: "Video", icon: VideoIcon },
    { name: "Setting", icon: SettingIcon },
    { name: "Menu", icon: AppsIcon },
  ];

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 250, // Width of the Menu sidebar
        height: "100vh",
        backgroundColor: "#e9f3c4", // Lighter background
        borderRight: "2px solid #a3c27d",
        zIndex: 1000,
        transform: isOpen ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.3s ease-in-out",
        p: 2,
        boxShadow: 8,
      }}
    >
                {/* 🧩 Baatology Logo */}
            <Box
              component="img"
              src={logo1}
              alt="Baatology Logo"
              sx={{
                position :"fixed",
                left:-15, 
                top:-30,
                width: 150,
                height: 150,
                borderRadius: "12px",
                mb: 20,
                cursor: "pointer",
              }}
            />
      <Stack spacing={1}sx={{mt:"70px"}}>
        {menuItems.map((item) => (
          <Button
            key={item.name}
            startIcon={<item.icon />}
            onClick={onClose} // Closes menu on click for now
            sx={{
              justifyContent: "flex-start",
              color: "#333",
              textTransform: "none",
              fontSize: "16px",
              "&:hover": {
                backgroundColor: "#cce3a1",
              },
            }}
          >
            {item.name}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};
const getTypeIcon = (type) => {
  switch (type) {
    case "Family":
      return <FamilyIcon sx={{ fontSize: 15, color: "#729d39" }} />;
    case "Personal":
      return <PersonalIcon sx={{ fontSize: 15, color: "#729d39" }} />;
    case "Work":
      return <WorkIcon sx={{ fontSize: 15, color: "#729d39" }} />;
    case "Social":
      return <SocialIcon sx={{ fontSize: 15, color: "#729d39" }} />;
    case "Education":
      return <EducationIcon sx={{ fontSize: 15, color: "#729d39" }} />;
    default:
      return <CategoryIcon sx={{ fontSize: 15, color: "#729d39" }} />; // Default or All icon
  }
};
// 🔄 Sidebar Component updated to use the menu handler
const Sidebar = ({ onMenuClick }) => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  // ✅ Filtered contacts based on selected type
  const filteredContacts =
    selectedFilter === "All"
      ? contacts
      : contacts.filter((c) => c.type === selectedFilter);
  return (
    <Box
      sx={{
        width: 400,
        backgroundColor: "#f7fbd7",
        borderRight: "2px solid #a3c27d",
        height: "100vh",
        overflowY: "auto",
        p: 1.5,
        scrollbarWidth: "none", // Firefox
        "&::-webkit-scrollbar": { display: "none" }, // Chrome, Safari, Edge
        position: "relative", // Needed for MenuSidebar to overlay
      }}
    >
      {/* Search Bar + Menu Icon */}
      <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
      
        {/* Search Bar */}
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          placeholder="Search Relationship"
          InputProps={{
            startAdornment: <Search sx={{ color: "gray", mr: 1 }} />,
            sx: {
              borderRadius: 5,
              backgroundColor: "#e9f3c4",
              "& fieldset": { border: "none" },
            },
          }}
          sx={{ mb: 1 }}
        />
      </Stack>

      {/* Filter Buttons */}
      <Stack
        direction="row"
        flexWrap="wrap"
        spacing={1}
        useFlexGap
        sx={{ mb: 2 }}
      >
    {[
  { label: "All", icon: <AllIcon /> },
  { label: "Family", icon: <FamilyIcon /> },
  { label: "Personal", icon: <PersonalIcon /> },
  { label: "Work", icon: <WorkIcon /> },
  { label: "Social", icon: <SocialIcon /> },
  { label: "Education", icon: <EducationIcon /> },
].map((item) => (
  <Button
    key={item.label}
    variant="contained"
    onClick={() => setSelectedFilter(item.label)}
    startIcon={item.icon}
    sx={{
      textTransform: "none",
      fontSize: "13px",
      borderRadius: "20px",
      backgroundColor:
        selectedFilter === item.label ? "#a3c27d" : "#e9f3c4",
      color: "#333",
      "&:hover": { backgroundColor: "#cce3a1" },
      px: 2,
    }}
  >
    {item.label}
  </Button>
))}

      </Stack>


      <Divider sx={{ mb: 2 }} />

      {/* Contacts List */}
      {filteredContacts.map((c, index) => (
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
            sx={{ width: 48, height: 48, mr: 1.5, backgroundColor: "#c7e1a3" }}
          >
            {c.name.charAt(0)}
          </Avatar>
          <Box flex={1}>
            <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>
              {c.name}
            </Typography>
            <Typography sx={{ color: "#466e6b", fontSize: "13px",fontWeight: "bold" }}>
              {c.relation}
            </Typography>
   {/* Category (type) */}
  <Stack direction="row" alignItems="center" spacing={0.8}>
    {getTypeIcon(c.type)}
    {/* <CategoryIcon sx={{ fontSize: 15, color: "#729d39" }} /> */}
    <Typography sx={{ fontSize: "12px", color: "#555" }}>{c.type}</Typography>
  </Stack>

  {/* Phone */}
  <Stack direction="row" alignItems="center" spacing={0.8}>
    <PhoneIcon sx={{ fontSize: 15, color: "#729d39" }} />
    <Typography sx={{ fontSize: "12px", color: "#555" }}>{c.phone}</Typography>
  </Stack>

  {/* Email */}
  <Stack direction="row" alignItems="center" spacing={0.8}>
    <EmailIcon sx={{ fontSize: 15, color: "#729d39" }} />
    <Typography sx={{ fontSize: "12px", color: "#555" }}>{c.email}</Typography>
  </Stack>

  {/* Aadhaar */}
  <Stack direction="row" alignItems="center" spacing={0.8}>
    <CreditCardIcon sx={{ fontSize: 15, color: "#729d39" }} />
    <Typography sx={{ fontSize: "12px", color: "#555" }}>{c.ac}</Typography>
  </Stack>
          </Box>

          {/* ✅ Call + Chat actions */}
          <ContactActions />
        </Paper>
      ))}
    </Box>
  );
};

// 🌟 Updated Home Component
const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  // Category and Relationship state
  const [selectedCategory, setSelectedCategory] = useState("Work");
  const [selectedRelation, setSelectedRelation] = useState("");

  const categories = [
    { name: "Family", icon: <FamilyIcon /> },
    { name: "Work", icon: <WorkIcon /> },
    { name: "Social", icon: <SocialIcon /> },
    { name: "Personal", icon: <PersonalIcon /> },
    { name: "Education", icon: <EducationIcon /> },
  ];

  const relations = [
    "Colleague",
    "Boss",
    "Manager",
    "CEO",
    "Client",
    "Partner",
    "Mentor",
    "Employee",
    "Mentee",
    "Intern",
  ];

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
        background: "linear-gradient(230deg, #99b562ff 0%, #d6e8c4 100%)",
        position: "relative",
      }}
    >
      {/* Left fixed mini sidebar */}
      <MiniSidebar onMenuClick={handleMenuToggle} />

      {/* Collapsible menu sidebar */}
      <MenuSidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Main contact list sidebar */}
      <Sidebar onMenuClick={handleMenuToggle} />

      {/* 🟩 Register Relationship Page (Right Side Form) */}
      <Box
        sx={{
          flex: 1,
          p: 4, // Added padding for better spacing
          backgroundColor: "#f7fbd7",
          height: "100vh",
          overflowY: "auto",
          borderLeft: "2px solid #a3c27d",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 650, textAlign: "center" }}> {/* Increased max width for 2-column layout */}
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#466e6b", mb: 4 }}
          >
            Register Relationship
          </Typography>

          {/* New Grid Layout for Avatar/Photo (Left) and Input Fields (Right) */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {/* Left Column: Avatar and Take Photo */}
            <Grid item xs={12} sm={4}> 
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "100%",
                  justifyContent: "flex-start", // Align items to the top
                  pt: 2, // Small top padding for alignment with the top input field
                }}
              >
                <Avatar
                  sx={{
                    width: 90,
                    height: 90,
                    mb: 1,
                    bgcolor: "#e9f3c4",
                  }}
                />
                <Button
                  variant="outlined"
                  sx={{
                    mb: 3,
                    textTransform: "none",
                    borderColor: "#99b562",
                    color: "#466e6b",
                    "&:hover": {
                      borderColor: "#729d39",
                      backgroundColor: "#e9f3c4",
                    },
                  }}
                >
                  Take Photo
                </Button>
              </Box>
            </Grid>

            {/* Right Column: Input Fields */}
            <Grid item xs={12} sm={8} >
              <Stack spacing={2}>
              {[
                { label: "Full Name", placeholder: "Enter full name" },
                { label: "Phone Number", placeholder: "Enter number" },
                { label: "Email Address", placeholder: "Enter email" },
                { label: "Aadhar Number", placeholder: "1234-1234-1234" },
              ].map((field, index) => (
                <TextField
                  key={index}
                  fullWidth
                  size="small"
                  variant="outlined"
                  label={field.label}
                  placeholder={field.placeholder}
                  sx={{
                    borderRadius: "20px",
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#e9f3c4",
                      borderRadius: "20px",
                      "& fieldset": { border: "none" },
                    },
                  }}
                />
              ))}
              </Stack>
            </Grid>
          </Grid>
          
          <Divider sx={{mb: 4}}/> {/* Added Divider for separation */}

          {/* Category Section */}
          <Typography
            sx={{
              textAlign: "left",
              mt: 1,
              mb: 1,
              fontWeight: "bold",
              color: "#466e6b",
            }}
          >
            Category *
          </Typography>

          <Grid container spacing={1} justifyContent="flex-start"> {/* Adjusted justification */}
            {categories.map((cat) => (
              <Grid item xs={4} sm={2.4} key={cat.name}> {/* Adjusted Grid item for better button fit */}
                <Button
                  onClick={() => setSelectedCategory(cat.name)}
                  variant="contained"
                  startIcon={cat.icon}
                  sx={{
                    width: "100%",
                    backgroundColor:
                      selectedCategory === cat.name ? "#a3c27d" : "#e9f3c4",
                    color: "#333",
                    textTransform: "none",
                    borderRadius: "12px",
                    "&:hover": { backgroundColor: "#cce3a1" },
                  }}
                >
                  {cat.name}
                </Button>
              </Grid>
            ))}
          </Grid>

          {/* Relationship Section */}
          <Typography
            sx={{
              textAlign: "left",
              mt: 4,
              mb: 1,
              fontWeight: "bold",
              color: "#466e6b",
            }}
          >
            Relationship
          </Typography>

          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="flex-start" // Adjusted justification
            spacing={1}
            useFlexGap
          >
            {relations.map((rel) => (
              <Button
                key={rel}
                onClick={() => setSelectedRelation(rel)}
                variant="contained"
                sx={{
                  backgroundColor:
                    selectedRelation === rel ? "#a3c27d" : "#e9f3c4",
                  color: "#333",
                  textTransform: "none",
                  borderRadius: "20px",
                  "&:hover": { backgroundColor: "#cce3a1" },
                }}
              >
                {rel}
              </Button>
            ))}
          </Stack>

          {/* Save Button */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 4, // Increased top margin
              mb: 4, // Added bottom margin
              backgroundColor: "#a3c27d",
              color: "#333",
              textTransform: "none",
              fontWeight: "bold",
              borderRadius: "20px",
              "&:hover": { backgroundColor: "#99b562" },
            }}
          >
            Save Relationship
          </Button>
            <Box
            component="img"
            src={logo1}
            alt="Baatology Logo"
            sx={{
              position: "absolute",
              top: -20,
              right: -10,
              width: 150,
              height: 150,
              borderRadius: "12px",
              // boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              cursor: "pointer",
              transition: "transform 0.3s ease",
              "&:hover": { transform: "scale(1.1)" },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;