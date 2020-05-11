//import liraries
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Spinner from 'react-native-loading-spinner-overlay';
// create a component
class login extends Component {
  state = {
    email: '',
    password: '',
    loading: false,
  };

  loginBtnClick = () => {

    this.props.navigation.navigate(
      'Drawer' /**{
      itemId: name[0],
      otherParam: 'anything you want here',
    }**/,
    );
    /**const {email, password} = this.state;
    if (email.length == 0) {
      alert('Enter username');
    } else if (password.length == 0) {
      alert('Enter password');
    } else {
      this.setState({loading: true});
      this.callApi().catch(function () {
        console.warn('For Dev:: Error in connecting API');
      });
    }**/
  };

  async callApi() {
    const response = await fetch('https://simplifiedcoding.net/demos/marvel/');
    const data = {name: 'AmitKumar'};
    if (response.ok) {
      const responsejson = await response.json();
      const name = responsejson.map((text) => text.name);
      this.props.navigation.navigate(
        'Drawer' /**{
        itemId: name[0],
        otherParam: 'anything you want here',
      }**/,
      );

      // Access the postId and otherParam via Destructuring assignment for next class
      // const {itemId, otherParam} = this.props.route.params;
    } else {
      alert('Response failed with error code:' + response.status);
    }
    this.setState({loading: false});
  }

  render() {
    return (
      <View style={styles.viewIndicator}>
        <Spinner
          visible={this.state.loading}
          textContent={'Loading...'}
          color="#000000"
          textStyle={styles.spinnerTextStyle}
        />
        <View>
          <Text style={styles.textStyle}>Hi User</Text>

          <View style={styles.parent}>
            <TextInput
              onChangeText={(text) => this.setState({email: text})}
              style={styles.textInputStyle}
              underlineColorAndroid="transparent"
              placeholder="Username"></TextInput>

            <TextInput
              style={styles.textInputStyle}
              onChangeText={(text) => this.setState({password: text})}
              placeholder="Password"></TextInput>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => this.loginBtnClick()}>
              <Text style={{color: 'white', fontSize: 25}}> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
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

  viewIndicator: {
    width: '100%',
    height: '100%',

    backgroundColor: '#ffffff',
  },
  textStyle: {
    fontSize: 20,
    margin: 10,
    alignSelf: 'center',
  },
  parent: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    height: '80%',
  },
  textInputStyle: {
    fontSize: 20,
    margin: 10,
    width: '90%',
    borderRadius: 10,
    padding: 10,
    borderColor: '#7a42f4',
    borderWidth: 1,
    alignSelf: 'center',
    borderColor: '#000000',
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
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.5,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinnerTextStyle: {
    color: '#000000',
  },
});

//make this component available to the app
export default login;
