import { Box,  } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";

import DraftCard from "../../../Components/SellMyCarComponents/DraftCard";
import { useQuery } from "@tanstack/react-query";
import { getDrafts } from "../../../api/calls/car";

const Draft = () => {
  const navigate = useNavigate();

  const {data, isLoading} = useQuery({
    queryKey: ["drafts"],
    queryFn: getDrafts,
  });

  const drafts = data?.data.drafts;

  return (
    <MainLayout
    title="Sell My Car"
          subtitle="Sell Your Car Hassle-Free!"
          buttonText="Back to Home"
          onClick={() => navigate("/sellmycar")}
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
    {drafts?.map((draft, index) => (
      <DraftCard key={index} draft={draft}/>
    ))}
     
    </Box>

    </MainLayout>
  );
};

export default Draft;
