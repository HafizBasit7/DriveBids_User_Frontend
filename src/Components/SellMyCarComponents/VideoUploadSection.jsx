import { Box, Typography, Button, IconButton } from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import colors from "../../Style/color";
import { useCar } from "../../context/car.context";
import { useEffect, useRef, useState } from "react";
import { uploadVideo } from "../../utils/upload";
import toast from "react-hot-toast";

const VideoUploadBox = ({
  title,
  description,
  onNext,
  type,
  index,
  save,
}) => {
  const { carState, dispatch, draftSave } = useCar();
  const navigate = useNavigate();
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (!carState?.regNo) {
      navigate("/ad");
    }
  }, [carState, navigate]);

  const currentSelectedVideo = ((carState.images || {})[type] || [])[index]?.url;

  const onSelectVideo = async (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 100 * 1024 * 1024) { // 100MB limit
        toast.error("Video size should be less than 100MB");
        return;
      }

      setIsUploading(true);
      toast.promise(
        async () => {
          const videoUrl = await uploadVideo(file);
          if (videoUrl) {
            dispatch({
              type: "UPDATE_IMAGE",
              section: type,
              index: index,
              value: { type: "video", url: videoUrl },
            });
          } else {
            throw new Error("Failed to upload video");
          }
        },
        {
          loading: "Uploading video...",
          error: (e) => e.message,
          success: "Video uploaded successfully! Click Next Step to continue.",
        }
      ).finally(() => {
        setIsUploading(false);
      });
    }
  };

  const handleDeleteVideo = () => {
    dispatch({
      type: "UPDATE_IMAGE",
      section: type,
      index: index,
      value: null,
    });
  };

  const saveVideoDraft = () => {
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
            accept="video/*"
            ref={fileInputRef}
            onChange={onSelectVideo}
            style={{ display: "none" }}
          />
          <Button
            variant="outlined"
            startIcon={<UploadIcon />}
            onClick={() => fileInputRef.current.click()}
            disabled={isUploading}
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
            {isUploading ? "Uploading..." : currentSelectedVideo ? "Replace Video" : "Upload Video"}
          </Button>
        </Box>

        {currentSelectedVideo && (
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
            <video
              src={currentSelectedVideo}
              controls
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                display: "flex",
                gap: 1,
              }}
            >
              <IconButton
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  p: 0.5,
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                  },
                }}
              >
                <CheckCircleIcon
                  sx={{ color: colors.buttoncolor, fontSize: 20 }}
                />
              </IconButton>
              <IconButton
                onClick={handleDeleteVideo}
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  p: 0.5,
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                  },
                }}
              >
                <CloseIcon sx={{ color: "#666", fontSize: 20 }} />
              </IconButton>
            </Box>
          </Box>
        )}

        {!currentSelectedVideo && (
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
            <PlayCircleIcon sx={{ fontSize: 60, color: colors.buttoncolor }} />
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: 15,
                mt: 2,
                color: "#000",
                textAlign: "center",
              }}
            >
              Upload a Video
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
              Supports: MP4, MOV, AVI (Max 100MB)
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
          disabled={!currentSelectedVideo || isUploading}
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
          onClick={save ? saveVideoDraft : onNext}
        >
          {save ? "SAVE & CONTINUE" : "NEXT STEP →"}
        </Button>
      </Box>
    </Box>
  );
};

export default VideoUploadBox; 