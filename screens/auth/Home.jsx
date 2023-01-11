import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

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
            iconName = focused ? 'grid' : 'grid-outline';
          } else if (route.name === 'Create') {
            iconName = focused && 'plus';
          } else if (route.name === 'Profile') {
            iconName = focused && 'user';
          }
          return <Feather name={iconName} size={24} color={color} />;
        },
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: '#FF6C00',
        tabBarItemStyle: {
          borderRadius: 50,
        },
      })}
    >
      <Tab.Screen
        options={{
          headerRight: () => (
            <TouchableOpacity>
              <Feather name="log-out" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
        name="Posts"
        component={PostsScreen}
      />
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
