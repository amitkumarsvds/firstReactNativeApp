//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
//import Constants from 'expo-constants';
// create a component

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datasouce: [],
    };
  }

  componentDidMount() {
    const URL =
      'http://www.json-generator.com/api/json/get/cqfQoSMGmq?indent=2';

    fetch(URL)
      .then((response) => response.json())
      .then((resjson) => {
        this.setState({datasouce: resjson.book_array});
      })
      .catch((error) => console.warn('Error in fetching data ' + error));
  }

  onPressItem = (item) => {
    Alert.alert('Hi ' + item.name + ', your age is ' + item.age);
  };

  renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => this.onPressItem(item)}>
        <View style={styles.item}>
          <Image
            style={{width: 100, height: 100, borderRadius: 100 / 2}}
            source={{uri: item.image}}></Image>

          <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{marginLeft: 20}}>
              <Text style={styles.title}>{item.name}</Text>
            </View>

            <View style={{marginLeft: 20, marginTop: 10}}>
              <Text style={{fontSize: 25, color: 'grey'}}>{item.age}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    // Access the postId and otherParam via Destructuring assignment
    const {itemId, otherParam} = this.props.route.params;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.datasouce}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.age}
        />
      </SafeAreaView>
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
  container: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    fontSize: 32,
  },
});

//make this component available to the app
export default home;
