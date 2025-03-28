import { Box, Typography, Stack, Button, TextField } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/Mainlayout";
import colors from "../../../Style/color";

const VehicleRegistration = () => {
  const navigate = useNavigate();

  if (location.pathname.endsWith('/vehicle-register') || location.pathname.endsWith('/vehicle-register/')) {
    return (
      <MainLayout
        title="Vehicle Registration"
        subtitle="Enter Registration Number"
        buttonText="Back "
        onClick={() => navigate("/ad")}
      >
        <Box width="100%" sx={{ mt: 15, display: "flex", justifyContent: "center" }}>
          <Stack spacing={2} alignItems="flex-start" justifyContent="center" width="50%">
            <Typography variant="h6" sx={{fontFamily:"Inter", fontSize:25}}>Enter Your Vehicle Registration</Typography>
            <TextField 
              variant="outlined" 
              placeholder="A12345" 
              fullWidth 
            />
            <Box display="flex" justifyContent="flex-end" width="100%" mt={3}>
              <Button
                variant="contained"
                sx={{
                  fontFamily: "Inter",
                  borderRadius: 1.5,
                  width: 150,
                  py: 1,
                  backgroundColor: colors.buttoncolor,
                }}
                onClick={()=>navigate("..")}
              >
                Sell My Car
              </Button>
            </Box>
          </Stack>
        </Box>
      </MainLayout>
    );
  }

  return <Outlet />;
};

export default VehicleRegistration;
