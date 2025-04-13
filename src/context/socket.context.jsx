import React, { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import url from "../api/config";
import { useAuth } from "./auth.context";
import { useQueryClient } from "@tanstack/react-query";
import { bidApiClient } from "../api/client";

const SocketContext = createContext({bidSocket: null, chatSocket: null});
export const useSocket = () => useContext(SocketContext);

export default function SocketContextProvider ({children}) {
    const [bidSocket, setBidSocket] = useState(null);
    const [chatSocket, setChatSocket] = useState(null);
    const {authState} = useAuth();
    const queryClient = useQueryClient();

    //Bid Socket
    useEffect(() => {
        if(authState.isAuthenticated && !bidSocket) {
            const newSocket = io(url.bidBaseUrl, {
                reconnection: true,
                autoConnect: true,
                reconnectionAttempts: 8,
                reconnectionDelay: 2000, 
                transports: ["websocket"], 
                auth: {
                    token: bidApiClient.defaults.headers.common['Authorization'].split(" ")[1],
                },
            });
            
            //Events
            newSocket.on("connect", () => {
                console.log("Connected to Bidding server");
                newSocket.emit('join-room', {roomId: authState.user._id});
                setBidSocket(newSocket);
            });
            newSocket.on('connect_error', err => {
                console.log(err);
                setBidSocket(null);
            });
            newSocket.on('connect_failed', err => {
                console.log(err);
                setBidSocket(null);
            });
            newSocket.on('disconnect', err => {
                console.log(err);
                setBidSocket(null);
            });

            //bid update
            newSocket.on('bid-update', ({carId}) => {
                queryClient.invalidateQueries({queryKey: ['car', carId]});
                queryClient.invalidateQueries({queryKey: ['biddingHistory', carId]});
            });
        }

        return () => {
            bidSocket?.disconnect();
        };

    }, [authState.isAuthenticated, bidSocket]);

    //Chat Socket
    useEffect(() => {
        if(authState.isAuthenticated && !chatSocket) {
            const newSocket = io(url.chatBaseUrl, {
                reconnection: true,
                autoConnect: true,
                reconnectionAttempts: 8,
                reconnectionDelay: 2000, 
                transports: ["websocket"], 
                auth: {
                    token: bidApiClient.defaults.headers.common['Authorization'].split(" ")[1],
                },
            });
           
            //Events
            newSocket.on("connect", () => {
                console.log("Connected to Chat server");
                setChatSocket(newSocket);
            });
            newSocket.on('connect_error', err => {
                console.log(err);
                setChatSocket(null);
            });
            newSocket.on('connect_failed', err => {
                console.log(err);
                setChatSocket(null);
            });
            newSocket.on('disconnect', err => {
                console.log(err);
                setChatSocket(null);
            });
        }

        return () => {
            chatSocket?.disconnect();
        };

    }, [authState.isAuthenticated, chatSocket]);

    return (
        <SocketContext.Provider value={{bidSocket, chatSocket}}>
            {children}
        </SocketContext.Provider>
    )
};