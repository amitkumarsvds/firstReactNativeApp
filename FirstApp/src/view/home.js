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
import { ScrollView } from 'react-native-gesture-handler';
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
            style={{width: 60, height: 60, borderRadius: 60 / 2}}
            source={{uri: item.image}}></Image>

          <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{marginLeft: 20}}>
              <Text style={styles.title}>{item.name}</Text>
            </View>

            <View style={{marginLeft: 20, marginTop: 10}}>
              <Text style={{fontSize: 20, color: 'grey'}}>{item.age}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    // Access the postId and otherParam via Destructuring assignment
    // const {itemId, otherParam} = this.props.route.params;
    return (
      <SafeAreaView>
    
        <FlatList
          style={styles.container}
          data={this.state.datasouce}
          renderItem={this.renderItem}
          horizontal={true}
          keyExtractor={(item) => item.age}
        />

        <Text style={styles.textHeadingStyle}>First Name</Text>
        <Text style={styles.textStyle}>Amit</Text>
        <Text style={styles.textHeadingStyle}>Last Name</Text>
        <Text style={styles.textStyle}>Kumar</Text>
        <Text style={styles.textHeadingStyle}>Email</Text>
        <Text style={styles.textStyle}>Amit.kumarsvds@gmail.com</Text>

        <TouchableOpacity
          style={styles.touchable}
          onPress={() => {
            this.props.navigation.navigate(
              'Homedetail' ,{
            itemId: 'POJO'
          },
            );
          }}>
          <Text style={{color: 'white', fontSize: 25}}> Detail Page</Text>
        </TouchableOpacity>
        <Text style={styles.textHeadingStyle}>Gender</Text>
        <Text style={styles.textStyle}>Male</Text>

        <FlatList
          style={styles.container}
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 0,
    height: '20%',
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
    fontSize: 20,
  },
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
});

//make this component available to the app
export default home;
