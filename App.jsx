import React, { useState, useCallback } from 'react';
import { useFonts } from 'expo-font';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './screens/auth/LoginScreen';
import RegistrationScreen from './screens/auth/RegistrationScreen';
import ProfileScreen from './screens/mainScreen/ProfileScreen';
import CreateScreen from './screens/mainScreen/CreateScreen';
import PostsScreen from './screens/mainScreen/PostsScreen';

// import * as SplashScreen from "expo-splash-screen";
// SplashScreen.preventAutoHideAsync();

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  });

  // const onLayoutRootView = useCallback(async () => {
  // 	if (fontsLoaded) {
  // 		await SplashScreen.hideAsync();
  // 	}
  // }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        <MainTab.Navigator>
          <MainTab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ headerShown: false }}
          />
          <MainTab.Screen
            name="Posts"
            component={PostsScreen}
            options={{ headerShown: false }}
          />
          <MainTab.Screen
            name="Create"
            component={CreateScreen}
            options={{ headerShown: false }}
          />
        </MainTab.Navigator>
      </NavigationContainer>
      {/* <NavigationContainer>
        <AuthStack.Navigator>
          <AuthStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <AuthStack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{ headerShown: false }}
          />
        </AuthStack.Navigator>
      </NavigationContainer> */}
    </>
  );
};

export default App;
