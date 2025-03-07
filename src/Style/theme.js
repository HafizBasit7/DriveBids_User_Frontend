// src/styles/theme.js
import { createTheme } from "@mui/material/styles";
import colors from "./colors"; 

const theme = createTheme({
  palette: {
    background: {
      default: colors.background, // Set the global background color
    },
    // You can add more customizations here if needed
  },
  typography: {
    // You can customize typography styles here if necessary
  },
  // Other global theme settings
});

export default theme;
