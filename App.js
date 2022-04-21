import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './pages/Home';
import ProfileScreen from './pages/Profile';
import CameraScreen from './pages/Camera';

import Home from './assets/home.svg';
import Plus from './assets/plus.svg';
import User from './assets/user.svg';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {backgroundColor: 'black'},
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => <Home />,
          }}
        />
        <Tab.Screen
          name="Camera"
          component={CameraScreen}
          options={{
            tabBarIcon: () => <Plus />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: () => <User />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
