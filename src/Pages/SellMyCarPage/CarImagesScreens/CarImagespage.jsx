import { Box, Typography, Stack, Button } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import DealsBanner from "../../../Components/HomePageComponents/DealBanner";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ImageIcon from "@mui/icons-material/Image";
import ShieldIcon from "@mui/icons-material/Shield";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import colors from "../../../Style/color";

const steps = [
  {
    title: "Exterior Images",
    status: "Complete",
    steps: 6,
    icon: <InsertDriveFileIcon fontSize="large" />,
    route: "/car-exteriorimg1",
  },
  {
    title: "Interior Images",
    status: "Incomplete",
    steps: 5,
    icon: <DirectionsCarIcon fontSize="large" />,
    route: "/car-interiorimg1",
  },
  {
    title: "Wheels",
    status: "Incomplete",
    steps: 4,
    icon: <ImageIcon fontSize="large" />,
    route: "/car-wheelimg1",
  },
  {
    title: "Tyre Thread",
    status: "Incomplete",
    steps: 4,
    icon: <ShieldIcon fontSize="large" />,
    route: "/car-tyrethread1",
  },
];

const CarImages = () => {
  const navigate = useNavigate();

  if(location.pathname.endsWith('/images') || location.pathname.endsWith('/images/')) {
    return (
      <MainLayout  title="Car Images"
      subtitle="Complete 4 Easy Steps"
      buttonText="Back "
      onClick={() => navigate("/post-ad")}>
      

        <Box width={{ xs: "95%", sm: "80%", md: "85%" }} mx="auto" mt={4}>
          <Stack spacing={2}>
            {steps.map((item, index) => (
              <Box
                key={index}
                onClick={() => navigate(item.route)} 
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  p: 2,
                  border: "1px solid #D9D9D9",
                  backgroundColor:"#f9f9f9",
                  borderRadius: 2,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": { backgroundColor: "#f9f9f9" },
                }}
              >
                <Box display="flex" alignItems="center" gap={2}>
                  <Box color={item.status === "Complete" ? colors.buttoncolor : "#6F6F6F"} sx={{ fontSize: 40 }}>
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography fontWeight={600} sx={{ fontFamily: "Inter" }}>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color={item.status === "Complete" ? "primary" : "#6F6F6F"}
                      sx={{ fontFamily: "Inter" }}
                    >
                      ● {item.status}
                    </Typography>
                  </Box>
                </Box>

                <Box display="flex" alignItems="center" gap={2} justifyContent="flex-end">
                  <Typography fontSize={14} fontWeight={500} color="#6F6F6F" sx={{ fontFamily: "Inter" }}>
                    {item.steps} Steps
                  </Typography>
                  <ArrowForwardIosIcon fontSize="small" color="action" />
                </Box>
              </Box>
            ))}
          </Stack>

          {/* <Box display="flex" justifyContent="flex-end" mt={3}>
            <Button
              variant="contained"
              sx={{
                fontFamily: "Inter",
                borderRadius: 1.5,
                width: 150,
                py: 1,
                backgroundColor: colors.buttoncolor,
              }}
            >
              Post Ad
            </Button>
          </Box> */}
        </Box>
      </MainLayout>
    );
  }

  return <Outlet/>
};

export default CarImages;
