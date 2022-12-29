import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TabSwitch } from '../Components/TabSwitch';
import { Title } from '../Components/Title'
import CalendarHajj from '../Screens/CalendarHajj'
import CalendarUmrah from './CalendarUmrah';

export default function CategoryCalendarScreen (props) {
  const Navigation = useNavigation()
  const [SelectionMode, setSelectionMode] = useState(1)
  const onSelectSwitch = (value) => {
    setSelectionMode(value)
  }
  return (
    <SafeAreaView style={styles.Container}>
      <TabSwitch 
        onSelectSwitch={onSelectSwitch}
        SelectionMode={SelectionMode}
        TabOneTitle={'Совершаю Хадж'}
        TabTwoTitle={'Совершаю Умру'}/>

      {SelectionMode == 1 ? <CalendarHajj/> : <CalendarUmrah/>}

    </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    Container: {
      flex: 1,
      marginHorizontal: '6%',
    },
    List: {
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: '#E9E9E9'
    }
  })