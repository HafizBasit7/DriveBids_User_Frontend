import React, { useState, useRef, useEffect } from 'react';
import { 
  Modal, 
  Box, 
  IconButton, 
  Fade, 
  Backdrop, 
  Typography,
  Slider
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import DownloadIcon from '@mui/icons-material/Download';

const ImageViewModal = ({ open, handleClose, imageUrl }) => {
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  useEffect(() => {
    if (open) {
      setScale(1);
      setRotation(0);
      setPosition({ x: 0, y: 0 });
    }
  }, [open, imageUrl]);

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.5, 5));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.5, 0.5));
  };

  const handleZoomChange = (event, newValue) => {
    setScale(newValue);
  };

  const handleRotateLeft = () => {
    setRotation(prev => prev - 90);
  };

  const handleRotateRight = () => {
    setRotation(prev => prev + 90);
  };


  const handleMouseDown = (e) => {
    if (e.target === imageRef.current) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    if (e.target === imageRef.current) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y
      });
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleDoubleClick = () => {
    setScale(1);
    setRotation(0);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(0, 0, 0, 0.9)',
            boxShadow: 24,
            display: 'flex',
            flexDirection: 'column',
            outline: 'none',
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Controls */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              p: 2,
              bgcolor: 'rgba(0, 0, 0, 0.5)',
            }}
          >
            <IconButton onClick={handleClose} sx={{ color: 'white' }}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Image Container */}
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
              cursor: isDragging ? 'grabbing' : 'grab',
            }}
          >
            <img
              ref={imageRef}
              src={imageUrl}
              alt="Enlarged view"
              style={{
                maxHeight: '80vh',
                maxWidth: '90vw',
                transform: `scale(${scale}) rotate(${rotation}deg) translate(${position.x / scale}px, ${position.y / scale}px)`,
                transition: isDragging ? 'none' : 'transform 0.2s ease',
                userSelect: 'none',
                pointerEvents: 'auto',
              }}
              onDoubleClick={handleDoubleClick}
              draggable="false"
            />
          </Box>

          {/* Bottom Controls */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              p: 2,
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton onClick={handleZoomOut} sx={{ color: 'white' }}>
                <ZoomOutIcon />
              </IconButton>
              <Slider
                value={scale}
                min={0.5}
                max={5}
                step={0.1}
                onChange={handleZoomChange}
                aria-labelledby="zoom-slider"
                sx={{ 
                  width: { xs: 120, sm: 150 },
                  color: 'white',
                  '& .MuiSlider-thumb': {
                    height: 20,
                    width: 20,
                  },
                  '& .MuiSlider-rail': {
                    opacity: 0.5,
                  }
                }}
              />
              <IconButton onClick={handleZoomIn} sx={{ color: 'white' }}>
                <ZoomInIcon />
              </IconButton>
            </Box>
            
            <Typography sx={{ color: 'white', fontWeight: 'bold', mx: 1 }}>
              {Math.round(scale * 100)}%
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton onClick={handleRotateLeft} sx={{ color: 'white' }}>
                <RotateLeftIcon />
              </IconButton>
              <IconButton onClick={handleRotateRight} sx={{ color: 'white' }}>
                <RotateRightIcon />
              </IconButton>
              
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ImageViewModal;