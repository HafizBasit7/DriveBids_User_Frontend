import { Box, Typography, TextField, Button } from "@mui/material";
import colors from "../../Style/color";

const AdTitleDescription = ({ onFinish, adTitle, setAdTitle, adDescription, setAdDescription ,onNext}) => {
  return (
    <Box 
      border="1px solid #ddd" 
      borderRadius={2} 
      p={3} 
      width="100%" 
      maxWidth="800px" 
      mx="auto"
      bgcolor="#fff"
    >
      <Typography variant="h6" fontWeight={600} mb={3}>
        Ad title & Description
      </Typography>

      <Box mb={3}>
        <Typography variant="subtitle1" fontWeight={500} mb={1}>
          Ad Title <span style={{ color: 'red' }}>*</span>
        </Typography>
        <TextField
          fullWidth
          placeholder="Enter Short Title"
          value={adTitle}
          onChange={(e) => setAdTitle(e.target.value)}
        />
      </Box>

      <Box mb={3}>
        <Typography variant="subtitle1" fontWeight={500} mb={1}>
          Ad Description <span style={{ color: 'red' }}>*</span>
        </Typography>
        <TextField
          fullWidth
          multiline
          rows={4}
          placeholder="Enter car description"
          value={adDescription}
          onChange={(e) => setAdDescription(e.target.value)}
        />
      </Box>

      <Box display="flex" justifyContent="flex-end">
        <Button 
          variant="contained" 
          sx={{ minWidth: '120px', backgroundColor: '#2563eb', textTransform: 'none',backgroundColor:colors.buttoncolor }}
          onClick={onNext}
          
        >
          Finish
        </Button>
      </Box>
    </Box>
  );
};

export default AdTitleDescription;
