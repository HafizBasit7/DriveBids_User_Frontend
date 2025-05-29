import { Modal, Box, Typography, Button } from "@mui/material";
import DealsBanner from "../HomePageComponents/DealBanner";
import ReportButton from "../ButtonComponent/ReportButton";
import Ok from "../../assets/SVG/ok.svg";
import Rattntion from "../../assets/SVG/Rattention.svg";
import Nottested from "../../assets/SVG/Nottested.svg";
import Rimmediate from "../../assets/SVG/Requireimmediat.svg";
import NotApplicable from "../../assets/SVG/notapplicable.svg";
import CloseIcon from "@mui/icons-material/Close";
import { useQuery } from "@tanstack/react-query";
import { getCarInspectionReport } from "../../api/calls/car";

//Dynamic operations
const dynamicOperations = [
  {name: "Brake Efficiency", target: "breakEfficiency"},
  {name: "Hand Brake Test", target: "handBrakeTest"},
  {name: "Static Gear Selection", target: "staticGearSelection"},
  {name: "Reverse Clutch Slip", target: "reverseClutchSlip"},
  {name: "Steering Noise", target: "steeringNoise"},
  {name: "Suspension Ride Height", target: "suspensionRideHeight"},
  {name: "Air Conditioning Power", target: "airconPower"},
  {name: "Sat Nav Power", target: "satNavPower"},
  {name: "Ice Power", target: "icePower"},
  {name: "Central Locking", target: "centralLocking"},
  {name: "Converitble Sunroof Electics", target: "convertibleSunroofElectrics"},
  {name: "Horn", target: "horn"}
];

const essentialsChecks = [
  {name: "Head lights", target: "headLight"},
  {name: "Brake lights", target: "brakeLight"},
  {name: "Side Lights", target: "sideLight"},
  {name: "Fog lights", target: "fogLight"},
  {name: "Indicators", target: "indicators"},
  {name: "Electric Windows", target: "electricWindows"},
  {name: "Electric Mirrors", target: "electricMirrors"},
  {name: "Wipers", target: "wipers"},
];

const interiorChecks = [
  {name: "Engine Management Light", target: "engineManagementLight"},
  {name: "Brake Wear Indicator Light", target: "breakWearIndicatorLight"},
  {name: "Abs Warning Light", target: "absWarningLight"},
  {name: "Oil Warning Light", target: "oilWarningLight"},
  {name: "Airbag warning light", target: "airbagWarningLight"},
  {name: "Glow plug light", target: "glowPlugLight"},
];

const CarInspectionModal = ({ open, onClose, car }) => {

  const {data, isLoading} = useQuery({
    queryKey: ['inspectionReport', car],
    queryFn: () => getCarInspectionReport(car),
    refetchOnMount: false,
  })

  const inspectionReport = data?.data?.inspectionReport;

  const indicators = [
    { icon: Ok, label: "OK" },
    { icon: Rattntion, label: "Requires Some Attention" },
    { icon: Nottested, label: "Not Tested" },
    { icon: Rimmediate, label: "Requires Immediate Attention" },
    { icon: NotApplicable, label: "Not Applicable" },
  ];


  const sections = [
    { title: "Dynamic Operations", items: Object.keys(inspectionReport?.dynamicOperations || []).map((val) => {
      const report = dynamicOperations.find(val2 => val2.target === val);
      const icon = indicators.find(val3 => val3.label === inspectionReport.dynamicOperations[val])
      return {icon: icon.icon, label: report.name};
    })},
    { title: "Essential Checks", items: Object.keys(inspectionReport?.essentialChecks || []).map((val) => {
      const report = essentialsChecks.find(val2 => val2.target === val);
      const icon = indicators.find(val3 => val3.label === inspectionReport.essentialChecks[val])
      return {icon: icon.icon, label: report.name};
    })},
    { title: "Interior Checks", items: Object.keys(inspectionReport?.interiorChecks || []).map((val) => {
      const report = interiorChecks.find(val2 => val2.target === val);
      const icon = indicators.find(val3 => val3.label === inspectionReport.interiorChecks[val])
      return {icon: icon.icon, label: report.name};
    })},
  ];


  
  return (
    <Modal
    open={open}
    onClose={onClose}
    disableScrollLock={false}
  >
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: 2,
        width: { xs: "90%", md: "80%" },
        p: 3,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        boxShadow: 24,
        maxHeight: { xs: "90vh", sm: "80vh", md: "90vh" },
        overflowY: "auto",
      }}
    >
      <DealsBanner 
        title="Car Inspection Report" 
        subtitle="" 
        buttonText="Close" 
        showClose 
        onClose={onClose}
        icon={<CloseIcon sx={{ cursor: 'pointer' }} onClick={onClose} />} 
      />
  
      {/* Indicators section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start", 
          gap: { xs: 1, sm: 2 }, 
          p: { xs: 1, sm: 2 }, 
          border: "1px solid #ddd",
          m: { xs: 1, sm: 2 }, 
          borderRadius: 2,
          width: "100%",
        }}
      >
        <ReportButton title="Indicator" />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "start", sm: "space-between" },
            gap: { xs: 2, sm: 1 }, 
            width: { xs: "75%", md: "100%" }, 
          }}
        >
          {indicators.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <img src={item.icon} alt={item.label} width={24} height={24} />
              <Typography sx={{ ml: 1, fontSize: { xs: "0.8rem", sm: "1rem" } }}>
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
  
      {/* Sections for Checks */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          p: 2,
        }}
      >
        {sections.map((section, index) => (
          <Box
            key={index}
            sx={{
              flex: 1,
              border: "1px solid #ddd",
              borderRadius: 2,
              p: 2,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "flex-start",
              maxHeight: "60vh", // control height
              overflowY: "auto", // scroll individual columns
            }}
          >
            <ReportButton title={section.title} />
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {section.items.map((item, idx) => (
                <Typography
                  key={idx}
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <img src={item.icon} alt={item.label} width={24} height={24} />
                  {item.label}
                </Typography>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  </Modal>
  
  );
};

export default CarInspectionModal;
