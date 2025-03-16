import { Box, Pagination } from "@mui/material";
import MainLayout from "../../Layouts/MainLayout";
import DealsBanner from "../../Components/HomePageComponents/DealBanner";
import CarCard from "../../Components/HomePageComponents/CarCard";
import FilterSidebar from "../../Components/FilterPageComponent/FilterSideBar.jsx";
import colors from "../../Style/color.js";

const FilterPage = () => {
  return (
    <MainLayout>
  
      <Box sx={{ width: "100%" }}>
        <DealsBanner
          title="Super Odd Deals"
          subtitle="3000 Cars Available"
          buttonText="View All"
        />
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          mt: 4,
          alignItems: "flex-start",
        }}
      >
        {/* Left Section (Car Listings) */}
        <Box sx={{ width: { xs: "100%", md: "70%" } }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr", md: "1fr 1fr 1fr" },
              gap: 4,
              justifyItems: "center",
            }}
          >
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
          </Box>

          {/* Pagination (Inside Left Section, Below the Cards) */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              mt: 4,
            }}
          >
            <Pagination
              count={5}
              shape="rounded"
              sx={{
                "& .MuiPaginationItem-root": {
                  fontSize: "1.3rem",
                  padding: "20px 16px",
                  mt: 3,
                  backgroundColor: "white",
                  color: "black",
                  mx: 1.5,
                  border: "1px solid #6F6F6F",
                  borderRadius: "8px",
                },
                "& .MuiPaginationItem-root.Mui-selected": {
                  backgroundColor: colors.buttoncolor,
                  color: "white",
                  border: `1px solid ${colors.buttoncolor}`,
                },
                "& .MuiPaginationItem-previousNext": {
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "8px",
                  border: "1px solid #6F6F6F",
                  mx: 1.5,
                },
              }}
            />
          </Box>
        </Box>

        {/* Right Section (Filter Sidebar) */}
        <Box
          sx={{
            width: { xs: "100%", md: "30%" },
            border: "1px solid #ddd",
            borderRadius: 2,
            padding: 1,
            alignSelf: "flex-start",
            order: { xs: -1, md: 1 }, // Moves filter above on small screens
          }}
        >
          <FilterSidebar />
        </Box>
      </Box>
    </MainLayout>
  );
};

export default FilterPage;
