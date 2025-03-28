import { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Avatar,
  Popover,
  Badge,
} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useQuery } from "@tanstack/react-query";
import { getMyNotifications } from "../../api/calls/auth";
import { timeAgo } from "../../utils/utils";

const Notifications = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const {data, isLoading} = useQuery({
    queryKey: ['notifications'],
    queryFn: () => getMyNotifications(1, 8),
  });

  const notifications = data?.data.notifications;

  const unreadCount = 0;

  const markAllAsRead = () => {
    //setNotifications(notifications.map((n) => ({ ...n, unread: false })));
  };

  return (
    <Box>
     
      <IconButton onClick={handleOpen}>
        <Badge badgeContent={unreadCount} color="primary">
          <NotificationsNoneIcon sx={{ color: "black" }} />
        </Badge>
      </IconButton>

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{ mt: 1 }}
      >
        <Box sx={{ width: 320, bgcolor: "white", borderRadius: 2, boxShadow: 3, fontFamily: "Inter, sans-serif" }}>
          {/* Header */}
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", px: 2, py: 1 }}>
            <Typography variant="h6" sx={{ fontFamily: "Inter, sans-serif" }}>Notifications</Typography>
            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={markAllAsRead}>
              {/* <Typography sx={{ fontSize: 12, color: "#0056D2", fontFamily: "Inter, sans-serif" }}>
                Mark all as read
              </Typography> */}
              {/* <MoreVertIcon fontSize="small" sx={{ color: "black", ml: 0.5 }} /> */}
            </Box>
          </Box>

          {/* Notification List */}
          {notifications?.map((notification) => (
            <Box
              key={notification._id}
              sx={{
                display: "flex",
                alignItems: "center",
                px: 1,
                py: 1,
                bgcolor: notification.unread ? "#E9F2FF" : "white",
                borderBottom: "1px solid #f0f0f0",
                cursor: "pointer",
                "&:hover": { bgcolor: "#f5f5f5" },
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Avatar src={notification.user.imgUrl || 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'} sx={{ width: 40, height: 40, mr: 1,alignSelf:"flex-start" }} />
              <Box sx={{ flex: 1 }}>
                <Typography  fontWeight="bold" sx={{ fontFamily: "Inter, sans-serif" , fontSize:14}}>
                  {notification.user.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Inter, sans-serif",fontSize:12 }}>
                  {notification.body}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontFamily: "Inter, sans-serif",fontSize:12 }}>
                  {timeAgo(notification.createdAt)}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Popover>
    </Box>
  );
};

export default Notifications;
