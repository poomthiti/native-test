import 'react-native-gesture-handler';
import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from './HomeStack'
import FixtureScreen from '../screens/FixtureScreen'
import SettingsScreen from '../screens/SettingsScreen'
import TicketScreen from '../screens/TicketScreen'

import color from '../theme/colors'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faClock, faTicketAlt, faCogs } from '@fortawesome/free-solid-svg-icons'

const Tab = createBottomTabNavigator()

const TabNavigation: FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let icon;

            if (route.name === 'Home') {
              icon = faHome
            } else if (route.name === 'Fixtures') {
              icon = faClock
            } else if (route.name === 'My Tickets') {
              icon = faTicketAlt
            } else if (route.name === 'Settings') {
              icon = faCogs
            }
            return <FontAwesomeIcon icon={icon as any} size={size} color={color} />;
          },
        })}
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
          component={HomeStack}
        />
        <Tab.Screen
          name="Fixtures"
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
