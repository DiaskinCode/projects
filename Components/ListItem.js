import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ListItem = (props) => { 
    return (
        <View style={styles.Container}>
            <View style={styles.CountContainer}>
                <Text style={styles.Count}>{props.item.id}</Text>
            </View>

            <View style ={styles.Right}>
                <Text style={styles.Title}  numberOfLines={2} ellipsizeMode="tail">{props.item.text}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    Container: {
        flexDirection:  'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderColor: '#E9E9E9'
    },
    Right: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    CountContainer: {
        borderWidth: 1,
        backgroundColor: 'transparent',
        borderColor: '#61C66C',
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginRight: 10,
    },
    Count: {
        fontSize: 14,
        fontFamily: 'GolosBold',
        color: '#1C1C1E'
    },
    Title: {
        fontFamily: 'GolosRegular',
        fontSize: 14,
        lineHeight: 14,
    }
});
