import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const Carte = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [initialRegion, setInitialRegion] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [isAddingMarker, setIsAddingMarker] = useState(false);

  const handleMapPress = (event) => {
    if (isAddingMarker) {
      const { coordinate } = event.nativeEvent;
      setMarkers([...markers, coordinate]);
      setIsAddingMarker(false); // Désactiver le mode d'ajout de marqueurs après avoir ajouté un marqueur
    }
  };

  const handleAddMarkerButtonPress = () => {
    setIsAddingMarker(true); // Activer le mode d'ajout de marqueurs lors du clic sur le bouton
  };

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location.coords);

      setInitialRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });
    };

    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      {initialRegion && (
        <MapView style={styles.map} initialRegion={initialRegion} onPress={handleMapPress}>
          {currentLocation && (
            <Marker
              coordinate={{
                latitude: currentLocation.latitude,
                longitude: currentLocation.longitude,
              }}
              title="Your Location"
            />
          )}
          {markers.map((marker, index) => (
            <Marker key={index} coordinate={marker} />
          ))}
        </MapView>
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={handleAddMarkerButtonPress}
      >
        <Text style={styles.buttonText}>Ajouter un marqueur</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  button: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
  },
});

export default Carte;


// const [location, setLocation] = useState(null);

//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         console.log('Permission to access location was denied');
//         return;
//       }

//       const location = await Location.getCurrentPositionAsync({});
//       setLocation(location);

//       const watchId = await Location.watchPositionAsync(
//         { accuracy: Location.Accuracy.High, timeInterval: 1000, distanceInterval: 10 },
//         newLocation => {
//           setLocation(newLocation);
//         }
//       );

//       return () => {
//         if (watchId) {
//           Location.clearWatch(watchId);
//         }
//       };
//     })();
//   }, []);

//   const renderMap = () => {
//     if (!location) {
//       return null;
//     }

//     const { latitude, longitude } = location.coords;

//     return (
//       <WebView
//         source={{
//           html: `
//             <!DOCTYPE html>
//             <html>
//               <head>
//                 <title>Leaflet Map</title>
//                 <meta charset="utf-8" />
//                 <meta name="viewport" content="width=device-width, initial-scale=1" />
//                 <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
//                 <style>#map { height: 100vh; }</style>
//               </head>
//               <body>
//                 <div id="map"></div>
//                 <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
//                 <script>
//                   var map = L.map('map').setView([${latitude}, ${longitude}], 13);
//                   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//                     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                   }).addTo(map);
//                   var marker = L.marker([${latitude}, ${longitude}]).addTo(map);

//                   function updateMarker(newLat, newLon) {
//                     marker.setLatLng([newLat, newLon]);
//                   }
//                 </script>
//               </body>
//             </html>
//           `
//         }}
//       />
//     );
//   };

//   return (
//     <>
//       {renderMap()}
//     </>
//   );