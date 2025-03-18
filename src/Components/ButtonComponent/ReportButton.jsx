import { Button } from "@mui/material";
import colors from "../../Style/color";

const ReportButton = ({ title, onClick }) => {
  return (
    <Button variant="contained" onClick={onClick} sx={{ fontSize:10,fontFamily:"Inter",fontWeight:500, backgroundColor:colors.buttoncolor}}>
      {title}
    </Button>
  );
};

export default ReportButton;
