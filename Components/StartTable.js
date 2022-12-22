import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const StartTable = (props) => {
    return (
      <View style={styles.Container}>
        <View style={styles.Left}>
            <Text style={styles.Desription}>{props.description}</Text>
            <Text style={styles.Date}>{props.date}</Text>
        </View>
        <View>
            <Image source={require('../assets/Icons/Calendar.png')} style={styles.Icon}/>
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: 60,
        paddingHorizontal: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E9E9E9',
        marginBottom: 24
    },
    Left: {

    },
    Date: {
        fontFamily: 'GolosBold',
        fontSize: 15,
    },
    Desription: {
        fontFamily: 'GolosMedium',
        fontSize: 12,
        opacity: 0.3,
        marginBottom: 5,
    },
    Icon: {
        width: 20,
        height: 20,
        alignSelf: 'center'
    }
});
