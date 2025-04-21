import { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  IconButton,
  Avatar,
  Popover,
  Badge,
  CircularProgress,
} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getMyNotifications, getNotificationCount, setNotificationRead } from "../../api/calls/auth";
import { timeAgo } from "../../utils/utils";
import { useNavigate } from "react-router-dom";

const LIMIT = 10;

const Notifications = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const loaderRef = useRef();
  const observer = useRef();
  const queryClient = useQueryClient();

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  // Notifications query
  const {
    data,
    isLoading: messagesLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['notifications'],
    queryFn: ({ pageParam = 1 }) => getMyNotifications(pageParam, LIMIT),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage?.data?.notifications?.length === LIMIT
        ? allPages.length + 1
        : undefined;
    },
    staleTime: 1000 * 30,
  });

  // Count of notifications
  const { data: count, isLoading } = useQuery({
    queryKey: ['notificationCount'],
    queryFn: getNotificationCount,
    // refetchOnMount: false,
    staleTime: 1000 * 30,
  });

  const notificationMutation = useMutation({
    mutationFn: setNotificationRead,
    onMutate: (notificationId) => {
      queryClient.cancelQueries(['notificationCount']);
      queryClient.cancelQueries(['notifications']);

      const oldNoti = queryClient.getQueryData(['notifications']);
      const oldCount = queryClient.getQueryData(['notificationCount']);

      queryClient.setQueryData(['notificationCount'], oldData => {
        const updated = {...oldData};
        updated.data.count -= 1;
        return updated;
      });

      queryClient.setQueryData(['notifications'], oldData => {
        if (!oldData) return oldData;
        let updated = { ...oldData };
        updated.pages = updated.pages.map((page) => {
          return {
            ...page,
            data: {
              ...page.data,
              notifications: page.data.notifications.map((notif) =>
                notif._id === notificationId ? { ...notif, isRead: true } : notif
              ),
            },
          };
        });
      
        return updated;
      });

      return {oldCount, oldNoti};
    },
    onError: (_error, _variables, context) => {
      queryClient.setQueryData(['notifications'], context.oldNoti);
      queryClient.setQueryData(['notificationCount'], context.oldCount);
    },
  });

  const unreadCount = count?.data.count;
  const notifications = data?.pages.flatMap((page) => page?.data?.notifications) || [];

  useEffect(() => {
    if (!open) return;
    let current;
    const timeout = setTimeout(() => {
      observer.current = new IntersectionObserver((entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      });

      current = loaderRef.current;
      if (current) observer.current.observe(current);
    }, 100);

    return () => {
      clearTimeout(timeout);
      try {
        observer.current.unobserve(current);
        observer.current.disconnect();
      } catch (e) {}
    };
  }, [open, hasNextPage, isFetchingNextPage]);

  // Close on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (open) {
        handleClose();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  const handleNotiClick = (notification) => {
    if(!notification.isRead) {
      notificationMutation.mutate(notification._id);
    }

    if (notification.notificationType === "car") {
      navigate(`/car/${notification.metaData.car}`);
    } else if (notification.notificationType === "message") {
      navigate(`/chat?chatId=${notification.metaData.chat}`);
    }
  };

  return (
    <Box>
      <IconButton onClick={handleOpen}>
        <Badge badgeContent={unreadCount} color="primary">
          <NotificationsNoneIcon sx={{ color: "black" }} />
        </Badge>
      </IconButton>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{ mt: 1 }}
      >
        <Box
          sx={{
            width: 320,
            maxHeight: 400,
            overflowY: "auto",
            bgcolor: "white",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 2,
              py: 1,
            }}
          >
            <Typography variant="h6">Notifications</Typography>
          </Box>

          {notifications.length === 0 && !messagesLoading ? (
            <Box sx={{ px: 2, py: 3, textAlign: "center" }}>
              <Typography variant="body2" color="text.secondary">
                No notifications yet
              </Typography>
            </Box>
          ) : (
            notifications.map((notification) => (
              <Box
                onClick={() => handleNotiClick(notification)}
                key={notification._id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  px: 1,
                  py: 1,
                  bgcolor: !notification.isRead ? "#E9F2FF" : "white",
                  borderBottom: "1px solid #f0f0f0",
                  cursor: "pointer",
                  "&:hover": { bgcolor: "#f5f5f5" },
                }}
              >
                <Avatar
                  src={
                    notification.user.imgUrl ||
                    "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                  }
                  sx={{ width: 40, height: 40, mr: 1 }}
                />
                <Box sx={{ flex: 1 }}>
                  <Typography fontWeight="bold" sx={{ fontSize: 14 }}>
                    {notification.user.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: 12 }}
                  >
                    {notification.body}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ fontSize: 12 }}
                  >
                    {timeAgo(notification.createdAt)}
                  </Typography>
                </Box>
              </Box>
            ))
          )}

          {hasNextPage && open && (
            <Box
              ref={loaderRef}
              sx={{
                height: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CircularProgress size={20} />
            </Box>
          )}
        </Box>
      </Popover>
    </Box>
  );
};

export default Notifications;
