import React from 'react';
import {Image} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import home from './home';
import Test from './test';
import Profile from './profile';
const Drawer = createDrawerNavigator();
import Header from '../screens/header';
import MainTabScreen from './MainTabScreen';
function StackNavigationDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <Header {...props} />}
      initialRouteName="Profile">
      <Drawer.Screen name="Profile" component={MainTabScreen} />
    
    </Drawer.Navigator>
  );
}
/**<Drawer.Screen name="Test" component={Test} />**/
export default StackNavigationDrawer;
