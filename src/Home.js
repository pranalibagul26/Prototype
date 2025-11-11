import React from "react";
import { Box, 
  TextField,
  IconButton,
  Typography,
  Avatar,
  Popover,
  Stack,
  Button,
  Divider,
  Paper, } from "@mui/material";
import {
  Search,
  Chat,
  Call,
  VideoCall,
  Edit,
  EmailOutlined,
  Phone,
  Menu as MenuIcon,
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
    { name: "Home", icon: HomeIcon },
    { name: "Recent", icon: RecentIcon },
    { name: "Add Relationship", icon: AddIcon, path:"/add" },
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
    { name: "Add Relationship", icon: AddIcon },
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
     
      <Stack spacing={1} sx={{mt:"70px"}}>
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
// --- ICON MAPPING (Add this function/map outside the Sidebar if preferred, but it works fine inside too) ---
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
        width: 340,
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
        <IconButton
          sx={{
            backgroundColor: "#e9f3c4",
            "&:hover": { backgroundColor: "#d6e8c4" },
          }}
        >
          <MenuIcon sx={{ color: "#466e6b" }} />
        </IconButton>

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
      <Stack direction="row" flexWrap="wrap" spacing={1} useFlexGap sx={{ mb: 2 }}>
        {["All", "Family", "Work", "Social", "Personal", "Education"].map((item) => (
          <Button
            key={item}
            variant="contained"
            sx={{
              textTransform: "none",
              fontSize: "13px",
              borderRadius: "20px",
              backgroundColor:
                item === "All" ? "#a3c27d" : "#e9f3c4",
              color: "#333",
              "&:hover": { backgroundColor: "#cce3a1" },
              px: 2,
            }}
          >
            {item}
          </Button>
        ))}
      </Stack>

      {/* Group Section */}
      <Typography
        variant="subtitle2"
        sx={{ color: "#444", mb: 1, fontWeight: 600 }}
      >
        Group
      </Typography>
      <Stack direction="column" spacing={1.2} sx={{ mb: 2 }}>
        <Stack direction="row" alignItems="center" spacing={1.2}>
          <Chat sx={{ color: "#466e6b" }} />
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            Chat
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1.2}>
          <Call sx={{ color: "#466e6b" }} />
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            Voice Call
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1.2}>
          <VideoCall sx={{ color: "#466e6b" }} />
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            Video Call
          </Typography>
        </Stack>
      </Stack>

      <Divider sx={{ mb: 2 }} />

      {/* Contacts List */}
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
          <Avatar sx={{ width: 48, height: 48, mr: 1.5, backgroundColor: "#c7e1a3" }}>
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
    {getTypeIcon(c.type)} {/* Use the helper function */}
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


const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 🆕 State for menu visibility

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
        overflow: " hidden",
        background: "linear-gradient(230deg, #99b562ff 0%, #d6e8c4 100%)",
      }}
    >
      <MiniSidebar onMenuClick={handleMenuToggle} />
      {/* 1. Collapsible Menu Sidebar (Opens on top of the Sidebar) */}
      <MenuSidebar
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />

      {/* 2. Main Contacts Sidebar */}
      <Sidebar onMenuClick={handleMenuToggle} />

      {/* 3. Connection Diagram */}
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