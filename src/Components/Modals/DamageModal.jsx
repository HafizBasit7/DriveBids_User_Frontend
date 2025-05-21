import React, { useState } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import DealsBanner from "../HomePageComponents/DealBanner";
import CloseIcon from "@mui/icons-material/Close";

const DamageModal = ({ open, onClose, damage }) => {
  const [imagePreviewOpen, setImagePreviewOpen] = useState(false);

  const handleImageClick = () => {
    setImagePreviewOpen(true);
  };

  const handleCloseImagePreview = () => {
    setImagePreviewOpen(false);
  };

  return (
    <>
      {/* Main Damage Modal */}
      <Modal open={open} onClose={onClose}>
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: 2,
            width: { xs: "90%", sm: "80%", md: "70%" },
            p: { xs: 2, sm: 3 },
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            boxShadow: 24,
            textAlign: "center",
            maxHeight: "80vh",
            overflowY: "auto",
          }}
        >
          {/* Header */}
          <Box sx={{ width: "100%" }}>
            <DealsBanner
              title="Damage Report"
              subtitle=""
              buttonText="Close"
              showClose
              onClose={onClose}
              icon={<CloseIcon sx={{ cursor: "pointer" }} onClick={onClose} />}
            />
          </Box>

          {/* Damage Description */}
          <Button
            disabled
            variant="contained"
            sx={{
              backgroundColor: "#2F61BF",
              borderRadius: 2,
              m: { xs: 1, sm: 2 },
              fontSize: { xs: "0.8rem", sm: "1rem" },
              fontWeight: 600,
              fontFamily: "Inter",
              textTransform: "none",
              color: "#fff",
              cursor: "default",
              "&.Mui-disabled": {
                backgroundColor: "#2F61BF",
                color: "#fff",
                opacity: 1,
              },
            }}
          >
            {damage?.damageType}
          </Button>
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "14px" },
              color: "#000",
              fontWeight: 400,
              backgroundColor: "#fff",
              p: { xs: 1, sm: 2 },
              borderRadius: 2,
              fontFamily: "Inter",
              textAlign: "center",
            }}
          >
            {damage?.description}
          </Typography>

          {/* Photos Section */}
          <Button
            disabled
            variant="contained"
            sx={{
              backgroundColor: "#2F61BF",
              borderRadius: 2,
              mt: { xs: 1, sm: 2 },
              fontSize: { xs: "0.8rem", sm: "1rem" },
              fontWeight: 600,
              textTransform: "none",
              color: "#fff",
              cursor: "default",
              "&.Mui-disabled": {
                backgroundColor: "#2F61BF",
                color: "#fff",
                opacity: 1,
              },
            }}
          >
            Photos
          </Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: { xs: 1, sm: 2 },
              mt: { xs: 1, sm: 2 },
              flexWrap: "wrap",
            }}
          >
            {damage?.imageUrl && (
              <Box
                sx={{
                  width: 150,
                  height: 150,
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: 1,
                  cursor: "pointer",
                }}
                onClick={handleImageClick}
              >
                <img
                  src={damage?.imageUrl}
                  alt="Damage"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            )}
          </Box>
        </Box>
      </Modal>

      {/* Full Image Preview Modal */}
      <Modal open={imagePreviewOpen} onClose={handleCloseImagePreview}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            outline: "none",
          }}
        >
          <Box
            sx={{
              position: "relative",
              maxWidth: "90vw",
              maxHeight: "90vh",
            }}
          >
            <CloseIcon
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                color: "white",
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: "50%",
                padding: 1,
                cursor: "pointer",
                zIndex: 1,
              }}
              onClick={handleCloseImagePreview}
            />
            <img
              src={damage?.imageUrl}
              alt="Damage Preview"
              style={{
                maxWidth: "100%",
                maxHeight: "90vh",
                display: "block",
              }}
            />
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default DamageModal;
