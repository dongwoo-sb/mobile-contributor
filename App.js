import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, TouchableOpacity} from 'react-native';

import HomeScreen from './pages/Home';
import ProfileScreen from './pages/Profile';
import CameraScreen from './pages/Camera';
import EditPage from './pages/EditPage';
import Upload from './pages/Upload';

import Icon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabBar({state, descriptors, navigation}) {
  if (state.index === 1) {
    return <View></View>;
  }

  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        paddingBottom: 40,
        paddingTop: 10,
        backgroundColor: '#1A1C1E',
        backgroundColor: 'rgba( 0, 0, 0, 0.9 )',
        justifyContent: 'space-around',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{justifyContent: 'center', alignItems: 'center'}}>
            {isFocused ? options.tabBarActiveIcon() : options.tabBarIcon()}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function HomeNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="EditPage" component={EditPage} />
      <Stack.Screen name="UploadPage" component={Upload} />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#1A1C1E',
            borderTopWidth: 0,
          },
          tabBarShowLabel: false,
        }}
        tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen
          name="Home"
          component={HomeNav}
          options={{
            tabBarIcon: () => <Icon name="home" size={24} color="#737E8C" />,
            tabBarActiveIcon: () => (
              <Icon name="home" size={24} color="white" />
            ),
          }}
        />
        <Tab.Screen
          name="Camera"
          component={CameraScreen}
          options={{
            tabBarIcon: () => <Icon name="plus" size={24} color="#737E8C" />,
            tabBarActiveIcon: () => (
              <Icon name="plus" size={24} color="white" />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: () => <Icon name="user" size={24} color="#737E8C" />,
            tabBarActiveIcon: () => (
              <Icon name="user" size={24} color="white" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
