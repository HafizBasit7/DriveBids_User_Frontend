import { Box, Typography, TextField, List, ListItem, ListItemAvatar, ListItemText, Avatar, Badge, IconButton } from "@mui/material";
import { useState } from "react";
import colors from "../../Style/color";
import SearchIcon from "@mui/icons-material/Search";
import { useQuery } from "@tanstack/react-query";
import { getChats } from "../../api/calls/chat";
import { timeAgo } from "../../utils/utils";

const ChatList = ({ onSelectChat }) => {
  const [tabValue, setTabValue] = useState(0);
  const [activeChat, setActiveChat] = useState(2);

  const {data, isLoading} = useQuery({
    queryKey: ['chats', tabValue === 0 ?  'buying' : 'selling'],
    queryFn: () => getChats(1, 10, tabValue === 0 ?  'buying' : 'selling'),
  });
  const chats = data?.data.chats;



  return (
    <Box sx={{ fontFamily: "Inter, sans-serif", p: 2, borderRadius: "12px" }}>
      {/* Header Section */}
      <Box sx={{ bgcolor: colors.yellowbackground, p: 2, borderRadius: "8px", mb: 2, display:"flex", justifyContent:"flex-start", pl:3 }}>
        <Typography variant="h5" fontWeight="bold">
          Messages <span style={{ fontWeight: "normal", color: "#000", fontSize:15,fontWeight:700 }}></span>
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
            width: "15%",
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
        <Box 
      sx={{ 
        position: "relative", 
        mb: 2, 
        borderRadius: 2, 
        overflow: "hidden", 
        border: "1px solid #ccc",
        bgcolor: "#fff"
      }}
    >
        <IconButton 
        sx={{ 
          position: "absolute", 
          bottom: 5, 
          left: 2, 
          padding: "2px",
          
        }}
      >
        <SearchIcon />
      </IconButton>
      <input
        type="text"
        placeholder="Search messages"
        style={{
          width: "100%",
          padding: "12px 10px 9px 30px", 
          border: "#F3F3F3",
          outline: "none",
          fontSize: "16px",
          background: "#D9D9D9",
        }}
      />
    
    </Box>

        {/* Chat List */}
        <List>
          {chats?.map((chat) => (
            <ListItem
              key={chat._id}
              button
             
              onClick={() => onSelectChat(chat)}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: "12px",
                mb: 1,
                p: 1.5,
                bgcolor: activeChat === chat._id ? "#E8F0FE" : "transparent", // Highlight active chat
                transition: "background 0.3s",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <ListItemAvatar>
                  <Avatar src={chat.user.imgUrl || 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'} sx={{ width: 44, height: 44 }} />
                </ListItemAvatar>
                <ListItemText
                  primary={<Typography sx={{ fontWeight: "600", fontSize: "14px" }}>{chat.user.name}</Typography>}
                  secondary={
                    <Typography sx={{ fontSize: "13px", color: "#555" }} noWrap>
                      {chat.lastMessage || 'Start a conversation'}
                    </Typography>
                  }
                />
              </Box>

              <Box sx={{ textAlign: "center" }}>
                <Typography variant="caption" sx={{ color: "gray", fontSize: "12px", display: "block" }}>
                  {timeAgo(chat.updatedAt)}
                </Typography>
                {/* {chat.unread > 0 && (
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
                )} */}
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default ChatList;





