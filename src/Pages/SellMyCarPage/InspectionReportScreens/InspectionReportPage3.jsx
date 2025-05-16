import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import MainLayout from "../../../Layouts/MainLayout";
import InspectionReportComponent from "../../../Components/SellMyCarComponents/InspectionReportComponent";
import { useCar } from "../../../context/car.context";
import { interiorChecks } from "../../../utils/constants";
import toast from "react-hot-toast";
import { useEffect } from "react";

const InspectionReportPage3 = () => {
  const navigate = useNavigate();
  const { carState, dispatch, draftSave } = useCar();

  useEffect(() => {
    if (!carState?.regNo) {
      navigate("/ad");
    }
  }, [carState, navigate]);
  function handleSelectTest(field, value) {
    dispatch({
      type: "UPDATE_FIELD",
      section: "carInspectionReport",
      subSection: "interiorChecks",
      field: field,
      value,
    });
  }

  function handleOnSave() {
    toast.promise(
      async () => {
        await draftSave("carInspectionReport");
        navigate("/ad/post");
      },
      {
        loading: "Saving draft",
        error: (error) => error.message,
        success: "Draft is saved",
      }
    );
  }

  return (
    <MainLayout
      title="Inspection Report"
      subtitle="Key Features & Condition"
      buttonText="Back"
      onClick={() => navigate("../inspection-2")}
    >
      <Typography
        fontWeight={600}
        textAlign="center"
        mt={3}
        sx={{ fontSize: 30 }}
      >
        Step <span style={{ color: "#007bff" }}>3</span> of 3
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
        title="Interior Checks"
        subtitle="Check the condition and functionality of your car's interior features including abs, dashboard, and indicators."
        tests={interiorChecks}
        selectedValues={carState.carInspectionReport?.interiorChecks ?? {}}
        onChange={handleSelectTest}
        onNext={() => {
          const interiorChecks =
            carState.carInspectionReport?.interiorChecks || {};
          const missingFields = Object.entries(interiorChecks)
            .filter(([_, value]) => value === null || value === undefined)
            .map(
              ([key]) =>
                "- " +
                key
                  .replace(/([A-Z])/g, " $1") // insert space before capital letters
                  .replace(/^./, (str) => str.toUpperCase()) // capitalize first letter
            );

          if (missingFields.length === 0) {
            handleOnSave();
          } else {
            toast.error(
              `Please fill the following fields:\n${missingFields.join("\n")}`
            );
          }
        }}
        save={true}
      />
    </MainLayout>
  );
};

export default InspectionReportPage3;
