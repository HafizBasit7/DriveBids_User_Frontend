import { useState, useRef, useEffect } from "react";
import {
  Box,
  IconButton,
  Button,
  Dialog,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  ArrowBackIos,
  ArrowForwardIos,
  Close,
  LocationOnRounded,
  PlayArrow,
} from "@mui/icons-material";
import Carimg from "../../assets/Png/cardetailimg.png";
import Carimgg from "../../assets/Png/sellcarimage.png";
import colors from "../../Style/color";
import BidModal from "../Modals/BidModal";
import { formatAmount } from "../../utils/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import { placeBidOnCar, buyNowCar } from "../../api/calls/bid";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth.context";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import { getCarBiddingHistory } from "../../api/calls/car";

const CarSlider = ({ car }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [openBuyNowDialog, setOpenBuyNowDialog] = useState(false);
  const thumbnailRef = useRef();
  const mainThumbRefs = useRef([]);

  const dialogThumbRefs = useRef([]);
  const { authState } = useAuth();

  const { data } = useQuery({
    queryKey: ["biddingHistory", car._id],
    queryFn: () => getCarBiddingHistory(car._id),
  });
  const bids = data?.data?.bids;
  const bid = bids?.find((c) => c.user === authState.user._id);

  let computedQuickBid = car.highestBid
    ? car.highestBid + 1
    : car.staringBidPrice;
  if (bid) {
    if (bid.bidAmount === car.highestBid) {
      computedQuickBid = bid.maxBudget + 1;
    }
  }

  useEffect(() => {
    scrollThumbnailIntoView(mainThumbRefs);
    scrollThumbnailIntoView(dialogThumbRefs);
  }, [currentIndex]);

  const scrollThumbnailIntoView = (refArray) => {
    if (refArray.current[currentIndex]) {
      refArray.current[currentIndex].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  const isMyCar = car.user._id === authState.user._id;

  const mutation = useMutation({
    mutationFn: placeBidOnCar,
  });

  const buyNowMutation = useMutation({
    mutationFn: buyNowCar,
  });

  // Separate videos and images
  const videos = car.images?.carVideo?.map((val) => val.url) || [];
  const images = Object.entries(car.images || {})
    .filter(([key]) => key !== 'carVideo')
    .flatMap(([_, items]) => items.map((val) => val.url));
  
  // Combine videos and images, with videos first
  const mediaItems = [...videos, ...images];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
    setIsPlaying(false);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + mediaItems.length) % mediaItems.length
    );
    setIsPlaying(false);
  };

  const handleImageClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setIsPlaying(false);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  const isVideo = (url) => {
    return url.match(/\.(mp4|webm|ogg)$/i);
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const navBtnStyles = (side) => ({
    position: "absolute",
    [side]: 10,
    top: "50%",
    transform: "translateY(-50%)",
    width: 50,
    height: 50,
    borderRadius: 2,
    backgroundColor: "rgba(0,0,0,0.30)",
    color: "white",
    zIndex: 2,
    "&:hover": { backgroundColor: "rgba(0,0,0,0.9)" },
  });

  const arrowIconStyles = { fontSize: 30 };

  const thumbnailScrollStyles = {
    display: "flex",
    alignItems: "center",
    padding: "8px 12px",
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 2,
    overflowX: "auto",
    maxWidth: "100%",
    whiteSpace: "nowrap",
    mt: 1,
    "&::-webkit-scrollbar": { height: "6px" },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#ccc",
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar-track": { backgroundColor: "transparent" },
  };

  const tooltipStyles = {
    tooltip: {
      fontSize: "14px",
      padding: "12px 16px",
      backgroundColor: "white",
      color: "black",
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
      borderRadius: "8px",
      maxWidth: "300px",
    },
    arrow: {
      color: "white",
    },
  };

  return (
    <Box
      sx={{
        width: "100%",
        mx: "auto",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: 2,
      }}
    >
      <Box sx={{ position: "relative", width: "100%", overflow: "hidden" }}>
        {isVideo(mediaItems[currentIndex]) ? (
          <Box sx={{ position: "relative" }}>
            <video
              ref={videoRef}
              src={mediaItems[currentIndex]}
              style={{
                width: "100%",
                height: { xs: "250px", sm: "350px", md: 480 },
                objectFit: "cover",
                borderRadius: 8,
              }}
              onClick={handleImageClick}
              muted
              loop
              autoPlay
              playsInline
            />
          </Box>
        ) : (
          <Box
            component="img"
            src={mediaItems[currentIndex]}
            alt="Main Image"
            onClick={handleImageClick}
            sx={{
              width: "100%",
              height: { xs: "250px", sm: "350px", md: 480 },
              objectFit: "cover",
              borderRadius: 2,
              cursor: "pointer",
            }}
          />
        )}

        <IconButton
          onClick={handleImageClick}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            backgroundColor: "rgba(0,0,0,0.0)",
            color: "white",
            zIndex: 10,
          }}
        >
          <FullscreenIcon
            sx={{
              fontSize: 30,
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
              borderRadius: 2,
              p: 0.1,
            }}
          />
        </IconButton>

        <IconButton onClick={handlePrev} sx={navBtnStyles("left")}>
          <ArrowBackIos sx={arrowIconStyles} />
        </IconButton>
        <IconButton onClick={handleNext} sx={navBtnStyles("right")}>
          <ArrowForwardIos sx={arrowIconStyles} />
        </IconButton>

        <Box
          ref={thumbnailRef}
          sx={{
            position: "absolute",
            bottom: 10,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            backgroundColor: "transparent",
            padding: "5px 10px",
            borderRadius: 2,
            overflowX: "auto",
            maxWidth: "100%",
            whiteSpace: "nowrap",
            "&::-webkit-scrollbar": { height: "6px" },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#ccc",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-track": { backgroundColor: "transparent" },
          }}
        >
          {mediaItems.map((item, index) => (
            <Box
              key={index}
              ref={(el) => (mainThumbRefs.current[index] = el)}
              component={isVideo(item) ? "video" : "img"}
              src={item}
              alt={`Thumbnail ${index}`}
              onClick={() => handleThumbnailClick(index)}
              sx={{
                minWidth: 120,
                height: { xs: 50, sm: 70, md: 100 },
                objectFit: "cover",
                borderRadius: 1,
                cursor: "pointer",
                border:
                  currentIndex === index
                    ? "2px solid white"
                    : "2px solid transparent",
                transition: "0.3s",
                mx: 0.5,
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Dialog Viewer */}
      <Dialog open={openDialog} onClose={handleCloseDialog} fullScreen>
        <Box sx={{ position: "relative", height: "100%", bgcolor: "black" }}>
          <IconButton
            onClick={handleCloseDialog}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              color: "white",
              zIndex: 3,
              backgroundColor: "rgba(0,0,0,0.4)",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
            }}
          >
            <Close />
          </IconButton>

          {isVideo(mediaItems[currentIndex]) ? (
            <Box sx={{ position: "relative", height: "100%" }}>
              <video
                ref={videoRef}
                src={mediaItems[currentIndex]}
                style={{
                  width: "100%",
                  height: "calc(100% - 110px)",
                  objectFit: "contain",
                  marginTop: "3rem",
                }}
                autoPlay={isPlaying}
                controls
              />
              <IconButton
                onClick={handlePlayPause}
                sx={{
                  position: "absolute",
                  top: "40%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "rgba(0,0,0,0.7)",
                  },
                }}
              >
                {isPlaying ? <Close /> : <PlayArrow sx={{ fontSize: 40 }} />}
              </IconButton>
            </Box>
          ) : (
            <Box
              component="img"
              src={mediaItems[currentIndex]}
              alt="Zoomed"
              sx={{
                width: "100%",
                height: "calc(100% - 110px)",
                objectFit: "contain",
                mt: 5,
              }}
            />
          )}

          <IconButton onClick={handlePrev} sx={navBtnStyles("left")}>
            <ArrowBackIos sx={arrowIconStyles} />
          </IconButton>
          <IconButton onClick={handleNext} sx={navBtnStyles("right")}>
            <ArrowForwardIos sx={arrowIconStyles} />
          </IconButton>

          {/* Thumbnails in Dialog */}
          <Box
            sx={{ ...thumbnailScrollStyles, position: "absolute", bottom: 10 }}
          >
            {mediaItems.map((item, index) => (
              <Box
                key={index}
                ref={(el) => (dialogThumbRefs.current[index] = el)}
                component={isVideo(item) ? "video" : "img"}
                src={item}
                alt={`Dialog Thumb ${index}`}
                onClick={() => handleThumbnailClick(index)}
                sx={{
                  width: 100,
                  height: 60,
                  objectFit: "cover",
                  borderRadius: 1,
                  cursor: "pointer",
                  border:
                    currentIndex === index
                      ? "2px solid white"
                      : "2px solid transparent",
                  mx: 0.5,
                  flexShrink: 0,
                }}
              />
            ))}
          </Box>
        </Box>
      </Dialog>
      <Box
        display="flex"
        alignItems="center"
        marginTop={1}
        color={colors.buttoncolor}
      >
        <LocationOnRounded sx={{ mr: 1 }} />
        <Typography>{car?.location?.name}</Typography>
      </Box>

      {!isMyCar && car.status !== "sold" && (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 2,
            mt: 4,
            width: "100%",
          }}
        >
          <Button
            variant="outlined"
            onClick={() => setOpenBuyNowDialog(true)}
            sx={{
              flex: 1,
              minWidth: "30%",
              color: "#6F6F6F",
              fontWeight: "bold",
              borderRadius: 2,
              py: 0.5,
              border: "1px solid #D9D9D9",
              fontSize: { xs: 12, sm: 14, md: 12 },
              fontFamily: "Inter",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: 50,
            }}
          >
            <Tooltip
              title="Fixed price at which buyers can purchase immediately,
                  bypassing the bidding process."
              arrow
              placement="top"
              componentsProps={{
                tooltip: {
                  sx: tooltipStyles.tooltip,
                },
                arrow: {
                  sx: tooltipStyles.arrow,
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                BUY IT NOW
                <Box
                  sx={{
                    color: "#BC413A",
                    fontSize: { xs: 12, sm: 12 },
                    fontWeight: 700,
                    fontFamily: "Inter",
                  }}
                >
                  {authState.currency} {formatAmount(car.buyNowPrice)}
                </Box>
              </Box>
            </Tooltip>
          </Button>

          <Button
            variant="contained"
            sx={{
              flex: 1,
              minWidth: "30%",
              backgroundColor: colors.buttoncolor,
              color: "white",
              borderRadius: 2,
              py: 1.5,
              fontSize: { xs: 12, sm: 14 },
              fontWeight: 600,
              fontFamily: "Inter",
              textAlign: "center",
              height: 50,
            }}
            onClick={() => setOpen(true)}
          >
            <Tooltip
              title="Place a custom bid amount with your maximum budget"
              arrow
              placement="top"
              componentsProps={{
                tooltip: {
                  sx: tooltipStyles.tooltip,
                },
                arrow: {
                  sx: tooltipStyles.arrow,
                },
              }}
            >
              <Box>PLACE BID</Box>
            </Tooltip>
          </Button>

          <Button
            onClick={async () => {
              if (mutation.isPending) return;
              toast.promise(
                mutation.mutateAsync({
                  carId: car._id,
                  bidAmount: parseInt(computedQuickBid),
                }),
                {
                  loading: "Placing bid",
                  error: (error) => error.message,
                  success: "Bid placed",
                }
              );
            }}
            variant="outlined"
            sx={{
              flex: 1,
              minWidth: "30%",
              color: "#6F6F6F",
              borderRadius: 2,
              py: 1,
              border: "1px solid #D9D9D9",
              fontSize: { xs: 12, sm: 14, md: 12 },
              fontWeight: 700,
              fontFamily: "Inter",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: 50,
            }}
          >
            {mutation.isPending ? (
              "Placing bid"
            ) : (
              <Tooltip
                title={` Minimum amount to outbid the top bidder, unless they increase
                  their bid again.`}
                arrow
                placement="top"
                componentsProps={{
                  tooltip: {
                    sx: tooltipStyles.tooltip,
                  },
                  arrow: {
                    sx: tooltipStyles.arrow,
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  QUICK BID
                  <Box
                    sx={{
                      color: "#BC413A",
                      fontSize: { xs: 12, sm: 14 },
                      fontWeight: 700,
                      fontFamily: "Inter",
                    }}
                  >
                    {authState.currency} {formatAmount(computedQuickBid)}
                  </Box>
                </Box>
              </Tooltip>
            )}
          </Button>
          {bid && (
            <>
              <Box
                variant="outlined"
                sx={{
                  flex: 1,
                  minWidth: "30%",
                  color: "#6F6F6F",
                  borderRadius: 2,
                  py: 1,
                  border: "1px solid #D9D9D9",
                  fontSize: { xs: 12, sm: 14, md: 12 },
                  fontWeight: 700,
                  fontFamily: "Inter",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: 50,
                }}
              >
                <Tooltip
                  title="Your current highest bid on this car"
                  arrow
                  placement="top"
                  componentsProps={{
                    tooltip: {
                      sx: tooltipStyles.tooltip,
                    },
                    arrow: {
                      sx: tooltipStyles.arrow,
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        color: "#6F6F6F",
                        fontSize: { xs: 12, sm: 14 },
                        fontWeight: 700,
                        fontFamily: "Inter",
                      }}
                    >
                      Current Bid
                    </Box>
                    <Box
                      sx={{
                        color: "#BC413A",
                        fontSize: { xs: 12, sm: 14 },
                        fontWeight: 700,
                        fontFamily: "Inter",
                      }}
                    >
                      {authState.currency} {bid.bidAmount.toLocaleString()}
                    </Box>
                  </Box>
                </Tooltip>
              </Box>
              <Box
                variant="outlined"
                sx={{
                  flex: 1,
                  minWidth: "30%",
                  color: "#6F6F6F",
                  borderRadius: 2,
                  py: 1,
                  border: "1px solid #D9D9D9",
                  fontSize: { xs: 12, sm: 14, md: 12 },
                  fontWeight: 700,
                  fontFamily: "Inter",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: 50,
                }}
              >
                <Tooltip
                  title="Your maximum budget - we'll automatically bid up to this amount"
                  arrow
                  placement="top"
                  componentsProps={{
                    tooltip: {
                      sx: tooltipStyles.tooltip,
                    },
                    arrow: {
                      sx: tooltipStyles.arrow,
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        color: "#6F6F6F",
                        fontSize: { xs: 12, sm: 14 },
                        fontWeight: 700,
                        fontFamily: "Inter",
                      }}
                    >
                      Max Budget
                    </Box>
                    <Box
                      sx={{
                        color: "#BC413A",
                        fontSize: { xs: 12, sm: 14 },
                        fontWeight: 700,
                        fontFamily: "Inter",
                      }}
                    >
                      {authState.currency} {bid.maxBudget.toLocaleString()}
                    </Box>
                  </Box>
                </Tooltip>
              </Box>
            </>
          )}
        </Box>
      )}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          mt: 3,
        }}
      >
        <Box
          sx={{
            flex: 1,
            height: 3,
            backgroundColor:
              car.status === "sold"
                ? "red"
                : car.reserveMet
                ? "#32CD32"
                : colors.buttoncolor,
          }}
        />

        <Box
          sx={{
            padding: "10px 20px",
            border: "1px solid #D9D9D9",
            borderRadius: 2,
            color:
              car.status === "sold"
                ? "#fff"
                : car.reserveMet
                ? "#fff"
                : "#2F61BF",
            fontWeight: 600,
            backgroundColor:
              car.status === "sold"
                ? "#C41E3A"
                : car.reserveMet
                ? "#32CD32"
                : null,
            fontFamily: "Inter",
            fontSize: { xs: 12, sm: 14 },
            width: "33.33%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            py: 2.3,
          }}
        >
          <Tooltip
            title={
              car.status === "sold"
                ? "CAR SOLD"
                : "The minimum price set by the seller, which must be met for the vehicle to be sold."
            }
            arrow
            placement="top"
            componentsProps={{
              tooltip: {
                sx: tooltipStyles.tooltip,
              },
              arrow: {
                sx: tooltipStyles.arrow,
              },
            }}
          >
            <span style={{ cursor: "pointer" }}>
              {car.status === "sold"
                ? "CAR SOLD"
                : car.reserveMet
                ? "RESERVE MET"
                : "RESERVE NOT MET"}
            </span>
          </Tooltip>
        </Box>

        <Box
          sx={{
            flex: 1,
            height: 3,
            backgroundColor:
              car.status === "sold"
                ? "#C41E3A"
                : car.reserveMet
                ? "#32CD32"
                : colors.buttoncolor,
          }}
        />
      </Box>

      <BidModal car={car} open={open} onClose={() => setOpen(false)} />

      {/* Buy Now Confirmation Dialog */}
      <Dialog
        open={openBuyNowDialog}
        onClose={() => setOpenBuyNowDialog(false)}
        PaperProps={{
          sx: {
            borderRadius: 2,
            padding: 3,
            maxWidth: "400px",
            width: "100%",
          },
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
            Confirm Purchase
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Are you sure you want to buy this car for {authState.currency}{" "}
            {formatAmount(car.buyNowPrice)}?
          </Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
            <Button
              variant="outlined"
              onClick={() => setOpenBuyNowDialog(false)}
              sx={{
                minWidth: "120px",
                borderRadius: 2,
                textTransform: "none",
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={async () => {
                if (buyNowMutation.isPending) return;
                setOpenBuyNowDialog(false);
                toast.promise(buyNowMutation.mutateAsync(car._id), {
                  loading: "Processing purchase...",
                  error: (error) => error.message,
                  success: "Car purchased successfully!",
                });
              }}
              sx={{
                minWidth: "120px",
                borderRadius: 2,
                textTransform: "none",
                backgroundColor: colors.buttoncolor,
                "&:hover": {
                  backgroundColor: colors.buttoncolor,
                  opacity: 0.9,
                },
              }}
            >
              Confirm
            </Button>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
};

export default CarSlider;
