import React, { Component } from 'react';
import { NativeModules, Platform } from 'react-native';

const phoneLanguage =
Platform.OS === 'ios'
  ? NativeModules.SettingsManager.settings.AppleLocale
  : NativeModules.I18nManager.localeIdentifier;
  const defaultValue = phoneLanguage.split('_')[0];

export const LanguageContext =  React.createContext({
    language: defaultValue,
    setLanguage: () => {}
});