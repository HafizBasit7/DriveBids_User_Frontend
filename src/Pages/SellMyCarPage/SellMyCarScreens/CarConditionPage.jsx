import { Box, Typography, Radio, RadioGroup, FormControlLabel, Button, Paper } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import colors from "../../../Style/color";
import MainLayout from "../../../Layouts/Mainlayout";

const CarConditionPage = () => {
    const navigate = useNavigate();
    const [transmission, setTransmission] = useState("Petrol");

    return (
        <MainLayout title="Condition"
        subtitle="Pick Your Car Condition"
        buttonText="Back"
        onClick={() => navigate("/car-mileage")}>
            <Box width="100%" >
               

                <Box  zIndex={2}>
                    

                    <Typography
                        variant="h4"
                        fontWeight={600}
                        textAlign="center"
                        mt={3}
                        sx={{ fontFamily: "Inter", fontSize: 30 }}
                    >
                        Step <span style={{ color: colors.buttoncolor }}>13</span> of 14
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
                            Condition of your Car?
                        </Typography>

                        <RadioGroup 
                            value={transmission} 
                            onChange={(e) => setTransmission(e.target.value)}
                        >
                            {["Poor", "Fail", "Good", "Execellent"].map((type) => (
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

export default CarConditionPage;
