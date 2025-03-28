import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import colors from "../../../Style/color";
import AdsTiltleandDescrip from "../../../Components/SellMyCarComponents/AdsTiltleandDescrip";
import { useCar } from "../../../context/car.context";
import toast from "react-hot-toast";

const AdsDescription = () => {
  const navigate = useNavigate();

  const {carState, dispatch, draftSave} = useCar();
    
    function onCangeCarDetails (field, value) {
      dispatch({
        type: 'UPDATE_FIELD',
        section: 'carDetails',
        field: field,
        value,
      });
    };
  
    const saveCarDraft = () => {
      toast.promise(async () => {
        await draftSave('carDetails');
        navigate('..')
      }, {
        loading: 'Saving draft',
        error: (error) => error.message,
        success: 'Draft saved'
      });
    };

  return (
    <MainLayout title="Ad Description"
    subtitle="Enter Ad Title & Description"
    buttonText="Back"
    onClick={() => navigate("../accident")}>
      <Box width="100%" >
       

        <Box  zIndex={2}>
         

          <Typography
            variant="h4"
            fontWeight={600}
            textAlign="center"
            mt={3}
            sx={{ fontFamily: "Inter", fontSize: 30 }}
          >
            Step <span style={{ color: colors.buttoncolor }}>14</span> of 14
          </Typography>

          <Box width={{ xs: "95%", sm: "80%", md: "70%" }} mx="auto" mt={3}>
            <AdsTiltleandDescrip onFinish={saveCarDraft} onChange={onCangeCarDetails} title={carState.carDetails.title} description={carState.carDetails.description} onNext={() => navigate("/post-ad")} />
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default AdsDescription;
