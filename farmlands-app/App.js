import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
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
import { getHeaderTitle } from '@react-navigation/elements';
// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Header } from 'react-native/Libraries/NewAppScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


// Tab navigator
const Tab = createBottomTabNavigator();

// Staus Bar Styling const
const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

export default function App() {
  return (
    <NavigationContainer style={styles.container02}>
      {/* the get rid of the top bar  try removing the <NavigationContainer>*/}
      {/* https://reactnavigation.org/docs/bottom-tab-navigator/ */}
      {/* https://reactnavigation.org/docs/elements/#header */}
      {/*  */}

      {/* Tab */}
      <Tab.Navigator
        screenOptions={{ headerShown: false }}

      // * old Methode
      // screenOptions={({ route }) => ({
      //   tabBarIcon: ({ focused, color, size }) => {
      //     let iconName;
      //     // * remember you have the change the icon names
      //     if (route.name === 'Home') {
      //       iconName = focused
      //         ? 'home-outline'
      //         : 'home-outline';
      //     } else if (route.name === 'Profile') {
      //       iconName = focused ? 'image-outline' : 'image-outline';
      //     } else if (route.name === 'Game') {
      //       iconName = focused ? 'game-controller-outline' : 'game-controller-outline';
      //     }else if (route.name === 'News') {
      //       iconName = focused ? 'newspaper-outline' : 'newspaper-outline';
      //     }

      //     // You can return any component that you like here!
      //     return <Ionicons name={iconName} size={size} color={color} />;
      //   },
      //   tabBarActiveTintColor: 'tomato',
      //   tabBarInactiveTintColor: 'gray',
      // })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
            tabBarActiveTintColor: '#F65774',
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
            tabBarActiveTintColor: '#F65774',
          }}
        />
        <Tab.Screen
          name="Game"
          component={GameScreen}
          options={{
            tabBarLabel: 'Game',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="controller-classic-outline" color={color} size={size} />
            ),
            tabBarActiveTintColor: '#F65774',
          }}
        />
        <Tab.Screen
          name="News"
          component={NewsScreen}
          options={{
            tabBarLabel: 'News',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="newspaper-variant-outline" color={color} size={size} />
            ),
            tabBarActiveTintColor: '#F65774',
          }}
        />

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
  container02: {
    backgroundColor: '#82BF00'
  }
});
