import React, { Component, useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { TranslateCategoryList } from '../Components/Data';
import {useGetTranslateQuery} from '../api/apiSlice'
import {TranslateBlock} from '../Components/TranslateBlock'
import {TranslateCategory} from '../Components/TranslateCategory'

export default function ExpressTranslateScreen() {
    const {
        data: Translates,
        isSuccess,
        isLoading,
        isError,
        error
    } = useGetTranslateQuery()
    if (isLoading) {
        <Text>Loading..</Text>
    } else if (isSuccess) {
        return (
            <View style={styles.Container}>
            <ScrollView 
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.List}>
                <FlatList
                    data={TranslateCategoryList}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    numColumns={Math.ceil(TranslateCategoryList.length / 2)}
                    scrollEnabled={false}
                    renderItem={({item, index}) => <TranslateCategory item={item} index={index}/>}/>
            </ScrollView>

            <FlatList
                data={Translates}
                keyExtractor={item => item.id}
                bounces={false}
                renderItem={({item}) => <TranslateBlock item={item} />}/> 
        </View>
        );
    } 
  }


const styles = StyleSheet.create({
    Container: {
        marginHorizontal: '6%',
    },
    List: {
        flexWrap: 'wrap',
        marginTop: 15,
        marginBottom: 22
    },
});