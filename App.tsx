import { SafeAreaView, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from './screens/profile';
import HomeScreen from './screens/home';
import styles from './styles';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function RenderApp() {
  return (
    <SafeAreaView style={styles.appContainer}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: { backgroundColor: '#005265' },
            tabBarLabelStyle: { color: 'white' },
          }}
        >
          <Tab.Screen
            name="Mój profil"
            component={HomeScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <FontAwesome5 name="home" color={color} size={size} />
              ),
              tabBarActiveTintColor: 'white', // Ustawienie koloru wybranego elementu
            }}
          />
          <Tab.Screen
            name="Treningi"
            component={ProfileScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <FontAwesome5 name="running" color={color} size={size} />
              ),
              tabBarActiveTintColor: 'white', // Ustawienie koloru wybranego elementu
            }}
          />
          <Tab.Screen
            name="Jedzenie"
            component={ProfileScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <FontAwesome5 name="utensils" color={color} size={size} />
              ),
              tabBarActiveTintColor: 'white', // Ustawienie koloru wybranego elementu
            }}
          />
          <Tab.Screen
            name="Profil"
            component={ProfileScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <FontAwesome5 name="user" color={color} size={size} />
              ),
              tabBarActiveTintColor: 'white', // Ustawienie koloru wybranego elementu
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
