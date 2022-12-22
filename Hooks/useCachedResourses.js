import React, { useState, useEffect, useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

export default function useCachedResourses() {
  const [fontsLoaded] = useFonts({
    GolosMed: require('../assets/fonts/Golos-Text_Bold.ttf'),
    GolosBold: require('../assets/fonts/Golos-Text_Bold.ttf'),
    GolosRegular: require('../assets/fonts/Golos-Text_Regular.ttf'),
    GolosSemiBold: require('../assets/fonts/Golos-Text_DemiBold.ttf'),
  });

  if (fontsLoaded == true) {
    return null;
  }
}