import 'react-native-gesture-handler';
import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen'
import FixtureScreen from '../screens/FixtureScreen'
import SettingsScreen from '../screens/SettingsScreen'
import TicketScreen from '../screens/TicketScreen'

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
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          name="Fixture"
          component={FixtureScreen}
        />
        <Tab.Screen
          name="My Tickets"
          component={TicketScreen}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigation;
