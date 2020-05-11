import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import MapView from 'react-native-maps';

import Geolocation from '@react-native-community/geolocation';
class update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLat: 0.0,
      currentLon: 0.0,
    };
  }
  componentDidMount() {
    Geolocation.getCurrentPosition((position) => {
      this.setState({
        currentLat: position.coords.latitude,
        currentLon: position.coords.longitude,
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          //  provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          minZoomLevel={13}
          maxZoomLevel={17}
          region={{
            latitude: this.state.currentLat,
            longitude: this.state.currentLon,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
        
          
          <MapView.Marker
            coordinate={{
              latitude: this.state.currentLat,
              longitude: this.state.currentLon,
            }}
            title="Bren trillium"
            description="My Home"></MapView.Marker>
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
