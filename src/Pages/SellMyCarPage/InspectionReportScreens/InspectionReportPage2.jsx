import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import MainLayout from "../../../Layouts/MainLayout";
import DealsBanner from "../../../Components/HomePageComponents/DealBanner";
import InspectionReportComponent from "../../../Components/SellMyCarComponents/InspectionReportComponent";
import Ok from "../../../assets/SVG/ok.svg";
import Rattention from "../../../assets/SVG/Rattention.svg";
import Nottested from "../../../assets/SVG/Nottested.svg";
import Rimmediate from "../../../assets/SVG/Requireimmediat.svg";

const InspectionReportPage2 = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState({
    break_efficiency: "",
    hand_brake_test: "",
    static_gear_selection: "",
  });

  const handleSelection = (key, value) => {
    setSelected((prev) => ({ ...prev, [key]: value }));
  };

  const indicatorList = [
    { icon:Ok, label: "Ok" },
    { icon: Rattention , label: "Not Tested" },
    { icon: Nottested, label: "Requires Some Attention" },
    { icon: Rimmediate , label: "Requires Immediate Attention" },
  ];

  const testList = [
    {
      label: "Headlight",
      key: "headlight",
      options: [
        { label: "Ok", value: "ok" },
        { label: "Not Tested", value: "not_tested" },
        { label: "Needs Some Attention", value: "needs_attention" },
        { label: "Needs Immediate Attention", value: "immediate_attention" },
      ],
    },
    {
      label: "Sidelight",
      key: "sidelight",
      options: [
        { label: "Ok", value: "ok" },
        { label: "Not Tested", value: "not_tested" },
        { label: "Needs Some Attention", value: "needs_attention" },
        { label: "Needs Immediate Attention", value: "immediate_attention" },
      ],
    },
    {
      label: "Breaklight",
      key: "breaklight",
      options: [
        { label: "Ok", value: "ok" },
        { label: "Not Tested", value: "not_tested" },
      ],
    },
  ];

  return (
    <MainLayout>
      <Box width="100%">
        <DealsBanner
          title="Inspection Report"
          subtitle="Key Features & Condition"
          buttonText="Back to Home"
          onClick={() => navigate("/home")}
        />
      </Box>

      <Typography fontWeight={600} textAlign="center" mt={3} sx={{ fontSize: 30 }}>
        Step <span style={{ color: "#007bff" }}>2</span> of 3
      </Typography>

      <InspectionReportComponent
        title="Essential Checks"
        subtitle="The functionality of  your car’s headlights, fog lights, and side lights to ensure safety."
        indicators={indicatorList}
        tests={testList}
        selectedValues={selected}
        onChange={handleSelection}
        onNext={() => navigate("/inspection-report3")}
      />
    </MainLayout>
  );
};

export default InspectionReportPage2;
