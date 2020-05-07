import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import Header from '../../CustomUtils/header';
import MainTabScreen from '../../view/MainTabScreen';
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
