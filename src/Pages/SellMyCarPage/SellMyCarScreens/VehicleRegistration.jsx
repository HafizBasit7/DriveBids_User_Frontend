import { Box, Typography, Stack, Button, TextField } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/Mainlayout";
import colors from "../../../Style/color";
import { useCar } from "../../../context/car.context";
import toast from "react-hot-toast";

const VehicleRegistration = () => {
  const navigate = useNavigate();
  const { carState, dispatch } = useCar();

  function onChangeTextReg(value) {
    dispatch({
      type: 'UPDATE_FIELD',
      field: 'regNo',
      value,
    });
  }

  function nextPage() {
    if (!carState.regNo) {
      toast.error('Enter registration number')
      return;
    } else {
      navigate("..");
    }
  }

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
            value={carState.regNo}
            onChange={(e) => onChangeTextReg(e.target.value)}
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
              onClick={nextPage}
            >
              Sell My Car
            </Button>
          </Box>
        </Stack>
      </Box>
    </MainLayout>
  );

  return <Outlet />;
};

export default VehicleRegistration;
