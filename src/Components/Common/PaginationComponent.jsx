import { Box, Pagination } from "@mui/material";
import colors from "../../Style/color";

export default function PaginationComponent ({pages, page, handleChange}) {
    return (
    <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          mt: 4,
        }}
      >
        <Pagination
          count={pages}
          page={page}
          onChange={handleChange}
          shape="rounded"
          sx={{
            "& .MuiPaginationItem-root": {
              fontSize: "1.3rem",
              padding: "20px 16px",
              mt: 3,
              backgroundColor: "white",
              color: "black",
              mx: 1.5,
              border: "1px solid #6F6F6F",
              borderRadius: "8px",
            },
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: colors.buttoncolor,
              color: "white",
              border: `1px solid ${colors.buttoncolor}`,
            },
            "& .MuiPaginationItem-previousNext": {
              backgroundColor: "white",
              color: "black",
              borderRadius: "8px",
              border: "1px solid #6F6F6F",
              mx: 1.5,
            },
            "& .MuiPaginationItem-ellipsis": {
              fontSize: "1.3rem",
              padding: "5px 16px",
              mt: 3,
              backgroundColor: "white",
              color: "black",
              mx: 1.5,
              border: "1px solid #6F6F6F",
              borderRadius: "8px",
            },
          }}
        />

      {/* </Box> */}
    </Box>
    );
}