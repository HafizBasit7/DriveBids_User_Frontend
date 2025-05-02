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

const InspectionReportComponent = ({ title, subtitle, tests, selectedValues, onChange, onNext,save = false }) => {
  // Icon mapping based on option value
  const iconMap = [
    { icon: Ok, label: "OK", notSelected: OkGrey },
    { icon: Rattention , label: "Not Tested", notSelected: NTGrey },
    { icon: Nottested, label: "Requires Some Attention", notSelected: NottestedGrey },
    { icon: Rimmediate , label: "Requires Immediate Attention", notSelected: NITGrey },
  ];

  return (
    <Box
      width={{ xs: "95%", sm: "90%", md: "80%" }}
      mx="auto"
      my={2}
      p={4}
      borderRadius={2}
      border="2px solid #D9D9D9"
      bgcolor="#FFFFFF"
      sx={{ fontFamily: 'Outfit', px: 6 }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {/* Top Section with Title and Button */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box flex={1}>
            <Typography fontSize={30} fontWeight={700} mb={2} sx={{ fontFamily: 'Outfit' }}>
              {title}
            </Typography>
            <Typography color="#000" fontSize={18} fontWeight={450} mb={2} sx={{ fontFamily: 'Outfit' }}>
              {subtitle}
            </Typography>
          </Box>
          <Box>
            <Button
              variant="contained"
              sx={{
                fontFamily: 'Inter',
                backgroundColor: colors.buttoncolor,
                fontWeight: 500,
                fontSize: 12,
                textTransform: 'none',
                minWidth: 200
              }}
            >
              Select one option from each
            </Button>
          </Box>
        </Box>

        {/* Main Content Area */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {/* First Row - Indicators and First Test Items */}
          <Box sx={{ 
            width: '100%',
            display: 'flex',
            gap: 4
          }}>
            {/* Indicators Section */}
            <Box sx={{ width: 300 }}>
              <Typography fontSize={30} fontWeight={700} mb={1} sx={{ fontFamily: 'Outfit' }}>
                Indicators
              </Typography>
              <Stack direction="column" gap={3} mt={3}>
                {iconMap.map((item, index) => (
                  <Stack direction="row" alignItems="center" gap={1} key={index}>
                    <img src={item.icon} alt={item.label} width={24} />
                    <Typography sx={{ fontFamily: 'Outfit', fontWeight: 600 }}>{item.label}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>

            {/* First Row Test Items */}
            <Box sx={{ 
              flex: 1,
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2
            }}>
              {tests.slice(0, 2).map((test, index) => (
                <Box 
                  key={index} 
                  sx={{
                    p: 2,
                    border: '1px solid #E9ECEF',
                    borderRadius: 2,
                    backgroundColor: '#fff',
                    width: 'calc(50% - 8px)',
                    minWidth: 300
                  }}
                >
                  <Typography fontWeight={600} mb={1}>
                    {test.name}
                  </Typography>
                  <Stack direction="column" spacing={1}>
                    {iconMap.map((option, idx) => {
                      const isSelected = selectedValues[test.target] === option.label;
                      const iconSrc = isSelected ? option.icon : option.notSelected;

                      return (
                        <Stack
                          direction="row"
                          alignItems="center"
                          gap={1}
                          key={idx}
                          onClick={() => onChange(test.target, option.label)}
                          sx={{
                            cursor: 'pointer',
                            borderRadius: 2,
                            p: 1,
                            '&:hover': {
                              backgroundColor: '#f5f5f5'
                            }
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
                </Box>
              ))}
            </Box>
          </Box>

          {/* Second Row and Beyond - Remaining Test Items */}
          <Box sx={{ 
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2
          }}>
            {tests.slice(2).map((test, index) => (
              <Box 
                key={index} 
                sx={{
                  p: 2,
                  border: '1px solid #E9ECEF',
                  borderRadius: 2,
                  backgroundColor: '#fff',
                  width: 'calc(33.33% - 16px)',
                  minWidth: 300
                }}
              >
                <Typography fontWeight={600} mb={1}>
                  {test.name}
                </Typography>
                <Stack direction="column" spacing={1}>
                  {iconMap.map((option, idx) => {
                    const isSelected = selectedValues[test.target] === option.label;
                    const iconSrc = isSelected ? option.icon : option.notSelected;

                    return (
                      <Stack
                        direction="row"
                        alignItems="center"
                        gap={1}
                        key={idx}
                        onClick={() => onChange(test.target, option.label)}
                        sx={{
                          cursor: 'pointer',
                          borderRadius: 2,
                          p: 1,
                          '&:hover': {
                            backgroundColor: '#f5f5f5'
                          }
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
              </Box>
            ))}
          </Box>
        </Box>

        {/* Bottom Button */}
        <Box textAlign="right">
          <Button
            variant="contained"
            onClick={onNext}
            sx={{ fontFamily: 'Outfit', backgroundColor: colors.buttoncolor, fontWeight: 400 }}
          >
            {save ? 'SAVE' : 'Next Step'}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default InspectionReportComponent;
