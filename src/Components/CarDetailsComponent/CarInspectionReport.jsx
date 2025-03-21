import { Box, Typography, Link, Button, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import colors from "../../Style/color";
import Scratch from "../../assets/SVG/ScratchSvg.svg";
import Dent from "../../assets/SVG/dentsvg.svg";
import Rust from "../../assets/SVG/rust.svg";
import img from "../../assets/Png/prseller.png";
import CarInspectionModal from "../Modals/CarinspectionReport";
import DamageModal from "../Modals/DamageModal";

import CarReport1 from "../../assets/SVG/carreportsvg.svg";
import CarReport2 from "../../assets/SVG/exteriorimg6.svg";
import CarReport3 from "../../assets/SVG/exteriorimg2.svg";
import CarReport4 from "../../assets/SVG/exteriorimg3.svg";

import { useState } from "react";

const images = [CarReport1, CarReport2, CarReport3, CarReport4];
const views = ["Front View", "Back View", "Right Side View", "Left Side View"];

const CarInspectionReport = () => {
  const [open, setOpen] = useState(false);
  const [openDamage, setOpenDamage] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

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
        gap: 1,
        minHeight: "100%",
      }}
    >
      {/* Seller Info */}
      <Box sx={{ p: 1, borderRadius: 2, border: "1px solid #ddd", display: "flex", justifyContent: "space-between", alignItems: "center", pl: 2 }}>
        <Box>
          <Typography sx={{ fontWeight: 500, fontFamily: "Inter", textTransform: "uppercase", fontSize: 18 }}>
            Adam Williams
          </Typography>
          <Typography sx={{ fontWeight: 500, fontFamily: "Inter", fontSize: 14, color: "#6F6F6F" }}>
            Private Seller
          </Typography>
          <Link
            href="#"
            underline="hover"
            sx={{
              fontSize: 13,
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
            View All Car
          </Link>
        </Box>
        <Box component="img" src={img} alt="Seller" sx={{ width: 80, height: 80, borderRadius: 2, objectFit: "cover" }} />
      </Box>

      {/* Car Inspection Report */}
      <Box sx={{ p: 2, borderRadius: 2, border: "1px solid #ddd" }}>
        <Typography variant="h6" sx={{ fontWeight: 500, fontFamily: "Inter" }}>
          Car Inspection Report
        </Typography>
        <Link
          href="#"
          underline="hover"
          sx={{
            fontSize: 14,
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

      {/* Damage Report */}
      <Box sx={{ p: 2, borderRadius: 2, border: "1px solid #ddd" }}>
        <Typography variant="h6" sx={{ fontWeight: 500, fontFamily: "Inter" }}>
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
            fontSize: 10,
            p: 1,
            mt: 1,
          }}
          onClick={() => setOpenDamage(true)}
        >
          Damage Labels
        </Button>

        {/* Damage Types */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 2, alignItems: "flex-start" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
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

        {/* Image Slider */}
        <Box
          sx={{
            border: "2px dashed #2F61BF",
            borderRadius: 2,
            p: 2,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            width: "100%",
          }}
        >
          <Typography variant="body1" sx={{ fontSize: 13, fontWeight: 600 }}>
            Click the label to reveal the damage report
          </Typography>

          {/* Dynamic View Name */}
          <Typography
            variant="body1"
            sx={{
              color: "#2F61BF",
              cursor: "pointer",
              fontWeight: 500,
              fontFamily: "Inter",
              fontSize: 12,
              mt: 1,
            }}
          >
            {views[currentIndex]}
          </Typography>

          {/* Slider */}
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
            <IconButton sx={{ color: "#2F61BF", fontSize: 28 }} onClick={handlePrev}>
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>

            <Box sx={{ width: "200px", height: "auto" }}>
              <img src={images[currentIndex]} alt="Car View" width="100%" />
            </Box>

            <IconButton sx={{ color: "#2F61BF", fontSize: 28 }} onClick={handleNext}>
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Dots */}
          <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
            {images.map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: 10,
                  height: 10,
                  backgroundColor: index === currentIndex ? "#2F61BF" : "#D3D3D3",
                  borderRadius: "50%",
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>

      {/* Modals */}
      <CarInspectionModal open={open} onClose={() => setOpen(false)} />
      <DamageModal open={openDamage} onClose={() => setOpenDamage(false)} />
    </Box>
  );
};

export default CarInspectionReport;
