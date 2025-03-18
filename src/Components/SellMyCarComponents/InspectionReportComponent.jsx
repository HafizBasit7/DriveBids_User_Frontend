import { Box, Typography, Button, Stack } from "@mui/material";
import ReportButton from "../ButtonComponent/ReportButton";
import Ok from "../../assets/SVG/ok.svg";
import Rattention from "../../assets/SVG/Rattention.svg";
import Nottested from "../../assets/SVG/Nottested.svg";
import Rimmediate from "../../assets/SVG/Requireimmediat.svg";
import OkGrey from "../../assets/SVG/okygrey.svg";
import NTGrey from "../../assets/SVG/NTGrey.svg";
import NottestedGrey from "../../assets/SVG/nottestedGrey.svg";
import NITGrey from "../../assets/SVG/NIAGrey.svg";
import colors from "../../Style/color";

const InspectionReportComponent = ({ title, subtitle, indicators, tests, selectedValues, onChange, onNext }) => {
  // Icon mapping based on option value
  const iconMap = {
    ok: { selected: Ok, grey: OkGrey },
    not_tested: { selected: Nottested, grey: NTGrey },
    needs_attention: { selected: Rattention, grey: NottestedGrey },
    immediate_attention: { selected: Rimmediate, grey: NITGrey },
  };

  return (
    <Box
      width={{ xs: "95%", sm: "90%", md: "80%" }}
      mx="auto"
      my={2}
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      gap={4}
      p={4}
      borderRadius={2}
      border="2px solid #D9D9D9"
      bgcolor="#FFFFFF"
      sx={{ fontFamily: 'Outfit', px: 6 }}
    >
      {/* Left Section */}
      <Box flex={1.5}>
        <Typography fontSize={30} fontWeight={700} mb={2} sx={{ fontFamily: 'Outfit' }}>
          {title}
        </Typography>
        <Typography color="#000" fontSize={18} fontWeight={450} mb={2} sx={{ fontFamily: 'Outfit' }}>
          {subtitle}
        </Typography>

        <Typography fontSize={30} fontWeight={700} mb={1} sx={{ fontFamily: 'Outfit' }}>
          Indicators
        </Typography>

        <Stack direction="column" gap={3} mt={3} >
          {indicators.map((item, index) => (
            <Stack direction="row" alignItems="center" gap={1} key={index}>
              <img src={item.icon} alt={item.label} width={24} />
              <Typography sx={{ fontFamily: 'Outfit', fontWeight: 600 }}>{item.label}</Typography>
            </Stack>
          ))}
        </Stack>
      </Box>

     {/* Right Section */}
<Box flex={1.3}>
  <Box p={2} border="1px solid #D9D9D9" borderRadius={2} bgcolor="#fff">
    <Box sx={{ mb: 2, width: 300, pb: 2 }}>
      <Button
        variant="contained"
        sx={{
          fontFamily: 'Inter',
          backgroundColor: colors.buttoncolor,
          fontWeight: 500,
          fontSize: 12,
          textTransform: 'none'

        }}
      >
        Select one option from each
      </Button>
    </Box>

    {/* Divider Line Below the Button */}
    <Box
      sx={{
        height: '1px',
        width: '90%',
        backgroundColor: '#D9D9D9',
        mx: 'auto',
        mb: 3
      }}
    />

    {tests.map((test, index) => (
      <Box key={index} mb={2}>
        <Typography fontWeight={600} mb={1}>
          {test.label}
        </Typography>
        <Stack direction="column" spacing={0.1}>
          {test.options.map((option, idx) => {
            const isSelected = selectedValues[test.key] === option.value;
            const iconSrc = isSelected
              ? iconMap[option.value]?.selected
              : iconMap[option.value]?.grey;

            return (
              <Stack
                direction="row"
                alignItems="center"
                gap={1}
                key={idx}
                onClick={() => onChange(test.key, option.value)}
                sx={{
                  cursor: 'pointer',
                  borderRadius: 2,
                  p: 1,
                }}
              >
                <img src={iconSrc} alt={option.label} width={24} />
                <Typography sx={{ fontFamily: 'Outfit' }}>
                  {option.label}
                </Typography>
              </Stack>
            );
          })}
        </Stack>

        {/* Divider Line Between Test Sections */}
        <Box
          sx={{
            height: '1px',
            width: '90%',
            backgroundColor: '#D9D9D9',
            mx: 'auto',
            mt: 2
          }}
        />
      </Box>
    ))}
  </Box>



        <Box textAlign="right" mt={2}>
          <Button
            variant="contained"
            onClick={onNext}
            sx={{ fontFamily: 'Outfit', backgroundColor: colors.buttoncolor, fontWeight: 400 }}
          >
            Next Step
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default InspectionReportComponent;
