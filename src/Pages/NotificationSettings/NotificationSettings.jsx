import { useNavigate } from "react-router-dom";
import {
  Box,
  FormControlLabel,
  Switch,
  Typography
} from "@mui/material";
import MainLayout from "../../Layouts/MainLayout";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getNotificationSettings, updateNotificationSettings } from "../../api/calls/auth";

const NotificationSettings = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const {data, isLoading} = useQuery({
    queryKey: ['notificationSettings'],
    queryFn: getNotificationSettings,
  });

  const updateMutation = useMutation({
    mutationFn: updateNotificationSettings,
    onMutate: async (payload) => {
      await queryClient.cancelQueries('notificationSettings');
      const previousNotificationSettings = queryClient.getQueryData(['notificationSettings']);

      const newData = {...previousNotificationSettings};
      newData.data.notificationSettings = {
        ...newData.data.notificationSettings,
        ...payload,
      };

      queryClient.setQueryData(["notificationSettings"], newData);

      return {previousNotificationSettings};
    },
    onError: async (_error, _newMessage, context) => {
      queryClient.setQueryData(["notificationSettings"], context.previousNotificationSettings);
    },
  });

  const saveSettings = async (key, value) => {
    updateMutation.mutate({[key]: value});
  };


  return (
    <MainLayout
      title="Notification Settings"
      subtitle="Update Notification Settings"
      buttonText="Back"
      onClick={() => navigate("/home")}
      isnotSellMyCar={true}
    >
      <Box
        width="60%"
        mx="auto"
        my={4}
        p={{ xs: 2, md: 4 }}
        borderRadius={2}
        boxShadow={2}
        bgcolor="#fff"
      >
        <Typography variant="h6" gutterBottom>
          Manage Your Notification Preferences
        </Typography>

        {!isLoading && (
          <Box display="flex" flexDirection="column" gap={2} mt={2}>
          <FormControlLabel
            control={
              <Switch
                checked={data.data.notificationSettings.newChat}
                onChange={() => saveSettings('newChat', !data.data.notificationSettings.newChat)}
              />
            }
            label="New Chat"
          />

          <FormControlLabel
            control={
              <Switch
                checked={data.data.notificationSettings.carSold}
                onChange={() => saveSettings('carSold', !data.data.notificationSettings.carSold)}
              />
            }
            label="Car Sold (Buy Now)"
          />

          <FormControlLabel
            control={
              <Switch
                checked={data.data.notificationSettings.bidAccepted}
                onChange={() => saveSettings('bidAccepted', !data.data.notificationSettings.bidAccepted)}
              />
            }
            label="Bid Accepted"
          />

          <FormControlLabel
            control={
              <Switch
                checked={data.data.notificationSettings.bidPlaced}
                onChange={() => saveSettings('bidPlaced', !data.data.notificationSettings.bidPlaced)}
              />
            }
            label="Bid Placed"
          />
        </Box>
        )}
      </Box>
    </MainLayout>
  );
};

export default NotificationSettings;
