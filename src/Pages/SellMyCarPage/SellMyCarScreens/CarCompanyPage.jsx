import { Box, Button, CircularProgress, FormControlLabel, Grid, InputAdornment, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import colors from "../../../Style/color";
import MainLayout from "../../../Layouts/Mainlayout";
import { useCar } from "../../../context/car.context";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../../../api/client";
import PaginationComponent from "../../../Components/Common/PaginationComponent";
import { useEffect, useState } from "react";
import { Search } from "@mui/icons-material";

const LIMIT = 15;

const CarCompanyPage = () => {
  const navigate = useNavigate();

  const {carState, dispatch} = useCar();
  // const [searchParams, setSearchParams] = useSearchParams();
  // const page = searchParams.get('page') ? parseInt(searchParams.get('page')) : 1;
  const [searchInput, setSearchInput] = useState();

  const {data, isLoading} = useQuery({
    queryKey: ['make'],
    queryFn: async () => {
      const result = await apiClient.get('/makes');
      return result.data;
    },
    refetchOnMount: false,
  });
  const makes = data?.Makes;

  // let totalPages;
  // let slicedMakes;

  // if(searchInput && searchInput !== '') {
  //   let filteredMakes = makes ? makes.filter(make => make.make_display.toLowerCase().includes(searchInput.toLowerCase())) : [];
  //   slicedMakes = filteredMakes.slice((page - 1) * LIMIT, ((page - 1) * LIMIT) + LIMIT);
  //   totalPages = Math.ceil(filteredMakes.length / LIMIT);
  // } else {
  //   totalPages = makes ? Math.ceil(makes.length / LIMIT) : 0;
  //   slicedMakes = makes ? makes.slice((page - 1) * LIMIT, ((page - 1) * LIMIT) + LIMIT) : [];
  // }

  let filteredMakes = isLoading ? [] : makes;
  if(searchInput && searchInput !== '') {
    filteredMakes = filteredMakes.filter(make => make.make_display.toLowerCase().includes(searchInput.toLowerCase()));
  }

  // useEffect(() => {
  //   if(slicedMakes.length === 0 && !isLoading) {
  //     setSearchParams({page: 1})
  //   }
  // }, [slicedMakes, isLoading]);

  function onChangeCarMake (value) {
    dispatch({
      type: 'UPDATE_FIELD',
      section: 'carDetails',
      field: 'make',
      value,
    });
    dispatch({
      type: 'UPDATE_FIELD',
      section: 'carDetails',
      field: 'variant',
      value: null,
    });
  };

  return (
    <MainLayout
      title="Car Company"
      subtitle="Pick The Company of Your Car"
      buttonText="Back"
      onClick={() => navigate("..")}
    >
      
      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontFamily: "Inter", fontSize: 30 }}
      >
        Step <span style={{ color: colors.buttoncolor }}>1</span> of 14
      </Typography>

      <Box
        width={{ xs: "95%", sm: "80%", md: "70%" }}
        mx="auto"
        mt={3}
        position="relative"
        zIndex={2}
      >
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
            placeholder="Search Makes"
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
              value={carState.carDetails.make}
              onChange={(e) => onChangeCarMake(e.target.value)}
            >
              <Grid container spacing={2}>
                {isLoading ? <CircularProgress sx={{mx:'auto', my: 5}} size={24}/> : filteredMakes.map((brand, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <FormControlLabel
                      value={brand.make_display}
                      control={<Radio />}
                      label={
                        <Typography sx={{ fontFamily: "Inter" }}>{brand.make_display}</Typography>
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
                  if(carState.carDetails.make) {
                    navigate("../variant")
                  }
                }}
              >
                Next Step
              </Button>
            </Box>
        </Box>


      </Box>
    </MainLayout>
  );
};

export default CarCompanyPage;
