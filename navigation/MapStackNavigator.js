import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MapScreen } from '../Screens/MapScreen';
import MapPlacesScreen from '../Screens/MapPlacesScreen'
import MapRestarauntsScreen from '../Screens/MapRestarauntsScreen'
import MapPlaceScreen from '../Screens/MapPlaceScreen'
import {PlaceOnMapScreen} from '../Screens/PlaceOnMapScreen'
import RestarauntScreen from '../Screens/RestarauntScreen'
import {AboutCityScreen} from '../Screens/AboutCityScreen'
import {MapHelpScreen} from '../Screens/MapHelpScreen'
import { useTranslation } from 'react-i18next';

const Map = createNativeStackNavigator();

export default function MapStackNavigator () {
    const {t} = useTranslation()
    return (
        <Map.Navigator>
            <Map.Screen name='MapMain' 
                component={MapScreen}
                options={({ navigation }) => ({
                    headerShown: false
                })}
            />
            <Map.Screen name='MapPlaces' component={MapPlacesScreen}
            screenOptions={{ headerShown: false }}
            options={({ navigation }) => ({
                headerShadowVisible: false,
                    headerTitle: () => (
                        <Text style={styles.headerTitle}>{t('attractions')}</Text>
                    ),
                    headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => navigation.goBack()}/>
                    )

                })}/>
           <Map.Screen name='MapHelp' component={MapHelpScreen}
            screenOptions={{ headerShown: false }}
            options={({ navigation }) => ({
                headerShadowVisible: false,
                    headerTitle: () => (
                        <Text style={styles.headerTitle}>{t('help')}</Text>
                    ),
                    headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => navigation.goBack()}/>
                    )

                })}/>
           <Map.Screen name='AboutCity' component={AboutCityScreen}
            screenOptions={{ headerShown: false }}
            options={({ navigation }) => ({
                headerShadowVisible: false,
                    headerTitle: () => (
                        <Text style={styles.headerTitle}>{t('about_city_name')}</Text>
                    ),
                    headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => navigation.goBack()}/>
                    )

                })}/>
            <Map.Screen name='MapRestaraunts' component={MapRestarauntsScreen}
            screenOptions={{ headerShown: false }}
            options={({ navigation }) => ({
                headerShadowVisible: false,
                    headerTitle: () => (
                        <Text style={styles.headerTitle}>{t('eat')}</Text>
                    ),
                    headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => navigation.goBack()}/>
                    )

                })}/>
            <Map.Screen name='MapPlace' component={MapPlaceScreen}
            screenOptions={{ headerShown: false }}
            options={({ navigation }) => ({
                headerShadowVisible: false,
                    headerTitle: () => (
                        <Text></Text>
                    ),
                    headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => navigation.goBack()}/>
                    )
                })}/>
            <Map.Screen name='RestarauntScreen' component={RestarauntScreen}
            screenOptions={{ headerShown: false }}
            options={({ navigation }) => ({
                headerShadowVisible: false,
                    headerTitle: () => (
                        <Text></Text>
                    ),
                    headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => navigation.goBack()}/>
                    )
                })}/>
            <Map.Screen name='PlaceOnMap' component={PlaceOnMapScreen}
            screenOptions={{ headerShown: false }}
            options={({ navigation }) => ({
                headerShadowVisible: false,
                    headerTitle: () => (
                        <Text></Text>
                    ),
                    headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => navigation.goBack()}/>
                    )
                })}/>

        </Map.Navigator>
    )
}
        function HeaderIcon(props) {
            return (
            <TouchableOpacity onPress={props.onPress}>
                <Image source={props.source}
                style={styles.Icon}/>
            </TouchableOpacity>
            )
        }
        const styles = StyleSheet.create({
            Icon: {
                marginLeft: 13,
                width: 26,
                height: 26,
                resizeMode: 'contain'
            },
            headerTitle: {
                fontFamily: 'GolosBold',
                fontSize: 18,
            }
        });