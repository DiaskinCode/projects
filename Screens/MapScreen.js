import React,{useState,useEffect, useCallback} from 'react';
import { View, Image, Text,Modal, StyleSheet, Dimensions,Linking,Alert,TouchableOpacity, Pressable, Platform } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import MapViewDirections from 'react-native-maps-directions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import mapStyle from '../Components/MapStyle.json'

import Geocoder from 'react-native-geocoding';

import { Marker } from "react-native-maps";

import { useGetPlacesQuery } from '../api/apiSlice'
import { useGetRestaurantsQuery } from '../api/apiSlice'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next';

export const MapScreen = ({navigation, route}) => {
  const {t} = useTranslation()
  const {
    data: Places,
    isSuccess,
    isLoading,
    isError,
    error
  } = useGetPlacesQuery(i18n.language)

  const {
    data: Restaurants,
  } = useGetRestaurantsQuery(i18n.language)

  
  const Navigation = useNavigation()
  const [userLocation, setUserLocation] = useState(null);
  
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [prompt, setPrompt] = useState(true);
  const [coordinates,setCoordinates] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  
  const [adress, setAdress] = useState(t('loading'));
  const [UserLatitude,setUserLatitude] = useState(null)
  const [UserLongitude,setUserLongitude] = useState(null)
  
  const [UserHotelLongitude,setUserHotelLongitude] = useState(null)
  const [UserHotelLatitude,setUserHotelLatitude] = useState(null)
  const [locationPermission, setLocationPermission] = useState(false);

  
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
          return;
        }
        
        const UserAdress = JSON.parse(await AsyncStorage.getItem('UserLocation'))
        const UserLatitude = JSON.parse(await AsyncStorage.getItem('UserLatitude'))
        const UserLongitude = JSON.parse(await AsyncStorage.getItem('UserLongitude'))

        await AsyncStorage.getItem('HotelAdressLongitude').then(data => {
          try {
            if(data === null || data === undefined) {
              console.log('null');
            } else 
            setUserHotelLongitude(data)
          } catch (error) {
            console.error(error)
          }
         })
    
        await AsyncStorage.getItem('HotelAdressLatitude').then(data => {
          try {
            if(data === null || data === undefined) {
              console.log('null');
            } else 
            setUserHotelLatitude(data)
          } catch (error) {
            console.error(error)
          }
         })
        

        if (UserAdress != null){
          setAdress(UserAdress)
          setPrompt(false)
        }

        if (UserLatitude && UserLongitude) {
          setPrompt(false)
          setLocationPermission(true);
          setUserLatitude(UserLatitude)
          setUserLongitude(UserLongitude)
          setCoordinates([
            {
              latitude: JSON.parse(UserLatitude),
              longitude: JSON.parse(UserLongitude),
            },
            {
              latitude: UserHotelLatitude == null || undefined ? 71.5113549 : JSON.parse(UserHotelLatitude),
              longitude: UserHotelLongitude == null || undefined ? 51.1257148 : JSON.parse(UserHotelLongitude),
            },
          ])
        }
      })();
  }, []);

  const [isPressed, setIsPressed] = useState(false);

  const navigateToTaxiApp = async (app) => {
    let UserHotelLongitude = null;
    let UserHotelLatitude = null;

    await AsyncStorage.getItem('HotelAdressLongitude').then(data => {
      try {
        if(data === null || data === undefined) {
        } else 
        UserHotelLongitude = data
      } catch (error) {
        console.error(error)
      }
     })

    await AsyncStorage.getItem('HotelAdressLatitude').then(data => {
      try {
        if(data === null || data === undefined) {
        } else 
        UserHotelLatitude = data
      } catch (error) {
        console.error(error)
      }
     })

    if (app == 'yandex'){
      const url = `https://3.redirect.appmetrica.yandex.com/route?start-lat=${UserLatitude}&start-lon=${UserLongitude}&end-lat=${UserHotelLatitude}&end-lon=${UserHotelLongitude}&level=50&ref=yoursiteru&appmetrica_tracking_id=1178268795219780156`;
    
      Linking.openURL(url).catch((error) => {
      });
    }
    if (app == 'uber'){
      const url = `https://m.uber.com/ul/?client_id=<CLIENT_ID>&action=setPickup&pickup[latitude]=${UserLatitude}&pickup[longitude]=${UserLongitude}&pickup[nickname]=UberHQ&pickup[formatted_address]=1455%20Market%20St%2C%20San%20Francisco%2C%20CA%2094103&dropoff[latitude]=${UserHotelLatitude}&dropoff[longitude]=${UserHotelLongitude}&dropoff[nickname]=Coit%20Tower&dropoff[formatted_address]=1%20Telegraph%20Hill%20Blvd%2C%20San%20Francisco%2C%20CA%2094133&product_id=a1111c8c-c720-46c3-8534-2fcdd730040d`;
    
      Linking.openURL(url).catch((error) => {
      });
    }
    if (app == 'careem'){
      const scheme = Platform.OS === 'ios' ? 'careem://cab/' : 'https://app.adjust.com/w83ax7g?deeplink=careem://cab/';
      const url = `${scheme}route?dropoff[latitude]=${UserLatitude}&dropoff[longitude]=${UserLongitude}`;
    
      Linking.openURL(url).catch(() => {
        // Handle error here
      });
    }
     
  };

  const handlePress = async (data) => {
    let UserHotelLongitude = null;
    let UserHotelLatitude = null;

    await AsyncStorage.getItem('HotelAdressLongitude').then(data => {
      try {
        if(data === null || data === undefined) {
        } else 
        UserHotelLongitude = data
      } catch (error) {
        console.error(error)
      }
     })

    await AsyncStorage.getItem('HotelAdressLatitude').then(data => {
      try {
        if(data === null || data === undefined) {

        } else 
        UserHotelLatitude = data
      } catch (error) {
        console.error(error)
      }
     })
    
      if (UserHotelLatitude == null) {
        Alert.alert(t('add_hotel'))
      } else {
        setCoordinates((prevState) => [
          {
            latitude: JSON.parse(UserLatitude),
            longitude: JSON.parse(UserLongitude),
          },
          {
            latitude: JSON.parse(UserHotelLatitude),
            longitude: JSON.parse(UserHotelLongitude),
          },
        ])

        setIsPressed((prevState) => !prevState);
      }

  };

    return (
      <View style={styles.container}>
          <View>
            <MapView
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={styles.map}
              customMapStyle={mapStyle}
              showsUserLocation={true}
              apiKey={"AIzaSyBQPaK7vaLhe6fAXh53K__nC1BGYsV193g"}
              initialRegion={{
                latitude: 21.422510,
                longitude:39.826168,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
              region={{
                latitude: isPressed == false ? 21.422510 : UserLatitude,
                longitude: isPressed == false ? 39.826168 : UserLongitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
            >
              {Places == undefined ? false : Places.map((place) => {
                return (
                  <Marker key={place.id} coordinate={{latitude: JSON.parse(place.latitude), longitude: JSON.parse(place.longitude)}} onPress={() => Navigation.navigate('MapPlace',{id: place.id,HeaderTitle:place.title})} />
                  );
                })}
              {Restaurants == undefined ? false : Restaurants.map((place) => {
                return (
                  <Marker key={place.id} coordinate={{latitude: JSON.parse(place.latitude), longitude: JSON.parse(place.longitude)}} onPress={() => Navigation.navigate('RestarauntScreen',{id: place.id,HeaderTitle:place.title})}>
                    <View style={{height:30,width:30,}}>
                      <Image style={{height:30,width:30,}} source={require('../assets/Icons/fork.png')}></Image>
                    </View>
                  </Marker>
                  );
                })}
              {isPressed == false && coordinates === [] ? false :
                <MapViewDirections
                  origin={coordinates[0]}
                  destination={coordinates[1]}
                  apikey={"AIzaSyCKKn8KVrLBr5jiIIgAC0mNpeWnZCObYq4"}
                  strokeWidth={3}
                  lineDashPattern={[47.12]}
                  strokeColor="#1C1C1E"
                />}
                {isPressed == false && coordinates != undefined ? false :
                <Marker coordinate={coordinates[1]}>
                  <View style={{height:30,width:30,}}>
                    <Image style={{height:30,width:30,}} source={require('../assets/Icons/myHotel.png')}></Image>
                  </View>
                </Marker>}
            </MapView>
          </View>

        <View style={styles.adressInput}>
            <Text style={styles.adressInputText}>{t('your_adress')} {'>'}</Text> 
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.adress}>{adress}</Text>
        </View>

        {/*  */}
    
        <View style={styles.MapBottomMenu}>
            <View style={styles.container}>
                <View style={styles.MenuFunctions}>
                    <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.MenuFunction}>
                            <Text style={styles.functionText}>{t('get_taxi')}</Text>
                            <Image style={styles.functionImage} source={require('../assets/images/get_taxi.png')}/>
                    </TouchableOpacity>

                    <Modal
                    onPress={() => setModalVisible(!modalVisible)}
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.ContainerContentWrapper}>
                        <Pressable style={styles.ModalClose} onPress={() => setModalVisible(!modalVisible)}>
                            <Image style={{height:20,width:20,}} source={require('../assets/Icons/X.png')}/>
                        </Pressable>
                        <View style={styles.ContentWrapper}>
                            <TouchableOpacity onPress={() => navigateToTaxiApp('yandex')} style={styles.ContentItem}><Text>Yandex</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => navigateToTaxiApp('careem')} style={styles.ContentItem}><Text>Careem</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => navigateToTaxiApp('uber')} style={styles.ContentItem}><Text>Uber</Text></TouchableOpacity>
                        </View>
                    </View>
                    <Pressable 
                        style={styles.centeredView} 
                        onPress={() => setModalVisible(!modalVisible)}/>
                </Modal>

                    {isPressed == false ? 
                        <TouchableOpacity style={styles.MenuFunction} onPress={handlePress}>
                                <Text style={styles.functionText} >{t('where_hotel')}</Text>
                                <Image
                                    style={styles.functionImage}
                                    source={require('../assets/images/find_hotel.png')}
                                />
                        </TouchableOpacity>
                        : 
                        <TouchableOpacity style={styles.MenuFunctionActive} onPress={handlePress}>
                            <Text style={styles.functionTextActive} >{t('where_hotel')}</Text>
                            <Image
                                style={styles.functionImage}
                                source={require('../assets/Icons/roundedX.png')}
                            />
                        </TouchableOpacity>
                        }
                </View>

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
    centeredView: {
      flex: 1,
      position:'relative',
      zIndex:1,
      backgroundColor:"rgba(0,0,0,.5)",
    },
    ContentItem:{
      height:60,
      width:'100%',
      borderBottomColor:"rgba(0,0,0,.1)",
      borderBottomWidth:1,
      alignItems:'center',
      justifyContent:'center',
    },
    ContainerContentWrapper:{
        position:'absolute',
        zIndex:2,
        top: '35%',
        left:'15%'
    },
    ContentWrapper:{
        backgroundColor:'#fff',
        height:'100%',
        minWidth:'70%',
        paddingTop:5,
        borderRadius:20,
        overflow:'hidden',
        alignItems:'center',
        justifyContent:'center',
    },
    preloader:{
        position:'absolute',
        height:30,
        width:30,
    },  
    ModalClose:{
        position:'absolute',
        top:-55,
        right:10,
        backgroundColor:'#F6F6F6',
        borderRadius:10,
        padding:5,
        alignItems:'center',
        justifyContent:"center",
        zIndex:2,
        height:35,
        width:35,
    },

  // 


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
      top:55,
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
      height:220,
      backgroundColor:'#fff',
      borderTopLeftRadius:40,
      borderTopRightRadius:40,
      alignItems:'center'
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
