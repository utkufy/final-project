import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import NotificationExample from './components/NotificationExample';

export default function App() {
  return (
    <View style={styles.container}>
      <NotificationExample />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
});
