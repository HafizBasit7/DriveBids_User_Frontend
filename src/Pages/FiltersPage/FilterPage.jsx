import { Box, Pagination, useMediaQuery, useTheme } from "@mui/material";
import MainLayout from "../../Layouts/MainLayout";
import DealsBanner from "../../Components/HomePageComponents/DealBanner";
import CarCard from "../../Components/HomePageComponents/CarCard";
import FilterSidebar from "../../Components/FilterPageComponent/FilterSideBar.jsx";
import colors from "../../Style/color.js";
import { useNavigate } from "react-router-dom";

const FilterPage = () => {
  const navigate = useNavigate()
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <MainLayout title="Super Odd Deals"
      subtitle="3000 Cars Available"
      buttonText="View All"
      onClick={() => navigate("/car-detail")}
      isnotSellMyCar={true}>



      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 0.2,
          mt: 3,
          alignItems: "flex-start",
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "75%", lg: "80%" } }}>
          <Box sx={{
            width: "100%", display: "flex", flexDirection: "row", gap: 2, flexWrap: "wrap", justifyContent: {
              xs: "center", lg: "start", borderRadius: 2,
              padding: 1,
            }
          }}>
            {/* <CarCard />
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
            <CarCard /> */}
          </Box>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              mt: 4,
            }}
          >
            <Pagination
              count={isSmallScreen ? 3 : 5}
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
                "& .MuiPaginationItem-ellipsis": {
                  fontSize: "1.3rem",
                  padding: "5px 16px",
                  mt: 3,
                  backgroundColor: "white",
                  color: "black",
                  mx: 1.5,
                  border: "1px solid #6F6F6F",
                  borderRadius: "8px",
                },
              }}
            />

          </Box>
        </Box>

        <Box
          sx={{
            width: { xs: "100%", md: "25%" },
            border: "1px solid #ddd",
            borderRadius: 2,
            padding: 1,
            alignSelf: "flex-start",
            order: { xs: -1, md: 1 },

          }}
        >
          <FilterSidebar />
        </Box>
      </Box>
    </MainLayout>
  );
};

export default FilterPage;
