import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import pages
import MapPage from './pages/MapPage';
import ContactsPage from './pages/ContactsPage';
import NotificationsPage from './pages/NotificationsPage';
import SensorsPage from './pages/SensorsPage';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Harita') {
              iconName = focused ? 'map' : 'map-outline';
            } else if (route.name === 'Rehber') {
              iconName = focused ? 'people' : 'people-outline';
            } else if (route.name === 'Bildirimler') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            } else if (route.name === 'Sensörler') {
              iconName = focused ? 'hardware' : 'hardware-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2196F3',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Harita" component={MapPage} />
        <Tab.Screen name="Rehber" component={ContactsPage} />
        <Tab.Screen name="Bildirimler" component={NotificationsPage} />
        <Tab.Screen name="Sensörler" component={SensorsPage} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
