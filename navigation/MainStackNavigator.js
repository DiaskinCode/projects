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
import PopularQuestionsScreen from '../Screens/PopularQuestionsScreen';
import RiteScreen from '../Screens/RiteScreen';

const Main = createNativeStackNavigator();

export default function MainStackNavigator() {
    const Navigation = useNavigation()

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
                        <HeaderIcon source={require('../assets/Icons/MagnifyingGlass.png')}/>
                        <HeaderIcon source={require('../assets/Icons/Nut.png')} onPress={() => navigation.navigate('MainSettings')}/>
                    </View>
                    ),
                    })}/>
            <Main.Screen
                name='AllArticlesScreen'
                component={AllArticlesScreen}
                options={({ navigation }) => ({
                    headerShadowVisible: false,
                    headerTitle: () => 
                        <Text style={styles.HeaderTitle}>Статьи</Text>,
                    headerRight: () => (
                        <HeaderIcon source={require('../assets/Icons/MagnifyingGlass.png')}/>
                    ),
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
                        <Text style={styles.HeaderTitle}>Статья</Text>,
                    headerRight: () => (
                        <HeaderIcon source={require('../assets/Icons/UploadSimple.png')}/>
                    ),
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
                        <Text style={styles.HeaderTitle}>Каленьдарь</Text>,
                    headerRight: () => (
                        <HeaderIcon source={require('../assets/Icons/MagnifyingGlass.png')}/>
                    ),
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
                        <Text style={styles.HeaderTitle}>Настройки</Text>,
                    headerRight: () => (
                        <HeaderIcon source={require('../assets/Icons/MagnifyingGlass.png')}/>
                    ),
                    headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => navigation.goBack()}/>
                    )
                    })}
                />
            <Main.Screen
                name='ExpressTranslate'
                component={ExpressTranslateScreen}
                options={({ navigation }) => ({
                    headerShadowVisible: false,
                    headerTitle: () => (
                        <Text style={styles.HeaderTitle}>Экспресс перевод</Text>
                    ),
                    headerRight: () => (
                        <HeaderIcon source={require('../assets/Icons/MagnifyingGlass.png')}/>
                    ),
                    headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => navigation.goBack()}/>
                    )
                    })}
                />
            <Main.Screen
                name='PopularQuestionsScreen'
                component={PopularQuestionsScreen}
                options={({ navigation }) => ({
                    headerShadowVisible: false,
                    headerTitle: () => (
                        <Text style={styles.HeaderTitle}>Частые вопросы</Text>
                    ),
                    headerRight: () => (
                        <HeaderIcon source={require('../assets/Icons/MagnifyingGlass.png')}/>
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
    }
});