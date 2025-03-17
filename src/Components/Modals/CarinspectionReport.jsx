import { Modal, Box, Typography, Button } from "@mui/material";
import DealsBanner from "../HomePageComponents/DealBanner";
import ReportButton from "../ButtonComponent/ReportButton";
import Ok from "../../assets/SVG/ok.svg";
import Rattntion from "../../assets/SVG/Rattention.svg";
import Nottested from "../../assets/SVG/Nottested.svg";
import Rimmediate from "../../assets/SVG/Requireimmediat.svg";

const CarInspectionModal = ({ open, onClose }) => {
  const indicators = [
    { icon: Ok, label: "Ok" },
    { icon: Rattntion, label: "Requires Some Attention" },
    { icon: Nottested, label: "Not Tested" },
    { icon: Rimmediate, label: "Requires Immediate Attention" },
  ];

  const sections = [
    { title: "Dynamic Operations", items: [
      { icon: Ok, label: "Brake Efficiency Test" },
      { icon: Ok, label: "Sat Nav Power" },
      { icon: Ok, label: "Hand Brake Test" },
      { icon: Ok, label: "Reverse Clutch Slip Test" },
      { icon: Nottested, label: "Sat Nav Power" },
      { icon: Rattntion, label: "Ice Power" },
      { icon: Rattntion, label: "Suspension Ride Height" },
      { icon: Rimmediate, label: "Aircon Power" },
    ]},
    { title: "Essential Checks", items: [
      { icon: Ok, label: "Head Lights" },
      { icon: Ok, label: "Brake Lights" },
      { icon: Ok, label: "Fog Lights" },
      { icon: Nottested, label: "Wiper" },
      { icon: Nottested, label: "Brake Lights" },
      { icon: Rattntion, label: "Indicators" },
      { icon: Rimmediate, label: "Electric Windows" },
      { icon: Rimmediate, label: "Electric Mirrors" },
    ]},
    { title: "Interior Checks", items: [
      { icon: Ok, label: "Engine Management Light" },
      { icon: Ok, label: "ABS Warning Light" },
      { icon: Ok, label: "Brake Wear Indicator Light" },
      { icon: Rattntion, label: "Oil Warning Light" },
      { icon: Nottested, label: "Airbag Warning Light" },
      { icon: Rimmediate, label: "Glow Plug Light" },
      { icon: Rimmediate, label: "Floor Mats" },
      { icon: Ok, label: "Sun Visor" },
    ]},
  ];
  
  return (
   <Modal open={open} onClose={onClose}>
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
      maxHeight: { xs: "90vh", sm: "80vh", md: "auto" }, // Limit height on small screens
      overflowY: { xs: "auto", sm: "auto", md: "visible" }, // Enable scrolling on xs/sm
      scrollbarWidth: "none", // Hide scrollbar for Firefox
      "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar for Webkit browsers
    }}
  >
    <DealsBanner title="Car Inspection Report" subtitle="" buttonText="Close" />

    <Box
  sx={{
    display: "flex",
    flexDirection: "column",
    alignItems: "start", // Center-align on small screens
    gap: { xs: 1, sm: 2 }, // Reduce gap on small screens
    p: { xs: 1, sm: 2 }, // Adjust padding for better spacing
    border: "1px solid #ddd",
    m: { xs: 1, sm: 2 }, // Reduce margin on small screens
    borderRadius: 2,
    width: "100%", // Ensure it adjusts to the screen width
  }}
>
  <ReportButton title="Indicator" />
  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: { xs: "start", sm: "space-betweeen" }, // Center on small screens
      gap: { xs: 2, sm: 10 }, // Adjust spacing for better fit
      width: "100%", // Take full width
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
