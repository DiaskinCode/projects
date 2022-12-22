import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const RiteTextLesson = (props) => {
    return (
      <View style={styles.Container}>
        <View style={styles.Left}>
            <Text style={styles.Title}>{props.item.title}</Text>
            <Text style={styles.Description}>{props.item.description}</Text>
        </View>

        <Image style={styles.Icon} source={require('../assets/Icons/List.png')}/>
      </View>
    );
}
const styles = StyleSheet.create({
    Container: {
        borderWidth: 1,
        borderColor: '#E9E9E9',
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    Left: {
        width: '85%'
    },
    Title: {
        fontFamily: 'GolosBold',
        fontSize: 15,
        marginBottom: 2,
    },
    Description: {
        fontFamily: 'GolosMedium',
        fontSize: 10,
        color: '#1C1C1E',
        opacity: 0.3
    },
    Icon: {
        width: 22,
        height: 22,
    }
});



