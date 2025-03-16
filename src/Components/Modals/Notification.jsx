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

const notificationsData = [
  { id: 1, name: "Edward Curr", message: "Sent you a message.", time: "17 min ago", unread: true },
  { id: 2, name: "Maria Hill", message: "Placed a new bid for your ad.", time: "45 min ago", unread: true },
  { id: 3, name: "Edward Curr", message: "Sent you a message.", time: "1 day ago", unread: false },
  { id: 4, name: "Maria Hill", message: "Requested to buy now.", time: "2 days ago", unread: false },
  { id: 5, name: "Alex Carpena", message: "Sent you a message.", time: "3 days ago", unread: false },
];

const Notifications = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notifications, setNotifications] = useState(notificationsData);

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const unreadCount = notifications.filter((n) => n.unread).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, unread: false })));
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
              <Typography sx={{ fontSize: 12, color: "#0056D2", fontFamily: "Inter, sans-serif" }}>
                Mark all as read
              </Typography>
              <MoreVertIcon fontSize="small" sx={{ color: "black", ml: 0.5 }} />
            </Box>
          </Box>

          {/* Notification List */}
          {notifications.map((notification) => (
            <Box
              key={notification.id}
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
              <Avatar sx={{ width: 40, height: 40, mr: 1,alignSelf:"flex-start" }} />
              <Box sx={{ flex: 1 }}>
                <Typography  fontWeight="bold" sx={{ fontFamily: "Inter, sans-serif" , fontSize:14}}>
                  {notification.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Inter, sans-serif",fontSize:12 }}>
                  {notification.message}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontFamily: "Inter, sans-serif",fontSize:12 }}>
                  {notification.time}
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
