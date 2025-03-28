import { useState, useRef, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import colors from "../../Style/color";

const getNumbering = () => {
  const totalNumbers = new Date().getFullYear() - 1899 + 2; 
  return Array.from({ length: totalNumbers }, (_, i) => i + 1);
};

const OwnerSelectionBox = ({ onNext }) => {
  const numbers = getNumbering();  // Removed reverse here
  const [selectedNumber, setSelectedNumber] = useState(numbers[0]);
  const scrollRef = useRef(null);

  useEffect(() => {
    centerNumber(selectedNumber);
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
          setSelectedNumber(Number(closest.textContent));
        }
      }
    };

    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const centerNumber = (number) => {
    const container = scrollRef.current;
    if (container) {
      const index = numbers.indexOf(number);
      const itemHeight = container.scrollHeight / numbers.length;
      const scrollPosition = itemHeight * index - container.clientHeight / 2 + itemHeight / 2;
      container.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
  };

  const handleNumberClick = (number) => {
    setSelectedNumber(number);
    centerNumber(number);
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
          {numbers.map((num) => (
            <Typography
              key={num}
              variant="h5"
              onClick={() => handleNumberClick(num)}
              sx={{
                fontFamily: "Inter",
                fontWeight: selectedNumber === num ? 600 : 300,
                fontSize: selectedNumber === num ? 40 : 20,
                color: selectedNumber === num ? colors.buttoncolor : "rgba(0, 0, 0, 0.4)",
                transition: "all 0.3s ease-in-out",
                cursor: "pointer",
                padding: "10px 0",
                scrollSnapAlign: "center",
              }}
            >
              {num}
            </Typography>
          ))}
        </Box>

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

export default OwnerSelectionBox;
