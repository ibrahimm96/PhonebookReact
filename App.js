import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "./screens/authentication/LoginScreen"
import DisplayUserPhonebook from './components/DisplayUserPhonebook';
import ConnectScreen from './screens/tabs/ConnectScreen';
import DiscoverScreen from './screens/tabs/DiscoverScreen';
import HelpScreen from './screens/tabs/HelpScreen';
import useSendOTP from './hooks/useSendOTP';
import { useState } from 'react';
import DisplayLogin from './components/userVerification/DisplayLogin';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ConnectStack = ({ signedIn, onSignedIn }) => (
  <Stack.Navigator>
    {signedIn ? (
      <>
        <Stack.Screen name="ConnectMain" component={ConnectScreen} />
        <Stack.Screen name="DisplayUserPhonebook" component={DisplayUserPhonebook} />
      </>
    ) : (
      <Stack.Screen name="Login" options={{ headerShown: false }}>
        {({ navigation }) => <LoginScreen onSignedIn={onSignedIn} />}
      </Stack.Screen>
    )}
  </Stack.Navigator>
);

const MainTabNavigator = ({ signedIn, onSignedIn }) => (
  <Tab.Navigator>
    <Tab.Screen name="Connect">
      {() => <ConnectStack signedIn={signedIn} onSignedIn={onSignedIn} />}
    </Tab.Screen>
    <Tab.Screen name="Discover" component={DiscoverScreen} />
    <Tab.Screen name="Help" component={HelpScreen} />
  </Tab.Navigator>
);

const App = () => {
  const [signedIn, setSignedIn] = useState(false);

  const handleSignedIn = (signedInStatus) => {
    setSignedIn(signedInStatus);
  };

  return (
    <NavigationContainer>
      <MainTabNavigator signedIn={signedIn} onSignedIn={handleSignedIn} />
    </NavigationContainer>
  );
};

export default App;