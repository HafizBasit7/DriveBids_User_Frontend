import {
  Box,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import colors from "../../Style/color";
import { useState } from "react";
import { useAuth } from "../../context/auth.context";
const FilterSidebar = ({ filters, setFilters }) => {
  const [expandedAccordions, setExpandedAccordions] = useState({});
  const {authState} = useAuth();

  const handleChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedAccordions((prev) => ({
      ...prev,
      [panel]: isExpanded,
    }));
  };

  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 2,
        padding: 2,
        backgroundColor: "#fff",
        fontFamily: "Inter", // Set font family
      }}
    >

{/* <TextField
    fullWidth
    size="small"
    placeholder="Search services or keywords"
    value={filters.title || ""}
    onChange={(e) => handleChange("title", e.target.value)}
    sx={{ mb: 2 }}
  /> */}
      {/* Price Range */}
      <Typography fontWeight="bold" mb={1} fontFamily="Inter">
        Price Range ({authState.currency})
      </Typography>
      <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
        <TextField fullWidth size="small" placeholder="Min" value={filters.minPrice || ""} onChange={(e) => handleChange("minPrice", e.target.value)} />
        <TextField fullWidth size="small" placeholder="Max" value={filters.maxPrice || ""} onChange={(e) => handleChange("maxPrice", e.target.value)} />
      </Box>

      {/* Mileage */}
      <Typography fontWeight="bold" mb={1} fontFamily="Inter">
        Mileage (KMs)
      </Typography>
      <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
        <TextField fullWidth size="small" placeholder="Min" value={filters.minMileage || ""} onChange={(e) => handleChange("minMileage", e.target.value)} />
        <TextField fullWidth size="small" placeholder="Max" value={filters.maxMileage || ""} onChange={(e) => handleChange("maxMileage", e.target.value)} />
      </Box>

      {/* Horsepower
      <Typography fontWeight="bold" mb={1} fontFamily="Inter">
        Horsepower
      </Typography>
      <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
        <TextField fullWidth size="small" placeholder="Min" value={filters.minHorsePower || ""} onChange={(e) => handleChange("minHorsePower", e.target.value)} />
        <TextField fullWidth size="small" placeholder="Max" value={filters.maxHorsePower || ""} onChange={(e) => handleChange("maxHorsePower", e.target.value)} />
      </Box> */}

      {/* Model Year */}
      <Typography fontWeight="bold" mb={1} fontFamily="Inter">
        Model Year
      </Typography>
      <Box sx={{ mb: 2 }}>
        <TextField 
          fullWidth 
          size="small" 
          placeholder="Enter year (e.g., 2020)" 
          value={filters.model || ""} 
          onChange={(e) => handleChange("model", e.target.value)} 
        />
      </Box>

      {/* Collapsible Filters */}
      {[
        {
          key: "make",
          title: "Make",
          options: ["Ford", "Toyota", "Honda", "Hyundai", "Suzuki"],
        },
        {
          key: "condition",
          title: "Condition",
          options: ["Poor", "Fair", "Good", "Excellent"],
        },
        {
          key: "fuel",
          title: "Fuel Type",
          options: ['Petrol', 'Diesel', 'HI-Octane', 'Electric', 'Hybrid'],
        },
        {
          key: "color",
          title: "Color",
          options: ['Red', 'Blue', 'Black', 'White', 'Gray', 'Silver', 'Green', 'Yellow', 'Orange', 'Brown', 'Purple', 'Beige', 'Gold', 'Bronze'],
        },
        {
          key: "transmission",
          title: "Transmission",
          options: ['AGS', 'Manual', 'CVT', 'DCT', 'AMT', 'EV Single-Speed'],
        },
      ].map((filter, index) => (
        <Accordion 
          key={index} 
          expanded={expandedAccordions[filter.key]}
          onChange={handleAccordionChange(filter.key)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" fontFamily="Inter">
              {filter.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={1}>
              {filter.options.map((option, idx) => (
                <Grid item xs={6} key={idx}>
                  <Button
                    fullWidth
                    variant={filters[filter.key] === option ? "contained" : "outlined"}
                    onClick={() => handleChange(filter.key, filters[filter.key] === option ? "" : option)}
                    sx={{
                      textTransform: "none",
                      fontFamily: "Inter",
                      color: filters[filter.key] === option ? "#fff" : '#000',
                      backgroundColor: filters[filter.key] === option ? colors.buttoncolor : "transparent",
                      borderColor: '#ccc',
                      '&:hover': {
                        backgroundColor: filters[filter.key] === option ? colors.buttoncolor : "rgba(0, 0, 0, 0.04)",
                        borderColor: colors.buttoncolor,
                      },
                      minHeight: "36px",
                      padding: "4px 8px",
                      fontSize: "0.875rem",
                    }}
                  >
                    {option}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FilterSidebar;