import React, { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import url from "../api/config";
import { useAuth } from "./auth.context";
import { useQueryClient } from "@tanstack/react-query";

const SocketContext = createContext(null);

export const useChatSocket = () => useContext(SocketContext);

export default function ChatSockerProvider ({ children })  {
    const [socket, setSocket] = useState(null);
    const {authState} = useAuth();
    const queryClient = useQueryClient();

    useEffect(() => {
        if(authState.isAuthenticated) {
            const token = localStorage.getItem("token");

            const newSocket = io(url.chatBaseUrl, {
                reconnection: true,
                reconnectionAttempts: 5,
                reconnectionDelay: 2000, 
                transports: ["websocket"], 
                auth: {
                    token: token,
                },
            });
    
            setSocket(newSocket);
    
            newSocket.on("connect", () => {
                console.log("Connected to Chat server");
            });

            // update
            newSocket.on('new-chat', () => {
                queryClient.invalidateQueries(['chats']);
            });
            newSocket.on('new-message', (chatId) => {
                queryClient.invalidateQueries(['chats']);
                queryClient.invalidateQueries(['messages', chatId]);
            });
    
            newSocket.on("connect_error", (error) => {
                console.error("Socket connection error:", error);
            });
    
            newSocket.on("disconnect", (reason) => {
                console.warn("Socket disconnected:", reason);
            });
    
        }

        return () => {
            socket?.disconnect();
        };
    }, [authState.isAuthenticated]);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};
