import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";
import BidsCard from "../../Components/ProfilePageComponents/BidsCard";
import { useQuery } from "@tanstack/react-query";
import { listMyBids } from "../../api/calls/car";
import { getCarsIdInWatchList } from "../../api/calls/watchlist";
import CarCard from "../../Components/HomePageComponents/CarCard";

const MyBidsPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("active");

  const type = activeTab === 'active' ? 'open' : activeTab;
  const {data, isLoading} = useQuery({
    queryKey: ['myBids', type],
    queryFn: () => listMyBids(1, 10, type),
  });

  const {data: carsInWatchList, isLoading: watchlistLoading} = useQuery({
    queryKey: ['carsInWatchList'],
    queryFn: getCarsIdInWatchList,
  });

  const bids = data?.data?.bids;

  // const bidsData = [
  //   { status: "winning", chipText: "Winning", buttons: [ "Increase Bid"] },
  //   { status: "losing", chipText: "Losing", buttons: [ "Increase Bid"] },
  //   { status: "won", chipText: "Bid Won", buttons: ["View Ad" ] },
  //   { status: "won", chipText: "Bid Won", buttons: ["View Ad"] },
  //   { status: "lost", chipText: "Bid Lost", buttons: [] },
  //   { status: "lost", chipText: "Bid Lost", buttons: [] },
  // ];

  // const filteredBids = bidsData.filter((bid) => {
  //   if (activeTab === "active") return bid.status === "winning" || bid.status === "losing";
  //   if (activeTab === "won") return bid.status === "won";
  //   if (activeTab === "lost") return bid.status === "lost";
  //   return true;
  // });

  return (
    <MainLayout    title="My Bids"
    subtitle="20 Bids In Progress"
    buttonText="Back"
    onClick={() => navigate("/home")}
    isnotSellMyCar ={true}>
      

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
        {bids?.map((bid, index) => (
          <CarCard key={index} carsInWatchList={carsInWatchList} ad={bid.car} isFromMyBids={true} bid={bid}/>
        ))}
        {bids?.length === 0 && (
          <Typography textAlign="center" width="100%">No bids found for this status.</Typography>
        )}
      </Box>
    </MainLayout>
  );
};

export default MyBidsPage;
