import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StackNavigationDrawer from './drawernavigation';
import {Image, Alert, TouchableOpacity, View} from 'react-native';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import login from '../../view/login';
import home from '../../view/home';
import splash from '../../view/splash';
import Profile from '../../view/profile';
import homedetail from '../../view/homedetail';
const Stack = createStackNavigator();

const HeaderLeft = () => {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Image
          source={require('../icon/drawer.png')}
          style={{width: 40, height: 40, marginLeft: 10}}
        />
      </TouchableOpacity>
    </View>
  );
};

function stackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={splash} />
      <Stack.Screen name="Home" component={home} />
      <Stack.Screen name="Login" component={login} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Homedetail" component={homedetail} />
      
      <Stack.Screen
        name="Drawer"
        component={StackNavigationDrawer}
        options={({}) => ({
          title: 'Home',
          headerStyle: {backgroundColor: 'pink'},
          headerTintColor: 'white',
          headerBackTitle: null,
          headerLeft: ({}) => <HeaderLeft />,
        })}
      />
    </Stack.Navigator>
  );
}

export default stackNavigation;
