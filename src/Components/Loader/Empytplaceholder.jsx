import React from 'react';
import { Box, Typography } from '@mui/material';
import BrowserNotSupportedIcon from '@mui/icons-material/BrowserNotSupported';
const EmptyPlaceholder = ({ message = "No data available" }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
      textAlign="center"
      p={4}
      sx={{ color: 'text.secondary' }}
    >
      <BrowserNotSupportedIcon sx={{ fontSize: 64, mb: 2 }} />
      <Typography variant="h6">{message}</Typography>
    </Box>
  );
};

export default EmptyPlaceholder;
