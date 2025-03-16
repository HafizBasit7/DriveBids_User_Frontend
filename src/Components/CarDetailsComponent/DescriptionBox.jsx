import { Box, Typography } from "@mui/material";

const DescriptionBox = () => {
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
      <Typography variant="h6" sx={{ fontWeight: 500, mb: 1 }}>
        Description
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet consectetur. Nunc arcu accumsan tortor sit senectus interdum netus.
        Purus quis quam aliquam a mauris diam purus malesuada sit. Posuere libero pretium maecenas et sociis
        a etiam sed posuere. Fermentum fringilla ac quam auctor. Ante ut sodales nisi congue. At felis odio
        sit in sollicitudin id suspendisse dolor. Ac sit non fermentum at eleifend orci scelerisque. Aliquet
        adipiscing vel lacus velit. Vitae sodales sed aenean ullamcorper suspendisse.
      </Typography>
    </Box>
  );
};

export default DescriptionBox;
