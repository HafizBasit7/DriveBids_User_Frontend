import { Box, Button, CircularProgress, FormControlLabel, Grid, InputAdornment, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import CarSelectionBox from "../../../Components/SellMyCarComponents/CarCompanyBox";
import colors from "../../../Style/color";
import { useCar } from "../../../context/car.context";
import apiClient from "../../../api/client";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Search } from "@mui/icons-material";

const CarVarient = () => {
  const navigate = useNavigate();
  const {carState, dispatch} = useCar();
  const [searchInput, setSearchInput] = useState();
  const make = carState.carDetails.make;

  if(!make) {
    navigate('../company')
  }

  const {data, isLoading} = useQuery({
    queryKey: ['variant', make?.toLowerCase()],
    queryFn: async () => {
      const result = await apiClient.get(`/models?make=${make?.toLowerCase()}`);
      return result.data;
    },
    refetchOnMount: false,
  });
  const variants = data?.Models;
  
  let filteredVariants = isLoading ? [] : variants;
  if(searchInput && searchInput !== '') {
    filteredVariants = filteredVariants.filter(variant => variant.model_name.toLowerCase().includes(searchInput.toLowerCase()));
  }


  function onChangeCarVariant (value) {
    dispatch({
      type: 'UPDATE_FIELD',
      section: 'carDetails',
      field: 'variant',
      value,
    });
  };

  return (
    <MainLayout title="Car Variant"
    subtitle="Pick The Variant of Your Car"
    buttonText="Back"
    onClick={() => navigate("../company")}>

      <Box width="100%"  >
        
       

        <Box zIndex={2}>
        

          <Typography
            variant="h4"
            fontWeight={600}
            textAlign="center"
            mt={3}
            sx={{ fontFamily: "Inter", fontSize: 30 }}
          >
            Step <span style={{ color: colors.buttoncolor }}>2</span> of 14
          </Typography>

          <Box
            width={{ xs: "95%", sm: "80%", md: "70%" }}
            mx="auto"
            mt={3}
            position="relative"
            zIndex={2}
          >
            {/* <CarSelectionBox
              carBrands={variants}
              isVariant={true}
              value={carState.carDetails.variant}
              onChange={onChangeCarVariant}
              onNext={() => navigate("../model")}
            /> */}

<Box
          display="flex"
          flexDirection="column"
          p={3}
          border="1px solid #D9D9D9"
          borderRadius={2}
          sx={{backgroundColor:"white"}}
          
        >

          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search Variants"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: "#777" }} />
                </InputAdornment>
              ),
              sx: {
                height: 40,
                fontSize: 14,
                padding: "0 10px",
                borderRadius: 2,
                marginBottom: 3,
                backgroundColor: "#F3F3F3",
              },
            }}
            sx={{
              fontFamily: "Inter",
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: colors.buttoncolor,
                },
              },
            }}
          />

          <RadioGroup
              value={carState.carDetails.variant}
              onChange={(e) => onChangeCarVariant(e.target.value)}
            >
              <Grid container spacing={2}>
                {isLoading ? <CircularProgress sx={{mx:'auto', my: 5}} size={24}/> : filteredVariants.map((brand, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <FormControlLabel
                      value={brand.model_name}
                      control={<Radio />}
                      label={
                        <Typography sx={{ fontFamily: "Inter" }}>{brand.model_name}</Typography>
                      }
                    />
                  </Grid>
                ))}
              </Grid>
            </RadioGroup>

           {/* {!isLoading && (
             <PaginationComponent 
             page={page} 

             pages={totalPages} 
             handleChange={(event, value) => {
               setSearchParams({ page: value });
             }} 
           />
           )} */}

            <Box display="flex" justifyContent="flex-end" mt={2}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  fontFamily: "Inter",
                  minWidth: 120,
                  height: 40,
                  backgroundColor: colors.buttoncolor,
                }}
                onClick={() => {
                  if(carState.carDetails.variant) {
                    navigate("../model")
                  }
                }}
              >
                Next Step
              </Button>
            </Box>
        </Box>

          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default CarVarient;
