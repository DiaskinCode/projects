import React, { Component, useState, useEffect, useCallback, useMemo} from 'react';
import { View, Text, FlatList, StyleSheet, TouchableWithoutFeedback, ScrollView,Alert} from 'react-native';
import i18n from 'i18next';
import {useGetTranslateQuery} from '../api/apiSlice'
import {useGetTranslateByIdQuery} from '../api/apiSlice'
import {TranslateBlock} from '../Components/TranslateBlock'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TranslateCategory} from '../Components/TranslateCategory'
import { set } from 'date-fns';
import { NoInternet } from '../Components/NoInternet';

export default function ExpressTranslateScreen() {
    const [data,setData] = useState({})
    const {
        data: Translates,
        isSuccess,
        isLoading,
        isError,
        error
    } = useGetTranslateQuery(i18n.language)

    useEffect(() => {
        setData(Translates)
    },[Translates])


    const handlePress = useCallback(async (id) => {
        const language = i18n.language
        try {
          await fetch(`http://oralbekov.dias19.fvds.ru/${language}/api/translate/categories/${id}`, { method: 'GET' })
            .then(response => {
              response.json().then(data => {
                if (response.ok) {
                  setData([data])
                } else {
                  Alert.alert('Ошибка, попробуйте позже');
                }
              });
            });
        } catch (error) {
          console.error(error);
          Alert.alert('Ошибка, попробуйте позже');
        }
    }, []);

    const FlatListComponent = useMemo(() => (
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({ item , index}) => <TranslateBlock length={data.length} id={index + 1} item={item} />}
        />
      ), [data]);
    
    if (isLoading) {
        return (
          <NoInternet/>
        )
    } else if (isSuccess) {
          
        return (
          <View style={styles.Container}>
            <ScrollView 
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.List}>
                <TranslateCategory onPress={() => setData(Translates)} item={{title:i18n.t('all')}} index={1}/>
                <FlatList
                    data={Translates}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    numColumns={Math.ceil(Translates.length / 1)}
                    scrollEnabled={true}
                    renderItem={({item, index}) => <TranslateCategory onPress={() => handlePress(item.id)} item={item} index={index}/>}/>
            </ScrollView>

            {FlatListComponent}
        </View>
        );
    } 
  }


const styles = StyleSheet.create({
    Container: {
        marginHorizontal: '6%',
        marginBottom:100,
    },
    List: {
        flexWrap: 'wrap',
        marginTop: 15,
        marginBottom: 22
    },
});