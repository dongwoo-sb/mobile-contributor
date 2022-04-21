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
      <Tab.Navigator options={{tabBarStyle: {backgroundColor: 'black'}}}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarStyle: {backgroundColor: 'black'},
            tabBarIcon: () => <Home />,
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Camera"
          component={CameraScreen}
          options={{
            tabBarStyle: {backgroundColor: 'black'},
            tabBarIcon: () => <Plus />,
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarStyle: {backgroundColor: 'black'},
            tabBarIcon: () => <User />,
            tabBarShowLabel: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
