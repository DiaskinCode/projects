import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Title } from '../Components/Title';

import { MainScreen } from '../Screens/MainScreen'
import AllArticlesScreen from '../Screens/AllArticlesScreen';
import ArticleScreen from '../Components/ArticleScreen';
import CategoryCalendarScreen from '../Screens/CategoryCalendarScreen';
import MainSettingsScreen from '../Screens/MainSettingsScreen';
import ExpressTranslateScreen from '../Screens/ExpressTranslateScreen';
import CurrencyAndFinancesScreen from '../Screens/CurrencyAndFinancesScreen';
import MainPopularQuestionsScreen from '../Screens/MainPopularQuestionsScreen'
import MapPlacesScreen from '../Screens/MapPlacesScreen'
import {MapScreen} from '../Screens/MapScreen'
import { useTranslation } from 'react-i18next';

const Main = createNativeStackNavigator();

export default function MainStackNavigator() {
    const {t} = useTranslation()
    return (
        <Main.Navigator>
            <Main.Screen 
                name='MainScreen' 
                component={MainScreen}
                options={({ navigation }) => ({
                    headerShadowVisible: false,
                    title: null,
                    headerLeft: () => (
                        <Title text='Hajjum'/>
                    ),
                    headerRight: () => (
                    <View style={styles.HeaderRight}>
                        <HeaderIcon source={require('../assets/Icons/Nut.png')} onPress={() => navigation.navigate('MainSettings')}/>
                    </View>
                    ),
                    })}/>
            <Main.Screen 
                name='MapRoute' 
                component={MapScreen}
                options={({ navigation }) => ({
                    headerShown: false
                })}/>
            <Main.Screen 
                name='Attractions' 
                component={MapPlacesScreen}
                options={({ navigation }) => ({
                    headerShadowVisible: false,
                        headerTitle: () => (
                            <Text style={styles.HeaderTitle}>{t('attractions')}</Text>
                        ),
                        headerLeft: () => (
                            <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => navigation.goBack()}/>
                        )
                    })}/>
            <Main.Screen
                name='AllArticlesScreen'
                component={AllArticlesScreen}
                options={({ navigation }) => ({
                    headerShadowVisible: false,
                    headerTitle: () => 
                        <Text style={styles.HeaderTitle}>{t('articles')}</Text>,

                    headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => navigation.goBack()}/>
                    )
                    })}
                    
                />
            <Main.Screen
                name='ArticleScreen'
                component={ArticleScreen}
                options={({ navigation }) => ({
                    headerShadowVisible: false,
                    headerTitle: () => 
                        <Text style={styles.HeaderTitle}>{t('articles')}</Text>,
                    headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => navigation.goBack()}/>
                    )                    
                    })}
                    
                />
            <Main.Screen
                name='CategoryCalendarScreen'
                component={CategoryCalendarScreen}
                options={({ navigation }) => ({
                    headerShadowVisible: false,
                    headerTitle: () => 
                        <Text style={styles.HeaderTitle}>{t('calendar')}</Text>,
                    headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => navigation.goBack()}/>
                    )
                    })}
                />
            <Main.Screen
                name='MainSettings'
                component={MainSettingsScreen}
                options={({ navigation }) => ({
                    headerShadowVisible: false,
                    headerTitle: () => 
                        <Text style={styles.HeaderTitle}>{t('settings')}</Text>,
                    headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => navigation.goBack()}/>
                    )
                    })}
                />
            <Main.Screen
                name='ExpressTranslate'
                component={ExpressTranslateScreen}
                options={({ navigation, route }) => ({
                    headerShadowVisible: false,
                    headerTitle: () => (
                        <Text style={styles.HeaderTitle}>{t('express_translate')}</Text>
                    ),
                    headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => navigation.goBack()}/>
                    )
                    })}
                />

            <Main.Screen
                name='MainPopularQuestions'
                component={MainPopularQuestionsScreen}
                options={({ navigation, route }) => ({
                    headerShadowVisible: false,
                    headerTitle: () => (
                        <Text style={styles.HeaderTitle}>{t('faq')}</Text>
                    ),
                    headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => navigation.goBack()}/>
                    )
                    })}
                />
        </Main.Navigator>
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
    HeaderRight: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    HeaderTitle: {
        fontFamily: 'GolosBold',
        fontSize: 18
    },
});