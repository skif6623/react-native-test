import React from 'react';
import { useFonts } from 'expo-font';
import Router from './router';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RegistrationScreen from './screens/auth/RegistrationScreen';
import LoginScreen from './screens/auth/LoginScreen';
import Home from './screens/auth/Home';

import { Button } from 'react-native';

const AuthStack = createStackNavigator();

// import * as SplashScreen from "expo-splash-screen";
// SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  });

  const routing = Router(false);

  // const onLayoutRootView = useCallback(async () => {
  // 	if (fontsLoaded) {
  // 		await SplashScreen.hideAsync();
  // 	}
  // }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <AuthStack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <AuthStack.Screen name="Home" component={Home} />
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="Registration" component={RegistrationScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
