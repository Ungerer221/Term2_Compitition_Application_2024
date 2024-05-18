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
import { MyStack } from './screens/navigation';

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

// * stack navigation ---
const Stack = createStackNavigator();


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
    <MyStack></MyStack>
  )
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
