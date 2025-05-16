import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Button,
  Tooltip,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import colors from "../../../Style/color";
import { useCar } from "../../../context/car.context";
import InfoIcon from "@mui/icons-material/Info";
import { useEffect } from "react";

const transmissionTypes = [
  { type: "AGS", description: "Auto Gear Shift (semi-automatic)" },
  { type: "Manual", description: "" },
  { type: "CVT", description: "Continuously Variable Transmission" },
  { type: "DCT", description: "Dual Clutch Transmission" },
  { type: "AMT", description: "Automated Manual Transmission" },
  { type: "EV", description: "Used in most electric vehicles" },
];

const CarTransmissionPage = () => {
  const navigate = useNavigate();
  const { carState, dispatch } = useCar();
  useEffect(() => {
    if (!carState?.regNo) {
      navigate("/ad");
    }
  }, [carState, navigate]);
  function onCangeCarDetails(value) {
    dispatch({
      type: "UPDATE_FIELD",
      section: "carDetails",
      field: "transmission",
      value,
    });
  }

  return (
    <MainLayout
      title="Transmission"
      subtitle="Pick The Transmission Type Of Your Car"
      buttonText="Back"
      onClick={() => navigate("../engine")}
    >
      <Box width="100%">
        <Box zIndex={2}>
          <Typography
            variant="h4"
            fontWeight={600}
            textAlign="center"
            mt={3}
            sx={{ fontFamily: "Inter", fontSize: 30 }}
          >
            Step <span style={{ color: colors.buttoncolor }}>9</span> of 14
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
              border: "1px solid #D9D9D9",
            }}
          >
            <Typography
              fontWeight={600}
              sx={{ fontSize: 18, mb: 3, fontFamily: "Inter" }}
            >
              What's the transmission type of the car?
            </Typography>

            <List>
              {transmissionTypes.map((item) => (
                <ListItem
                  key={item.type}
                  button
                  selected={carState.carDetails.transmission === item.type}
                  onClick={() => onCangeCarDetails(item.type)}
                  sx={{
                    mb: 1,
                    borderRadius: 1,
                    border: "1px solid",
                    borderColor:
                      carState.carDetails.transmission === item.type
                        ? colors.buttoncolor
                        : "#E0E0E0",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    "&.Mui-selected": {
                      backgroundColor: `${colors.buttoncolor}10`,
                      borderColor: colors.buttoncolor,
                      "&:hover": {
                        backgroundColor: `${colors.buttoncolor}20`,
                      },
                    },
                    "&:hover": {
                      backgroundColor: "#F5F5F5",
                      borderColor: colors.buttoncolor,
                    },
                  }}
                >
                  <ListItemText
                    primary={
                      item.description
                        ? `${item.type} - ${item.description}`
                        : item.type
                    }
                    sx={{
                      fontFamily: "Inter",
                      fontSize: 16,
                      "& .MuiListItemText-primary": {
                        color:
                          carState.carDetails.transmission === item.type
                            ? colors.buttoncolor
                            : "#333333",
                        fontWeight:
                          carState.carDetails.transmission === item.type
                            ? 600
                            : 400,
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>

            <Box display="flex" justifyContent="flex-end" mt={3}>
              <Button
                variant="contained"
                disabled={!carState.carDetails.transmission}
                sx={{
                  textTransform: "none",
                  minWidth: 120,
                  height: "40px",
                  fontFamily: "Inter",
                  backgroundColor: colors.buttoncolor,
                  "&.Mui-disabled": {
                    backgroundColor: "#E0E0E0",
                    color: "#9E9E9E",
                    cursor: "not-allowed",
                  },
                  "&:hover": {
                    backgroundColor: colors.buttoncolor,
                    opacity: 0.9,
                  },
                }}
                onClick={() => navigate("../owner")}
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

export default CarTransmissionPage;
