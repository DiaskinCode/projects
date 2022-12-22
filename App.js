import { useState, useEffect, StrictMode } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from './api/apiSlice';
import Navigation from './navigation/index'
import useCachedResourses from './Hooks/useCachedResourses';

export default function App() {

  const isLoadingComplete = useCachedResourses()

  if (isLoadingComplete) {
    return null;
  } else {
    return (
    <StrictMode>
      <ApiProvider api={apiSlice}>
        <SafeAreaProvider>
            <Navigation/>
            <StatusBar/>
        </SafeAreaProvider>
      </ApiProvider>
    </StrictMode>
  )
}
}
