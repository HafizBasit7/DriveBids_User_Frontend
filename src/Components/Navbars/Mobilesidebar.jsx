import {
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
  } from '@mui/material';
  
  import DriveEtaIcon from '@mui/icons-material/DriveEta';
  import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
  import LogoutIcon from '@mui/icons-material/Logout';
  import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
  import Logosvg from "../../assets/SVG/Mainlogo.svg";
  import slidercar from "../../assets/SVG/sidebarcar.svg";
  import colors from '../../Style/color';
  import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
  import { useNavigate } from "react-router-dom";
import SortIcon from '@mui/icons-material/Sort';
import PlaylistAddIcon from '@mui/icons-material/Sort';
import {useAuth} from "../../context/auth.context";

  const MobileSidebar = ({ open, handleClose, navigate }) => {
    const menuItems = [
      { icon: <PlaylistAddIcon/>, label: 'My Ads', route: '/my-ads' },
      { icon: <DriveEtaIcon />, label: 'Sell My Car', route: '/sell-car' },
      { icon: <PersonOutlineIcon />, label: 'Message', route: '/chat' },
      { icon: <SortIcon />, label: 'Browse Deals', route: '/search' },
    ];

    const {logoutUser} = useAuth();
  
    const handleMenuClick = (route) => {
      navigate(route);
      handleClose();
    };
  
    return (
      <Drawer
        anchor="left"
        open={open}
        onClose={handleClose}
        sx={{ '& .MuiDrawer-paper': { width: 320, borderRadius: '0 15px 15px 0' } }}
      >
        <Box
          sx={{
            p: 2,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
     
          <Box>
            <IconButton onClick={handleClose} sx={{ bgcolor: colors.buttoncolor, mb: 2,borderRadius:4,color:"white" }}>
              <KeyboardArrowLeftIcon sx={{fontSize:30}} />
            </IconButton>
  
            <Box sx={{ textAlign: 'center', mb: 3 }}>
              <img
                src={Logosvg}
                alt="DriveBidz"
                style={{ width: '250px', objectFit: 'contain' }}
              />
            </Box>
  
            <List>
              {menuItems.map((item, index) => (
                <ListItem
                  key={index}
                  onClick={() => handleMenuClick(item.route)}
                  sx={{
                    border: '1px solid #e0e0e0',
                    borderRadius: '10px',
                    mb: 2,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <ListItemIcon sx={{ minWidth: '40px' }}>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.label} sx={{fontFamily:"Inter", fontWeight:700}} />
                  </Box>
                  <ArrowForwardIosIcon sx={{ color: '#000', fontSize: '18px' }} />
                </ListItem>
              ))}
            </List>
          </Box>
  
          <Box sx={{ textAlign: 'start', mb: 3, position: "relative", left: -15 }}>
            <img
              src={slidercar}
              alt="Car"
              style={{ width: '80%', objectFit: 'contain' }}
            />
          </Box>
  
          <Button
            onClick={logoutUser}
            fullWidth
            variant="contained"
            startIcon={<LogoutIcon sx={{ fontSize: 30 }} />}  
            sx={{
              bgcolor: '#2563eb',
              textTransform: 'none',
              py: 1.5,
              backgroundColor: colors.buttoncolor,
              fontWeight: 500,
              borderRadius: 2,
              fontSize: 18,
              '&:hover': { bgcolor: '#1e50c1' },
            }}
          >
            Log Out
          </Button>
        </Box>
      </Drawer>
    );
  };
  
  export default MobileSidebar;
  