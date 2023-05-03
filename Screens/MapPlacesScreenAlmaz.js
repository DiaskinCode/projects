import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView, Linking, StyleSheet } from 'react-native';
import { MapItem } from '../Components/MapItem';
import { useNavigation } from '@react-navigation/native';

const latitude = 51.1254400;
const longitude = 71.4718450;
const YandexTaxiUrl = `https://3.redirect.appmetrica.yandex.com/route?&end-lat=${latitude}&end-lon=${longitude}`
const UberUrl = `uber://?action=setPickup&pickup[latitude]=${latitude}&pickup[longitude]=${longitude}`;

export default function MapPlacesScreen () {
  const Navigation = useNavigation()

  function onMapBtnPress() {
    Linking.canOpenURL(YandexTaxiUrl).then(supported => {
      if (supported) {
        Linking.openURL(YandexTaxiUrl);
      } else {
        console.log("Don't know how to open URI: " + YandexTaxiUrl);
      }
    });
  }
  return (
    <ScrollView style={styles.Container}>
      <MapItem 
        title={'Масджид ан-Набави'}
        desc={'Религиозные достопримечательности'}
        image={require('../assets/images/Masjid-an-Nabawi.png')}
        pointButtonText={'На карте'}
        onMapBtnPress={() => onMapBtnPress()}
        onDetailedBtnPress={() => Navigation.navigate('MapPlacesDetailed')}
        />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
    Container: {
      flex: 1,
      marginHorizontal: '6%'
    }
});
