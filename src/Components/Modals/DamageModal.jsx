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
            p: { xs: 1, sm: 3 },
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            boxShadow: 24,
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

          {/* Damage Type Section */}
          <Box sx={{ mt: 3, textAlign: "left" }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                fontFamily: "Inter",
                fontSize: { xs: "16px", sm: "18px" },
                color: "#333",
                mb: 1.5,
              }}
            >
              Damage Type
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "16px" },
                color: "#2F61BF",
                fontWeight: 500,
                backgroundColor: "#f5f7fa",
                p: { xs: 1.5, sm: 2 },
                borderRadius: 2,
                fontFamily: "Inter",
                border: "1px solid #e0e7ff",
              }}
            >
              {damage?.damageType}
            </Typography>
          </Box>

          {/* Description Section */}
          <Box sx={{ mt: 3, textAlign: "left" }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                fontFamily: "Inter",
                fontSize: { xs: "16px", sm: "18px" },
                color: "#333",
                mb: 1.5,
              }}
            >
              Description
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "16px" },
                color: "#555",
                fontWeight: 400,
                backgroundColor: "#f9f9f9",
                p: { xs: 1.5, sm: 2 },
                borderRadius: 2,
                fontFamily: "Inter",
                lineHeight: 1.6,
                border: "1px solid #e0e0e0",
              }}
            >
              {damage?.description || "No description available"}
            </Typography>
          </Box>

          {/* Images Section */}
          <Box sx={{ mt: 3, textAlign: "left" }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                fontFamily: "Inter",
                fontSize: { xs: "16px", sm: "18px" },
                color: "#333",
                mb: 1.5,
              }}
            >
              Images
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                gap: { xs: 1, sm: 2 },
                flexWrap: "wrap",
                p: 2,
                backgroundColor: "#f9f9f9",
                borderRadius: 2,
                border: "1px solid #e0e0e0",
                minHeight: "100px",
                alignItems: "center",
              }}
            >
              {damage?.imageUrl ? (
                <Box
                  sx={{
                    width: 150,
                    height: 150,
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: 2,
                    cursor: "pointer",
                    border: "2px solid #ddd",
                    transition: "transform 0.2s ease",
                    "&:hover": {
                      transform: "scale(1.02)",
                      borderColor: "#2F61BF",
                    },
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
              ) : (
                <Typography
                  sx={{
                    fontSize: { xs: "14px", sm: "16px" },
                    color: "#999",
                    fontStyle: "italic",
                    fontFamily: "Inter",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  No images available
                </Typography>
              )}
            </Box>
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
