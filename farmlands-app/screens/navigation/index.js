import LoginFormScreen from "../loginFormScreen";
import SignUpScreen from "../signUpScreen"
// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// screens
import HomeScreen from "../homeScreen"
import NewsScreen from "../newsScreen";
import ProfileScreen from "../profileScreen";
import GameScreen from "../gameScreen";
// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Header } from 'react-native/Libraries/NewAppScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
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
      {/* <Tab.Screen /> */}
    </Tab.Navigator>
  )
}

// export defulat
export function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginFormScreen} />
        <Stack.Screen name="Signup" component={SignUpScreen} />
        <Stack.Screen name="Home" component={MyTab} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}