import React from 'react';
import {Image} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import home from './home';
import Test from './test';
import Profile from './profile';
const Drawer = createDrawerNavigator();
function StackNavigationDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Profile">
      <Drawer.Screen name="Profile" component={Profile}  />
      <Drawer.Screen name="Test" component={Test} />
    </Drawer.Navigator>
  );
}

export default StackNavigationDrawer;
