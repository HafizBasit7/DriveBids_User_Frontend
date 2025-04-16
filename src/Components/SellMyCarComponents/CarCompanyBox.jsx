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
import { Search } from "@mui/icons-material";
import colors from "../../Style/color";

const CarSelectionBox = ({
  carBrands = [],
  onNext,
  value,
  isVariant = false,
  isColor = false,
  onChange,
  isLocation,
  searchPlaceholder ,
  customPlaceholder 
}) => {
  // const [inputValue, setInputValue] = useState();
  

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
            {/* <Grid item xs={12} sm={9}>
              <TextField
                fullWidth
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
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
            </Grid> */}

            {/* <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder={customPlaceholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
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
            </Grid> */}
          </>
        )}
      </Grid>

      {/* Car Brands Selection */}
      <RadioGroup
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <Grid container spacing={2}>
          {carBrands?.length < 1 ? <p>Loading...</p> : carBrands.map((brand, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <FormControlLabel
                value={isVariant ? brand.model_name : isColor ? brand : brand.make_display}
                control={<Radio />}
                label={
                  <Typography sx={{ fontFamily: "Inter" }}>{isVariant ? brand.model_name : isColor ? brand : brand.make_display}</Typography>
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
