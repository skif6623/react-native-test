import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useCallback } from 'react';
import { useFonts } from 'expo-font';
import useRoute from './router';

// import * as SplashScreen from "expo-splash-screen";
// SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  });
  const routing = useRoute(true);

  // const onLayoutRootView = useCallback(async () => {
  // 	if (fontsLoaded) {
  // 		await SplashScreen.hideAsync();
  // 	}
  // }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default App;
