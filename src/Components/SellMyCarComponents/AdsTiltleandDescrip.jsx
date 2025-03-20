import { Box, Typography, TextField, Button } from "@mui/material";
import colors from "../../Style/color";

const AdTitleDescription = ({
  onFinish,
  adTitle,
  setAdTitle,
  adDescription,
  setAdDescription,
  onNext,
}) => {
  return (
    <Box
      border="2px solid #ddd"
      borderRadius={2}
      p={3}
      width="80%"
  
      mx="auto"
      bgcolor="#fff"
      sx={{ fontFamily: "Inter" }}
    >
      <Typography variant="h6" fontWeight={600} mb={3} sx={{ fontFamily: "Inter" }}>
        Ad title & Description
      </Typography>

      <Box mb={3}>
        <Typography variant="subtitle1" fontWeight={500} mb={1} sx={{ fontFamily: "Inter" }}>
          Ad Title <span style={{ color: 'red' }}>*</span>
        </Typography>
        <TextField
          fullWidth
          placeholder="Enter Short Title"
          value={adTitle}
          onChange={(e) => setAdTitle(e.target.value)}
          sx={{
            fontFamily: "Inter",
            "& .MuiOutlinedInput-root": {
              height: 40, // reduced height
              fontSize: 14,
              "& input": {
                padding:2,
                fontFamily: "Inter",
              },
              "&.Mui-focused fieldset": {
                borderColor: colors.buttoncolor,
              },
            },
          }}
        />
      </Box>

      <Box mb={3}>
        <Typography variant="subtitle1" fontWeight={500} mb={1} sx={{ fontFamily: "Inter" }}>
          Ad Description <span style={{ color: 'red' }}>*</span>
        </Typography>
        <TextField
          fullWidth
          multiline
          rows={3}
          placeholder="Enter car description"
          value={adDescription}
          onChange={(e) => setAdDescription(e.target.value)}
          sx={{
            fontFamily: "Inter",
            "& .MuiOutlinedInput-root": {
              fontSize: 14,
              "& textarea": {
                fontFamily: "Inter",
                padding: 0.5,
              },
              "&.Mui-focused fieldset": {
                borderColor: colors.buttoncolor,
              },
            },
          }}
        />
      </Box>

      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          sx={{
            minWidth: '120px',
            height: 40,
            textTransform: 'none',
            backgroundColor: colors.buttoncolor,
            fontFamily: "Inter",
          }}
          onClick={onNext}
        >
          Finish
        </Button>
      </Box>
    </Box>
  );
};

export default AdTitleDescription;
