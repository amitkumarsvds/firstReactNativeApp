import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../home';
import Splash from '../splash';
import Login from '../login';
import Test from '../test';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../profile';
import login from '../login';
import StackNavigationDrawer from '../navigationdrawer';
import {Image, Alert, TouchableOpacity, View} from 'react-native';

import {useNavigation, DrawerActions} from '@react-navigation/native';
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
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'My home',
          headerStyle: {backgroundColor: 'green'},
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Drawer"
        component={StackNavigationDrawer}
        options={({}) => ({
          title: 'Profile 123',
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
