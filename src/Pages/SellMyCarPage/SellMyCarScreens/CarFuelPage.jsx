import { Box, Typography, Radio, RadioGroup, FormControlLabel, Button, Paper } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import DealsBanner from "../../../Components/HomePageComponents/DealBanner";
import colors from "../../../Style/color";
import BackgroundImage from "../backgroundsvg"; // ✅ Importing same background svg

const CarFuelPage = () => {
    const navigate = useNavigate();
    const [transmission, setTransmission] = useState("Petrol");

    return (
        <MainLayout>
            <Box width="100%" position="relative" minHeight="80vh">
                {/* ✅ Background Image */}
                <BackgroundImage 
                    width={{ xs: "60%", md: "50%" }} 
                    height={1000} 
                    top={20} 
                    right={-30} 
                />

                {/* ✅ Content above the background */}
                <Box position="relative" zIndex={2}>
                    <DealsBanner
                        title="Fuel"
                        subtitle="Pick Your Car Fuel Type"
                        buttonText="Back"
                        onClick={() => navigate("/car-mileage")}
                    />

                    <Typography
                        variant="h4"
                        fontWeight={600}
                        textAlign="center"
                        mt={3}
                        sx={{ fontFamily: "Inter", fontSize: 30 }}
                    >
                        Step <span style={{ color: colors.buttoncolor }}>6</span> of 10
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

                        <RadioGroup 
                            value={transmission} 
                            onChange={(e) => setTransmission(e.target.value)}
                        >
                            {["Petrol", "Diesel", "High Octane", "Electricity"].map((type) => (
                                <FormControlLabel
                                    key={type}
                                    value={type}
                                    control={<Radio sx={{ color: colors.buttoncolor }} />}
                                    label={type}
                                    sx={{ fontFamily: "Inter", fontSize: 16 }}
                                />
                            ))}
                        </RadioGroup>

                        <Box display="flex" justifyContent="flex-end" mt={3}>
                            <Button
                                variant="contained"
                                sx={{
                                    textTransform: "none",
                                    minWidth: 120,
                                    height: "40px",
                                    fontFamily: "Inter",
                                    backgroundColor: colors.buttoncolor,
                                }}
                                onClick={() => navigate("/car-color")}
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
