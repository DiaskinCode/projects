import React, { Component,useEffect } from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet } from 'react-native';
import { MapItem } from '../Components/MapItem';
import { useGetPlacesQuery } from '../api/apiSlice'
import { useNavigation } from '@react-navigation/native';
import i18n from 'i18next'
import { NoInternet } from '../Components/NoInternet';

export default function MapPlacesScreen () {
  const {
    data: Places,
    isSuccess,
    isLoading,
    isError,
    error,
    refetch
  } = useGetPlacesQuery(i18n.language)
  const Navigation = useNavigation()

 useEffect(() => {
    refetch();
  }, [i18n.language]);
  
    return (
      <ScrollView>
        <View style={styles.Container}>
        {Places == undefined ? <NoInternet/> : Places.map((place) => {
            return (
              <MapItem 
                id={place.id}
                key={place.id}
                title={place.title}
                desc={place.category}
                image={place.upload}
                pointButtonText={'На карте'}
                onPress={() => Navigation.navigate('MapPlace',{id: place.id,HeaderTitle:place.title})}
              />
            );
          })}
        </View>
      </ScrollView>
    );
}
const styles = StyleSheet.create({
    Container: {
      flex: 1,
      marginHorizontal: '6%',
      marginTop:26,
    }
});