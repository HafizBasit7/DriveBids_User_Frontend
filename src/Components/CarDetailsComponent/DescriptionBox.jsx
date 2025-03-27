import { Box, Typography } from "@mui/material";

const DescriptionBox = ({description}) => {
  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 2,
        
        backgroundColor: "white",
        border:"1px solid #D9D9D9",
        minHeight:"100%"
      }}
    >
      <Typography  sx={{ fontWeight: 500, mb: 1.5,fontFamily:"Inter",fontSize:22 }}>
        Description
      </Typography>
      <Typography  sx={{ fontWeight: 400, mb: 1,fontFamily:"Inter",fontSize:14 }}>
        {description}
      </Typography>
    </Box>
  );
};

export default DescriptionBox;
