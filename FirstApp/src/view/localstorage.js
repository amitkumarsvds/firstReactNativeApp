import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  AsyncStorage,
} from 'react-native';
import {TextInput} from 'react-native-paper';

class localstorage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };
  }

  displaydata = async () => {
    let item = await AsyncStorage.getItem('data');
    let jsonparse = JSON.parse(item);

    alert(jsonparse.name);
  };

  saveLocally = () => {
    const {name} = this.state;

    if (name.length == 0) {
      console.warn('Please enter your name to save it locally');
    } else {
      let obj = {
        name: name,
      };

      AsyncStorage.setItem('data', JSON.stringify(obj));
      console.warn('Saved data successfully');
    }
  };
  clearData = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys();
        await AsyncStorage.multiRemove(keys);
    } catch (error) {
        console.error('Error clearing app data.');
    }
}

  render() {
    return (
      <View
        style={{
          alignContent: 'center',
          marginTop: 50,
        }}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(fname) => this.setState({name: fname})}
          placeholder="Your name to save locally"></TextInput>

        <TouchableOpacity
          style={styles.touchable}
          onPress={() => this.saveLocally()}>
          <Text style={{color: 'white', fontSize: 25}}> Save</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.touchable}
          onPress={() => this.displaydata()}>
          <Text style={{color: 'white', fontSize: 25}}> Display</Text>
        </TouchableOpacity>
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
export default localstorage;
