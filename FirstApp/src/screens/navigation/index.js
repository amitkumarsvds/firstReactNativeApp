import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../home';
import Splash from '../splash';
import Login from '../login';

const Stack = createStackNavigator();
function stackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default stackNavigation;
