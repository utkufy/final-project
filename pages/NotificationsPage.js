import React from 'react';
import { View, StyleSheet } from 'react-native';
import NotificationExample from '../components/NotificationExample';

const NotificationsPage = () => {
  return (
    <View style={styles.container}>
      <NotificationExample />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default NotificationsPage;
