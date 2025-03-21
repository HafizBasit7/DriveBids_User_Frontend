import { useState } from "react";
import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Grid,
  Typography,
  InputAdornment,
} from "@mui/material";
import colors from "../../Style/color";
import EditIcon from '@mui/icons-material/Edit';

const CarFeatureBox = ({
  carBrands = [],
  onNext,
  title = "Select Car Brands",
  searchPlaceholder = "Search brands...",
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);

  const handleCheckboxChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      p={3}
      border="1px solid #D9D9D9"
      borderRadius={2}
    >
      <Typography
        variant="h6"
        sx={{ fontFamily: "Inter", fontSize: 20, mb: 2,fontWeight:600 }}
      >
        {title}
      </Typography>

      <TextField
        fullWidth
        variant="outlined"
        placeholder={searchPlaceholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EditIcon  sx={{ color: "#777" }} />
            </InputAdornment>
          ),
          sx: {
            height: 44,
            fontSize: 14,
            padding: "0 10px",
            borderRadius: 2,
            backgroundColor: "#F3F3F3",
          },
        }}
        sx={{
          fontFamily: "Inter",
          mb: 2,
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: colors.buttoncolor,
            },
          },
        }}
      />

      <Grid container spacing={2}>
        {carBrands
          .filter((brand) =>
            brand.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((brand, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleCheckboxChange(brand)}
                    sx={{ borderRadius: "4px" }} // Square-ish checkbox
                  />
                }
                label={
                  <Typography sx={{ fontFamily: "Inter" }}>{brand}</Typography>
                }
              />
            </Grid>
          ))}
      </Grid>

      <Box display="flex" justifyContent="flex-end" mt={3}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            fontFamily: "Inter",
            minWidth: 120,
            height: 40,
            backgroundColor: colors.buttoncolor,
          }}
          onClick={onNext}
        >
          Next Step
        </Button>
      </Box>
    </Box>
  );
};

export default CarFeatureBox;
