import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TabSwitch } from '../Components/TabSwitch';
import { StartTable } from '../Components/StartTable';
import { CalendarDate } from '../Components/CalendarDate';
import { DateList } from '../Components/Data';
import { Title } from '../Components/Title'

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

        {SelectionMode == 1 ? <CalendarTabOne/> : <Title text='222'/>}
      </SafeAreaView>
    );
  }
  const CalendarTabOne = () => {
    return (
    <View style={styles.Container}>
      <StartTable 
        date={'20 Ноября'}
        description={'Дата начала вашего хаджа'}/>

        <FlatList style={styles.List}
        data={DateList}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => <CalendarDate item={item}/>}/>
    </View>
    )
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