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
import ChatWindow from "./ChatWindow";
import VoiceCallScreen from "./VoiceCallScreen";
import VideoCallScreen from "./VideoCallScreen";


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
const ContactActions =  ({ contact, onChatClick ,onCallClick,  onVideoCallClick }) => {
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
  <IconButton
    size="small"
    color="primary"
    onClick={() => onChatClick(contact)} // ✅ Opens that user's chat
  >
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
  <IconButton
    color="success"
    onClick={() => {
      handleClose();
      onCallClick(contact); // ✅ open voice call screen
    }}
  >
    <Phone />
  </IconButton>
</Tooltip>
          <Tooltip title="Video Call">
            <IconButton color="primary" 
            onClick={() => {
        handleClose();
        onVideoCallClick(contact); // triggers full video call
      }}
            >
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
const Sidebar = ({ onMenuClick,  onChatClick,  onCallClick, onVideoCallClick }) => {
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
          <ContactActions
  contact={c}
  onChatClick={onChatClick}
  onCallClick={onCallClick} // ✅ pass call handler here
  onVideoCallClick={onVideoCallClick}
/>
        </Paper>
      ))}
    </Box>
  );
};

// --- EXISTING CONNECTION DIAGRAM (KEEP AS IS) ---
// --- UPDATED CONNECTION DIAGRAM ---
const ConnectionDiagram = () => {
  const networkRef = useRef(null);
  const networkInstance = useRef(null);

  useEffect(() => {
    const container = networkRef.current;

    // Main + Primary nodes
    const nodes = new DataSet([
      { id: 1, label: "You", color: "#ff6b6b", shape: "circularImage", size: 30 , image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoZPQJ7kRFouOgvueVTlEG5unB1s979ktYYg&s"},
      {
        id: 2,
        label: "Family",
        color: "#6c63ff",
        size: 25,
        shape: "circularImage",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv98rJWPvweaCdKkG9Y5p5EHE5cg3-C7lazg&s",
      },
      {
        id: 3,
        label: "Work",
        color: "#6c63ff",
        size: 25,
        shape: "circularImage",
        image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      },
      {
        id: 4,
        label: "Education",
        color: "#6c63ff",
        size: 25,
        shape: "circularImage",
        image: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
      },
      {
        id: 5,
        label: "Social",
        color: "#6c63ff",
        size: 25,
        shape: "circularImage",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtUZxBraYkyw-CwfTQrkmlWNPUgJqUXdc05Q&s",
      },
      {
        id: 6,
        label: "Personal",
        color: "#6c63ff",
        size: 25,
        shape: "circularImage",
        image: "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
      },
    ]);

    const edges = new DataSet([
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 1, to: 4 },
      { from: 1, to: 5 },
      { from: 1, to: 6 },
    ]);

    // Mapping of expandable child nodes (rest remains the same)
    const childNodesMap = {
      2: [
        { id: 20, label: "Brother" },
        { id: 21, label: "Sister" },
        { id: 22, label: "Father" },
        { id: 23, label: "Mother" },
        { id: 24, label: "Son" },
        { id: 25, label: "Daughter" },
        { id: 26, label: "Grandmother" },
        { id: 27, label: "Grandfather" },
        { id: 28, label: "Uncle" },
        { id: 29, label: "Aunt" },
        { id: 30, label: "Cousin" },
        { id: 31, label: "Niece" },
        { id: 32, label: "Nephew" },
        { id: 33, label: "Spouse" },
        { id: 34, label: "Brother in Law" },
        { id: 35, label: "Sister in Law" },
        { id: 36, label: "GrandSon" },
        { id: 37, label: "GrandDaughter" },
      ],
      3: [
        { id: 38, label: "Boss" },
        { id: 39, label: "Manager" },
        { id: 40, label: "Teammate" },
        { id: 41, label: "Intern" },
        { id: 42, label: "Mentor" },
      ],
      4: [
        { id: 43, label: "Teacher" },
        { id: 44, label: "Professor" },
        { id: 45, label: "Senior" },
        { id: 46, label: "Junior" },
        { id: 47, label: "Alumni" },
        { id: 48, label: "Batchmate" },
        { id: 49, label: "Classmate" },
        { id: 50, label: "Student" },
        { id: 51, label: "Principal" },
        { id: 52, label: "Best-Friend" },
      ],
      5: [
        { id: 53, label: "Friend" },
        { id: 54, label: "Neighbour" },
        { id: 55, label: "Best-friend" },
        { id: 56, label: "Acquaintance" },
        { id: 57, label: "Society Member" },
        { id: 58, label: "Teammate" },
      ],
      6: [
        { id: 60, label: "Girlfriend" },
        { id: 61, label: "Boyfriend" },
        { id: 62, label: "Partner" },
        { id: 63, label: "Ex-partner" },
        { id: 64, label: "Fiance" },
        { id: 65, label: "Roommate" },
        { id: 66, label: "Crush" },
        { id: 67, label: "Lover" },
        { id: 68, label: "Companion" },
        { id: 69, label: "Soulmate" },
      ],
    };

    const subChildNodesMap = {
      20: [
        { id: 201, label: "Wife" },
        { id: 202, label: "Son" },
        { id: 203, label: "Daughter" },
      ],
      21: [
        { id: 211, label: "Husband" },
        { id: 212, label: "Son" },
        { id: 213, label: "Daughter" },
      ],
      22: [
        { id: 221, label: "Grandfather" },
      ],
    };

    const expandedNodes = new Set();

    const data = { nodes, edges };
    
    // 🌟 MODIFIED OPTIONS FOR STABILITY AND VIEWPORT VISIBILITY
    const options = {
      // 1. IMPROVED PHYSICS CONFIGURATION
      physics: { 
        enabled: true, 
        stabilization: { 
          enabled: true, 
          iterations: 1000, 
          updateInterval: 50, 
          fit: true // Fit the view to the network after stabilization
        },
        solver: 'forceAtlas2Based',
        forceAtlas2Based: {
          gravitationalConstant: -70, // Slightly stronger pull
          centralGravity: 0.01,
          springLength: 100,
          springConstant: 0.08,
          damping: 0.4
        },
      },
      // 2. LAYOUT CONFIGURATION
      layout: { 
        improvedLayout: true 
      },
      // 3. NODE STYLING (KEEP AS IS)
      nodes: {
        font: { size: 14, color: "#222", strokeWidth: 0 },
        borderWidth: 1,
        shadow: true,
      },
      // 4. EDGES STYLING (KEEP AS IS)
      edges: {
        color: "#888",
        width: 1.5,
        smooth: true,
      },
      // 5. INTERACTION FOR BETTER CONTROL
      interaction: {
        hover: true,
        zoomView: true,
        dragView: true,
      },
    };

    const network = new Network(container, data, options);
    networkInstance.current = network;

    // IMPORTANT: Fit the view to the data initially, and after node creation/removal
    network.on("stabilized", () => {
      network.fit();
    });

    // ✅ Expand child nodes on click
    network.on("click", (params) => {
      if (!params.nodes.length) return;

      const nodeId = params.nodes[0];

      let newNodesAdded = false;

      // First level expansion (Family, Work, etc.)
      if (childNodesMap[nodeId] && !expandedNodes.has(nodeId)) {
        childNodesMap[nodeId].forEach((child) => {
          nodes.add({ ...child, color: "#a3d9a5", size: 15 });
          edges.add({ from: nodeId, to: child.id });
        });
        expandedNodes.add(nodeId);
        newNodesAdded = true;
      }

      // Second level expansion (Brother → Wife/Son/Daughter)
      if (subChildNodesMap[nodeId] && !expandedNodes.has(nodeId)) {
        subChildNodesMap[nodeId].forEach((sub) => {
          nodes.add({ ...sub, color: "#d4ed91", size: 13 });
          edges.add({ from: nodeId, to: sub.id });
        });
        expandedNodes.add(nodeId);
        newNodesAdded = true;
      }
      
      // Manually trigger stabilization and fit if new nodes were added
      if (newNodesAdded) {
        network.setOptions({ physics: { enabled: true } });
        network.stabilize(100); // Small stabilization run
      }
    });

    // 🔹 Collapse logic
    network.on("doubleClick", (params) => {
      if (!params.nodes.length) return;
      const nodeId = params.nodes[0];

      // collapse logic (remains the same)
      const children =
        (childNodesMap[nodeId] && childNodesMap[nodeId].map((c) => c.id)) ||
        (subChildNodesMap[nodeId] && subChildNodesMap[nodeId].map((c) => c.id));

      if (children) {
        let nodesRemoved = false;
        children.forEach((id) => {
          if (nodes.get(id)) {
            nodes.remove(id);
            nodesRemoved = true;
          }
          edges.get().forEach((e) => {
            if (e.from === nodeId && e.to === id) edges.remove(e.id);
          });
        });
        expandedNodes.delete(nodeId);
        
        // Manually trigger stabilization and fit if nodes were removed
        if (nodesRemoved) {
             network.setOptions({ physics: { enabled: true } });
             network.stabilize(100);
        }
      }
    });

    return () => network.destroy();
  }, []);

  return (
    <Box
      ref={networkRef}
      sx={{
        flex: 1,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        borderLeft: "2px solid #a3c27d",
        position: "relative",
      }}
    />
  );
};

// ... (Rest of the Home component and other components remain the same)

// 🌟 Updated Home Component
const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 🆕 State for menu visibility

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
const [selectedChatUser, setSelectedChatUser] = useState(null);
const [selectedVoiceCallUser, setSelectedVoiceCallUser] = useState(null);
const [selectedVideoCallUser, setSelectedVideoCallUser] = useState(null);

const handleOpenChat = (contact) => setSelectedChatUser(contact);
const handleCloseChat = () => setSelectedChatUser(null);

   // Category and Relationship state
    const [selectedCategory, setSelectedCategory] = useState("Work");
    const [selectedRelation, setSelectedRelation] = useState("");
  const [activeCallUser, setActiveCallUser] = useState(null);
const handleOpenCall = (contact) => setSelectedVoiceCallUser(contact);
const handleOpenVideoCall = (contact) => setSelectedVideoCallUser(contact);

const handleEndCall = () => setSelectedVoiceCallUser(null);
const handleEndVideoCall = () => setSelectedVideoCallUser(null);

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
        backgroundColor: "#f7fbd7",
        // background: "linear-gradient(230deg, #cde49fff 0%, #d6e8c4 100%)",
        position: "relative", // Ensure relative positioning for MenuSidebar
      }}
    >
      <MiniSidebar onMenuClick={handleMenuToggle} />
      {/* 1. Collapsible Menu Sidebar (Opens on top of the Sidebar) */}
      <MenuSidebar
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />

      {/* 2. Main Contacts Sidebar */}
     <Sidebar
  onMenuClick={handleMenuToggle}
  onChatClick={handleOpenChat}
  onCallClick={handleOpenCall}
  onVideoCallClick={handleOpenVideoCall} // ✅ Added
/>

{/* 3. Right Side Section (Chat / Voice Call / Video Call / Diagram) */}
<Box sx={{ flex: 1, position: "relative" }}>
  {selectedVoiceCallUser ? (
    <VoiceCallScreen
      contact={selectedVoiceCallUser}
      onEndCall={handleEndCall}
    />
  ) : selectedVideoCallUser ? (
    <VideoCallScreen
      contact={selectedVideoCallUser}
      onEndCall={handleEndVideoCall}
    />
  ) : selectedChatUser ? (
    <ChatWindow contact={selectedChatUser} onBack={handleCloseChat} />
  ) : (
    <>
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
          cursor: "pointer",
          transition: "transform 0.3s ease",
          "&:hover": { transform: "scale(1.1)" },
        }}
      />
      <ConnectionDiagram />
    </>
  )}
</Box>
    </Box>
  );
};

export default Home;