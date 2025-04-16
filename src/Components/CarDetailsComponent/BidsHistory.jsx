import { Box, Typography, Divider, Chip, Button } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCarBiddingHistory } from "../../api/calls/car";
import { formatAmount, formatDateTime } from "../../utils/utils";
import colors from "../../Style/color";
import { useAuth } from "../../context/auth.context";
import toast from "react-hot-toast";
import {acceptBid as acceptBidOnCar} from "../../api/calls/bid";
import Emptyplaceholder from "../../Components/Loader/Empytplaceholder"

const BidsHistory = ({car, owner}) => {

  const {authState} = useAuth();
  const user = authState.user;

  const mutation = useMutation({
    mutationFn: acceptBidOnCar,
  })

  const {data, isLoading} = useQuery({
    queryKey: ['biddingHistory', car],
    queryFn: () => getCarBiddingHistory(car),
  });
  const bids = data?.data?.bids;

  const acceptBid = (bidId) => {
    if(mutation.isPending) return;

    toast.promise(async () => {
      await mutation.mutateAsync({carId: car, bidId});
    }, {
      loading: 'Accepting bid...',
      error: (e) => e.message,
      success: 'Bid Accepted, Car sold!',
    })
  }

  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 2,
        backgroundColor: "white",
        width: "100%",
        fontFamily: "Inter, sans-serif",
        border:"1px solid #D9D9D9"
      }}
    >
      <Typography variant="h6" mb={2} sx={{ fontFamily: "Inter", fontWeight: 500 }}>
        Bids History
      </Typography>
      
   

      {bids?.length < 1 ? <Emptyplaceholder/> : bids?.map((bid, index) => (
        <Box key={index} sx={{ mb: index !== bids.length - 1 ? 2 : 0 }}>
          {/* Highest Bid Chip */}
          {index === 0 && (
            <Chip
              label="Highest Bid"
              size="small"
              sx={{
                mb: 1.5,
                fontSize: 12,
                fontFamily: "Inter, sans-serif",
                backgroundColor: "#DEF6EE",
                color: "#0E9234",
                fontWeight: 500,
                borderRadius: 2,
              }}
            />
          )}
          {bid.user === user._id && (
            <Chip
            label="My Bid"
            size="small"
            sx={{
              mb: 1.5,
              ml: 1,
              fontSize: 12,
              fontFamily: "Inter, sans-serif",
              backgroundColor: "#8e5f7f",
              color: "#fff",
              fontWeight: 500,
              borderRadius: 2,
            }}
          />
          )}

          {/* Amount & Date (First Row) */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="body1" sx={{ fontFamily: "Inter", fontWeight: 500 }}>
              AED {formatAmount(bid.bidAmount)}
            </Typography>
            <Typography variant="caption" color="gray" sx={{ fontFamily: "Inter, sans-serif" }}>
              Bid At {formatDateTime(bid.createdAt)}
            </Typography>
                 {/* Accept Bid Button */}

          </Box>
         {user._id === owner && (
           <Button
           variant="contained"
           size="small"
           sx={{
             backgroundColor: colors.buttoncolor,
             borderRadius: 2,
             fontWeight: 400,
             fontFamily: "Inter",
             fontSize: 10,
             mt:0.5
           }}
           onClick={() => acceptBid(bid._id)}
         >
           Accept
         </Button>
         )}

          {/* Divider */}
          {index !== bids.length - 1 && <Divider sx={{ mt: 2 }} />}
        </Box>
      ))}
    </Box>
  );
};

export default BidsHistory;
