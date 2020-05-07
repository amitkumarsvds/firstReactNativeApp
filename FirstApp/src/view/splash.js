//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// create a component
class splash extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Start counting when the page is loaded
    this.timeoutHandle = setTimeout(() => {
      // Add your logic for the transition
      this.props.navigation.navigate('Login');
    }, 2000);
  }

  uiView = () => {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 20}}>Splash Screen</Text>
        <Text style={{fontSize: 50}}>.....</Text>
      </View>
    );
  };
  render() {
    return <>{this.uiView()}</>;
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
export default splash;
