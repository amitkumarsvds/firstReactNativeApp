//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// create a  functional component
const Profile = ({navigation}) => {
  
  navigationOptions: () => ({
    headerTitle: <FormattedMessage id="title" />
  })

  return (
    <View style={{justifyContent: 'center'}}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => navigation.navigate('Login')}>
        <Text
          style={{
            color: 'red',
            fontSize: 25,
          }}>
          {' '}
          Go to Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#FFFFFF',
  },
});

//make this component available to the app
export default Profile;
