//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// create a component
const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Custom header</Text>

      <TouchableOpacity
        style={styles.touchable}
        onPress={() => navigation.navigate('home')}>
        <Text style={{color: 'red', fontSize: 25}}> Test</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{...styles.touchable, marginTop: 10}}
        onPress={() => navigation.navigate('Profile')}>
        <Text style={{color: 'red', fontSize: 25}}> Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,

    backgroundColor: '#ffffff',
  },
  touchable: {
    backgroundColor: '#D3D3D3',
    margin: 0,
    height: 42,
    width: '100%',
  },
});

//make this component available to the app
export default Header;
