// * keep eye on this
import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import React, { useState } from 'react';
//Screen Imports
import HomeScreen from './screens/homeScreen';
import ProfileScreen from './screens/profileScreen';
import GameScreen from './screens/gameScreen';
import NewsScreen from './screens/newsScreen';
import SignUpScreen from './screens/signUpScreen';
import LoginFormScreen from './screens/loginFormScreen';
// views
import TopNavBar from './views/topNavBar';
// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getHeaderTitle } from '@react-navigation/elements';
// * keep eye on this
import { createStackNavigator } from '@react-navigation/stack';
// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Header } from 'react-native/Libraries/NewAppScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// IMPORT ENDS ----------------------------------------------------------------------------------------------------------------------------

// todo : Make a splash screen and have it working
// todo : better your react navigation
// todo : figure out nesting for navigation and then stack navigation
// todo : add back buttons 

// * Tab navigator ------------------------------------------------------------------------------------------------------------------------
const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen
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
        <Tab.Screen
          name="Signup"
          component={SignUpScreen}
          options={{
            tabBarLabel: 'Signup',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="newspaper-variant-outline" color={color} size={size} />
            ),
            tabBarActiveTintColor: '#F65774',
          }}
        /> */}
    </Tab.Navigator>
  );
}
// * stack navigation ---
const Stack = createStackNavigator();
function StackNavigator() {
  return (
    <Stack.Navigator>
      {/* Define your stack screens */}
      <Stack.Screen name="Signup" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

// Staus Bar Styling const ---
const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

// * The export defualt -------------------------------------------------------------------------------------------------------------------
export default function App() {
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
  const [statusBarTransition, setStatusBarTransition] = useState(
    TRANSITIONS[0],
  );
  // the return ---------------------------------------------------------------------------------------------------------------------------
  return (

    <NavigationContainer style={styles.container02}>
      {/* the get rid of the top bar  try removing the <NavigationContainer>*/}
      {/* https://reactnavigation.org/docs/bottom-tab-navigator/ */}
      {/* https://reactnavigation.org/docs/elements/#header */}
      {/*  */}

      <StatusBar
        animated={true}
        backgroundColor="black"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={false}
      />

      {/* <Stack.Navigator>
        <Stack.Screen
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
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
            tabBarActiveTintColor: '#F65774',
          }}
        />
      </Stack.Navigator> */}

      {/* // todo : Make a stack navigation for the login and signup screen*/}
      {/* Tab */}
      <Tab.Navigator
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
        <Tab.Screen
          name="Signup"
          component={SignUpScreen}
          options={{
            tabBarLabel: 'Signup',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="newspaper-variant-outline" color={color} size={size} />
            ),
            tabBarActiveTintColor: '#F65774',
          }}
        />
        <Tab.Screen
          name="Login"
          component={LoginFormScreen}
          options={{
            tabBarLabel: 'Login',
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
