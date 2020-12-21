
import 'react-native-gesture-handler';
import React, { FC } from 'react'
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen'
import NewsScreen from '../screens/NewsScreen'

const Stack = createStackNavigator();

const options: StackNavigationOptions = {
  headerShown: false
}

const Navigation: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="News"
        component={NewsScreen}
      />
    </Stack.Navigator>
  )
}

export default Navigation;
