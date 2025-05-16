import { Box, Typography, Button } from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";
import colors from "../../Style/color";
import { useCar } from "../../context/car.context";
import { useEffect, useRef } from "react";
import { uploadImage } from "../../utils/upload";
import toast from "react-hot-toast";

const UploadBox = ({
  title,
  description,
  imgSketch,
  onNext,
  type,
  index,
  save,
}) => {
  const { carState, dispatch, draftSave } = useCar();
  useEffect(() => {
    if (!carState?.regNo) {
      navigate("/ad");
    }
  }, [carState, navigate]);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const currentSelectedImage = ((carState.images || {})[type] || [])[index]
    ?.url;

  const onSelectImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      //Upload image and then update in dispatch
      toast.promise(
        async () => {
          const imgUrl = await uploadImage(file);
          dispatch({
            type: "UPDATE_IMAGE",
            section: type,
            index: index,
            value: { type: "image", url: imgUrl },
          });
        },
        {
          loading: "Uploading image...",
          error: (e) => e.message,
          success: "Image uploaded successfully! Click Next Step to continue.",
        }
      );
    }
  };

  const saveImagesDraft = () => {
    toast.promise(
      async () => {
        await draftSave("images", type);
        navigate("../");
      },
      {
        loading: "Saving Draft...",
        error: (e) => e.message,
        success: "Draft Saved Successfully!",
      }
    );
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
          <Typography
            sx={{ fontFamily: "Inter", fontWeight: 800, fontSize: 30, mb: 3 }}
          >
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
              position: "relative",
            }}
          >
            <img
              src={currentSelectedImage}
              alt="Car Sketch"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderRadius: "50%",
                p: 0.5,
              }}
            >
              <CheckCircleIcon
                sx={{ color: colors.buttoncolor, fontSize: 30 }}
              />
            </Box>
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

      <Box
        display="flex"
        justifyContent="flex-end"
        sx={{
          borderTop: "1px solid #E0E0E0",
          pt: 3,
          mt: 2,
        }}
      >
        <Button
          variant="contained"
          disabled={!currentSelectedImage}
          sx={{
            textTransform: "none",
            minWidth: "180px",
            height: "48px",
            fontFamily: "Inter",
            mr: 4,
            fontSize: "16px",
            fontWeight: 600,
            backgroundColor: colors.buttoncolor,
            "&.Mui-disabled": {
              backgroundColor: "#E0E0E0",
              color: "#9E9E9E",
              cursor: "not-allowed",
            },
            "&:hover": {
              backgroundColor: colors.buttoncolor,
              opacity: 0.9,
            },
          }}
          onClick={save ? saveImagesDraft : onNext}
        >
          {save ? "SAVE & CONTINUE" : "NEXT STEP →"}
        </Button>
      </Box>
    </Box>
  );
};

export default UploadBox;
