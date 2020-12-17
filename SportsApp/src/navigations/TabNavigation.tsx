import 'react-native-gesture-handler';
import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen'
import FixtureScreen from '../screens/FixtureScreen'

import color from '../theme/colors'

const Tab = createBottomTabNavigator()

const TabNavigation: FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          tabStyle: {
            justifyContent: 'center',
          },
          activeTintColor: color.active,
          labelPosition: 'below-icon',
        }}
      // screenOptions={({ route }) => ({
      //   tabBarIcon: ({ focused, color, size }) => {
      //     let iconName;

      //     if (route.name === 'Home') {
      //       iconName = "home-outline"
      //     } else if (route.name === 'Fixture') {
      //       iconName = "football-outline";
      //     }
      //     // You can return any component that you like here!
      //     return <Icon name={iconName as string} size={size} color={color} />;
      //   },
      // })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          name="Fixture"
          component={FixtureScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigation;
