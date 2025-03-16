import { Button } from "@mui/material";

const ReportButton = ({ title, onClick }) => {
  return (
    <Button variant="contained" onClick={onClick} sx={{ fontSize:10,fontFamily:"Inter",fontWeight:500}}>
      {title}
    </Button>
  );
};

export default ReportButton;
