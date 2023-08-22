
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStore, createHook } from 'react-sweet-state';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DropdownPicker } from '../Components/DropdownPicker';
import { DialogPicker, ModalWindow } from '../Components/DialogPicker.js'
import { SwitchBlock } from  '../Components/Switch'
import { NativeModules, Platform } from 'react-native';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

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

    let gender = [
        { value:i18n.t("settings_gender_male"), label:i18n.t("settings_gender_male"), id: 1},
        { value:i18n.t("settings_gender_female"), label:i18n.t("settings_gender_female"), id: 2 }
    ];

const UserSettingsData = createStore({
    initialState: {
      SelectedLanguage: language[0],
      SelectedUserGender: gender[0],
      News: false,
      Poll: false,
      Actions: false,
    },
    actions: {
        setSelectedLanguage: (index) => ({ getState, setState }) => {
            if (index == 0 || 1) {
                setState({ SelectedLanguage: language[0] });
                AsyncStorage.setItem('Language', JSON.stringify(0));
                setState({ language: index === 0 ? 'ru' : 'en' })
            }
            setState({ SelectedLanguage: language[index] });
            AsyncStorage.setItem('Language', JSON.stringify(index));

            i18n.changeLanguage(index === 0 ? 'ru' : 'en');
          },
    
        setSelectedUserGender: (index) => ({ getState, setState }) => {
            gender = [
                { value:i18n.t("settings_gender_male"), label:i18n.t("settings_gender_male"), id: 1},
                { value:i18n.t("settings_gender_female"), label:i18n.t("settings_gender_female"), id: 2 }
            ];

            if (index !== 0 || 1) {
                setState({ SelectedUserGender: gender[0] });
                AsyncStorage.setItem('Gender', JSON.stringify(0));
            }
            setState({ SelectedUserGender: gender[index] });
            AsyncStorage.setItem('Gender', JSON.stringify(index));
          },
    
        toggleSwitch: (switchName) => ({ getState, setState }) => {
            setState({ [switchName]: !getState()[switchName] });
            AsyncStorage.setItem(`${switchName}Switch`, JSON.stringify(getState()[switchName]));
          },

        getSwitchValue: (switchName) => ({ getState, setState }) => {
            AsyncStorage.getItem(`${switchName}Switch`).then(data => {
                if(data === null || data === undefined) {
                  setState({ [switchName]: false})
                 } else
                setState({ [switchName]: JSON.parse(data) })
            })
          }
    }
    
});

export const useUserSettingsData = createHook(UserSettingsData)

export default function AccountSettingsScreen() {
    const [ state, actions ] = useUserSettingsData();
    const [ isLoading, setIsLoading ] = useState(true);
    const [ isModalVisible, setModalVisible ] = useState(false);
    const [ isDropdownVisible, setDropdownVisible ] = useState(false);
    const { t } = useTranslation();

    const [ state1, actions1 ] = useUserSettingsData();
    const [isDropdownVisible1, setDropdownVisible1] = useState(false);

    const phoneLanguage =
    Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale
        : NativeModules.I18nManager.localeIdentifier;

    let selectedLanguage;

    if (phoneLanguage !== undefined){
        selectedLanguage = phoneLanguage.split('_')[0] === 'ru' ? 0 : 1;
    } else {
        selectedLanguage = 1
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                AsyncStorage.getItem('Language').then(data => {
                 if(data === null || data === undefined) {
                    actions.setSelectedLanguage(selectedLanguage)
                  } else 
                  actions.setSelectedLanguage(JSON.parse(data))
                }),

                AsyncStorage.getItem('Gender').then(data => {
                    if(data === null || data === undefined) {
                        actions.setSelectedUserGender(0)
                    } else
                    actions.setSelectedUserGender(JSON.parse(data))
                }),

                actions.getSwitchValue('News'),
                actions.getSwitchValue('Poll'),
                actions.getSwitchValue('Actions')
            
            setIsLoading(false)
            } catch (error) {
            console.error(error);
            }
        };
        fetchData();
    }, []);

    if (isLoading) {
        return null
    } else {
    return (
        <View style={styles.Container}>
          <View style={{marginBottom: 38}}>
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
                title={state.SelectedUserGender.label}
                data={gender}
                isVisible={isDropdownVisible}
                setDropdownVisible={() => setDropdownVisible(true)}
                onRequestClose={() => setDropdownVisible(false)}
                onItemPress={(index) => actions.setSelectedUserGender(index)}/>
          </View>

          <Text style={styles.Title}>{t('settings_notifications_title')}</Text>

          <SwitchBlock
              title={t('settings_app_news_switch_title')}
              description={t('settings_switch_description_on_email')}
              onPress={() => actions.toggleSwitch('News')}
              isActive={state.News}/>

          <SwitchBlock
              title={t('settings_poll_participation_switch_title')}
              description={t('settings_switch_description_on_email')}
              onPress={() => actions.toggleSwitch('Poll')}
              isActive={state.Poll}/>

          <SwitchBlock
              title={t('settings_push_notification_switch_title')}
              description={t('settings_switch_description_app_actions')}
              onPress={() => actions.toggleSwitch('Actions')}
              isActive={state.Actions}/>
      
          <ModalWindow 
              visible={isModalVisible} 
              selectedValue={state.SelectedLanguage.value}
              onPress={() => setVisible(!isVisible)}
              onRequestClose={() => {setModalVisible(false)}}
              onValueChange={(itemIndex) => actions.setSelectedLanguage(itemIndex)}
              value={language[0].value}
              value2={language[1].value}
              label={language[0].label}
              label2={language[1].label}
            />
        </View>
    )
}
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        marginHorizontal: '6%',
        marginTop: 24
    },
    Title:{
        marginBottom:20,
    }
});