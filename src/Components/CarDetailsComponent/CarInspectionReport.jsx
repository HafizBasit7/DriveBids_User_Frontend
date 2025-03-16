import { Box, Typography, Link, Button, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import colors from "../../Style/color";
import Scratch from "../../assets/SVG/ScratchSvg.svg";
import Dent from "../../assets/SVG/dentsvg.svg";
import Rust from "../../assets/SVG/rust.svg";
import CarReportSvg from "../../assets/SVG/carreportsvg.svg";
import CarInspectionModal from "../Modals/CarinspectionReport";
import { useState } from "react";
import DamageModal from "../Modals/DamageModal";

const CarInspectionReport = () => {
  const [open, setOpen] = useState(false);
  const [openDamage, setOpenDamage] = useState(false);


  return (
    <Box
      sx={{
        width: "100%",
        p: 1,
        borderRadius: 2,
        backgroundColor: "white",
        fontFamily: "Inter, sans-serif",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        minHeight: "100%",
      }}
    >
      {/* Car Inspection Report */}
      <Box sx={{ p: 2, borderRadius: 2, border: "1px solid #ddd" }}>
        <Typography variant="h6" sx={{ fontWeight: 500, fontFamily: "Inter" }}>
          Car Inspection Report
        </Typography>
        <Link
          href="#"
          underline="hover"
          sx={{
            fontSize: 15,
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            color: "#0056D2",
            fontWeight: 500,
            textDecoration: "underline",
            fontFamily: "Inter",
            mt: 1,
          }}
          onClick={() => setOpen(true)}
        >
          <VisibilityIcon fontSize="small" />
          View Detailed Report
        </Link>
      </Box>

      <Box sx={{ p: 2, borderRadius: 2, border: "1px solid #ddd" }}>
        <Typography variant="h6" sx={{ fontWeight: 500, fontFamily: "Inter" }}    >
          Damage Report
        </Typography>

        <Button
          variant="contained"
          size="small"
          sx={{
            mb: 2,
            backgroundColor: colors.buttoncolor,
            borderRadius: 2,
            fontWeight: 400,
            fontFamily: "Inter",
            fontSize:10,
            p:1,
            mt:1,
            fontFamily: "Inter",
          }}
          onClick={() => setOpenDamage(true)}
        >
          Damage Labels
        </Button>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 2, alignItems: "flex-start" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1,fontFamily: "Inter", }}>
            <img src={Scratch} alt="Scratch" width={25} />
            <Typography variant="body2">Scratches</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <img src={Dent} alt="Dent" width={25} />
            <Typography variant="body2">Dents/Cracks</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <img src={Rust} alt="Rust" width={25} />
            <Typography variant="body2">Rust</Typography>
          </Box>
        </Box>

        {/* Damage Image Section with Slider */}
        <Box
      sx={{
        border: "2px dashed #2F61BF",
        borderRadius: 2,
        p: 3,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        width: "100%",
      }}
    >
      {/* Title */}
      <Typography variant="body1" sx={{ fontSize: 16, fontWeight: 600 }}>
        Click the label to reveal the damage report
      </Typography>
      <Typography variant="body1"  sx={{ color: "#2F61BF", cursor: "pointer",fontWeight: 500,fontFamily:"Inter" }}>
        Front View
      </Typography>

      {/* Image and Navigation Controls */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
          mt: 2,
          position: "relative",
        }}
      >
        <IconButton sx={{ color: "#2F61BF", fontSize: 28 }}>
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>

        {/* Car Image */}
        <Box sx={{ width: "200px", height: "auto" }}>
          <img src={CarReportSvg} alt="Car Front View" width="100%" />
        </Box>

        <IconButton sx={{ color: "#2F61BF", fontSize: 28 }}>
          <ArrowForwardIosIcon fontSize="small"  />
        </IconButton>
      </Box>

      {/* Pagination Dots */}
      <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
        {[...Array(4)].map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 10,
              height: 10,
              backgroundColor: index === 0 ? "#2F61BF" : "#D3D3D3",
              borderRadius: "50%",
            }}
          />
        ))}
      </Box>
    </Box>
      </Box>
      <CarInspectionModal open={open} onClose={() => setOpen(false)}/>
      <DamageModal open={openDamage} onClose={() => setOpenDamage(false)} />

    </Box>
  );
};

export default CarInspectionReport;
