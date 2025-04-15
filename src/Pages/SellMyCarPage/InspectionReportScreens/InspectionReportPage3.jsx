import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import MainLayout from "../../../Layouts/MainLayout";
import InspectionReportComponent from "../../../Components/SellMyCarComponents/InspectionReportComponent";
import { useCar } from "../../../context/car.context";
import { interiorChecks } from "../../../utils/constants";
import toast from "react-hot-toast";

const InspectionReportPage3 = () => {
  const navigate = useNavigate();
  const {carState, dispatch, draftSave} = useCar();

  function handleSelectTest (field, value) {
    dispatch({
      type: "UPDATE_FIELD",
      section: 'carInspectionReport',
      subSection: 'interiorChecks',
      field: field,
      value,
    });
  };

   function handleOnSave() {
    toast.promise(async () => {
      await draftSave('carInspectionReport')
      navigate("/ad/post")
    }, {
      loading: 'Saving draft',
      error: (error) => error.message,
      success: 'Draft is saved',
    })
  }

  return (
    <MainLayout   title="Inspection Report"
    subtitle="Key Features & Condition"
    buttonText="Back"
    onClick={() => navigate("../inspection-2")}>
     

      <Typography fontWeight={600} textAlign="center" mt={3} sx={{ fontSize: 30 }}>
        Step <span style={{ color: "#007bff" }}>3</span> of 3
      </Typography>

      <InspectionReportComponent
        title="Interior Checks"
        subtitle="The functionality of  your car’s headlights, fog lights, and side lights to ensure safety."
        tests={interiorChecks}
        selectedValues={(carState.carInspectionReport?.interiorChecks ?? {})}
        onChange={handleSelectTest}
        onNext={handleOnSave}
        save={true}
      />
    </MainLayout>
  );
};

export default InspectionReportPage3;
