//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import CustomButton from './CustomButton';
// create a component
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <CustomButton
          onPress={() => {
            this.setState({number: 2});
            console.warn('Click');
          }}>
          New Button
        </CustomButton>
        <CustomText name={this.state.number}></CustomText>
      </View>
    );
  }
}

const CustomText = (props) => {
  return <Text>{props.name}</Text>;
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

//make this component available to the app
export default Test;
