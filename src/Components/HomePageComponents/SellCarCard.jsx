import React from "react";
import { Box, Button, Typography } from "@mui/material";
import SellCarImage from "../../assets/Png/sellcarimage.png"; // Replace with actual image path

const SellCarCard = () => {
    return (
       
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    width: "100%",
                    maxWidth: "1000px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                    overflow: "hidden",
                    position: "relative",
                    height: { xs: "auto", md: "230px" },
                    backgroundColor: "#fff",

                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: "56%",
                        width: "7%",
                        backgroundColor: "white",
                        transform: "skew(44deg)",
                        zIndex: 2
                    }}
                />

                <Box
                    sx={{
                        backgroundColor: "#FFD600",
                        padding: "14px",
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        height: "100%",
                        zIndex: 1,
                    }}
                >
                    <Typography variant="h5" fontWeight="bold" sx={{ color: "#000", fontFamily: "Outfit" }}>
                        Ready to Sell Your Car Today?
                    </Typography>
                    <Typography sx={{ color: "#000", mt: 1 }}>
                        Join thousands of successful sellers and get the best deal for your car
                        in just a few clicks!
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            mt: 2,
                            backgroundColor: "#2F61BF",
                            color: "#fff",
                            textTransform: "none",
                            px: 3,
                            py: 1,
                            fontFamily: "Inter",
                            borderRadius: "8px",
                            "&:hover": { backgroundColor: "#1E4CA1" },
                        }}
                    >
                        Start Selling Now →
                    </Button>
                </Box>

                <Box
                    sx={{
                        flex: 1,
                        height: "100%",
                        position: "relative",
                        zIndex: 0,
                    }}
                >
                    <img
                        src={SellCarImage}
                        alt="Handshake deal"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </Box>
            </Box>
        
    );
};

export default SellCarCard;
