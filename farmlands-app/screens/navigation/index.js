import LoginFormScreen from "../loginFormScreen";
import SignUpScreen from "../signUpScreen"
import HomeScreen from "../homeScreen"
// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// screens
import NewsScreen from "../newsScreen";
import ProfileScreen from "../profileScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// export defulat
export function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginFormScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="News" component={NewsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Signup" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}