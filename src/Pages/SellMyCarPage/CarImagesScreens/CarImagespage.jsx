import { Box, Typography, Stack, Button } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import MainLayout from "../../../Layouts/MainLayout";
import DealsBanner from "../../../Components/HomePageComponents/DealBanner";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ImageIcon from "@mui/icons-material/Image";
import ShieldIcon from "@mui/icons-material/Shield";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import colors from "../../../Style/color";
import { useCar } from "../../../context/car.context";
import {
  exteriorImageValidation,
  interiorImageValidation,
  wheelsImageValidation,
  tyreTreadsValidation,
  carVideoValidation
  
} from "../../../validations/car.validation";

const steps = [
  {
    title: "Exterior Images",
    status: "exteriorImageCompletion",
    steps: 6,
    icon: <InsertDriveFileIcon fontSize="large" />,
    route: "exterior-1",
  },
  {
    title: "Interior Images",
    status: "interiorImageCompletion",
    steps: 5,
    icon: <DirectionsCarIcon fontSize="large" />,
    route: "interior-1",
  },
  {
    title: "Wheels",
    status: "wheelsImageCompletion",
    steps: 4,
    icon: <ImageIcon fontSize="large" />,
    route: "wheel-1",
  },
  {
    title: "Tyre Treads",
    status: "tyreTreadsImageCompletion",
    steps: 4,
    icon: <ShieldIcon fontSize="large" />,
    route: "tread-1",
  },
  {
    title: "Car Video",
    status: "carVideoCompletion",
    steps: 1,
    icon: <VideoLibraryIcon fontSize="large" />,
    route: "video",
  },
];

const CarImages = () => {
  const navigate = useNavigate();
  const { carState } = useCar();

  if (
    location.pathname.endsWith("/images") ||
    location.pathname.endsWith("/images/")
  ) {
    const validations = {
      exteriorImageCompletion: exteriorImageValidation.safeParse(
        carState.images.exterior
      ),
      interiorImageCompletion: interiorImageValidation.safeParse(
        carState.images.interior
      ),
      wheelsImageCompletion: wheelsImageValidation.safeParse(
        carState.images.wheels
      ),
      tyreTreadsImageCompletion: tyreTreadsValidation.safeParse(
        carState.images.tyreTreads
      ),
      carVideoCompletion: carVideoValidation.safeParse(
        carState.images.carVideo
      ),
    };

    const allSectionsComplete = Object.values(validations).every(
      (validation) => validation.success
    );

    return (
      <MainLayout
        title="Car Images"
        subtitle="Complete 5 Easy Steps"
        buttonText="Back "
        onClick={() => navigate("../")}
      >
        <Box width={{ xs: "95%", sm: "80%", md: "85%" }} mx="auto" mt={4}>
          {allSectionsComplete && (
            <Box
              sx={{
                backgroundColor: `${colors.buttoncolor}15`,
                borderRadius: 2,
                p: 3,
                mb: 4,
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <CheckCircleIcon
                sx={{ color: colors.buttoncolor, fontSize: 40 }}
              />
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 600,
                    fontSize: 20,
                    color: colors.buttoncolor,
                  }}
                >
                  All Images and Video Uploaded Successfully!
                </Typography>
                <Typography
                  sx={{ fontFamily: "Inter", fontSize: 16, color: "#666" }}
                >
                  You can now go back to complete your car ad posting.
                </Typography>
              </Box>
            </Box>
          )}

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
                  backgroundColor: validations[item.status].success
                    ? `${colors.buttoncolor}10`
                    : "#f9f9f9",
                  borderRadius: 2,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: validations[item.status].success
                      ? `${colors.buttoncolor}15`
                      : "#f0f0f0",
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <Box display="flex" alignItems="center" gap={2}>
                  <Box
                    color={
                      validations[item.status].success
                        ? colors.buttoncolor
                        : "#6F6F6F"
                    }
                    sx={{ fontSize: 40 }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography fontWeight={600} sx={{ fontFamily: "Inter" }}>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color={
                        validations[item.status].success
                          ? colors.buttoncolor
                          : "#6F6F6F"
                      }
                      sx={{ fontFamily: "Inter" }}
                    >
                      {validations[item.status].success ? (
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          <CheckCircleIcon fontSize="small" />
                          Completed
                        </Box>
                      ) : (
                        "InComplete"
                      )}
                    </Typography>
                  </Box>
                </Box>

                <Box
                  display="flex"
                  alignItems="center"
                  gap={2}
                  justifyContent="flex-end"
                >
                  <Typography
                    fontSize={14}
                    fontWeight={500}
                    color="#6F6F6F"
                    sx={{ fontFamily: "Inter" }}
                  >
                    {item.steps} Steps
                  </Typography>
                  <ArrowForwardIosIcon fontSize="small" color="action" />
                </Box>
              </Box>
            ))}
          </Stack>

          {allSectionsComplete && (
            <Box display="flex" justifyContent="center" mt={4}>
              <Button
                variant="contained"
                onClick={() => navigate("../")}
                sx={{
                  fontFamily: "Inter",
                  borderRadius: 1.5,
                  width: 200,
                  py: 1.5,
                  backgroundColor: colors.buttoncolor,
                  "&:hover": {
                    backgroundColor: colors.buttoncolor,
                    opacity: 0.9,
                  },
                }}
              >
                Back to Car Details
              </Button>
            </Box>
          )}
        </Box>
      </MainLayout>
    );
  }

  return <Outlet />;
};

export default CarImages;
