import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const CustomButton = (props) => {
  return (
    <View>
      <TouchableOpacity style={styles.touchable} onPress={props.onPress}>
        <Text style={{color: 'white', fontSize: 25}}> {props.children}</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  touchable: {
    backgroundColor: 'red',
    margin: 20,
    height: 42,
    width: '40%',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
  },
});

export default CustomButton;
