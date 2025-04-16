import { Modal, Box, Typography, Stack } from "@mui/material";
import DealsBanner from "../HomePageComponents/DealBanner";
import CloseIcon from "@mui/icons-material/Close";

const OwnerDeatils = ({ open, onClose, item, isOwner }) => {
  return (
    <Modal open={open} onClose={onClose} disableScrollLock={false}>
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: 2,
          width: { xs: "90%", md: "60%" },
          p: 3,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: 24,
          maxHeight: { xs: "90vh", sm: "80vh", md: "90vh" },
          overflowY: "auto",
        }}
      >
        <DealsBanner
          title={isOwner ? 'Buyer Details' : 'Owner Details'}
          subtitle=""
          buttonText="Close"
          showClose
          onClose={onClose}
          icon={<CloseIcon sx={{ cursor: "pointer" }} onClick={onClose} />}
        />

        {/* Owner Info Section */}
        <Stack spacing={2} mt={3}>
          <Typography variant="h6" fontWeight={600}>
            Name: <Typography component="span" fontWeight={400}>{item?.name || 'N/A'}</Typography>
          </Typography>
          <Typography variant="h6" fontWeight={600}>
            Email: <Typography component="span" fontWeight={400}>{item?.email || 'N/A'}</Typography>
          </Typography>
          <Typography variant="h6" fontWeight={600}>
            Phone: <Typography component="span" fontWeight={400}>+{item.phoneNumber?.countryCode} {item.phoneNumber?.phoneNo}</Typography>
          </Typography>
        </Stack>
      </Box>
    </Modal>
  );
};

export default OwnerDeatils;
