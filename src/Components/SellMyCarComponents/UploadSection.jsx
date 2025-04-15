import { Box, Typography, Button } from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import { useNavigate } from "react-router-dom";
import colors from "../../Style/color";
import {useCar} from "../../context/car.context";
import { useRef } from "react";
import { uploadImage } from "../../utils/upload";
import toast from "react-hot-toast";


const UploadBox = ({ title, description, imgSketch, onNext, type, index, save }) => {
  const {carState, dispatch, draftSave} = useCar();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const currentSelectedImage = ((carState.images || {})[type] || [])[index]?.url;

  const onSelectImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      //Upload image and then update in dispatch
      toast.promise(async () => {
        const imgUrl = await uploadImage(file);
        dispatch({
          type: 'UPDATE_IMAGE',
          section: type,
          index: index,
          value: {type: 'image', url: imgUrl}
        });
      }, {
        loading: 'Uploading image',
        error: e => e.message,
        success: 'Image uploaded'
      })
    }
  };

  const saveImagesDraft = () => {
    toast.promise(async () => {
      await draftSave('images', type);
      navigate('../');
    }, {
      loading: 'Saving Draft',
      error: e => e.message,
      success: 'Draft Saved',
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
          <Typography sx={{ fontFamily: "Inter", fontWeight: 800, fontSize: 30, mb: 3 }}>
            {title}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: 17,
              mb: 7,
            }}
          >
            {description}
          </Typography>

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={onSelectImage}
            style={{ display: "none" }}
          />
          <Button
            variant="outlined"
            startIcon={<UploadIcon />}
            onClick={() => fileInputRef.current.click()}
            sx={{
              textTransform: "none",
              fontFamily: "Inter",
              border: "3px solid",
              fontWeight: 800,
              py: 1,
              borderColor: colors.buttoncolor,
              color: colors.buttoncolor,
              "&:hover": {
                borderColor: colors.buttoncolor,
                backgroundColor: `${colors.buttoncolor}10`,
              },
            }}
          >
            Upload Image
          </Button>
        </Box>
            {currentSelectedImage && (
              <Box
              sx={{
                border: "1px dashed #B4B4B4",
                borderRadius: 2,
                textAlign: "center",
                padding: 1,
                width: { xs: "100%", lg: 380 },
                height: { xs: "auto", md: 250 },
              }}
            >
              <img
             src={currentSelectedImage}
             alt="Car Sketch"
             style={{ width: "100%", height: '100%', objectFit: 'cover' }}
           />
            </Box>
            )}

        {!currentSelectedImage && (
           <Box
           sx={{
             border: "1px dashed #B4B4B4",
             borderRadius: 2,
             textAlign: "center",
             p: 3,
             width: { xs: "100%", lg: 380 },
             height: { xs: "auto", md: 250 },
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
        )}
      </Box>

      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            minWidth: "120px",
            height: "40px",
            fontFamily: "Inter",
            mr: 4,
            backgroundColor: colors.buttoncolor,
          }}
          onClick={save ? saveImagesDraft : onNext}
        >
          {save ? 'SAVE' : 'NEXT STEP'}
        </Button>
      </Box>
    </Box>
  )
};

export default UploadBox;
