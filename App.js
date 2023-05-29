
import { useEffect,useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import Navigation from './navigation/index'
import useCachedResourses from './Hooks/useCachedResourses';
import { NativeModules, Platform } from 'react-native';
import useGetCurrentPosition from './Hooks/useGetCurrentPosition';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';

import Geocoder from 'react-native-geocoding';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {store, persistor} from './store';

Geocoder.init("AIzaSyCKKn8KVrLBr5jiIIgAC0mNpeWnZCObYq4"); // use a valid API key

  const phoneLanguage =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier;

export default function App() {
  const isLoadingComplete = useCachedResourses()
  const address = useGetCurrentPosition()
  const [selectedLanguage,setSelectedLanguage] = useState("en")


    useEffect(() => {
      (async () => {
        const language = await AsyncStorage.getItem('Language');
        if (language) {
          const selectedLanguage = language === '1' ? 'en' : 'ru';
          setSelectedLanguage(selectedLanguage);
        } else {
          setSelectedLanguage(phoneLanguage.split('_')[0]);
        }
      })()
    }, [address,phoneLanguage]);

  i18n
    .use(initReactI18next)
    .init({
      compatibilityJSON: 'v3',
      lng: selectedLanguage,
      resources: {
        en: {
          translation: require('./locales/translation.json')['en']
        },
        ru: {
          translation: require('./locales/translation.json')['ru']
        }
      }
    });

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={console.log('loading')} persistor={persistor}>
        <SafeAreaProvider>
          <I18nextProvider i18n={i18n}>
            <Navigation/>
            <StatusBar/>
          </I18nextProvider>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}