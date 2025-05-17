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
import { useNavigate, useSearchParams } from "react-router-dom";
import colors from "../../../Style/color";
import MainLayout from "../../../Layouts/Mainlayout";
import { useCar } from "../../../context/car.context";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../../../api/client";
import PaginationComponent from "../../../Components/Common/PaginationComponent";
import { useEffect, useState } from "react";
import { Search, PlusOneOutlined, PlusOne, Add } from "@mui/icons-material";

const LIMIT = 15;

const CarCompanyPage = () => {
  const navigate = useNavigate();

  const { carState, dispatch } = useCar();
  useEffect(() => {
    if (!carState?.regNo) {
      navigate("/ad");
    }
  }, [carState, navigate]);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const page = searchParams.get('page') ? parseInt(searchParams.get('page')) : 1;
  const [searchInput, setSearchInput] = useState();

  const { data, isLoading } = useQuery({
    queryKey: ["make"],
    queryFn: async () => {
      const result = await apiClient.get("/makes");
      return result.data;
    },
    refetchOnMount: false,
  });
  const [makes, setMakes] = useState(data?.Makes);
  const [showInput, setShowInput] = useState(false);
  const [customText, setCustomText] = useState("");

  const handleAddCustom = () => {
    if (customText.trim()) {
      onChangeCarMake(customText.trim());
      setCustomText("");
      setShowInput(false);
    }
  };

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
  if (searchInput && searchInput !== "") {
    filteredMakes = filteredMakes.filter((make) =>
      make.make_display.toLowerCase().includes(searchInput.toLowerCase())
    );
  } else if (!carState.carDetails.make) {
    // If no make is selected and no search, show only first 5 makes
    filteredMakes = filteredMakes?.slice(0, 8);
  } else {
    // If a make is selected and no search, show no makes
    filteredMakes = [];
  }

  // useEffect(() => {
  //   if(slicedMakes.length === 0 && !isLoading) {
  //     setSearchParams({page: 1})
  //   }
  // }, [slicedMakes, isLoading]);

  function onChangeCarMake(value) {
    dispatch({
      type: "UPDATE_FIELD",
      section: "carDetails",
      field: "make",
      value,
    });
    dispatch({
      type: "UPDATE_FIELD",
      section: "carDetails",
      field: "variant",
      value: null,
    });
    // Clear search input when a make is selected
    setSearchInput("");
  }

  return (
    <MainLayout
      title="Car Make"
      subtitle="Pick The Make of Your Car"
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
          sx={{ backgroundColor: "white" }}
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

          {carState.carDetails.make && !searchInput && (
            <Box
              sx={{
                border: `2px solid ${colors.buttoncolor}`,
                borderRadius: 2,
                p: 1.5,
                mb: 3,
                backgroundColor: `${colors.buttoncolor}15`,
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                minHeight: "60px",
              }}
            >
              <img
                loading="lazy"
                src={`https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/optimized/${carState.carDetails.make.toLowerCase()}.png`}
                alt={`${carState.carDetails.make} logo`}
                style={{ width: "35px", height: "35px", objectFit: "contain" }}
                onError={(e) => {
                  e.target.src =
                    "https://www.shutterstock.com/image-vector/car-logo-icon-emblem-design-600nw-473088037.jpg";
                }}
              />
              <Typography sx={{ fontFamily: "Inter", fontWeight: 500 }}>
                {carState.carDetails.make}
              </Typography>
            </Box>
          )}

          <Box
            sx={{
              height: carState.carDetails.make ? "200px" : "400px",
              overflowY: "auto",
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-track": {
                background: "#f1f1f1",
                borderRadius: "4px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#888",
                borderRadius: "4px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                background: "#555",
              },
            }}
          >
            <Grid container spacing={2}>
              {isLoading ? (
                <CircularProgress sx={{ mx: "auto", my: 5 }} size={24} />
              ) : searchInput && filteredMakes.length === 0 ? (
                <Box sx={{ width: "100%", textAlign: "center", py: 4 }}>
                  <Typography sx={{ fontFamily: "Inter", color: "#666" }}>
                    No car makes found matching your search
                  </Typography>
                </Box>
              ) : (
                filteredMakes.map((brand, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box
                      onClick={() => onChangeCarMake(brand.make_display)}
                      sx={{
                        border: `2px solid ${
                          carState.carDetails.make === brand.make_display
                            ? colors.buttoncolor
                            : "#D9D9D9"
                        }`,
                        borderRadius: 2,
                        p: 1.5,
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        backgroundColor:
                          carState.carDetails.make === brand.make_display
                            ? `${colors.buttoncolor}15`
                            : "white",
                        "&:hover": {
                          borderColor: colors.buttoncolor,
                          backgroundColor: `${colors.buttoncolor}15`,
                        },
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        minHeight: "60px",
                      }}
                    >
                      <img
                        src={`https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/optimized/${brand.make_display.toLowerCase()}.png`}
                        alt={`${brand.make_display} logo`}
                        style={{
                          width: "35px",
                          height: "35px",
                          objectFit: "contain",
                        }}
                        onError={(e) => {
                          e.target.src =
                            "https://www.shutterstock.com/image-vector/car-logo-icon-emblem-design-600nw-473088037.jpg";
                        }}
                      />
                      <Typography sx={{ fontFamily: "Inter", fontWeight: 500 }}>
                        {brand.make_display}
                      </Typography>
                    </Box>
                  </Grid>
                ))
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
              disabled={!carState.carDetails.make}
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
                if (carState.carDetails.make) {
                  navigate("../variant");
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
