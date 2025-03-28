import React from "react";
import  "./App.css"
import AuthContextProvider from "./context/auth.context";
import AppBrowserRouter from "./router/brower-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BidSocket from "./context/bid.socket";
import ChatSocket from "./context/chat.socket";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <BidSocket>
          <ChatSocket>
            <AppBrowserRouter/>
          </ChatSocket>
        </BidSocket>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}