import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ProfileScreen from '../mainScreen/ProfileScreen';
import CreateScreen from '../mainScreen/CreatePostsScreen';
import PostsScreen from '../mainScreen/PostsScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import { Feather } from '@expo/vector-icons';

const Home = ({ navigation, route }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: (focused, size, color) => {
          let iconName;

          if (route.name === 'Posts') {
            iconName = focused && 'grid';
          } else if (route.name === 'Create') {
            iconName = focused && 'plus';
          } else if (route.name === 'Profile') {
            iconName = focused && 'user';
          }
          return <Feather name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Posts" component={PostsScreen} />
      <Tab.Screen name="Create" component={CreateScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
