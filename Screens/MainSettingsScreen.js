
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet,ScrollView,Dimensions } from 'react-native';
import { useUserTourData } from './MyHotelScreen';
import { useUserSettingsData } from './AccountSettingsScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DropdownPicker } from '../Components/DropdownPicker';
import { DialogPicker, ModalWindow } from '../Components/DialogPicker.js'
import { AccountInput } from '../Components/AccountInput'
import { AccountInputToMap } from '../Components/AccountInputToMap'
import i18n from 'i18next'

export default function MainSettingsScreen() {
    const language = [
        {
        id: 1,
        label: 'Русский',
        value: 'Русский',
        flagIcon: require('../assets/Icons/RussianFlagIcon.png') 
        },
        {
        id: 2,
        label: 'English',
        value: 'English',
        flagIcon: require('../assets/Icons/EnglishFlagIcon.png')
        }
    ]

    const gender = [
        { value:i18n.t("settings_gender_male"), label:i18n.t("settings_gender_male"), id: 1},
        { value:i18n.t("settings_gender_female"), label:i18n.t("settings_gender_female"), id: 2 }
    ];
    const [ isLoading, setIsLoading ] = useState(true)

    const [isModalVisible, setModalVisible] = useState(false);
    const [isDropdownVisible1, setDropdownVisible1] = useState(false);
    const [isDropdownVisible2, setDropdownVisible2] = useState(false);

    const [ state, actions ] = useUserTourData();
    const [ state1, actions1 ] = useUserSettingsData();

    useEffect(() => {
        const fetchData = async () => {
            try {
                await Promise.all([
                    AsyncStorage.getItem('Language').then(data => {
                        if(data === null || data === undefined) {
                           actions1.setSelectedLanguage(0)
                         } else 
                         actions1.setSelectedLanguage(JSON.parse(data))
                       }),
       
                    AsyncStorage.getItem('Gender').then(data => {
                        if(data === null || data === undefined) {
                            actions1.setSelectedUserGender(0)
                        } else
                        actions1.setSelectedUserGender(JSON.parse(data))
                    }),
                    
                    AsyncStorage.getItem('HotelName').then(data => {
                         if(data === null || data === undefined) {
                             actions.setHotelName('')
                         } else 
                             actions.setHotelName(JSON.parse(data))
                             console.log(data)
                        }),

                    AsyncStorage.getItem('UserLocation').then(data => {
                        try {
                            actions.setUserAdress(JSON.parse(data))
                            console.log(data)
                        } catch (error) {
                            console.error(error)
                        }
                    }),

                    AsyncStorage.getItem('HotelAdress').then(data => {
                        try {
                          if(data === null || data === undefined) {
                            actions.setHotelAdress('')
                          } else 
                            actions.setHotelAdress(JSON.parse(data))
                        } catch (error) {
                          console.error(error)
                        }
                    }),

                    AsyncStorage.getItem('HotelPhoneNumber').then(data => {
                        if(data === null || data === undefined) {
                            actions.setHotelPhoneNumber('')
                        } else 
                            actions.setHotelPhoneNumber(JSON.parse(data))
                            console.log(data)}),

                    AsyncStorage.getItem('HotelWebSite').then(data => {
                        if(data === null || data === undefined) {
                            actions.setHotelWebsite('')
                        } else 
                            actions.setHotelWebsite(JSON.parse(data))
                            console.log(data)}),

                        setIsLoading(false)
                    ]);
            } catch (error) {
            console.error(error);
          }
        };
        fetchData();
       }, []);

    const onHotelNameValChange = async (value) => {
        actions.setHotelName(value)
        try {
            await AsyncStorage.setItem('HotelName', JSON.stringify(state.HotelName));
        } catch (error) {
            console.log(error);
        }
    }
    const onHotelAdressValChange = async (value) => {
        actions.setHotelAdress(value);
        try {
            await AsyncStorage.setItem('HotelAdress', JSON.stringify(state.HotelAdress));
            console.log(state.HotelAdress)
        } catch (error) {
            console.log(error);
        }
    }

    const onInputIconPress = () => {
        actions.setHotelAdress(state.UserAdress)
      }
      
const onTapRow = async (formatted_address) => {
        actions.setHotelAdress(formatted_address)
        try {
            await AsyncStorage.setItem('HotelAdress', JSON.stringify(formatted_address));
            console.log(state.HotelAdress)
        } catch (error) {
            console.log(error);
        }
    }
    const onHotelPhoneNumberValChange = async (value) => {
        actions.setHotelPhoneNumber(value)
        try {
            await AsyncStorage.setItem('HotelPhoneNumber', JSON.stringify(state.HotelPhoneNumber));
        } catch (error) {
            console.log(error);
        }
    }
    const onHotelWebsiteValChange = async (value) => {
        actions.setHotelWebsite(value)
        try {
            await AsyncStorage.setItem('HotelWebsite', JSON.stringify(state.HotelWebsite));
        } catch (error) {
            console.log(error);
        }
    }
    if (isLoading) {
        return ( <Text>loading</Text>)
    } else {
    return (
        <ScrollView>

            <View style={styles.Container}>

                <DropdownPicker 
                    description={i18n.t('language')}
                    title={state1.SelectedLanguage.label}
                    flagIcon={state1.SelectedLanguage.flagIcon}
                    data={language}
                    isVisible={isDropdownVisible1}
                    setDropdownVisible={() => setDropdownVisible1(true)}
                    onRequestClose={() => setDropdownVisible1(false)}
                    onItemPress={(index) => actions1.setSelectedLanguage(index)}/>

                <DropdownPicker 
                    description={i18n.t('gender')}
                    title={state1.SelectedUserGender.label}
                    data={gender}
                    isVisible={isDropdownVisible2}
                    setDropdownVisible={() => setDropdownVisible2(true)}
                    onRequestClose={() => setDropdownVisible2(false)}
                    onItemPress={(index) => actions1.setSelectedUserGender(index)}/>

                <View style={styles.InputBlock}>
                    <Text style={styles.Title}>{i18n.t('hotel_contacts')}</Text>

                    <AccountInput 
                        label={i18n.t('hotel_name')}
                        placeholder='Sheraton Makkah' 
                        keyboardType="default"
                        value={state.HotelName}
                        onChangeText={(value) => onHotelNameValChange(value)}/>

                    <AccountInputToMap 
                        label={i18n.t('hotel_adress')}
                        onPress={onInputIconPress}
                        placeholder='Jabal Al Kaaba, Mecca 24231, Саудовская Аравия' 
                        keyboardType="default"
                        value={state.HotelAdress}
                        onChangeText={(value) => onHotelAdressValChange(value)}
                        onTapRow={(details) => onTapRow(details.formatted_address)}/>

                    <AccountInput 
                        label={i18n.t('hotel_phone')}
                        placeholder='+966 12 551 8900'  
                        keyboardType="numeric"
                        value={state.HotelPhoneNumber}
                        onChangeText={(value) => onHotelPhoneNumberValChange(value)}/>

                    <AccountInput 
                        label={i18n.t('site')}
                        placeholder='https://' 
                        keyboardType="url"
                        value={state.HotelWebsite}
                        onChangeText={(value) => onHotelWebsiteValChange(value)}/>
                </View>

                <ModalWindow 
                    visible={isModalVisible} 
                    selectedValue={state1.SelectedLanguage.value}
                    onPress={() => setVisible(!isVisible)}
                    onRequestClose={() => {setModalVisible(false)}}
                    onValueChange={(itemIndex) => actions1.setSelectedLanguage(itemIndex)}
                    value={language[0].value}
                    value2={language[1].value}
                    label={language[0].label}
                    label2={language[1].label}
                />
            </View>
        </ScrollView>
    )
}
}
const styles = StyleSheet.create({
    Container: {
        height:Dimensions.get('window').height,
        marginHorizontal: '6%',
        marginTop: 26,
    },
    InputBlock: {
        marginTop: 15
    },
    ButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E9E9E9',
        borderRadius: 10,
        paddingHorizontal: 14,
        paddingVertical: 8,
        marginBottom: 15,
    },
    Picker: {
        borderColor:'#E9E9E9', 
        BorderRadius: 1,
    },
    Title: {
        fontFamily: 'GolosRegular',
        fontSize: 18,
        marginBottom: 12,
    },
    InputLabel: {
        fontFamily: 'GolosBold',
        fontSize: 15,
    },
    Description: {
        fontFamily: 'GolosMedium',
        fontSize: 12,
        marginBottom: 5,
        opacity: 0.3
    },
    Right: {
        width: 26,
        height: 26,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Icon: {
        width: 20,
        height: 20
    },
    ModalContainer: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: '40%',
        borderRadius : 40,
        position: 'absolute',
        bottom: 0,
        zIndex: 2,
        paddingTop: '7%',
        paddingHorizontal: '6%'
    },
    CenteredView: {
        flex: 1,
        position:'relative',
        zIndex: 1,
    },
    DropDownPicker: {
        borderColor: '#E9E9E9',
        height: 60,
        paddingRight: 15,
        paddingLeft: 14,
    },
    
});
