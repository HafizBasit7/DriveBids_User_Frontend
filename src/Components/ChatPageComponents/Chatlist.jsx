import { Box, Typography, TextField, List, ListItem, ListItemAvatar, ListItemText, Avatar, Badge } from "@mui/material";
import { useState } from "react";
import colors from "../../Style/color";

const ChatList = () => {
  const [tabValue, setTabValue] = useState(0);
  const [activeChat, setActiveChat] = useState(2);

  const chats = [
    { id: 1, name: "Bryan", message: "Sleek 2018 Tesla Model 3", time: "4:30 PM", img: "/images/tesla.jpg", unread: 4 },
    { id: 2, name: "Bryan", message: "Reliable 2015 Honda Accord", time: "4:30 PM", img: "/images/honda.jpg", unread: 2 },
    { id: 3, name: "Bryan", message: "Sporty 2020 Ford Mustang GT", time: "4:30 PM", img: "/images/mustang.jpg", unread: 6 },
    { id: 4, name: "Diana", message: "Fuel-Efficient 2019 Toyota", time: "4:12 PM", img: "/images/toyota.jpg", unread: 0 },
    
   
  ];

  return (
    <Box sx={{ fontFamily: "Inter, sans-serif", p: 2, borderRadius: "12px" }}>
      {/* Header Section */}
      <Box sx={{ bgcolor: colors.yellowbackground, p: 2, borderRadius: "8px", mb: 2, display:"flex", justifyContent:"flex-start", pl:3 }}>
        <Typography variant="h5" fontWeight="bold">
          Messages <span style={{ fontWeight: "normal", color: "#000", fontSize:15, }}>5 unread messages</span>
        </Typography>
      </Box>

      {/* Buying & Selling Toggle with Skewed White Strip */}
      <Box sx={{ display: "flex", position: "relative", bgcolor: "#F5F5F5", borderRadius: "8px", mb: 2 }}>
        <Box
          sx={{
            flex: 1,
            textAlign: "center",
            p: 1.5,
            fontWeight: tabValue === 0 ? 500 : "normal",
            cursor: "pointer",
            bgcolor: tabValue === 0 ? "#2F61BF" : "white",
            color: tabValue === 0 ? "white" : "black",
            transition: "background 0.3s",
            borderRadius:2
          }}
          onClick={() => setTabValue(0)}
        >
          Buying
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "13%",
            height: "100%",
            transform: "translate(-50%, -50%) skewX(47deg)",
            backgroundColor:"white",
            zIndex:1,
            borderRight:"2px solid #2F61BF"
         
          }}
        />
        <Box
          sx={{
            flex: 1,
            textAlign: "center",
            border:"2px solid #2F61BF",
            p: 1.5,
            fontWeight: tabValue === 1 ? "bold" : "normal",
            cursor: "pointer",
            bgcolor: tabValue === 0 ? " white" : "#2F61BF",
            color: tabValue === 0 ? "black" : "white",
                        transition: "background 0.3s",
                        borderRadius:2
          }}
          onClick={() => setTabValue(1)}
        >
          Selling
        </Box>
      </Box>

      {/* Search Bar & Chat List Box */}
      <Box sx={{ border: "1px solid #ccc", borderRadius: "12px", p: 2, bgcolor: "white" }}>
        {/* Search Bar */}
        <TextField fullWidth placeholder="Search messages" variant="outlined" size="small" sx={{ mb: 2,borderRadius:2 }} />

        {/* Chat List */}
        <List>
          {chats.map((chat) => (
            <ListItem
              key={chat.id}
              button
              onClick={() => setActiveChat(chat.id)}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: "12px",
                mb: 1,
                p: 1.5,
                bgcolor: activeChat === chat.id ? "#E8F0FE" : "transparent", // Highlight active chat
                transition: "background 0.3s",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <ListItemAvatar>
                  <Avatar src={chat.img} sx={{ width: 44, height: 44 }} />
                </ListItemAvatar>
                <ListItemText
                  primary={<Typography sx={{ fontWeight: "600", fontSize: "14px" }}>{chat.name}</Typography>}
                  secondary={
                    <Typography sx={{ fontSize: "13px", color: "#555" }} noWrap>
                      {chat.message}
                    </Typography>
                  }
                />
              </Box>

              <Box sx={{ textAlign: "center" }}>
                <Typography variant="caption" sx={{ color: "gray", fontSize: "12px", display: "block" }}>
                  {chat.time}
                </Typography>
                {chat.unread > 0 && (
                  <Badge
                    sx={{
                      bgcolor: "#2E73F9",
                      color: "white",
                      fontSize: "12px",
                      fontWeight: "bold",
                      px: 1.2,
                      py: 0.5,
                      borderRadius: "12px",
                      display: "block",
                      mt: 0.5, 
                    }}
                  >
                    {chat.unread}
                  </Badge>
                )}
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default ChatList;





