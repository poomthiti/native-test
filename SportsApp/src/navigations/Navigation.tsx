import 'react-native-gesture-handler';
import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen'
import FixtureScreen from '../screens/FixtureScreen'

const Stack = createStackNavigator();

const options: StackNavigationOptions = {
  headerShown: false
}

const Navigation: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={options}
        initialRouteName="Home"
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Fixture"
          component={FixtureScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;
