import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AccountScreen } from '../Screens/AccountScreen';
import { PersonalDataScreen } from '../Screens/PersonalDataScreen'
import { MyHotelScreen } from '../Screens/MyHotelScreen'
import { AccountSettingsScreen } from '../Screens/AccountSettingsScreen';
import { ReportScreen } from '../Screens/ReportScreen';
import { AboutAppScreen } from '../Screens/AboutAppScreen.js'
import { useNavigation } from '@react-navigation/native';

import { Title } from '../Components/Title';

const Account = createNativeStackNavigator();

export default function AccountStackNavigation () {
    return (
        <Account.Navigator initialRouteName='AccountScreen'>
            <Account.Screen name='AccountScreen' component={AccountScreen}
            options={{
                headerShadowVisible: false,
                    title: null,
                    headerLeft: () => (
                        <Title text='Мои данные'/>
                    ),
                    headerRight: () => (
                        <HeaderIcon source={require('../assets/Icons/MagnifyingGlass.png')}/>
                    ),
                }}/>
            <Account.Screen name='PersonalDataScreen' component={PersonalDataScreen}
            options={({ navigation }) => ({
                headerShadowVisible: false,
                    headerTitle: () => (
                        <Text style={styles.headerTitle}>Личные Данные</Text>
                    ),
                    headerRight: () => (
                        <HeaderIcon source={require('../assets/Icons/MagnifyingGlass.png')}/>
                    ),
                    headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => navigation.goBack()}/>
                    )
                })}/>
            <Account.Screen name='MyHotelScreen' component={MyHotelScreen}
            options={({ navigation }) => ({
                headerShadowVisible: false,
                    headerTitle: () => (
                        <Text style={styles.headerTitle}>Мой отель</Text>
                    ),
                    headerRight: () => (
                        <HeaderIcon source={require('../assets/Icons/UploadSimple.png')}/>
                    ),
                    headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => navigation.goBack()}/>
                    )
                })}/>
            <Account.Screen name='AccountSettings' component={AccountSettingsScreen}
            options={({ navigation }) => ({
                headerShadowVisible: false,
                    headerTitle: () => (
                        <Text style={styles.headerTitle}>Настройки</Text>
                    ),
                    headerRight: () => (
                        <HeaderIcon source={require('../assets/Icons/MagnifyingGlass.png')}/>
                    ),
                    headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => navigation.goBack()}/>
                    )
                })}/>
            <Account.Screen name='AccountReport' component={ReportScreen}
            options={({ navigation }) => ({
                headerShadowVisible: false,
                    headerTitle: () => (
                        <Text style={styles.headerTitle}>Cообщить об ошибке</Text>
                    ),
                    headerRight: () => (
                        <HeaderIcon source={require('../assets/Icons/MagnifyingGlass.png')}/>
                    ),
                    headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => navigation.goBack()}/>
                    )
                })}/>
            <Account.Screen name='AboutApp' component={AboutAppScreen}
            options={({navigation}) => ({
                headerShadowVisible: false,
                    headerTitle: () => (
                        <Text style={styles.headerTitle}>О приложении</Text>
                    ),
                    headerRight: () => (
                        <HeaderIcon source={require('../assets/Icons/MagnifyingGlass.png')}/>
                    ),
                    headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => navigation.goBack()}/>
                    )
                })}/>
        </Account.Navigator>
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