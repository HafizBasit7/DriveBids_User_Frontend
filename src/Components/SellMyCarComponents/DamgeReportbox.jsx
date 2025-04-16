import { useRef, useState } from "react";
import { Box, Typography, Button, TextField, Link } from "@mui/material";
import colors from "../../Style/color";
import greyDent from "../../assets/SVG/greyDent.svg";
import greyRust from "../../assets/SVG/GreyRust.svg";
import greyScratch from "../../assets/SVG/greyscratch.svg";
import Dent from "../../assets/SVG/dentsvg.svg";
import Rust from "../../assets/SVG/rust.svg";
import Scratch from "../../assets/SVG/ScratchSvg.svg";
import imgsketch1 from "../../assets/SVG/frontdamage.svg";
import imgsketch2 from "../../assets/SVG/backdamage.svg";
import imgsketch3 from "../../assets/SVG/leftdamage.svg";
import imgsketch4 from "../../assets/SVG/rightdamage.svg";
import {useCar} from "../../context/car.context";
import toast from "react-hot-toast";
import {uploadImage} from "../../utils/upload";

const images = [
  imgsketch1,
  imgsketch4,
  imgsketch3,
  imgsketch2
];

const DamageReportBox = ({ title, description, carFacing, onNext, save = false }) => {
  const [selected, setSelected] = useState(null);
  const [damageDescription, setDamageDescription] = useState();
  const [selectedImage, setSelectedImage] = useState(null);
  const {carState, dispatch, draftSave} = useCar();

  const currentDamageReport = (carState.carDamageReport?.damageReport || []).filter(val => val.imageIndex === carFacing);


  const [showDamageForm, setShowDamageForm] = useState(false);
  const clickedPosition = useRef();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };
  const handleSketchClick = (e) => {
    const rect = e.target.getBoundingClientRect();  
    const x = e.clientX - rect.left;  
    const y = e.clientY - rect.top;   

    clickedPosition.current = { x, y };
    setShowDamageForm(true); 
  };
  
  const damages = [
    { name: "Scratches", grey: greyScratch, colored: Scratch },
    { name: "Dents/Cracks", grey: greyDent, colored: Dent },
    { name: "Rust", grey: greyRust, colored: Rust },
  ];

  const resetState = () => {
    setSelectedImage(null);
    setDamageDescription();
    setSelected();
  };

  const handleSave = () => {
    if(!selectedImage || !selected || !damageDescription) {
      return null;
    }

    setShowDamageForm(false);

    //Save image and insert damage with imgurl
    toast.promise(async () => {
      const imgUrl = await uploadImage(selectedImage);
      //Save new damage report
      dispatch({
        type: 'INSERT_DAMAGE',
        value: {
          imageIndex: carFacing,
          x: clickedPosition.current.x,
          y: clickedPosition.current.y,
          imageUrl: imgUrl,
          damageType: selected,
          description: damageDescription,
        },
      });

      resetState();
    }, {
      loading: 'Uploading image',
      error: e => e.message,
      success: 'Damage report added.'
    })
  };

  const saveDamageRpeort =  () => {
    toast.promise(async () => {
      await draftSave('carDamageReport');
    }, {
      loading: 'Saving draft',
      error: e => e.message,
      success: 'Draft saved',
    })
  };

  return (
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
          <Typography sx={{ fontFamily: "Outfit", fontWeight: 500, fontSize: 17, mb: 2 }}>
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

          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", gap: 2, mt: 3 }}>
        {damages.map((damage) => (
          <Box
            key={damage.name}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
            }}
            onClick={() => setSelected(damage.name)}
          >
            <img
              src={selected === damage.name ? damage.colored : damage.grey}
              alt={damage.name}
              style={{ width: 30, height: 30 }}
            />
            <Typography sx={{ fontFamily: "Outfit", fontSize: 16, fontWeight: 600 }}>
              {damage.name}
            </Typography>
          </Box>
        ))}
      </Box>
        </Box>

        {!showDamageForm ? (
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
              cursor: "pointer",
            }}
            // onClick={handleSketchClick}
          >
            <Box sx={{position: 'relative'}}>
              <img
                src={images[carFacing]}
                alt="Car Sketch"
                style={{ maxWidth: "100%", margin: "auto" }}
                onClick={handleSketchClick}
              />
              {currentDamageReport.map(val => {
                const iconSrc = damages.find(valIcon => valIcon.name === val.damageType).colored; 
                return (
                  <img
                    src={iconSrc}
                    style={{ width: 30, height: 30, position: 'absolute', left: val.x, top: val.y, }}
                  />
                )
              })}
            </Box>
            
            
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
        ) : (
          <Box
            sx={{
              border: "1px solid #2F61BF",
              borderRadius: 2,
              textAlign: "center",
              p: 2,
              width: { xs: "100%", lg: 380 },
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Button
              sx={{
                backgroundColor: colors.buttoncolor,
                color: "white",
                fontSize: 10,
                borderRadius: 1,
                width: "fit-content",
                alignSelf: "center",
                px: 2,
                py: 0.5,
                fontFamily:"Inter"
              }}
            >
              Damage Description
            </Button>

            <TextField
              multiline
              minRows={4}
              placeholder="Provide a description of the damage."
              value={damageDescription}
              onChange={(e) => setDamageDescription(e.target.value)}
              fullWidth
              sx={{
                backgroundColor: "#fff",
                borderRadius: 1,
                "& .MuiOutlinedInput-root": { border: "none" },
                "& .MuiInputBase-input::placeholder": { 
                  fontSize: 14,   
                  color: "gray", 
                },
              }}
            />


<Typography>
  <label 
    htmlFor="image-upload" 
    style={{ 
      color: colors.buttoncolor, 
      fontWeight: 600, 
      fontSize: 12, 
      fontFamily: "Inter", 
      cursor: "pointer" 
    }}
  >
    Upload an image {selectedImage ? `(${selectedImage.name})` : ''}
  </label> 
  {" "}<br />
 
  <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: 12,
                mt: 0.2,
                color: "#000",
                textAlign: "center",
              }}
            >
              Supports: PNG, JPG, JPEG
            </Typography>
</Typography>

<input 
  id="image-upload" 
  type="file" 
  accept="image/png, image/jpeg, image/jpg" 
  style={{ display: 'none' }} 
  onChange={handleImageUpload}
/>


            <Button
              onClick={handleSave}
              sx={{
                backgroundColor: colors.buttoncolor,
fontSize:12,
                color: "white",
                textTransform: "none",
                width: 80,
                alignSelf: "center",
                fontFamily:"Inter"
              }}
            >
              Save
            </Button>
          </Box>
        )}
      </Box>

      {/* NEXT STEP */}
      <Box display="flex" justifyContent="flex-end">
        <Button
          sx={{
            textTransform: "none",
            minWidth: "120px",
            height: "40px",
            fontFamily: "Inter",
            color: "white",
            mr: 4,
            backgroundColor: colors.buttoncolor,
          }}
          onClick={!save ? onNext : saveDamageRpeort}
        >
          {save ? 'SAVE' : 'Next Step'}
        </Button>
      </Box>
    </Box>
  );
};

export default DamageReportBox;
