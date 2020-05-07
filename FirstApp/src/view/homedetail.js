//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class homedetail extends Component {
  render() {
    const {itemId} = this.props.route.params;
    return (
      <View style={style.viewstyle}>
        <Text style={{fontSize: 30}}>
          Data recieved from Home page: {itemId}
        </Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  viewstyle: {
    padding: 10,
    justifyContent: 'center',
  },
});

export default homedetail;
