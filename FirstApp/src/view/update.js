import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import MapView from 'react-native-maps';
class update extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          //  provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 12.8705558,
            longitude: 77.65576009999995,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          <MapView.Marker
            coordinate={{
              latitude: 12.8705558,
              longitude: 77.65576009999995,
            }}
            title="My Marker at hosa road"
            description="On the way to my home">
           
          </MapView.Marker>
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default update;
