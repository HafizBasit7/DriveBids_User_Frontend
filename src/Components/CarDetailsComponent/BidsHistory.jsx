import { Box, Typography, Divider, Chip } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getCarBiddingHistory } from "../../api/calls/car";
import { formatAmount, formatDateTime } from "../../utils/utils";

const bids = [
  { amount: "$30,000", bidOrder: "4th Bid", date: "12 December", time: "12:00PM", highest: true },
  { amount: "$24,000", bidOrder: "3rd Bid", date: "12 December", time: "12:00PM" },
  { amount: "$22,000", bidOrder: "2nd Bid", date: "12 December", time: "12:00PM" },
];

const BidsHistory = ({car}) => {

  const {data, isLoading} = useQuery({
    queryKey: ['biddingHistory', car],
    queryFn: () => getCarBiddingHistory(car),
  });
  const bids = data?.data?.bids;

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

      {bids.map((bid, index) => (
        <Box key={index} sx={{ mb: index !== bids.length - 1 ? 2 : 0 }}>
          {/* Highest Bid Chip */}
          {index === 0 && (
            <Chip
              label="Highest Bid"
              size="small"
              sx={{
                mb: 1,
                fontSize: 12,
                fontFamily: "Inter, sans-serif",
                backgroundColor: "#DEF6EE",
                color: "#0E9234",
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
          </Box>
{/* todo: ok  */}
          {/* Bid Order & Time (Second Row) */}
          {/* <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="body2" color="black" sx={{ fontFamily: "Inter" }}>
              {bid.bidOrder}
            </Typography>
            <Typography variant="caption" color="gray" sx={{ fontFamily: "Inter, sans-serif" }}>
              {bid.time}
            </Typography>
          </Box> */}

          {/* Divider */}
          {index !== bids.length - 1 && <Divider sx={{ mt: 2 }} />}
        </Box>
      ))}
    </Box>
  );
};

export default BidsHistory;
