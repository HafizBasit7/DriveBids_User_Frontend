import { Box, Typography, Button, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import colors from "../../../Style/color";
import MainLayout from "../../../Layouts/Mainlayout";
import { useCar } from "../../../context/car.context";

const AccidentDescription = () => {
  const navigate = useNavigate();

  const {carState, dispatch} = useCar();
    
    function onCangeCarDetails (value) {
      dispatch({
        type: 'UPDATE_FIELD',
        section: 'carDetails',
        field: 'accidentHistory',
        value,
      });
    };
  

  return (
    <MainLayout
      title="Accident Description"
      subtitle="Enter Accident Description"
      buttonText="Back"
      onClick={() => navigate("../condition")}
    >
      <Box width="100%" sx={{ my: 10, display: "flex", justifyContent: "center" }}>
        <Stack spacing={2} alignItems="flex-start" justifyContent="center" width="50%">
          {/* Description Title */}
          <Typography variant="h6" sx={{ fontFamily: "Inter", fontSize: 25 }}>
            Vehicle Accident History
          </Typography>

          {/* Input Field with Grey Border */}
          <TextField
            placeholder="Enter accident history..."
            fullWidth
            value={carState.carDetails.accidentHistory}
            onChange={(e) => onCangeCarDetails(e.target.value)}
            multiline
            rows={5} // Increased height
            sx={{
              backgroundColor: "#fff", // White background
              border: "1px solid #D3D3D3", // Light grey border
              borderRadius: 1,
              padding: 2, // Adds padding inside the box
              fontSize: 16,
              fontFamily: "Inter",
              color: "#000", // Text color
              "&:hover": { borderColor: "#B0B0B0" }, // Darker grey on hover
              "& .MuiOutlinedInput-notchedOutline": { border: "none" }, // Removes MUI default outline
            }}
          />

          {/* Next Button */}
          <Box display="flex" justifyContent="flex-end" width="100%" mt={3}>
            <Button
              variant="contained"
              disabled={!carState.carDetails.accidentHistory}
              sx={{
                fontFamily: "Inter",
                borderRadius: 1.5,
                width: 150,
                py: 1,
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
              onClick={() => navigate("../title")}
            >
              Next
            </Button>
          </Box>
        </Stack>
      </Box>
    </MainLayout>
  );
};

export default AccidentDescription;
