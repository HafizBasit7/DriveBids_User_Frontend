import { Box, Typography, Button, Paper, List, ListItem, ListItemText } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import colors from "../../../Style/color";
import { useCar } from "../../../context/car.context";
import MainLayout from "../../../Layouts/MainLayout";
import toast from "react-hot-toast";

const entities = [
  { id: "1", name: "1 week" },
  { id: "2", name: "2 weeks" },
  { id: "3", name: "3 weeks" },
  { id: "4", name: "4 weeks" },
];

const PricingPagePage4 = () => {
  const navigate = useNavigate();
  const {carState, dispatch, draftSave} = useCar();

  function setDuration (value) {
    const getFutureDateUTC = (weeks) => {
      const currentDateUTC = new Date();
      const futureDateUTC = new Date(currentDateUTC);
      futureDateUTC.setUTCDate(futureDateUTC.getUTCDate() + weeks * 7);
      return futureDateUTC.toUTCString();
    };

    dispatch({
      type: 'UPDATE_FIELD',
      section: 'carPricing',
      field: 'duration',
      value: getFutureDateUTC(value),
    });

    dispatch({
      type: 'UPDATE_FIELD',
      field: 'selectedWeek',
      value,
    });
  };

  const handleSavePricing = () => {
    toast.promise(async () => {
      await draftSave('carPricing');
      navigate('/ad/post')
    }, {
      loading: 'Saving draft',
      error: (error) => error.message,
      success: 'Draft is saved',
    })
  };

  return (
    <MainLayout  title="Duration"
    // subtitle="Pick Theweeks"
    buttonText="Back"
    onClick={() => navigate("../pricing-3")}>
      <Box width="100%" >
      

        <Box  zIndex={2}>
       

          <Typography
            variant="h4"
            fontWeight={600}
            textAlign="center"
            mt={3}
            sx={{ fontFamily: "Inter", fontSize: 30 }}
          >
            Step <span style={{ color: colors.buttoncolor }}>4</span> of 4
          </Typography>

          {/* Transmission Form */}
          <Box
            component={Paper}
            elevation={3}
            sx={{
              width: { xs: "90%", sm: "70%", md: "60%" },
              margin: "auto",
              mt: 4,
              p: 4,
              borderRadius: 2,
            }}
          >
            <Typography fontWeight={600} sx={{ fontSize: 20, mb: 4, fontFamily: "Inter" }}>
              Duration of Bid?
            </Typography>

            <List>
              {entities.map((type) => (
                <ListItem
                  key={type.id}
                  button
                  selected={carState.selectedWeek === type.id}
                  onClick={() => setDuration(type.id)}
                  sx={{
                    mb: 1,
                    borderRadius: 1,
                    border: '1px solid',
                    borderColor: carState.selectedWeek === type.id ? colors.buttoncolor : '#E0E0E0',
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
                    primary={type.name}
                    sx={{
                      fontFamily: "Inter",
                      fontSize: 16,
                      '& .MuiListItemText-primary': {
                        color: carState.selectedWeek === type.id ? colors.buttoncolor : '#333333',
                        fontWeight: carState.selectedWeek === type.id ? 600 : 400,
                      }
                    }}
                  />
                </ListItem>
              ))}
            </List>

            {/* Next Step Button */}
            <Box display="flex" justifyContent="flex-end" mt={5}>
              <Button
                variant="contained"
                disabled={!carState.selectedWeek}
                sx={{
                  textTransform: "none",
                  minWidth: 120,
                  height: 40,
                  fontFamily: "Inter",
                  backgroundColor: colors.buttoncolor,
                  "&:hover": {
                    backgroundColor: colors.buttoncolor,
                  },
                  '&.Mui-disabled': {
                    backgroundColor: '#E0E0E0',
                    color: '#9E9E9E',
                    cursor: 'not-allowed'
                  }
                }}
                onClick={handleSavePricing}
              >
                Save
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default PricingPagePage4;