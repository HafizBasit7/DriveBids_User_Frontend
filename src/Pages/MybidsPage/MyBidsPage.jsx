import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";
import BidsCard from "../../Components/ProfilePageComponents/BidsCard";
import { useQuery } from "@tanstack/react-query";
import { listMyBids } from "../../api/calls/car";
import { getCarsIdInWatchList } from "../../api/calls/watchlist";
import CarCard from "../../Components/HomePageComponents/CarCard";
import PaginationComponent from "../../Components/Common/PaginationComponent";
import SkeletonLoader from "../../Components/Loader/SkeletonLoader";
import EmptyPlaceHolder from "../../Components/Loader/Empytplaceholder";


const LIMIT = 10;

const MyBidsPage = () => {
  document.title = 'My Bids';
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("active");
  const page = searchParams.get('page') ? parseInt(searchParams.get('page')) : 1;

  const type = activeTab === 'active' ? 'open' : activeTab;
  const {data, isLoading} = useQuery({
    queryKey: ['myBids', type, page],
    queryFn: () => listMyBids(page, LIMIT, type),
  });

  const {data: carsInWatchList, isLoading: watchlistLoading} = useQuery({
    queryKey: ['carsInWatchList'],
    queryFn: getCarsIdInWatchList,
  });

  const bids = data?.data?.bids;
  const count = data?.meta?.count;
  const pages = data?.meta?.pages;
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchParams({ page: 1 });
  };

  return (
    <MainLayout
      title="My Bids"
      subtitle={`${count || 0} ${activeTab === 'active' ? 'Bids In Progress' : `Bids ${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}`}`}
      buttonText="Back"
      onClick={() => navigate("/home")}
      isnotSellMyCar={true}
    >
      <Box display="flex" justifyContent="center" my={4}>
        {["active", "won", "lost"].map((tab) => (
          <Button
            key={tab}
            onClick={() => handleTabChange(tab)}
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

      <Box sx={{ 
        width: "100%", 
        display: "flex", 
        flexWrap: "wrap", 
        gap: 4, 
        justifyContent: { xs: "center", lg: "start" } 
      }}>
        {isLoading ? <SkeletonLoader count={3}/>  : bids?.map((bid, index) => (
          <CarCard 
            key={index} 
            carsInWatchList={carsInWatchList} 
            ad={bid.car} 
            isFromMyBids={true} 
            bid={bid}
          />
        ))}
        {bids?.length < 1 && (
          <EmptyPlaceHolder/>
        )}
      </Box>

      {bids?.length > 0 && (
        <PaginationComponent 
          page={page} 
          pages={pages} 
          handleChange={(event, value) => {
            setSearchParams({ page: value });
          }} 
        />
      )}
    </MainLayout>
  );
};

export default MyBidsPage;