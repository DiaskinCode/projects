import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { StartTable } from '../Components/StartTable';
import { CalendarDate } from '../Components/CalendarDate';
import { useGetHajjStartDateQuery } from '../api/apiSlice'
import { useGetUmrahDaysQuery } from '../api/apiSlice'

export default function CalendarHajj(props) {
    const {data: HajjStartDate,
        isLoading,
        isSuccess,
        isError,
        error} = useGetHajjStartDateQuery()

    const {data: HajjDays} = useGetUmrahDaysQuery()

      if (isLoading) {
        <Text>loading...</Text>
      }
      else if (isError) {
        <Text>{error}</Text>
      }
      else if (isSuccess) {
        const date = new Date(HajjStartDate.hajj_date_year, HajjStartDate.hajj_date_month - 1, HajjStartDate.hajj_date)
        return (
            <View style={styles.Container}>
                <StartTable 
                    date={date}
                    description={'Дата начала вашего хаджа'}/>

                    <FlatList style={styles.List}
                    data={HajjDays}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id} 
                    renderItem={({item}) => <CalendarDate item={item}/>}/>
            </View>
    );
  }}
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