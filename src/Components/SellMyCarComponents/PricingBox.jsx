import { Box, Typography, Button, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";
import colors from "../../Style/color";
import Dollar from "../../assets/SVG/dollar.svg"

const PricingBidBox = ({ text,onNext, value, onChange }) => {

  return (
    <Box
      sx={{
        border: "2px solid #D9D9D9",
        borderRadius: 2,
        p: { xs: 2, sm: 4 },
        width: { xs: "95%", sm: "80%", md: "60%" },
        mx: "auto",
        mt: 5,
        backgroundColor: "#fff",
      }}
    >
      <Typography
        mb={5}
        sx={{ 
          fontFamily: "Inter", 
          fontSize: { xs: 16, sm: 18 }, 
          fontWeight: 600 
        }}
      >
      {text}
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 4,
          px:2,
          
        }}
      >
        <TextField
       placeholder="0"
       
          value={value}
          onChange={(e) => onChange(e.target.value)}
          variant="outlined"
          type="number"
          sx={{
            minWidth: 250,
           
            // width: `${value?.toString().length * 18 + 80}px`, // Dynamic width based on input
            transition: "width 0.3s ease",
            "& .MuiOutlinedInput-root": {
              pl: 0,
              py: 3, 
              borderRadius:4,
             
              alignItems: "center",
              "&.Mui-focused fieldset": {
                borderColor: colors.buttoncolor, // Active border color
              },
            },
            "& .MuiOutlinedInput-input": {
              textAlign: "left",
              fontSize: 28,
              fontWeight: 600,
              fontFamily: "Inter",
              p: 0, // Remove extra padding inside input
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment
              
                position="start"
                sx={{
                  mx: 1,
                  ml:2,
                  display: "flex",
                 
              
                }}
              >

                {/* <img src={Dollar} alt="currency" style={{ width: 28, height: 28 }} /> */}
                <span style={{fontSize:20,fontWeight:900,color:"#000" }} >AED</span>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          disabled={!value}
          sx={{
            textTransform: "none",
            height: 35,
            fontFamily: "Inter",
            mr: 4,
            backgroundColor: colors.buttoncolor,
            fontWeight: 500,
            fontSize: 12,
            px: 3,
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
  );
};

export default PricingBidBox;
