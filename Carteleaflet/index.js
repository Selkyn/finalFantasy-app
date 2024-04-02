import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { LatLng, LeafletView,  Map, TileLayer, Marker } from 'react-native-leaflet-view';

function Carteleaflet() {
    return (
        <View>
            <Text>blabla</Text>
        </View>
        // <LeafletView style={styles.container}>
        //   <Map style={styles.map}>
        //     <TileLayer
        //       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        //       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        //     />
        //     <Marker
        //       position={[51.505, -0.09]}
        //       title="Marker"
        //       description="This is a marker"
        //     />
        //   </Map>
        // </LeafletView>
      );
    };
    
    // const styles = StyleSheet.create({
    //   container: {
    //     flex: 1,
    //   },
    //   map: {
    //     flex: 1,
    //   },
    // });

export default Carteleaflet