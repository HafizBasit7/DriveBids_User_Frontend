import { Skeleton, Box } from "@mui/material";

const SkeletonLoader = ({ count = 6, width = 250, height = 180 }) => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: { xs: "center", lg: "start" } }}>
      {[...Array(count)].map((_, index) => (
        <Skeleton key={index} variant="rectangular" width={width} height={height} sx={{ borderRadius: 2 }} />
      ))}
    </Box>
  );
};

export default SkeletonLoader;
