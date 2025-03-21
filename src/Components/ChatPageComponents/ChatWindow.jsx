import { Box, Typography, Avatar, TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import colors from "../../Style/color";
import { useEffect, useRef } from "react";
import AdBanner from "./AdBanner";

const ChatWindow = ({ chat, onBack }) => {
  const messagesEndRef = useRef(null);

  const messages = [
    { id: 1, text: "omg, this is amazing", sender: "Bryan", avatar: "/images/bryan.jpg", type: "left" , time: "4:36 PM"},
    { id: 2, text: "perfect ✅", sender: "Bryan", avatar: "/images/bryan.jpg", type: "left" , time: "4:36 PM"},
    { id: 3, text: "How are you?", sender: "Me", avatar: "/images/me.jpg", type: "right", time: "4:36 PM" },
    { id: 4, text: "perfect ✅", sender: "Bryan", avatar: "/images/bryan.jpg", type: "left", time: "4:36 PM" },
    { id: 5, text: "How are you?", sender: "Me", avatar: "/images/me.jpg", type: "right" , time: "4:36 PM"},
    { id: 6, text: "perfect ✅", sender: "Bryan", avatar: "/images/bryan.jpg", type: "left" , time: "4:36 PM"},
    { id: 7, text: "How are you?", sender: "Me", avatar: "/images/me.jpg", type: "right", time: "4:36 PM" },
    { id: 8, text: "ada ada adsfdf", sender: "Me", avatar: "/images/me.jpg", type: "right" , time: "4:36 PM"},
    { id: 4, text: "perfect ✅", sender: "Bryan", avatar: "/images/bryan.jpg", type: "left", time: "4:36 PM" },
    { id: 5, text: "How are you?", sender: "Me", avatar: "/images/me.jpg", type: "right" , time: "4:36 PM"},
    { id: 6, text: "perfect ✅", sender: "Bryan", avatar: "/images/bryan.jpg", type: "left" , time: "4:36 PM"},
    { id: 7, text: "How are you?", sender: "Me", avatar: "/images/me.jpg", type: "right", time: "4:36 PM" },
    { id: 8, text: "ada ada adsfdf", sender: "Me", avatar: "/images/me.jpg", type: "right" , time: "4:36 PM"},
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        bgcolor: "#fff",
        p: 2,
        borderRadius: 2,
      }}
    >
      <Box
        sx={{
          bgcolor: colors.yellowbackground,
          p: 1,
          display: "flex",
          alignItems: "center",
          gap: 2,
          borderRadius: 2,
          borderBottom: "1px solid #ddd",
        }}
      >
    
        <Avatar src="/images/bryan.jpg" sx={{ width: 45, height: 45 }} />
        <Box>
          <Typography sx={{ fontSize: 18, fontFamily: "Inter" }}>Bryan</Typography>
          <Typography sx={{ fontSize: 14, fontFamily: "Inter" }} color="green">
            Online
          </Typography>
        </Box>
        <IconButton
          onClick={onBack}
          sx={{
            display: { xs: "block", sm: "none" },
            position: "absolute",
            right: 28,
            
          }}
        >
          <ArrowBackIcon />
        </IconButton>
      </Box>

      <AdBanner />

      <Box
        sx={{
          flexGrow: 1,
          p: 2,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 2,
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
              {msg.type === "left" && (
                <>
                  <Avatar src={msg.avatar} sx={{ width: 34, height: 34 }} />
                  <Box
                    sx={{
                      bgcolor: "#f0f0f0",
                      color: "#000",
                      p: {xs:1,md:1.5},
                      borderRadius: 2,
                      maxWidth: "70%",
                    }}
                  >
                    <Typography sx={{}}>{msg.text}</Typography>
                  </Box>
                  <Typography sx={{ fontSize: 12, color: '#888', minWidth: '50px' }}>{msg.time}</Typography>
                </>
              )}

              {msg.type === "right" && (
                <>
                  <Typography sx={{ fontSize: 12, color: '#888', minWidth: '50px', textAlign: 'right' }}>{msg.time}</Typography>
                  <Box
                    sx={{
                      bgcolor: "#007bff",
                      color: "#fff",
                      p: {xs:1,md:1.5},

                      borderRadius: 2,
                      maxWidth: "70%",
                    }}
                  >
                    <Typography>{msg.text}</Typography>
                  </Box>
                  <Avatar src={msg.avatar} sx={{ width: 34, height: 34 }} />
                </>
              )}
            </Box>
          ))
        )}
        <div ref={messagesEndRef} />
      </Box>

      <Box
        sx={{
          p: 1,
          display: "flex",
          alignItems: "center",
          bgcolor: "#fff",
          borderRadius: 2,
        }}
      >
        <IconButton sx={{ color: "black", mr: 1 }}>
          <AttachFileIcon fontSize="medium" />
        </IconButton>

        <Box sx={{ position: "relative", flexGrow: 1 }}>
          <TextField
            fullWidth
            placeholder="Type a message"
            size="small"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                pr: 5, 
                border: "1px solid#E2E8F0",
                "&:hover": {
                  borderColor: "#E2E8F0",
                },
                "&.Mui-focused": {
                  border: "white",
                },
              },
              "& .MuiInputBase-input": {
                py: 1,
              },
            }}
          />
          <IconButton
            color="primary"
            sx={{
              position: "absolute",
              right: 5,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <SendIcon sx={{ fontSize: 25 }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatWindow;