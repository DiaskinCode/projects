import React,{useState,useEffect} from 'react';
import { View, Image, Text, StyleSheet, Dimensions,TouchableOpacity, } from 'react-native';
import { useTranslation } from 'react-i18next';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import mapStyle from '../Components/MapStyle.json'

import Geocoder from 'react-native-geocoding';
import { Marker } from "react-native-maps";

import { useGetPlaceByIdQuery } from '../api/apiSlice'
import { useGetRestaurantByIdQuery } from '../api/apiSlice'
import i18n from 'i18next'

export const PlaceOnMapScreen = (props) => {
      const {
        data: Place,
        isSuccess,
        isLoading,
        isError,
        error
      } = props.route.params.type 
      ? useGetRestaurantByIdQuery({language:i18n.language,id:props.route.params.id})
      : useGetPlaceByIdQuery({language:i18n.language,id:props.route.params.id})
      
      const {t} = useTranslation()
    
    const Navigation = useNavigation()
    
    const [adress, setAdress] = useState('Загрузка...');
    const [prompt, setPrompt] = useState(true);

  useEffect(() => { (async () => {
    Navigation.setOptions({
      headerTitle: () => <Text style={{fontFamily: 'GolosBold', fontSize: 18}}>{props.route.params.HeaderTitle}</Text>
    });
    let { status } = await Location.requestForegroundPermissionsAsync();
     if (status !== 'granted') {
      return; 
    } if (Place) {
      const data = await Geocoder.from(Place.latitude, Place.longitude) 
      setAdress(data.results[1]?.formatted_address)
    } 
    setPrompt(false) })(); }, [Place]);

    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          showsUserLocation={true}
          customMapStyle={mapStyle}
          followsUserLocation={true}
          zoomEnabled={true}
          scrollEnabled={true}
          mapType={"standard"}
          showsScale={true}
          region={{
            latitude: Place == undefined ? 37.78825 : JSON.parse(Place.latitude),
            longitude: Place == undefined ? -122.4324 : JSON.parse(Place.longitude),
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
        {isLoading ? <View></View> :
              props.route.params.type 
              ? <Marker key={Place.id}  coordinate={{latitude: JSON.parse(Place.latitude), longitude: JSON.parse(Place.longitude)}} onPress={() => Navigation.navigate('RestarauntScreen',{id: Place.id,HeaderTitle:Place.title})} />
              : <Marker key={Place.id}  coordinate={{latitude: JSON.parse(Place.latitude), longitude: JSON.parse(Place.longitude)}} onPress={() => Navigation.navigate('MapPlace',{id: Place.id,HeaderTitle:Place.title})} />}

        </MapView>

        {prompt && <View style={styles.loaderContainer}><Image style={styles.loader} source={require('../assets/images/spinner.gif')}/></View>}

        <View style={styles.adressInput}>
            <Text style={styles.adressInputText}>Адрес {'>'}</Text> 
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.adress}>{adress}</Text>
        </View>

        <View style={styles.MapBottomMenu}>
            <View style={styles.container}>
                <View style={styles.MenuNavigation}>
                    <TouchableOpacity style={styles.MenuNavigationItem} onPress={() => Navigation.navigate('MapPlaces')}>
                        <Image style={styles.MenuNavigationImage} source={require('../assets/images/places.png')}/>
                        <Text style={styles.MenuNavigationText}>{t('places')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.MenuNavigationItem} onPress={() => Navigation.navigate('MapRestaraunts')}>
                        <Image style={styles.MenuNavigationImage} source={require('../assets/images/food.png')}/>
                        <Text style={styles.MenuNavigationText}>{t('eat')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.MenuNavigationItem} onPress={() => Navigation.navigate('AboutCity')}>
                        <Image style={styles.MenuNavigationImage} source={require('../assets/images/aboutCity.png')}/>
                        <Text style={styles.MenuNavigationText}>{t('city')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.MenuNavigationItem} onPress={() => Navigation.navigate('MapHelp')}>
                        <Image style={styles.MenuNavigationImage} source={require('../assets/images/help.png')}/>
                        <Text style={styles.MenuNavigationText}>{t('help')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: Dimensions.get('window').height,
      justifyContent: 'center',
      alignItems:'flex-end',
      width:Dimensions.get('window').width,
      position:'relative'
    },
    loaderContainer:{
      padding:15,
      backgroundColor:'#fff',
      borderRadius:15,
      marginBottom:60,
    },
    loader:{
      height:25,
      width:25,
    },
    map: {
      height: '100%',
      width:Dimensions.get('window').width,
    },
    adressInput:{
      width:Dimensions.get('window').width * 0.90,
      backgroundColor:'#fff',
      height:45,
      position:'absolute',
      top:25,
      paddingHorizontal:20,
      alignItems:'center',
      flexDirection:'row',
      borderRadius:20,
      left:Dimensions.get('window').width * 0.05,
    },
    adress:{
      fontWeight:'500',
      marginLeft:5,
      maxWidth:'65%',
      fontSize:13
    },
    adressInputText:{
      fontSize:13
    },
    // 
    MenuNavigation: {
      marginTop:25,
      width:'100%',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
  },
  MenuNavigationItem: {
      alignItems:'center'
  },
  MenuNavigationImage:{
      width:58,
      height:60,
  },
  MenuNavigationText:{
      marginTop:5,
      fontWeight:'500',
      fontSize:12,
  },
  MapBottomMenu: {
      position:'absolute',
      bottom:0,
      left:0,
      width:Dimensions.get('window').width,
      height:150,
      backgroundColor:'#fff',
      borderTopLeftRadius:40,
      borderTopRightRadius:40,
      alignItems:'center',
  },
  container: {
      width:Dimensions.get('window').width * 0.85,
  },
  MenuFunctions: {
      width:Dimensions.get('window').width * 0.85,
      position:'relative',
      height:36,
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:30,
  },
  MenuFunction: {
      width:Dimensions.get('window').width * 0.41,
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      height:36,
      borderRadius:20,
      backgroundColor:'#F6F6F6',
      paddingLeft:15,
      paddingRight:6,
  },
  MenuFunctionActive: {
      width:Dimensions.get('window').width * 0.41,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      height:36,
      borderRadius:20,
      backgroundColor:'#61C66C',
      paddingLeft:15,
      paddingRight:6,
  },
  functionImage: {
      height:26,
      width:26,
      position:'absolute',
      right:8,
      top:5,
  },
  functionText: {
      fontWeight:'500',
      fontSize:14,
      width:'140%'
  },
  functionTextActive: {
      fontWeight:'500',
      fontSize:14,
      color:'#ffffff'
  },
   });