import { Box } from "@mui/material";
import MainLayout from "../../Layouts/MainLayout";
import ChatList from "../../Components/ChatPageComponents/Chatlist";
import ChatWindow from "../../Components/ChatPageComponents/ChatWindow";
import { useEffect, useState } from "react";

const ChatPage = () => {
  const [selectedChat, setSelectedChat] = useState(null); 

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <MainLayout 

    ischatScreen={true}
   
   
   
    isnotSellMyCar ={true}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: {
              xs: selectedChat ? "0%" : "100%", 
              sm: "35%",
              md: "30%",
            },
            overflowY: "auto",
            minHeight: "100vh",
            display: { xs: selectedChat ? "none" : "block", sm: "block" },
          }}
        >
          <ChatList onSelectChat={(chat) => setSelectedChat(chat)} />
        </Box>

        <Box
          sx={{
            width: {
              xs: selectedChat ? "100%" : "0%",
              sm: "65%",
              md: "70%",
            },
            display: {
              xs: selectedChat ? "block" : "none",
              sm: "block",
            },
            height: "100%",
          }}
        >
          {selectedChat && (
            <ChatWindow
              chat={selectedChat}
              onBack={() => setSelectedChat(null)} 
            />
          )}
          {!selectedChat && (
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              Select a chat to start messaging
            </Box>
          )}
        </Box>
      </Box>
    </MainLayout>
  );
};

export default ChatPage;
