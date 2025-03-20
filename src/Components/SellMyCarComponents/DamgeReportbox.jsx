import { Box, Typography, Button } from "@mui/material";
import colors from "../../Style/color";
import greyDent from "../../assets/SVG/greyDent.svg";
import greyRust from "../../assets/SVG/GreyRust.svg";
import greyScratch from "../../assets/SVG/greyscratch.svg";

const DamageReportBox = ({ title, description, imgSketch, onNext }) => (
  <Box
    sx={{
      width: { xs: "90%", md: "80%" },
      margin: "auto",
      mt: 3,
      p: 3,
      borderRadius: 2,
      backgroundColor: "white",
      border: "1px solid #D9D9D9",
      display: "flex",
      flexDirection: "column",
      gap: 3,
    }}
  >
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: 3,
        px: 4,
      }}
    >
      <Box>
        <Typography sx={{ fontFamily: "Outfit", fontWeight: 900, fontSize: 30, mb: 2 }}>
          {title}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Outfit",
            fontWeight: 500,
            fontSize: 17,
            mb: 2,
          }}
        >
          {description}
        </Typography>

        <Button
         
          sx={{
            textTransform: "none",
            fontFamily: "Inter",
            backgroundColor: colors.buttoncolor,
            fontWeight: 600,
            borderColor: colors.buttoncolor,
            color: "white",
            "&:hover": {
              borderColor: colors.buttoncolor,
              backgroundColor: `${colors.buttoncolor}10`,
            },
          }}
        >
          Damage Labels
        </Button>

        {/* SVGs with Labels */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: 2,
            mt: 3,
          }}
        >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <img src={greyScratch} alt="Grey Scratch" style={{ width: 30, height: 30 }} />
            <Typography sx={{ fontFamily: "Outfit", fontSize: 16 ,fontWeight:600 }}>Scratch</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <img src={greyDent} alt="Grey Dent" style={{ width: 30, height: 30 }} />
            <Typography sx={{ fontFamily: "Outfit", fontSize: 16,fontWeight:600 }}>Dent</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <img src={greyRust} alt="Grey Rust" style={{ width: 30, height: 30 }} />
            <Typography sx={{ fontFamily: "Outfit", fontSize: 16,fontWeight:600 }}>Rust</Typography>
          </Box>
        
        </Box>
      </Box>

      <Box
        sx={{
          border: "1px dashed #B4B4B4",
          borderRadius: 2,
          textAlign: "center",
          p: 3,
          width: { xs: "100%", lg: 380 },
          height: { xs: "auto", md: 280 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={imgSketch}
          alt="Car Sketch"
          style={{ maxWidth: "100%", margin: "auto" }}
        />
        <Typography
          sx={{
            fontFamily: "Inter",
            fontSize: 15,
            mt: 2,
            color: "#000",
            textAlign: "center",
          }}
        >
          Upload an Image
        </Typography>
        <Typography
          sx={{
            fontFamily: "Inter",
            fontSize: 12,
            mt: 1,
            color: "#000",
            textAlign: "center",
          }}
        >
          Supports: PNG, JPG, JPEG
        </Typography>
      </Box>
    </Box>

    <Box display="flex" justifyContent="flex-end">
      <Button
        
        sx={{
          textTransform: "none",
          minWidth: "120px",
          height: "40px",
          fontFamily: "Inter",
          color:"white",
          mr: 4,
          backgroundColor: colors.buttoncolor,
        }}
        onClick={onNext}
      >
        Next Step
      </Button>
    </Box>
  </Box>
);

export default DamageReportBox;
