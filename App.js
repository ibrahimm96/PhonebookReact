import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "./screens/authentication/LoginScreen"
import DisplayUserPhonebook from './components/DisplayUserPhonebook';
import ConnectScreen from './screens/tabs/ConnectScreen';
import DiscoverScreen from './screens/tabs/DiscoverScreen';
import HelpScreen from './screens/tabs/HelpScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ConnectStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="DisplayUserPhonebook" component={DisplayUserPhonebook} />
  </Stack.Navigator>
);

const MainTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Connect" component={ConnectStack} />
    <Tab.Screen name="Discover" component={DiscoverScreen} />
    <Tab.Screen name="Help" component={HelpScreen} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <MainTabNavigator />
    </NavigationContainer>
  );
};

export default App;
