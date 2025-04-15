import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import MainLayout from "../../../Layouts/MainLayout";
import InspectionReportComponent from "../../../Components/SellMyCarComponents/InspectionReportComponent";
import { useCar } from "../../../context/car.context";
import { essentialsChecks } from "../../../utils/constants";

const InspectionReportPage2 = () => {
  const navigate = useNavigate();
  const {carState, dispatch} = useCar();
  
  
  function handleSelectTest (field, value) {
    dispatch({
      type: "UPDATE_FIELD",
      section: 'carInspectionReport',
      subSection: 'essentialChecks',
      field: field,
      value,
    });
  };
 
  return (
    <MainLayout  title="Inspection Report"
    subtitle="Key Features & Condition"
    buttonText="Back"
    onClick={() => navigate("../inspection-1")}>
  

      <Typography fontWeight={600} textAlign="center" mt={3} sx={{ fontSize: 30 }}>
        Step <span style={{ color: "#007bff" }}>2</span> of 3
      </Typography>

      <InspectionReportComponent
        title="Essential Checks"
        subtitle="The functionality of  your car’s headlights, fog lights, and side lights to ensure safety."
        tests={essentialsChecks}
        selectedValues={(carState.carInspectionReport?.essentialChecks ?? {})}
        onChange={handleSelectTest}
        onNext={() => navigate("../inspection-3")}
      />
    </MainLayout>
  );
};

export default InspectionReportPage2;
