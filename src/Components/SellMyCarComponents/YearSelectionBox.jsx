import { useState, useRef, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import colors from "../../Style/color";

const getAllYears = ( ) => {
  const currentYear = new Date().getFullYear();
  return Array.from({ length: currentYear - 1899 }, (_, i) => 1900 + i);
};

const YearSelectionBox = ({onNext}) => {
  const navigate = useNavigate();
  const years = getAllYears().reverse() ;
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const scrollRef = useRef(null);

  
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const items = scrollRef.current.children;
        let closest = null;
        let closestOffset = Infinity;

        for (let item of items) {
          const rect = item.getBoundingClientRect();
          const offset = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2);
          if (offset < closestOffset) {
            closest = item;
            closestOffset = offset;
          }
        }

        if (closest) {
          setSelectedYear(Number(closest.textContent)); // Automatically set selected year
        }
      }
    };

    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" width="100%">
      {/* Scrollable Year Selection Box */}
      <Box
        width={{ xs: "90%", sm: "70%", md: "65%" }}
        height={350}
        border="1px solid #ddd"
        borderRadius={2}
        overflow="hidden"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-end"
        position="relative"
        py={2}
      >
        <Box
          ref={scrollRef}
          sx={{
            flex: 1,
            overflowY: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            "&::-webkit-scrollbar": { display: "none" },
            width: "100%",
            textAlign: "center",
            scrollSnapType: "y mandatory",
          }}
        >
          {years.map((year) => (
            <Typography
              key={year}
              variant="h5"
              sx={{
                fontFamily: "Inter",
                fontWeight: selectedYear === year ? 600 : 300,
                fontSize: selectedYear === year ? 40 : 20,
                color: selectedYear === year ? colors.buttoncolor : "rgba(0, 0, 0, 0.4)",
                transition: "all 0.3s ease-in-out",
                cursor: "pointer",
                padding: "10px 0",
                scrollSnapAlign: "center",
                
              }}
            >
              {year}
            </Typography>
          ))}
        </Box>

        {/* Next Step Button at Flex End */}
        <Box width="100%" display="flex" justifyContent="flex-end" p={2}>
          <Button
            variant="contained"
            sx={{
              fontFamily: "Inter",
              backgroundColor: colors.buttoncolor,
              textTransform: "none",
              minWidth: "120px",
              height: "40px",
            }}
            onClick={onNext}
          >
            Next Step
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default YearSelectionBox;
