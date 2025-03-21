import { useState } from "react";
import {
  Box,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Grid,
  Typography,
  InputAdornment,
} from "@mui/material";
import { Search, Business } from "@mui/icons-material";
import colors from "../../Style/color";

const CarSelectionBox = ({
  carBrands = [],
  onNext,
  isLocation ,
  searchPlaceholder ,
  customPlaceholder 
}) => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [customBrand, setCustomBrand] = useState("");

  return (
    <Box
      display="flex"
      flexDirection="column"
      p={3}
      border="1px solid #D9D9D9"
      borderRadius={2}
      sx={{backgroundColor:"white"}}
      
    >
      <Grid container spacing={2} mb={2}>
        {isLocation ? (
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder={searchPlaceholder}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search sx={{ color: "#777" }} />
                  </InputAdornment>
                ),
                sx: {
                  height: 40,
                  fontSize: 14,
                  padding: "0 10px",
                  borderRadius: 2,
                  backgroundColor: "#F3F3F3",
                },
              }}
              sx={{
                fontFamily: "Inter",
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: colors.buttoncolor,
                  },
                },
              }}
            />
          </Grid>
        ) : (
          <>
            {/* Both search and custom input side by side */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder={searchPlaceholder}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search sx={{ color: "#777" }} />
                    </InputAdornment>
                  ),
                  sx: {
                    height: 40,
                    fontSize: 14,
                    padding: "0 10px",
                    borderRadius: 2,
                    backgroundColor: "#F3F3F3",
                  },
                }}
                sx={{
                  fontFamily: "Inter",
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: colors.buttoncolor,
                    },
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder={customPlaceholder}
                value={customBrand}
                onChange={(e) => setCustomBrand(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Business sx={{ color: "#777" }} />
                    </InputAdornment>
                  ),
                  sx: {
                    height: 40,
                    fontSize: 14,
                    padding: "0 10px",
                    borderRadius: 2,
                    backgroundColor: "#F3F3F3",
                  },
                }}
                sx={{
                  fontFamily: "Inter",
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: colors.buttoncolor,
                    },
                  },
                }}
              />
            </Grid>
          </>
        )}
      </Grid>

      {/* Car Brands Selection */}
      <RadioGroup
        value={selectedBrand}
        onChange={(e) => setSelectedBrand(e.target.value)}
      >
        <Grid container spacing={2}>
          {carBrands.map((brand, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <FormControlLabel
                value={brand}
                control={<Radio />}
                label={
                  <Typography sx={{ fontFamily: "Inter" }}>{brand}</Typography>
                }
              />
            </Grid>
          ))}
        </Grid>
      </RadioGroup>

      {/* Next Step Button */}
      <Box display="flex" justifyContent="flex-end" mt={2}>
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

export default CarSelectionBox;
