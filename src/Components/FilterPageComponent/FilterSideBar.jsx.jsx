import {
  Box,
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import colors from "../../Style/color";

const FilterSidebar = ({ filters, setFilters }) => {
  const handleChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
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
      {/* Price Range */}
      <Typography fontWeight="bold" mb={1} fontFamily="Inter">
        Price Range ($)
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

      {/* Horsepower */}
      <Typography fontWeight="bold" mb={1} fontFamily="Inter">
        Horsepower
      </Typography>
      <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
        <TextField fullWidth size="small" placeholder="Min" value={filters.minHorsePower || ""} onChange={(e) => handleChange("minHorsePower", e.target.value)} />
        <TextField fullWidth size="small" placeholder="Max" value={filters.maxHorsePower || ""} onChange={(e) => handleChange("maxHorsePower", e.target.value)} />
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
          options: ["New", "Used"],
        },
        {
          key: "city",
          title: "City",
          options: ["New York, NY", "Los Angeles, CA", "Chicago, IL"],
        },
        {
          key: "fuel",
          title: "Fuel Type",
          options: ["Petrol", "Diesel", "Electric", "Hybrid"],
        },
        {
          key: "color",
          title: "Color",
          options: ["Red", "Blue", "Black", "White", "Gray"],
        },
        {
          key: "transmission",
          title: "Transmission",
          options: ["Automatic", "Manual"],
        },
      ].map((filter, index) => (
        <Accordion key={index} defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" fontFamily="Inter">
              {filter.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <RadioGroup
              value={filters[filter.key] || ""}
              onChange={(e) => handleChange(filter.key, e.target.value)}
            >
              {filter.options.map((option, idx) => (
                <FormControlLabel
                  key={idx}
                  value={option}
                  control={<Radio sx={{ color: colors.buttoncolor }} />}
                  label={option}
                  sx={{ display: "block", fontFamily: "Inter" }}
                />
              ))}
            </RadioGroup>
          </AccordionDetails>
        </Accordion>
      ))}

      {/* Expand All Button */}
      <Button
        fullWidth
        sx={{ mt: 2, textTransform: "none", fontFamily: "Inter", color: colors.buttoncolor }}
      >
        Expand all
      </Button>
    </Box>
  );
};

export default FilterSidebar;