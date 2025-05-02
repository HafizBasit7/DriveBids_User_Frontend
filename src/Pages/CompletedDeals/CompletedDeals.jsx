import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";
import { useQuery } from "@tanstack/react-query";
import { getCompletedDeals } from "../../api/calls/car";
import { getCarsIdInWatchList } from "../../api/calls/watchlist";
import PaginationComponent from "../../Components/Common/PaginationComponent";
import SkeletonLoader from "../../Components/Loader/SkeletonLoader";
import CompletedDealsCard from "../../Components/HomePageComponents/CompletedDealsCard";
import EmptyPlaceHolder from "../../Components/Loader/Empytplaceholder";


const LIMIT = 10;

const CompletedDeals = () => {
  document.title = 'Completed Deals';
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("Bought");
  const page = searchParams.get('page') ? parseInt(searchParams.get('page')) : 1;

  const type = activeTab === 'Bought' ? 'buy' : 'sell';

  const {data, isLoading} = useQuery({
    queryKey: ['myCompletedDeals', type, page],
    queryFn: () => getCompletedDeals(page, LIMIT, type),
  });

  const completedDeals = data?.data?.completedDeals;
  const count = data?.meta?.count;
  const pages = data?.meta?.pages;
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchParams({ page: 1 });
  };

  return (
    <MainLayout
      title="Completed Deals"
      subtitle={`${count || 0} ${activeTab === 'Bought' ? 'Cars Bought' : `Cars Sold`}`}
      buttonText="Back"
      onClick={() => navigate("/home")}
      isnotSellMyCar={true}
    >
      <Box display="flex" justifyContent="center" my={4}>
        {["Bought", "Sold"].map((tab) => (
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
            {tab}
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
        {isLoading ? <SkeletonLoader count={3}/> : completedDeals?.length < 1 ? <Box sx={{ width: "100%", display: "flex", justifyContent: "center",height:300 }}><EmptyPlaceHolder/></Box> : completedDeals?.map((deal, index) => (
          <CompletedDealsCard 
            key={index} 
            ad={deal.car}
            item={deal} 
            isFromCompletedDeals={true}
          />
        ))}
      </Box>

      {completedDeals?.length > 0 && (
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

export default CompletedDeals;