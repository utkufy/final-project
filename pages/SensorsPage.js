import React from 'react';
import { View, StyleSheet } from 'react-native';
import Sensors from '../components/Sensors';

const SensorsPage = () => {
  return (
    <View style={styles.container}>
      <Sensors />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SensorsPage;
