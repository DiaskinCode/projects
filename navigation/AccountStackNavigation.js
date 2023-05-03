import React from 'react';
import { Image, StyleSheet, TouchableOpacity, Text,View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AccountScreen } from '../Screens/AccountScreen';
import { PersonalDataScreen } from '../Screens/PersonalDataScreen'
import { MyHotelScreen } from '../Screens/MyHotelScreen'
import { ReportScreen } from '../Screens/ReportScreen';
import { ReportSuccessScreen } from '../Screens/ReportSuccessScreen';
import { AccountLegacyScreen } from '../Screens/AccountLegacyScreen';
import { AccountPrivacyScreen } from '../Screens/AccountPrivacyScreen';
import { AboutAppScreen } from '../Screens/AboutAppScreen.js'
import AccountSettingsScreen from '../Screens/AccountSettingsScreen'
import { Title } from '../Components/Title';
import { useTranslation } from 'react-i18next';

const Account = createNativeStackNavigator();

export default function AccountStackNavigation () {
    const {t} = useTranslation()
    return (
        <Account.Navigator initialRouteName='AccountScreen'>
            <Account.Screen name='AccountScreen' component={AccountScreen}
            options={{
                headerShadowVisible: false,
                    title: null,
                    headerLeft: () => (
                        <Title text={t('my_data')}/>
                    )
                }}/>
            <Account.Screen name='PersonalDataScreen' component={PersonalDataScreen}
            options={({ navigation }) => ({
                headerShadowVisible: false,
                    headerTitle: () => (
                        <Text style={styles.headerTitle}>{t('personal_data')}</Text>
                    ),
                    headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => navigation.goBack()}/>
                    )
                })}/>
            <Account.Screen name='MyHotelScreen' component={MyHotelScreen}
            options={({ navigation }) => ({
                headerShadowVisible: false,
                    headerTitle: () => (
                        <Text style={styles.headerTitle}>{t('my_hotel')}</Text>
                    ),
                    headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => navigation.goBack()}/>
                    )
                })}/>
            <Account.Screen name='AccountSettings' component={AccountSettingsScreen}
            options={({ navigation }) => ({
                headerShadowVisible: false,
                    headerTitle: () => (
                        <Text style={styles.headerTitle}>{t('settings')}</Text>
                    ),
                    headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => navigation.goBack()}/>
                    )
                })}/>
            <Account.Screen name='AccountReport' component={ReportScreen}
            options={({ navigation }) => ({
                headerShadowVisible: false,
                    headerTitle: () => (
                        <Text style={styles.headerTitle}>{t('report_error')}</Text>
                    ),
                    headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => navigation.goBack()}/>
                    )
                })}/>
            <Account.Screen name='AboutApp' component={AboutAppScreen}
            options={({navigation}) => ({
                headerShadowVisible: false,
                    headerTitle: () => (
                        <Text style={styles.headerTitle}>{t('about_app')}</Text>
                    ),
                    headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => navigation.goBack()}/>
                    )
                })}/>
                
            <Account.Screen name='AccountReportSuccess' component={ReportSuccessScreen}
            options={({ navigation }) => ({
                headerShadowVisible: false,
                    headerTitle: () => (
                        <Text style={styles.headerTitleGrey}>{t('report_error')}</Text>
                    ),
                    headerLeft: () => (
                        <View></View>
                    )
                })}/>
            <Account.Screen name='Legacy' component={AccountLegacyScreen}
             options={({navigation}) => ({
                headerShadowVisible: false,
                    headerTitle: () => (
                        <Text style={styles.headerTitle}>{t('docs')}</Text>
                    ),
                    headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => navigation.goBack()}/>
                    )

                })}/>
            <Account.Screen name='PrivacyPolicy' component={AccountPrivacyScreen}
             options={({navigation}) => ({
                headerShadowVisible: false,
                    headerTitle: () => (
                        <Text style={styles.headerTitle}>{t('privacy')}</Text>
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
            },
            headerTitleGrey: {
                fontFamily: 'GolosBold',
                fontSize: 18,
                color:'#CECECE'
            }
        });