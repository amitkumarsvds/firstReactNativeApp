//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
class Profile extends Component {
  constructor(props) {
    super(props);

    console.warn(props.navigation);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile test</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});

//make this component available to the app
export default Profile;
