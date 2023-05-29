import React, { useState, useCallback } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, RefreshControl } from 'react-native';
import i18n from 'i18next';
import { TabSwitch } from '../Components/TabSwitch'
import { RiteTabOne } from './RiteTabOne';
import { RiteTabTwo } from './RiteTabTwo';

export default function RiteScreen () {
  const [SelectionMode, setSelectionMode] = useState(1)
  const [refreshing, setRefreshing] = useState(false);
  const onSelectSwitch = (value) => {
    setSelectionMode(value)
  };
  const delay = (ms) => new Promise(
    resolve => setTimeout(resolve, ms)
  );
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    delay(2000).then(() => setRefreshing(false))
}, [])
  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}/>}
        >
      <TabSwitch 
        onSelectSwitch={onSelectSwitch} 
        SelectionMode={SelectionMode}
        TabOneTitle={i18n.t('do_hajj')}
        TabTwoTitle={i18n.t('do_umrah')}
      />

      {SelectionMode == 1 ? <RiteTabOne/> : <RiteTabTwo/>}
      </ScrollView>
    </SafeAreaView> 
    );
  }
  
 const styles = StyleSheet.create({
   Container: {
    flex: 1,
   },
 });
