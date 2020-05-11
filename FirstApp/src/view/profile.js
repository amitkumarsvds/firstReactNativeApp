//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Spinner from 'react-native-loading-spinner-overlay';
// create a  functional component
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datasouce: {},
      loading: false,
    };
  }
  componentDidMount() {
    this.setState({loading: true});
    const URL =
      'http://www.json-generator.com/api/json/get/bVGsPfMUVu?indent=2';

    fetch(URL)
      .then((response) => response.json())
      .then((resjson) => {
        this.setState({loading: false});
        this.setState({datasouce: resjson.profile});
      })
      .catch((error) => {
        this.setState({loading: false});
        console.warn('Error in fetching data ' + error)});
  }

  render() {
    return (
      <View style={Styles.viewstyle}>
        <Spinner
          visible={this.state.loading}
          textContent={'Loading...'}
          color="#000000"
          textStyle={Styles.spinnerTextStyle}
        />
        <ScrollView>
          <Text style={Styles.textHeadingStyle}>First Name</Text>
          <Text style={Styles.textStyle}>{this.state.datasouce.firstname}</Text>
          <Text style={Styles.textHeadingStyle}>Last Name</Text>
          <Text style={Styles.textStyle}>{this.state.datasouce.lastname}</Text>
          <Text style={Styles.textHeadingStyle}>Email</Text>
          <Text style={Styles.textStyle}>{this.state.datasouce.email}</Text>
          <Text style={Styles.textHeadingStyle}>Gender</Text>
          <Text style={Styles.textStyle}>{this.state.datasouce.gender}</Text>
          <Text style={Styles.textHeadingStyle}>Phone</Text>
          <Text style={Styles.textStyle}>{this.state.datasouce.phone}</Text>
          <Text style={Styles.textHeadingStyle}>City</Text>
          <Text style={Styles.textStyle}>{this.state.datasouce.city}</Text>
          <Text style={Styles.textHeadingStyle}>Country</Text>
          <Text style={Styles.textStyle}>{this.state.datasouce.country}</Text>
          <Text style={Styles.textHeadingStyle}>zip</Text>
          <Text style={Styles.textStyle}>{this.state.datasouce.zip}</Text>
        </ScrollView>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  viewstyle: {
    height: '100%',
    width: '100%',

    backgroundColor: '#FFFFFF',
  },
  textHeadingStyle: {
    padding: 10,
    marginTop: 5,
    color: '#D83B13',
    backgroundColor: '#d3d3d3',
    fontSize: 20,
  },
  textStyle: {
    padding: 10,
    fontSize: 20,
  },
  spinnerTextStyle: {
    color: '#000000',
  },
});

//make this component available to the app
export default Profile;
