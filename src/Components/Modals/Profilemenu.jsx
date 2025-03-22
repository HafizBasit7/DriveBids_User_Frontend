import { useState } from "react";
import {
  Avatar,
  Box,
  Typography,
  Divider,
  Menu,
  MenuItem,
  ListItemIcon,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LockIcon from "@mui/icons-material/Lock";
import LogoutIcon from "@mui/icons-material/Logout";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import GavelIcon from "@mui/icons-material/Gavel";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const ProfileMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path) => {
    navigate(path);
    handleClose();
  };

  return (
    <Box>
      <IconButton onClick={handleClick}>
        <Avatar sx={{ bgcolor: "blue" }}>S</Avatar>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 4,
          sx: {
            width: 300,
            p: 1,
            borderRadius: 3,
            boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
          },
        }}
      >
        {/* User Info */}
        <Box sx={{ p: 1.5, display: "flex", alignItems: "center", gap: 1.5 }}>
          <Avatar sx={{ bgcolor: "blue", width: 50, height: 50 }}>S</Avatar>
          <Box>
            <Typography fontWeight="bold">Sofia Gul</Typography>
            <Typography variant="body2" color="gray">
              sofiagul@gmail.com
            </Typography>
          </Box>
        </Box>

        <Divider />

        {/* Menu Items */}
        <MenuItem
          onClick={() => handleNavigate("/edit-profile")}
          sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ListItemIcon><PersonIcon fontSize="small" /></ListItemIcon>
            My Profile
          </Box>
          <ChevronRightIcon fontSize="small" />
        </MenuItem>

        <MenuItem
          onClick={() => handleNavigate("/my-ads")}
          sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ListItemIcon><PlaylistAddIcon fontSize="small" /></ListItemIcon>
            My Ads
          </Box>
          <ChevronRightIcon fontSize="small" />
        </MenuItem>

        <MenuItem
          onClick={() => handleNavigate("/my-bids")}
          sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ListItemIcon><GavelIcon fontSize="small" /></ListItemIcon>
            My Bids
          </Box>
          <ChevronRightIcon fontSize="small" />
        </MenuItem>

        <MenuItem
          onClick={() => handleNavigate("/my-watchlist")}
          sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ListItemIcon><FavoriteBorderIcon fontSize="small" /></ListItemIcon>
            Watchlist
          </Box>
          <ChevronRightIcon fontSize="small" />
        </MenuItem>

        <MenuItem
          onClick={() => handleNavigate("/change-password")}
          sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ListItemIcon><LockIcon fontSize="small" /></ListItemIcon>
            Change Password
          </Box>
          <ChevronRightIcon fontSize="small" />
        </MenuItem>

        {/* Logout */}
        <MenuItem
          onClick={() => handleNavigate("/login")}
          sx={{ p: 2 }}
        >
          <ListItemIcon><LogoutIcon fontSize="small" /></ListItemIcon>
          Log Out
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default ProfileMenu;
