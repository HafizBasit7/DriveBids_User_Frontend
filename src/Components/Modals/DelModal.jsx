import React from 'react';
import { Dialog, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import DealsBanner from '../HomePageComponents/DealBanner';

const DeleteAdModal = ({ad, open, handleClose, handleDelete }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth={false}
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: 4,
          width: '700px',
          maxWidth: '90%',
        },
      }}
    >
      <DialogContent sx={{ px: 2, py: 2, textAlign: 'center' }}>
        <DealsBanner
          title="Mark as Sold"
          subtitle=""
          buttonText="Close"
          showClose
          onClose={handleClose}  // Close the modal when banner close button is clicked
          icon={
            <CloseIcon
              sx={{ cursor: 'pointer' }}
              onClick={handleClose}  // Close modal on icon click
            />
          }
        />
        <Typography variant="body1" sx={{ my: 6 }}>
          Are you sure you want to mark your ad <b>{ad.title} {ad.model}</b> as <b>sold?</b> This will make your ad unlisted and auction will be ended immediately. <br />
          Reg No: <b>{ad.regNo}</b>
        </Typography>
      </DialogContent>

      <DialogActions sx={{ justifyContent: 'center', pb: 5 }}>
        <Button
          onClick={handleDelete}
          variant="contained"
          sx={{ backgroundColor: '#3B61CF', px: 3, py: 1, fontFamily: "Inter" }}
        >
          I confirm, Mark as Sold
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteAdModal;
