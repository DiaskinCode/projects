import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { StartTable } from '../Components/StartTable';
import { CalendarDate } from '../Components/CalendarDate';
import { useGetHajjStartDateQuery } from '../api/apiSlice'
import { useGetHajjDaysQuery } from '../api/apiSlice'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next';
import { NoInternet } from '../Components/NoInternet';

export default function CalendarHajj(props) {
  const {t} = useTranslation()
    const {data: HajjStartDate,
        isLoading,
        isSuccess,
        isError,
        error} = useGetHajjStartDateQuery(i18n.language)

    const {data: HajjDays} = useGetHajjDaysQuery(i18n.language)

      if (isLoading) {
        return(
          <NoInternet/>
        )
      }
      else if (isError) {
        return(
          <NoInternet/>
        )
      }
      else if (isSuccess) {
        const date = new Date(HajjStartDate.hajj_date_year, HajjStartDate.hajj_date_month - 1, HajjStartDate.hajj_date)
        return (
            <View style={styles.Container}>
                <StartTable 
                    date={date}
                    description={t('date_hajj_beggining')}/>

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