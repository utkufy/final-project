import React, { useEffect } from 'react';
import { View, Button } from 'react-native';
import {
  configureNotifications,
  requestPermissions,
  sendImmediateNotification
} from '../utils/notification';

const NotificationExample = () => {
  useEffect(() => {
    configureNotifications();
    requestPermissions();
  }, []);

  const handleImmediateNotification = () => {
    sendImmediateNotification(
      'Anlık Bildirim',
      'Bu bir anlık bildirim örneğidir!'
    );
  };

  return (
    <View>
      <Button
        title="Bildirim Gönder"
        onPress={handleImmediateNotification}
      />
    </View>
  );
};

export default NotificationExample;
