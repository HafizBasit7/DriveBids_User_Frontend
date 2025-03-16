import { Box } from "@mui/material";
import MainLayout from "../../Layouts/MainLayout";
import ChatList from "../../Components/ChatPageComponents/Chatlist";
import ChatWindow from "../../Components/ChatPageComponents/ChatWindow";


const ChatPage = () => {
  return (
    <MainLayout>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          gap:2
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "35%", md: "30%" },
            
            overflowY: "auto",
            minHeight: "100vh",
          }}
        >
          <ChatList />
        </Box>

        {/* Right Box - Chat Window */}
        <Box
          sx={{
            width: { xs: "0%", sm: "65%", md: "70%" },
            display: { xs: "none", sm: "block" }, // Hide on extra small screens
            height: "100%",
            
          }}
        >
          <ChatWindow />
        </Box>
      </Box>
    </MainLayout>
  );
};

export default ChatPage;
