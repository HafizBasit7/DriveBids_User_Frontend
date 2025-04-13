import React from "react";
import  "./App.css"
import AuthContextProvider from "./context/auth.context";
import AppBrowserRouter from "./router/brower-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SocketContextProvider from "./context/socket.context";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }, 
  }
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <SocketContextProvider>
            <AppBrowserRouter/>
        </SocketContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}