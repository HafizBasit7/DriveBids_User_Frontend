import { Box, Typography, Button, Paper, List, ListItem, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import colors from "../../../Style/color";
import MainLayout from "../../../Layouts/Mainlayout";
import { useCar } from "../../../context/car.context";

const CarFuelPage = () => {
    const navigate = useNavigate();
    const {carState, dispatch} = useCar();
      
    function onCangeCarDetails (value) {
    dispatch({
        type: 'UPDATE_FIELD',
        section: 'carDetails',
        field: 'fuel',
        value,
    });
    };

    return (
        <MainLayout title="Fuel"
        subtitle="Pick Your Car Fuel Type"
        buttonText="Back"
        onClick={() => navigate("../mileage")}>
            <Box width="100%" >
               

                <Box  zIndex={2}>
                    

                    <Typography
                        variant="h4"
                        fontWeight={600}
                        textAlign="center"
                        mt={3}
                        sx={{ fontFamily: "Inter", fontSize: 30 }}
                    >
                        Step <span style={{ color: colors.buttoncolor }}>6</span> of 14
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
                            Fuel type the car runs on?
                        </Typography>

                        <List>
                            {['Petrol', 'Diesel', 'HI-Octane', 'Electric', 'Hybrid'].map((type) => (
                                <ListItem
                                    key={type}
                                    button
                                    selected={carState.carDetails.fuel === type}
                                    onClick={() => onCangeCarDetails(type)}
                                    sx={{
                                        mb: 1,
                                        borderRadius: 1,
                                        border: '1px solid',
                                        borderColor: carState.carDetails.fuel === type ? colors.buttoncolor : '#E0E0E0',
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
                                    <ListItemText 
                                        primary={type}
                                        sx={{
                                            fontFamily: "Inter",
                                            fontSize: 16,
                                            '& .MuiListItemText-primary': {
                                                color: carState.carDetails.fuel === type ? colors.buttoncolor : '#333333',
                                                fontWeight: carState.carDetails.fuel === type ? 600 : 400,
                                            }
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>

                        <Box display="flex" justifyContent="flex-end" mt={3}>
                            <Button
                                variant="contained"
                                disabled={!carState.carDetails.fuel}
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
                                onClick={() => navigate("../color")}
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

export default CarFuelPage;
