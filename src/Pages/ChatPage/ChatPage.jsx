import { Box } from "@mui/material";
import ChatList from "../../Components/ChatPageComponents/Chatlist";
import ChatWindow from "../../Components/ChatPageComponents/ChatWindow";
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import MainLayout from "../../Layouts/Mainlayout";

const ChatPage = () => {
  document.title = 'Chat';
  const [searchParams] = useSearchParams();
  const chatId = searchParams.get('chatId');

 

  return (
    // <MainLayout 
    //   ischatScreen={true}
    //   isnotSellMyCar={true}
    // >
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
              xs: chatId ? "0%" : "100%", 
              sm: "35%",
              md: "30%",
            },
            overflowY: "auto",
            minHeight: "100vh",
            display: { xs: chatId ? "none" : "block", sm: "block" },
          }}
        >
          <ChatList  />
        </Box>

        <Box
          sx={{
            width: {
              xs: chatId ? "100%" : "0%",
              sm: "65%",
              md: "70%",
            },
            display: {
              xs: chatId ? "block" : "none",
              sm: "block",
            },
            height: "100%",
          }}
        >
          {chatId ? (
            <ChatWindow />
          ) : (
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
    // </MainLayout>
  );
};

export default ChatPage;
