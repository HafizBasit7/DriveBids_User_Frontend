import { Box, Typography, Radio, RadioGroup, FormControlLabel, Button, Paper } from "@mui/material";
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

            <RadioGroup
              value={carState.selectedWeek}
              onChange={(e) => setDuration(e.target.value)}
            >
              {entities.map((type) => (
                <FormControlLabel
                  key={type.id}
                  value={type.id}
                  control={
                    <Radio
                      sx={{
                        color: colors.buttoncolor,
                        "&.Mui-checked": { color: colors.buttoncolor },
                      }}
                    />
                  }
                  label={type.name}
                  sx={{
                    fontFamily: "Inter",
                    fontSize: 16,
                    mb: 1,
                  }}
                />
              ))}
            </RadioGroup>

            {/* Next Step Button */}
            <Box display="flex" justifyContent="flex-end" mt={5}>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  minWidth: 120,
                  height: 40,
                  fontFamily: "Inter",
                  backgroundColor: colors.buttoncolor,
                  "&:hover": {
                    backgroundColor: colors.buttoncolor,
                  },
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