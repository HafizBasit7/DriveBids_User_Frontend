import { Box, Typography, Button, TextField } from "@mui/material";
import colors from "../../Style/color";

const OwnerSelectionBox = ({ onNext, value, onChange }) => {
  const maxOwners = 20;

  const handleInputChange = (event) => {
    const newValue = parseInt(event.target.value);
    // if (!isNaN(newValue) && newValue >= 1 && newValue <= maxOwners) {
    //   onChange(newValue);
    // }
    onChange(newValue);
  };

  return (
    <Box width="100%">
      <Box zIndex={2}>
        <Box
          sx={{
            width: { xs: "90%", sm: "70%", md: "70%" },
            margin: "auto",
            mt: 4,
            p: 3,
            borderRadius: 2,
            backgroundColor: "white",
            border: "1px solid #D9D9D9",
          }}
        >
          <Typography fontWeight={600} textAlign="start" mb={6} sx={{ fontSize: 20, fontFamily: "Inter" }}>
            How many previous owners has the car had?
          </Typography>

          <Box px={3} mb={8}>
            <Typography fontWeight={500} textAlign="start" mb={3} sx={{ fontSize: 18, fontFamily: "Inter" }}>
              Number of Previous Owners
            </Typography>
            <Box mb={3}>
              <TextField
                fullWidth
                type="number"
                placeholder="Enter number of previous owners"
                value={value || ""}
                onChange={handleInputChange}
                sx={{
                  fontFamily: "Inter",
                  "& .MuiOutlinedInput-root": {
                    height: 40,
                    fontSize: 14,
                    "& input": {
                      padding: 2,
                      fontFamily: "Inter",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: colors.buttoncolor,
                    },
                  },
                }}
              />
            </Box>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Inter",
                color: "rgba(0, 0, 0, 0.5)",
                fontSize: "14px"
              }}
            >
              Enter a number between 1 and {maxOwners}
            </Typography>
          </Box>

          <Box display="flex" justifyContent="flex-end" mt={3}>
            <Button
              variant="contained"
              disabled={!value}
              sx={{
                textTransform: "none",
                minWidth: "120px",
                height: "40px",
                fontFamily: "Inter",
                backgroundColor: colors.buttoncolor,
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
    </Box>
  );
};

export default OwnerSelectionBox;
