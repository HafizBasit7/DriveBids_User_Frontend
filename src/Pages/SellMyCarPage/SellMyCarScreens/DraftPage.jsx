import { Box,  } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";

import DraftCard from "../../../Components/SellMyCarComponents/DraftCard";
import { useQuery } from "@tanstack/react-query";
import { getDrafts } from "../../../api/calls/car";
import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";
import PaginationComponent from "../../../Components/Common/PaginationComponent";

const LIMIT = 5

const Draft = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get('page') ? parseInt(searchParams.get('page')) : 1;

  const {data, isLoading} = useQuery({
    queryKey: ["drafts", page],
    queryFn: () => getDrafts(page, LIMIT),
  });

  const drafts = data?.data.drafts;
  const pages = data?.meta.pages;

  return (
    <MainLayout
    title="Drafts"
          subtitle={`${(data?.meta?.count || 0)} drafts`}
          buttonText="Back"
          onClick={() => navigate("../")}
          isnotSellMyCar={true}
  >
     

      <Box
        sx={{
          width: "100%",
          mt: { xs: 4, md: 2 },
          mb: { xs: 5, md: 7 },
          display:"flex",
          flexDirection:"row",
          gap:2,
          flexWrap:"wrap",
          justifyContent:{ xs: "center", sm: "flex-start" ,md: "flex-start" },
        }}
      >
    {isLoading ? <SkeletonLoader count={3}/> : drafts?.map((draft, index) => (
      <DraftCard key={index} draft={draft}/>
    ))}
     
    </Box>
         <PaginationComponent page={page} pages={pages} handleChange={(event, value) => {setSearchParams({page: value})}}/>
    
    </MainLayout>
  );
};

export default Draft;
