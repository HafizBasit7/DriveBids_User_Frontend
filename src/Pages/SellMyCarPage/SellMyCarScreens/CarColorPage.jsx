import { Box, Typography, List, ListItem, ListItemText, Paper, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/Mainlayout";
import colors from "../../../Style/color";
import { useCar } from "../../../context/car.context";

const CarColorPage = () => {
  const navigate = useNavigate();
  const carColors = [
    { name: "Red", hex: "#FF0000" },
    { name: "Blue", hex: "#0000FF" },
    { name: "Black", hex: "#000000" },
    { name: "White", hex: "#FFFFFF" },
    { name: "Gray", hex: "#808080" },
    { name: "Silver", hex: "#C0C0C0" },
    { name: "Green", hex: "#008000" },
    { name: "Yellow", hex: "#FFFF00" },
    { name: "Orange", hex: "#FFA500" },
    { name: "Brown", hex: "#A52A2A" },
    { name: "Purple", hex: "#800080" },
    { name: "Beige", hex: "#F5F5DC" },
    { name: "Gold", hex: "#FFD700" },
    { name: "Bronze", hex: "#CD7F32" }
  ];
  const {carState, dispatch} = useCar();
    
  function onCangeCarDetails (value) {
    dispatch({
      type: 'UPDATE_FIELD',
      section: 'carDetails',
      field: 'color',
      value,
    });
  };

  return (
    <MainLayout  title="Car Colour"
    subtitle="Pick The Colour Of Your Car"
    buttonText="Back"
    onClick={() => navigate("../fuel")}>
      <Box width="100%" >
        <Box zIndex={2}>
          <Typography
            variant="h4"
            fontWeight={600}
            textAlign="center"
            mt={3}
            sx={{ fontFamily: "Inter", fontSize: 30 }}
          >
            Step <span style={{ color: colors.buttoncolor }}>7</span> of 14
          </Typography>

          <Box
            component={Paper}
            elevation={3}
            sx={{
              width: { xs: "90%", sm: "70%", md: "60%" },
              margin: "auto",
              mt: 4,
              p: 3,
              borderRadius: 2,
              backgroundColor: "white",
              border: "1px solid #D9D9D9"
            }}
          >
            <Typography fontWeight={600} sx={{ fontSize: 18, mb: 3, fontFamily: "Inter" }}>
              What is the color of your car?
            </Typography>

            <Grid container spacing={2}>
              {carColors.map((color) => (
                <Grid item xs={6} key={color.name}>
                  <ListItem
                    button
                    selected={carState.carDetails.color === color.name}
                    onClick={() => onCangeCarDetails(color.name)}
                    sx={{
                      borderRadius: 1,
                      border: '1px solid',
                      borderColor: carState.carDetails.color === color.name ? colors.buttoncolor : '#E0E0E0',
                      transition: 'all 0.3s ease',
                      '&.Mui-selected': {
                        backgroundColor: `${colors.buttoncolor}10`,
                        borderColor: colors.buttoncolor,
                        '&:hover': {
                          backgroundColor: `${colors.buttoncolor}20`,
                        },
                      },
                      '&:hover': {
                        backgroundColor: '#F5F5F5',
                        borderColor: colors.buttoncolor,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 16,
                        height: 16,
                        borderRadius: '50%',
                        backgroundColor: color.hex,
                        border: color.name === 'White' ? '1px solid #E0E0E0' : 'none',
                        mr: 2
                      }}
                    />
                    <ListItemText 
                      primary={color.name}
                      sx={{
                        fontFamily: "Inter",
                        fontSize: 16,
                        '& .MuiListItemText-primary': {
                          color: carState.carDetails.color === color.name ? colors.buttoncolor : '#333333',
                          fontWeight: carState.carDetails.color === color.name ? 600 : 400,
                        }
                      }}
                    />
                  </ListItem>
                </Grid>
              ))}
            </Grid>

            <Box display="flex" justifyContent="flex-end" mt={3}>
              <Button
                variant="contained"
                disabled={!carState.carDetails.color}
                sx={{
                  textTransform: "none",
                  minWidth: 120,
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
                onClick={() => navigate("../engine")}
              >
                Next Step
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default CarColorPage;
