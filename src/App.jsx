import React from "react";
import  "./App.css"
import ChatPage from "./Pages/ChatPage/ChatPage";
import MyAdsPage from "./Pages/MyAds/MyAdsPage";
import MyBidsPage from "./Pages/MybidsPage/MyBidsPage";
import EditProfilePage from "./Pages/MyProfilePage/EditProfilePage";
import ChangePasswordPage from "./Pages/MyProfilePage/ChangePasswordPage";
import MyWatchPage from "./Pages/MyWatchlistPage/MywatchlistPage";
import AuthContextProvider from "./context/auth.context";
import AppBrowserRouter from "./router/brower-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <AppBrowserRouter/>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

function App1() {
  return (
    <Router>
      
      <Routes>
        
        <Route path="/chat-page" element={<ChatPage/>} />
        {/* //sell a car TODO: */}
        {/* <Route path="/car-features3" element={< CarFeaturesPage3/>} /> */}

        <Route path="/my-ads" element={<MyAdsPage  />} />
        <Route path="/my-bids" element={<MyBidsPage />} />
        <Route path="/my-watchlist" element={<MyWatchPage />} />

              
        <Route path="/edit-profile" element={<EditProfilePage />} />
        <Route path="/change-password" element={<ChangePasswordPage />} />

      </Routes>
    </Router>
  );
}
