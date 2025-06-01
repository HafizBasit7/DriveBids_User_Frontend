import {
  Box,
  Button,
  CircularProgress,
  FormControlLabel,
  Grid,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/Mainlayout";
import CarSelectionBox from "../../../Components/SellMyCarComponents/CarCompanyBox";
import colors from "../../../Style/color";
import { useCar } from "../../../context/car.context";
import apiClient from "../../../api/client";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Add, Search } from "@mui/icons-material";

const CarVarient = () => {
  const navigate = useNavigate();
  const { carState, dispatch } = useCar();
  useEffect(() => {
    if (!carState?.regNo) {
      navigate("/ad");
    }
  }, [carState, navigate]);
  const [searchInput, setSearchInput] = useState();
  const make = carState.carDetails.make;

  if (!make) {
    navigate("../company");
  }

  const { data, isFetching } = useQuery({
    queryKey: ["variant", make?.toLowerCase()],
    queryFn: async () => {
      const result = await apiClient.get(`/models?make=${make?.toLowerCase()}`);
      return result.data;
    },
    refetchOnMount: false,
  });

  let filteredVariants = isFetching ? [] : data?.Models || [];
  if (searchInput && searchInput !== "") {
    filteredVariants = filteredVariants?.filter((variant) =>
      variant.model_name.toLowerCase().includes(searchInput.toLowerCase())
    );
  }

  function onChangeCarVariant(value) {
    dispatch({
      type: "UPDATE_FIELD",
      section: "carDetails",
      field: "variant",
      value,
    });
    setSearchInput(""); // Clear search input when variant is selected
  }
  const [showInput, setShowInput] = useState(false);
  const [customText, setCustomText] = useState("");

  const handleAddCustom = () => {
    if (customText.trim()) {
      onChangeCarVariant(customText.trim());
      setCustomText("");
      setShowInput(false);
    }
  };
  return (
    <MainLayout
      title="Car Variant"
      subtitle="Pick The Variant of Your Car"
      buttonText="Back"
      onClick={() => navigate("../company")}
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
              sx={{
                backgroundColor: "white",
                height: "500px", // Fixed height
                overflow: "hidden", // Hide overflow
              }}
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
                      <Search sx={{ color: "#333333" }} />
                    </InputAdornment>
                  ),
                  sx: {
                    height: 45,
                    fontSize: 15,
                    padding: "0 12px",
                    borderRadius: 2,
                    marginBottom: 3,
                    backgroundColor: "white",
                    "&:hover": {
                      backgroundColor: "white",
                    },
                  },
                }}
                sx={{
                  fontFamily: "Inter",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#D9D9D9",
                      borderWidth: "1.5px",
                    },
                    "&:hover fieldset": {
                      borderColor: colors.buttoncolor,
                      borderWidth: "1.5px",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: colors.buttoncolor,
                      borderWidth: "1.5px",
                    },
                  },
                  "& .MuiInputBase-input": {
                    "&::placeholder": {
                      color: "#666666",
                      opacity: 1,
                    },
                  },
                }}
              />

              <Box className="w-full">
                {!showInput ? (
                  <Button
                    variant="outlined"
                    startIcon={<Add size={16} />}
                    onClick={() => setShowInput(true)}
                    className="rounded-full mt-2 text-gray-800"
                    sx={{
                      borderColor: "#D9D9D9",
                      borderWidth: "1.5px",
                      textTransform: "none",
                      padding: "6px 12px",
                      "&:hover": {
                        borderColor: "#666666",
                        backgroundColor: "rgba(0, 0, 0, 0.04)",
                      },
                      fontWeight: "600",
                      marginBottom: "8px",
                    }}
                  >
                    Add Custom
                  </Button>
                ) : (
                  <Box className="flex items-center gap-3 mt-0 mb-0">
                    <TextField
                      size="small"
                      value={customText}
                      onChange={(e) => setCustomText(e.target.value)}
                      placeholder="Enter custom make"
                      autoFocus
                      className="flex-grow"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "10px",
                          "& fieldset": {
                            borderColor: "#D9D9D9",
                            borderWidth: "1.5px",
                          },
                          "&:hover fieldset": {
                            borderColor: "#666666",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#2F61BF",
                            borderWidth: 1.6,
                          },
                        },
                        marginRight: "8px",
                        marginBottom: "8px",
                      }}
                    />
                    <Button
                      variant="contained"
                      onClick={handleAddCustom}
                      className="rounded-full"
                      sx={{
                        backgroundColor: "#2F61BF",
                        textTransform: "none",
                        "&:hover": {
                          backgroundColor: "#2F61BF",
                        },
                        padding: "5px 25px",
                      }}
                    >
                      Add
                    </Button>
                  </Box>
                )}
              </Box>

              <Box sx={{ overflowY: "auto", flex: 1, pr: 1 }}>
                <Grid container spacing={2}>
                  {isFetching ? (
                    <CircularProgress sx={{ mx: "auto", my: 5 }} size={24} />
                  ) : (
                    <>
                      {/* Show selected variant when no search and variant is selected */}
                      {!searchInput && carState.carDetails.variant && (
                        <Grid item xs={12}>
                          <Box
                            sx={{
                              border: `2px solid ${colors.buttoncolor}`,
                              borderRadius: 2,
                              p: 2,
                              mb: 3,
                              backgroundColor: `${colors.buttoncolor}15`,
                              display: "flex",
                              alignItems: "center",
                              gap: 2,
                            }}
                          >
                            <Typography sx={{ fontFamily: "Inter" }}>
                              {carState.carDetails.variant}
                            </Typography>
                          </Box>
                        </Grid>
                      )}

                      {/* Show variants based on conditions */}
                      {filteredVariants?.length > 0 && (
                        <>
                          {searchInput
                            ? // Show all filtered variants when searching
                              filteredVariants?.map((brand, index) => (
                                <Grid item xs={12} sm={6} key={index}>
                                  <Box
                                    onClick={() =>
                                      onChangeCarVariant(brand.model_name)
                                    }
                                    sx={{
                                      p: 2,
                                      border:
                                        carState.carDetails.variant ===
                                        brand.model_name
                                          ? `2px solid ${colors.buttoncolor}`
                                          : "1px solid #D9D9D9",
                                      borderRadius: 2,
                                      cursor: "pointer",
                                      backgroundColor:
                                        carState.carDetails.variant ===
                                        brand.model_name
                                          ? "transparent"
                                          : "white",
                                      color:
                                        carState.carDetails.variant ===
                                        brand.model_name
                                          ? colors.buttoncolor
                                          : "inherit",
                                      "&:hover": {
                                        backgroundColor:
                                          carState.carDetails.variant ===
                                          brand.model_name
                                            ? "transparent"
                                            : "#F3F3F3",
                                      },
                                    }}
                                  >
                                    <Typography sx={{ fontFamily: "Inter" }}>
                                      {brand.model_name}
                                    </Typography>
                                  </Box>
                                </Grid>
                              ))
                            : // Show first 10 variants when no search and no selection
                              !carState.carDetails.variant &&
                              filteredVariants
                                .slice(0, 8)
                                .map((brand, index) => (
                                  <Grid item xs={12} sm={6} key={index}>
                                    <Box
                                      onClick={() =>
                                        onChangeCarVariant(brand.model_name)
                                      }
                                      sx={{
                                        p: 2,
                                        border:
                                          carState.carDetails.variant ===
                                          brand.model_name
                                            ? `2px solid ${colors.buttoncolor}`
                                            : "1px solid #D9D9D9",
                                        borderRadius: 2,
                                        cursor: "pointer",
                                        backgroundColor:
                                          carState.carDetails.variant ===
                                          brand.model_name
                                            ? "transparent"
                                            : "white",
                                        color:
                                          carState.carDetails.variant ===
                                          brand.model_name
                                            ? colors.buttoncolor
                                            : "inherit",
                                        "&:hover": {
                                          backgroundColor:
                                            carState.carDetails.variant ===
                                            brand.model_name
                                              ? "transparent"
                                              : "#F3F3F3",
                                        },
                                      }}
                                    >
                                      <Typography sx={{ fontFamily: "Inter" }}>
                                        {brand.model_name}
                                      </Typography>
                                    </Box>
                                  </Grid>
                                ))}
                        </>
                      )}

                      {/* Show message when no results found */}
                      {searchInput && filteredVariants?.length === 0 && (
                        <Grid item xs={12}>
                          <Typography
                            sx={{ textAlign: "center", color: "#666", py: 2 }}
                          >
                            No variants found matching your search
                          </Typography>
                        </Grid>
                      )}
                    </>
                  )}
                </Grid>
              </Box>

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
                  disabled={!carState.carDetails.variant}
                  sx={{
                    fontFamily: "Inter",
                    minWidth: 120,
                    height: 40,
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
                  onClick={() => {
                    if (carState.carDetails.variant) {
                      navigate("../model");
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
