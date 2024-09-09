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
import { UserContext } from './UserContext';
import { UserProvider } from './UserContext';
import DisplayRegister from './components/userVerification/DisplayRegister';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ConnectStack = () => {
  const { signedIn, setSignedIn } = React.useContext(UserContext);

  return (
    <Stack.Navigator>
      {signedIn ? (
        <>
          <Stack.Screen name="ConnectMain" component={ConnectScreen} />
          <Stack.Screen name="DisplayUserPhonebook" component={DisplayUserPhonebook} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" options={{ headerShown: false }}>
            {({ navigation }) => <LoginScreen onSignedIn={setSignedIn} />}
          </Stack.Screen>
          <Stack.Screen name="Register" component={DisplayRegister} />
        </>
      )}
    </Stack.Navigator>
  );
};

const MainTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Connect" component={ConnectStack} />
    <Tab.Screen name="Discover" component={DiscoverScreen} />
    <Tab.Screen name="Help" component={HelpScreen} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <MainTabNavigator />
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;