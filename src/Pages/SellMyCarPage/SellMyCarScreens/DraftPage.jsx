import { Box, Typography, Stack, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import DealsBanner from "../../../Components/HomePageComponents/DealBanner";

import DraftCard from "../../../Components/SellMyCarComponents/DraftCard";

const Draft = () => {
  const navigate = useNavigate();

  

  return (
    <MainLayout>
      <Box width="100%" sx={{mt:2}}>
        <DealsBanner
          title="Sell My Car"
          subtitle="Sell Your Car Hassle-Free!"
          buttonText="Back to Home"
          onClick={() => navigate("/sellmycar")}
        />
      </Box>

      <Box
      sx={{
        width: "100%",
       
        mx: "auto",
        mt: { xs: 4, md: 5 },
        mb: { xs: 5, md: 7 },
        px: { xs: 2, sm: 4 },
        display:"flex",
        flexDirection:"row",
        gap:2,
        flexWrap:"wrap",
        justifyContent:{ xs: "center", sm: "flex-start" },
      }}
    >
     <DraftCard/>
     <DraftCard/>
     <DraftCard/>
     <DraftCard/>
     <DraftCard/>
     <DraftCard/>
     <DraftCard/>
     <DraftCard/>
    </Box>

    </MainLayout>
  );
};

export default Draft;
