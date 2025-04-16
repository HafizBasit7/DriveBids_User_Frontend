import { Box, Typography, Avatar, TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import colors from "../../Style/color";
import { useEffect, useRef, useState } from "react";
import AdBanner from "./AdBanner";
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getChatCarHead, getChatMessages, sendMessage } from "../../api/calls/chat";
import { timeAgo } from "../../utils/utils";
import { useAuth } from "../../context/auth.context";
import { useSearchParams } from "react-router-dom";
import { useSocket } from "../../context/socket.context";

const LIMIT = 10;

const ChatWindow = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const chatId = searchParams.get('chatId');
  const messagesContainerRef = useRef(null);
  const {authState} = useAuth();
  const [newMessage, setNewMessage] = useState('');
  const {chatSocket: socket} = useSocket();
  const queryClient = useQueryClient();
  const loaderRef = useRef(null);
  const newMessageIncoming = useRef(false);

  const user = authState.user;

  //Chat Head
  const {data: chatHeadData, isError} = useQuery({
    queryKey: ['chatCarHead', chatId],
    queryFn: () => getChatCarHead(chatId)
  });
  const chatHeadDataReal = chatHeadData?.data.chatHead;

  //Messages
  const {
    data: messagesTmp,
    isLoading: messagesLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['messages', chatId],
    queryFn: ({pageParam = 1}) => getChatMessages(chatId, pageParam, LIMIT),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage?.data?.messages?.length === LIMIT
        ? allPages.length + 1
        : undefined;
    },
  });
  const messages = messagesTmp?.pages.flatMap((page) => page?.data?.messages) || [];
  
  //Send Message mutation
  const mutation = useMutation({
    mutationFn: sendMessage,
  });

  useEffect(() => {
    if(isError) {
      setSearchParams({});
    }
  }, [isError]);

  useEffect(() => {
    if(!messagesLoading) {
      if (messagesContainerRef.current) {
        messagesContainerRef.current.scrollTo({
          top: messagesContainerRef.current.scrollHeight,
          behavior: 'smooth',
        });
      }
    }
  }, [messagesLoading]);

  useEffect(() => {
    //Scroll
    if (messagesContainerRef.current && newMessageIncoming.current === true) {
      newMessageIncoming.current = false;
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
    //
  }, [messages]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        if (hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      }
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [hasNextPage, isFetchingNextPage]);

  //Socket
  useEffect(() => {
    if(socket) {
      socket.emit('join-room', {roomId: chatId});
      socket.on('new-message', handleNewMessageUpdate);
    }

    return () => {
      if(socket) {
        socket?.emit('leave-room', {roomId: chatId});
        socket?.off('new-message');
      }
    };
  }, [socket, chatId]);
  const handleNewMessageUpdate = (message) => {
    newMessageIncoming.current = true;
    //Update messages list
    queryClient.setQueryData(['messages', chatId], (pages) => {
      const newPages = {...pages};
      newPages.pages = [
        {
          ...pages.pages[0],
          data: {
            messages: [
              message,
              ...pages.pages[0].data.messages,
            ],
          }
        },
        ...pages.pages.slice(1),
      ];
      return newPages;
    });
  };
  //


  const sendMessageClick = async () => {
    mutation.mutate({chatId, message: newMessage});
    setNewMessage('');
  };
  

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
    
        <Avatar src={chatHeadDataReal?.user.imgUrl || 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'} sx={{ width: 45, height: 45 }} />
        <Box>
          <Typography sx={{ fontSize: 18, fontFamily: "Inter" }}>{chatHeadDataReal?.user.name}</Typography>
          <Typography sx={{ fontSize: 14, fontFamily: "Inter" }} color="green">
            {chatHeadDataReal?.user.type === 'individual' ? 'Private Seller' : 'Trader'}
          </Typography>
        </Box>
        <IconButton
          onClick={() => setSearchParams({})}
          sx={{
            display: { xs: "block", sm: "none" },
            position: "absolute",
            right: 28,
            
          }}
        >
          <ArrowBackIcon />
        </IconButton>
      </Box>

      <AdBanner chatHeadDataReal={chatHeadDataReal} />

      <Box
        ref={messagesContainerRef} 
        sx={{
          flexGrow: 1,
          p: 2,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {hasNextPage && (<Typography ref={loaderRef}>Loading More...</Typography>)}
        {!messages ? (
          <Typography sx={{ textAlign: "center", color: "#aaa" }}>No messages yet</Typography>
        ) : (
          [...messages].reverse().map((msg) => (
            <Box
              key={msg._id}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent:msg.sender === user._id ? "flex-end" : "flex-start",
                gap: 1,
              }}
            >
              {msg.sender !== user._id && (
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
                    <Typography sx={{}}>{msg.message}</Typography>
                  </Box>
                  <Typography sx={{ fontSize: 12, color: '#888', minWidth: '50px' }}>{timeAgo(msg.createdAt)}</Typography>
                </>
              )}

              {msg.sender === user._id && (
                <>
                  <Typography sx={{ fontSize: 12, color: '#888', minWidth: '50px', textAlign: 'right' }}>{timeAgo(msg.createdAt)}</Typography>
                  <Box
                    sx={{
                      bgcolor: "#007bff",
                      color: "#fff",
                      p: {xs:1,md:1.5},

                      borderRadius: 2,
                      maxWidth: "70%",
                    }}
                  >
                    <Typography>{msg.message}</Typography>
                  </Box>
                  {/* <Avatar src={msg.avatar} sx={{ width: 34, height: 34 }} /> */}
                </>
              )}
            </Box>
          ))
        )}
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
          {/* <AttachFileIcon fontSize="medium" /> */}
        </IconButton>

        <Box sx={{ position: "relative", flexGrow: 1 }}>
          <TextField
            fullWidth
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {  // Prevent Shift+Enter from sending
                e.preventDefault();  // Stop new line creation
                sendMessageClick();  // Send message
              }
            }}
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
          onClick={sendMessageClick}
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