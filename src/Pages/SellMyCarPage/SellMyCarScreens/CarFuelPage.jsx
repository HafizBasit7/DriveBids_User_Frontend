import { Box, Typography, Radio, RadioGroup, FormControlLabel, Button, Paper } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import DealsBanner from "../../../Components/HomePageComponents/DealBanner";
import colors from "../../../Style/color";

const CarFuelPage = () => {
    const navigate = useNavigate();
    const [transmission, setTransmission] = useState("AGS");

    return (
        <MainLayout>
            <Box width="100%">
                <DealsBanner
                    title="Fuel"
                    subtitle="Pick Your Car Fuel Type"
                    buttonText="Back to Home"
                    onClick={() => navigate("/car-mileage")}
                />
            </Box>

            <Typography
        variant="h4"
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter",fontSize:30  }}
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
                }}
            >
                <Typography fontWeight={600} sx={{ fontSize: 18, mb: 3, fontFamily: "Inter" }}>
                    Transmission type of the car?
                </Typography>

                
                <RadioGroup value={transmission} onChange={(e) => setTransmission(e.target.value)}>
                    {["AGS", "Manual", "CVT", "DCT"].map((type) => (
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
                            minWidth:120,
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
        </MainLayout>
    );
};

export default CarFuelPage;
