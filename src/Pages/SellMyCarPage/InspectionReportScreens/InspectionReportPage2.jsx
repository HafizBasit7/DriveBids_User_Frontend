import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import MainLayout from "../../../Layouts/MainLayout";
import InspectionReportComponent from "../../../Components/SellMyCarComponents/InspectionReportComponent";
import { useCar } from "../../../context/car.context";
import { essentialsChecks } from "../../../utils/constants";
import toast from "react-hot-toast";
import { useEffect } from "react";

const InspectionReportPage2 = () => {
  const navigate = useNavigate();
  const { carState, dispatch } = useCar();
  useEffect(() => {
    if (!carState?.regNo) {
      navigate("/ad");
    }
  }, [carState, navigate]);
  function handleSelectTest(field, value) {
    dispatch({
      type: "UPDATE_FIELD",
      section: "carInspectionReport",
      subSection: "essentialChecks",
      field: field,
      value,
    });
  }

  return (
    <MainLayout
      title="Inspection Report"
      subtitle="Key Features & Condition"
      buttonText="Back"
      onClick={() => navigate("../inspection-1")}
    >
      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontSize: 30 }}
      >
        Step <span style={{ color: "#007bff" }}>2</span> of 3
      </Typography>

      <Typography
        textAlign="center"
        mt={1}
        mb={3}
        sx={{
          fontSize: 14,
          color: "#666",
          fontFamily: "Inter",
          fontStyle: "italic",
        }}
      >
        Please ensure all sections are completed for a comprehensive inspection
        report
      </Typography>

      <InspectionReportComponent
        title="Essential Checks"
        subtitle="The functionality of  your car's headlights, fog lights, and side lights to ensure safety."
        tests={essentialsChecks}
        selectedValues={carState.carInspectionReport?.essentialChecks ?? {}}
        onChange={handleSelectTest}
        onNext={() => {
          const essentialChecks =
            carState.carInspectionReport?.essentialChecks || {};
          const missingFields = Object.entries(essentialChecks)
            .filter(([_, value]) => value === null || value === undefined)
            .map(
              ([key]) =>
                "- " +
                key
                  .replace(/([A-Z])/g, " $1") // insert space before capital letters
                  .replace(/^./, (str) => str.toUpperCase()) // capitalize first letter
            );

          if (missingFields.length === 0) {
            navigate("../inspection-3");
          } else {
            toast.error(
              `Please fill the following fields:\n${missingFields.join("\n")}`
            );
          }
        }}
      />
    </MainLayout>
  );
};

export default InspectionReportPage2;
