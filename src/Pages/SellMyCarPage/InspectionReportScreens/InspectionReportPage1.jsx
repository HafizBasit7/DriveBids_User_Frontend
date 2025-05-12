import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import MainLayout from "../../../Layouts/MainLayout";
import InspectionReportComponent from "../../../Components/SellMyCarComponents/InspectionReportComponent";
import {dynamicOperations} from "../../../utils/constants";
import {useCar} from "../../../context/car.context";

const InspectionReportPage1 = () => {
  const navigate = useNavigate();
  const {carState, dispatch} = useCar();


  function handleSelectTest (field, value) {
    dispatch({
      type: "UPDATE_FIELD",
      section: 'carInspectionReport',
      subSection: 'dynamicOperations',
      field: field,
      value,
    });
  };

  
  return (
    <MainLayout  title="Inspection Report"
    subtitle="Key Features & Condition"
    buttonText="Back"
    onClick={() => navigate("..")}>
      

      <Typography fontWeight={600} textAlign="center" mt={3} sx={{ fontSize: 30 }}>
        Step <span style={{ color: "#007bff" }}>1</span> of 3
      </Typography>

      <Typography 
        textAlign="center" 
        mt={1} 
        mb={3} 
        sx={{ 
          fontSize: 14, 
          color: "#666",
          fontFamily: "Inter",
          fontStyle: "italic"
        }}
      >
        Please ensure all sections are completed for a comprehensive inspection report
      </Typography>

      <InspectionReportComponent
        title="Dynamic Operations"
        subtitle="Your car's acceleration, braking efficiency, steering precision, and overall handling stability"
        tests={dynamicOperations}
        selectedValues={(carState.carInspectionReport?.dynamicOperations ?? {})}
        onChange={handleSelectTest}
        onNext={() => navigate("../inspection-2")}
      />
    </MainLayout>
  );
};

export default InspectionReportPage1;
