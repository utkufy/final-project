import React from 'react';
import { View, StyleSheet } from 'react-native';
import Communication from '../components/Communication';

const ContactsPage = () => {
  return (
    <View style={styles.container}>
      <Communication />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ContactsPage;
