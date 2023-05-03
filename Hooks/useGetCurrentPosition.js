import React,{ useState, useEffect } from 'react';
import * as Location from 'expo-location';
import Geocoder from 'react-native-geocoding';
import {Linking,Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function useGetCurrentPosition() {
  const [location, setLocation] = useState(null);
  const [adress, setAdress] = useState(null);
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          t('location_permission_required'),
          t('enable_location'),
          [
            { text: 'Cancel', style: 'cancel' },
            {
              text: 'Open Settings',
              onPress: () => {
                Linking.openSettings();
              },
            },
          ]
        );
      }

      let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});

      if (location) {
        const data = await Geocoder.from(location.coords.latitude, location.coords.longitude)
        const userAdress = data.results[1]?.formatted_address.split(',', 1)[0]

        await AsyncStorage.setItem('UserLocation', JSON.stringify(userAdress));
        await AsyncStorage.setItem('UserLatitude', JSON.stringify(location.coords.latitude));
        await AsyncStorage.setItem('UserLongitude', JSON.stringify(location.coords.longitude));

        setAdress(userAdress) 

        setCoordinates([
          {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          },
          {
            latitude: 51.125,
            longitude: 71.672222,
          },
        ])
      }
    })();
  }, []);



  return adress
}