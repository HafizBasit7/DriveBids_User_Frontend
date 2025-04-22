import { useState, useRef, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import colors from "../../Style/color";

const getAllYears = () => {
  const currentYear = new Date().getFullYear();
  return Array.from({ length: currentYear - 1979 }, (_, i) => 1980 + i);
};

const YearSelectionBox = ({ onNext, value, onChange}) => {
  const years = getAllYears().reverse();
  const scrollRef = useRef(null);

  useEffect(() => {
    centerYear(value);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const items = container.children;
        let closest = null;
        let closestOffset = Infinity;
        const containerCenter = container.getBoundingClientRect().top + container.clientHeight / 2;

        for (let item of items) {
          const rect = item.getBoundingClientRect();
          const itemCenter = rect.top + rect.height / 2;
          const offset = Math.abs(containerCenter - itemCenter);

          if (offset < closestOffset) {
            closest = item;
            closestOffset = offset;
          }
        }

        if (closest) {
          onChange(Number(closest.textContent));
        }
      }
    };

    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const centerYear = (year) => {
    const container = scrollRef.current;
    if (container) {
      const index = years.indexOf(year);
      const itemHeight = container.scrollHeight / years.length;
      const scrollPosition = itemHeight * index - container.clientHeight / 2 + itemHeight / 2;
      container.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
  };

  // Handle year click
  const handleYearClick = (year) => {
    onChange(year);
    centerYear(year);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" width="100%">
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
              onClick={() => handleYearClick(year)}
              sx={{
                fontFamily: "Inter",
                fontWeight: value === year ? 600 : 300,
                fontSize: value === year ? 40 : 20,
                color: value === year ? colors.buttoncolor : "rgba(0, 0, 0, 0.4)",
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

        <Box width="100%" display="flex" justifyContent="flex-end" p={2}>
          <Button
            variant="contained"
            disabled={!value}
            sx={{
              fontFamily: "Inter",
              backgroundColor: colors.buttoncolor,
              textTransform: "none",
              minWidth: "120px",
              height: "40px",
              '&.Mui-disabled': {
                backgroundColor: '#E0E0E0',
                color: '#9E9E9E',
                cursor: 'not-allowed'
              },
              '&:hover': {
                backgroundColor: colors.buttoncolor,
                opacity: 0.9
              }
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
