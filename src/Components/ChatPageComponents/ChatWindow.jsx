import { Box, Typography, Avatar, TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import colors from "../../Style/color";
import { useEffect, useRef } from "react";

const ChatWindow = () => {
  const messagesEndRef = useRef(null);

  const messages = [
    { id: 1, text: "omg, this is amazing", sender: "Bryan", avatar: "/images/bryan.jpg", type: "left" },
    { id: 2, text: "perfect ✅", sender: "Bryan", avatar: "/images/bryan.jpg", type: "left" },
    { id: 3, text: "How are you?", sender: "Me", avatar: "/images/me.jpg", type: "right" },
    { id: 2, text: "perfect ✅", sender: "Bryan", avatar: "/images/bryan.jpg", type: "left" },
    { id: 3, text: "How are you?", sender: "Me", avatar: "/images/me.jpg", type: "right" },
    { id: 2, text: "perfect ✅", sender: "Bryan", avatar: "/images/bryan.jpg", type: "left" },
    { id: 3, text: "How are you?", sender: "Me", avatar: "/images/me.jpg", type: "right" },
    { id: 2, text: "perfect ✅", sender: "Bryan", avatar: "/images/bryan.jpg", type: "left" },
    { id: 2, text: "perfect ✅", sender: "Bryan", avatar: "/images/bryan.jpg", type: "left" },
    { id: 3, text: "How are you?", sender: "Me", avatar: "/images/me.jpg", type: "right" },
    { id: 3, text: "ada ada adsfdf", sender: "Me", avatar: "/images/me.jpg", type: "right" },

  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%", // Fill parent height
        width: "100%", // Fill parent width
        bgcolor: "#fff",
        p:2,
        borderRadius:2
      }}
    >
      {/* Chat Header */}
      <Box sx={{ bgcolor: colors.yellowbackground, p: 1, display: "flex", alignItems: "center", gap: 2,  borderRadius:2,borderBottom: "1px solid #ddd" }}>
        <Avatar src="/images/bryan.jpg" sx={{ width: 45, height: 45 }} />
        <Box>
          <Typography sx={{ fontSize: 18, fontFamily: "Inter" }}>Bryan</Typography>
          <Typography sx={{ fontSize: 14, fontFamily: "Inter" }} color="green">
            Online
          </Typography>
        </Box>
      </Box>

      {/* Chat Messages */}
      <Box
        sx={{
          flexGrow: 1,
          p: 2,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        {messages.length === 0 ? (
          <Typography sx={{ textAlign: "center", color: "#aaa" }}>No messages yet</Typography>
        ) : (
          messages.map((msg) => (
            <Box
              key={msg.id}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: msg.type === "right" ? "flex-end" : "flex-start",
                gap: 1,
              }}
            >
              {msg.type === "left" && <Avatar src={msg.avatar} sx={{ width: 34, height: 34 }} />}
              <Box
                sx={{
                  bgcolor: msg.type === "right" ? "#007bff" : "#f0f0f0",
                  color: msg.type === "right" ? "#fff" : "#000",
                  p: 1.5,
                  borderRadius: 2,
                  maxWidth: "70%",
                }}
              >
                <Typography>{msg.text}</Typography>
              </Box>
              {msg.type === "right" && <Avatar src={msg.avatar} sx={{ width: 34, height: 34 }} />}
            </Box>
          ))
        )}
        <div ref={messagesEndRef} />
      </Box>

      {/* Message Input */}
      <Box sx={{ p: 2, display: "flex", alignItems: "center", borderTop: "1px solid #ddd", bgcolor: "#fff" }}>
        <TextField fullWidth placeholder="Type a message" variant="outlined" size="small" />
        <IconButton color="primary">
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ChatWindow;
