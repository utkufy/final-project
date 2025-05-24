import * as Notifications from 'expo-notifications';

export async function requestPermissions() {
  const { status } = await Notifications.requestPermissionsAsync();
  return status;
}

export async function sendImmediateNotification(title, body) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: title,
      body: body,
    },
    trigger: null, 
  });
}

export function configureNotifications() {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowBanner: true,
      shouldShowList: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });
}