import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';

export const TranslateBlock = (props) => {
    const data = [props.item]
    if (props.item == undefined) {
        return (
            <View></View>
            )
    } else if (props.item) {
        // console.log(data);
        return(
            <View style={styles.TranslateListContainer}>
            <Text style={styles.Title}>{props.item.title}</Text>
            <FlatList
                data={props.item.items}
                style={{borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#E9E9E9',}}
                ItemSeparatorComponent={() => (<View style={{height: 1, backgroundColor: '#E9E9E9'}}/>)}
                renderItem={({item}) =>
                    <View style={styles.FieldsContainer}>
                        <View style={styles.ValueContainer}>
                            <Text style={styles.ValueText}>{item.text}</Text>
                        </View>

                        <View style={styles.TranslateContainer}>
                            <Text style={styles.TranslateText}>{item.translated_text}</Text>
                        </View>
                    </View>}/>

        </View>

            )
    }
}
    
    const styles = StyleSheet.create({
        FieldsContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 5,
        },
        TranslateListContainer: {
            marginBottom: 30,
        },
        Title: {
            fontFamily: 'GolosBold',
            fontSize: 22,
            marginBottom: 12
        },
        TranslateContainer: {
            backgroundColor: '#F6F6F6',
            borderRadius: 6,
            paddingHorizontal: 12,
            paddingVertical: 4,
            width: '50%'
        },
        TranslateText: {
            fontFamily: 'GolosBold',
            fontSize: 12,
            width: '80%'
        },
        ValueContainer: {
            width: '50%'
        },
        ValueText: {
            fontFamily: 'GolosRegular',
            fontSize: 12,
        },
    });
    
    