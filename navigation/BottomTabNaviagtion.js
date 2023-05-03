import React, { Component,useEffect,useState } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainStackNavigator from './MainStackNavigator';
import QuestionsStackNavigator from './QuestionsStackNavigator'
import TheoryStackNavigator from './TheoryStackNavigator';
import RiteStackNavigator from './RiteStackNavigator';
import AccountStackNavigation from './AccountStackNavigation';
import MapStackNavigator from './MapStackNavigator';
import { useTranslation } from 'react-i18next';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation () {
    const {t} = useTranslation()
    function handleNavigateToOtherScreen() {
        navigation.reset({
          index: 0,
          routes: [{ name: 'OtherScreen' }],
        });
    }
    
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarLabel: ({focused}) => {
                    return <Text style={styles.tabBarLabel}>{focused ? '' : route.name}</Text>},
                tabBarStyle: {
                    borderTopWidth: 0, 
                    width: '95%',
                    alignSelf: 'center',
                    elevation: 0,
                    marginBottom:15,
                },
            })}
            >
            <Tab.Screen
                name={t('home')}
                component={MainStackNavigator}
                options={{tabBarIcon: ({focused}) => focused ? 
                    <TabIcon type='Active' image={require('../assets/Icons/TabIcons/Filled/Home.png')}/> : 
                    <TabIcon image={require('../assets/Icons/TabIcons/Light/Home.png')}/>,
                }}
            />
            <Tab.Screen
                name={t('theory')}
                component={TheoryStackNavigator}
                options={{tabBarIcon: ({focused}) => focused ? 
                    <TabIcon type='Active' image={require('../assets/Icons/TabIcons/Filled/Book.png')}/> : 
                    <TabIcon image={require('../assets/Icons/TabIcons/Light/Book.png')}/>
                }}
            />
            <Tab.Screen
                name={t('rites')}
                component={RiteStackNavigator}
                options={{tabBarIcon: ({focused}) => focused ? 
                    <TabIcon type='Active' image={require('../assets/Icons/TabIcons/Filled/Layers.png')}/> : 
                    <TabIcon image={require('../assets/Icons/TabIcons/Light/Layers.png')}/>
                }}
            />
            <Tab.Screen
                name={t('map')}
                component={MapStackNavigator}
                options={{tabBarIcon: ({focused}) => focused ? 
                    <TabIcon type='Active' image={require('../assets/Icons/TabIcons/Filled/Compas.png')}/> :
                    <TabIcon image={require('../assets/Icons/TabIcons/Light/Compas.png')}/>
                 }}
            />
            <Tab.Screen
                name={t('questions')}
                component={QuestionsStackNavigator}
                 options={{tabBarIcon: ({focused}) => focused ? 
                    <TabIcon type='Active' image={require('../assets/Icons/TabIcons/Filled/InfoCircle.png')}/> : 
                    <TabIcon image={require('../assets/Icons/TabIcons/Light/InfoCircleTab.png')}/>
                }}
            />
            <Tab.Screen
                name={t('account')}
                component={AccountStackNavigation}
                options={{tabBarIcon: ({focused}) => focused ? 
                    <TabIcon type='Active' image={require('../assets/Icons/TabIcons/Filled/User.png')}/> : 
                    <TabIcon image={require('../assets/Icons/TabIcons/Light/User.png')}/>
             }}
            />
        </Tab.Navigator>
    )
}
function TabIcon({image, type}) {
    return (
        <View style={[styles.Container, styles[`Container${type}`]]}>
            <Image source={image} style={styles.Icon}/>
        </View>
    );
}

const styles = StyleSheet.create({
    Icon: {
        width: 24,
        height: 24,
        resizeMode: 'contain'
    },
    ContainerActive: {
        width: 48,
        height: 48,
        backgroundColor: '#61C66C',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginTop: 15,
    },
    tabBarLabel: {
        fontSize: 10, 
        color: '#1C1C1E',
        opacity: 0.3,
    },
    HeaderIcon: {
        marginLeft: 13,
        width: 26,
        height: 26,
        resizeMode: 'contain'
    },
    Header: {
        width: '86,8%'
    }
    
});