import 'react-native-gesture-handler';
import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen'
import FixtureScreen from '../screens/FixtureScreen'

import color from '../theme/colors'
import Icon from 'react-native-vector-icons/Ionicons';

const HomeIcon = <Icon name="home-outline" size={30} />
const FootballIcon = <Icon name="football-outline" size={30} />

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
          labelPosition: 'below-icon'
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
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigation;
