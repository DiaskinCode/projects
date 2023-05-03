import { QueryClient, QueryClientProvider } from 'react-query'
import { useEffect,useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from './api/apiSlice';
import Navigation from './navigation/index'
import useCachedResourses from './Hooks/useCachedResourses';
import { NativeModules, Platform } from 'react-native';
import useGetCurrentPosition from './Hooks/useGetCurrentPosition';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';

import Geocoder from 'react-native-geocoding';
import AsyncStorage from '@react-native-async-storage/async-storage';

Geocoder.init("AIzaSyCKKn8KVrLBr5jiIIgAC0mNpeWnZCObYq4"); // use a valid API key

const queryClient = new QueryClient();

export default function App() {
  const { LocaleManager } = NativeModules;
  const isLoadingComplete = useCachedResourses()
  const address = useGetCurrentPosition()
  const [selectedLanguage,setSelectedLanguage] = useState("en")

  const phoneLanguage =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier;

    useEffect(() => {
      (async () => {
        const language = await AsyncStorage.getItem('Language');
        if (language) {
          const selectedLanguage = language === '1' ? 'en' : 'ru';
          console.log(selectedLanguage);
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
    <QueryClientProvider client={queryClient}>
      <ApiProvider api={apiSlice}>
        <SafeAreaProvider>
          <I18nextProvider i18n={i18n}>
            <Navigation/>
            <StatusBar/>
          </I18nextProvider>
        </SafeAreaProvider>
      </ApiProvider>
    </QueryClientProvider>
  );
}