import { Box, TextField, FormControlLabel, Checkbox, Accordion, AccordionSummary, AccordionDetails, Typography, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import colors from "../../Style/color";

const FilterSidebar = () => {
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
        <TextField fullWidth size="small" placeholder="Min" />
        <TextField fullWidth size="small" placeholder="Max" />
      </Box>

      {/* Year */}
      <Typography fontWeight="bold" mb={1} fontFamily="Inter">
        Year
      </Typography>
      <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
        <TextField fullWidth size="small" placeholder="From" />
        <TextField fullWidth size="small" placeholder="To" />
      </Box>

      {/* Mileage */}
      <Typography fontWeight="bold" mb={1} fontFamily="Inter">
        Mileage (KMs)
      </Typography>
      <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
        <TextField fullWidth size="small" placeholder="Min" />
        <TextField fullWidth size="small" placeholder="Max" />
      </Box>

      {/* Collapsible Filters */}
      {[
        {
          title: "City",
          options: ["New York, NY", "Los Angeles, CA", "Chicago, IL", "Houston, TX", "Phoenix, AZ"],
        },
        {
          title: "Make",
          options: ["Ford", "Toyota", "Honda", "Hyundai", "Suzuki"],
        },
        {
          title: "Registered In",
          options: ["California", "Texas", "New York", "Florida", "Alaska"],
        },
        {
          title: "Transmission",
          options: ["Automatic", "Manual", "Automatic", "Manual"],
        },
      ].map((filter, index) => (
        <Accordion key={index} defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" fontFamily="Inter">{filter.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {filter.options.map((option, idx) => (
              <FormControlLabel  key={idx} 
              control={<Checkbox sx={{ borderRadius: "4px", '&.Mui-checked': { color: 'colors.buttoncolor' } }} />} 
              label={option} 
              sx={{ display: "block", fontFamily: "Inter" }}  />
            ))}
          </AccordionDetails>
        </Accordion>
      ))}

      {/* Expand All Button */}
      <Button fullWidth sx={{ mt: 2, textTransform: "none", fontFamily: "Inter", color:colors.buttoncolor }}>Expand all</Button>
    </Box>
  );
};

export default FilterSidebar;
