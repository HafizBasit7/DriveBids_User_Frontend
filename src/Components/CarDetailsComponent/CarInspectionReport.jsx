import { Box, Typography, Button, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import colors from "../../Style/color";
import Scratch from "../../assets/SVG/ScratchSvg.svg";
import Dent from "../../assets/SVG/dentsvg.svg";
import Rust from "../../assets/SVG/rust.svg";
import img from "../../assets/Png/prseller.png";
import CarInspectionModal from "../Modals/CarinspectionReport";
import DamageModal from "../Modals/DamageModal";

import imgsketch1 from "../../assets/SVG/frontdamage.svg";
import imgsketch2 from "../../assets/SVG/backdamage.svg";
import imgsketch3 from "../../assets/SVG/leftdamage.svg";
import imgsketch4 from "../../assets/SVG/rightdamage.svg";

import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../context/auth.context";
import { useQuery } from "@tanstack/react-query";
import { getCarDamageReport } from "../../api/calls/car";
import { Link } from "react-router-dom";

const images = [imgsketch1, imgsketch4, imgsketch3, imgsketch2];
const views = ["Front View", "Right View", "Left Side View", "Rear View"];

const CarInspectionReport = ({ car }) => {
  const [open, setOpen] = useState(false);
  const [openDamage, setOpenDamage] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { authState } = useAuth();
  const imageRef = useRef();

  const selectedDamage = useRef();

  const { data, isLoading } = useQuery({
    queryKey: ["damageReport", car._id],
    queryFn: () => getCarDamageReport(car._id),
    refetchOnMount: false,
  });

  const damageReport = data?.data.damageReport.damageReport;
  const currentDamageReport = (damageReport || []).filter(
    (val) => val.imageIndex === currentIndex
  );

  const isMyCar = car.user._id === authState.user._id;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    setImageLoaded(false);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const damages = [
    { name: "Scratches", colored: Scratch },
    { name: "Dents/Cracks", colored: Dent },
    { name: "Rust", colored: Rust },
  ];

  const getPoistion = (x, y) => {
    const bounds = imageRef.current.getBoundingClientRect();
    const absoluteX = x * bounds.width - 10;
    const absoluteY = y * bounds.height - 10;
    return { left: absoluteX, top: absoluteY };
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
      {!isMyCar && (
        <Box
          sx={{
            p: 0.5,
            borderRadius: 2,
            border: "1px solid #ddd",
            display: "flex",
            flexDirection: "column", // Stack items vertically
            alignItems: "flex-end", // Align items to the end (right side)
            pl: 2,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            {/* First Row: Profile Info & Image */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              {/* Seller Info */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.2 }}>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontFamily: "Inter",
                    textTransform: "uppercase",
                    fontSize: 18,
                  }}
                >
                  {car.user.name}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontFamily: "Inter",
                    fontSize: 14,
                    color: "#6F6F6F",
                  }}
                >
                  {car.user.type === "individual" ? "Private Seller" : "Trader"}
                </Typography>
              </Box>

              {/* Profile Image */}
              <Box
                component="img"
                src={
                  car.user.imgUrl ||
                  "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                }
                alt="Seller"
                sx={{
                  width: 45,
                  height: 45,
                  borderRadius: 2,
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* Second Row: View All Report & Accept Bid */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              {/* View All Report */}
              <Link
                to={`/cars/${car.user._id}`}
                underline="hover"
                style={{
                  fontSize: 14,
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  color: "#0056D2",
                  cursor: "pointer",
                  fontWeight: 500,
                  textDecoration: "underline",
                  fontFamily: "Inter",
                  mt: 1,
                }}
              >
                <VisibilityIcon fontSize="small" />
                View Seller's Other Ads
              </Link>
            </Box>
          </Box>
        </Box>
      )}

      {/* Car Inspection Report */}
      <Box sx={{ p: 2, borderRadius: 2, border: "1px solid #ddd" }}>
        <Typography variant="h6" sx={{ fontWeight: 500, fontFamily: "Inter" }}>
          Car Inspection Report
        </Typography>
        <Box
          underline="hover"
          sx={{
            fontSize: 14,
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            color: "#0056D2",
            cursor: "pointer",
            fontWeight: 500,
            textDecoration: "underline",
            fontFamily: "Inter",
            mt: 1,
          }}
          onClick={() => setOpen(true)}
        >
          <VisibilityIcon fontSize="small" />
          View Detailed Report
        </Box>
      </Box>

      {/* Damage Report */}
      <Box sx={{ p: 2, borderRadius: 2, border: "1px solid #ddd" }}>
        <Typography variant="h6" sx={{ fontWeight: 500, fontFamily: "Inter" }}>
          Damage Report
        </Typography>

        {/* Damage Types */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            mb: 2,
            mt: 2,
            alignItems: "flex-start",
          }}
        >
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
          {!damageReport ? (
            <Typography
              sx={{
                fontSize: 14,
                color: "#666",
                fontFamily: "Inter",
                fontStyle: "italic",
                p: 2,
              }}
            >
              No damage has been reported for this vehicle.
            </Typography>
          ) : (
            <>
              <Typography
                variant="body1"
                sx={{ fontSize: 13, fontWeight: 600 }}
              >
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
                <IconButton
                  sx={{ color: "#2F61BF", fontSize: 28 }}
                  onClick={handlePrev}
                >
                  <ArrowBackIosNewIcon fontSize="small" />
                </IconButton>

                <Box
                  sx={{ width: "200px", height: "auto", position: "relative" }}
                >
                  <img
                    ref={imageRef}
                    src={images[currentIndex]}
                    alt="Car View"
                    width="100%"
                    onLoad={() => {
                      setImageLoaded(true);
                    }}
                  />
                  {imageLoaded &&
                    currentDamageReport.map((val, index) => {
                      const iconSrc = damages.find(
                        (valIcon) => valIcon.name === val.damageType
                      ).colored;
                      return (
                        <img
                          key={index}
                          onClick={(e) => {
                            e.stopPropagation();
                            selectedDamage.current = val;
                            setOpenDamage(true);
                          }}
                          src={iconSrc}
                          style={{
                            width: 30,
                            height: 30,
                            position: "absolute",
                            cursor: "pointer",
                            ...getPoistion(val.x, val.y),
                          }}
                        />
                      );
                    })}
                </Box>

                <IconButton
                  sx={{ color: "#2F61BF", fontSize: 28 }}
                  onClick={handleNext}
                >
                  <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
              </Box>

              {/* No Damage Text for Current View */}
              {currentDamageReport.length === 0 && (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mt: 2,
                    gap: 1,
                  }}
                >
                  <InfoOutlinedIcon
                    sx={{
                      color: "#999",
                      fontSize: 24,
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: 14,
                      color: "#999",
                      fontFamily: "Inter",
                      fontStyle: "italic",
                    }}
                  >
                    No damage reported for {views[currentIndex]}
                  </Typography>
                </Box>
              )}

              {/* Dots */}
              <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                {images.map((_, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: 10,
                      height: 10,
                      backgroundColor:
                        index === currentIndex ? "#2F61BF" : "#D3D3D3",
                      borderRadius: "50%",
                    }}
                  />
                ))}
              </Box>
            </>
          )}
        </Box>
      </Box>

      {/* Modals */}
      <CarInspectionModal
        car={car._id}
        open={open}
        onClose={() => setOpen(false)}
      />
      <DamageModal
        damage={selectedDamage.current}
        open={openDamage}
        onClose={() => setOpenDamage(false)}
      />
    </Box>
  );
};

export default CarInspectionReport;
