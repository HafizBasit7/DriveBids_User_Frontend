import { Box,  } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";

import DraftCard from "../../../Components/SellMyCarComponents/DraftCard";

const Draft = () => {
  const navigate = useNavigate();

  

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
