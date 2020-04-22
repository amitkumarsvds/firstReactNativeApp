//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
class home extends Component {
  render() {
    // Access the postId and otherParam via Destructuring assignment
    const {itemId, otherParam} = this.props.route.params;
    return (
      <View style={styles.container}>
        <Text>Post id is: {itemId}</Text>
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
    backgroundColor: '#ffffff',
  },
});

//make this component available to the app
export default home;
