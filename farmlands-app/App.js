import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//Screen Imports
import HomeScreen from './screens/homeScreen';
import ProfileScreen from './screens/profileScreen';
import GameScreen from './screens/gameScreen';
import NewsScreen from './screens/newsScreen';
// views
import TopNavBar from './views/topNavBar';
// the tab navigation import
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';


// Tab navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container02}>
      {/* Tab */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            // * remember you have the change the icon names
            if (route.name === 'Home') {
              iconName = focused
                ? 'home-outline'
                : 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'image-outline' : 'image-outline';
            } else if (route.name === 'Game') {
              iconName = focused ? 'game-controller-outline' : 'game-controller-outline';
            }else if (route.name === 'News') {
              iconName = focused ? 'newspaper-outline' : 'newspaper-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Game" component={GameScreen} />
        <Tab.Screen name="News" component={NewsScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container02:{
    backgroundColor:'#82BF00'
  }
});
