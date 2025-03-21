import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";
import DealsBanner from "../../Components/HomePageComponents/DealBanner";
import BidsCard from "../../Components/ProfilePageComponents/BidsCard";

const MyBidsPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("active");

  const bidsData = [
    { status: "winning", chipText: "Winning", buttons: [ "Increase Bid"] },
    { status: "losing", chipText: "Losing", buttons: [ "Increase Bid"] },
    { status: "won", chipText: "Bid Won", buttons: ["View Ad" ] },
    { status: "won", chipText: "Bid Won", buttons: ["View Ad"] },
    { status: "lost", chipText: "Bid Lost", buttons: [] },
    { status: "lost", chipText: "Bid Lost", buttons: [] },
  ];

  const filteredBids = bidsData.filter((bid) => {
    if (activeTab === "active") return bid.status === "winning" || bid.status === "losing";
    if (activeTab === "won") return bid.status === "won";
    if (activeTab === "lost") return bid.status === "lost";
    return true;
  });

  return (
    <MainLayout>
      <Box width="100%">
        <DealsBanner
          title="My Bids"
          subtitle="20 Bids In Progress"
          buttonText="Back"
          onClick={() => navigate("/home")}
        />
      </Box>

      <Box display="flex" justifyContent="center" my={4}>
        {["active", "won", "lost"].map((tab) => (
          <Button
            key={tab}
            onClick={() => setActiveTab(tab)}
            sx={{
              color: activeTab === tab ? "#000" : "#000",
              fontWeight: activeTab === tab ? 900 : "#000",

              borderBottom: activeTab === tab ? "2px solid #2F61BF" : "none",
              borderRadius: 0,
             

              mx: 2,
            }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </Button>
        ))}
      </Box>

      <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap", gap: 4, justifyContent: { xs: "center", lg: "start" } }}>
        {filteredBids.map((bid, index) => (
          <BidsCard key={index} chipText={bid.chipText} buttons={bid.buttons} />
        ))}
        {filteredBids.length === 0 && (
          <Typography textAlign="center" width="100%">No bids found for this status.</Typography>
        )}
      </Box>
    </MainLayout>
  );
};

export default MyBidsPage;
