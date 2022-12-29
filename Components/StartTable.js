import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { format } from "date-fns";

export const StartTable = (props) => {
    const HajjStartDate = props.date

    const getMonthName = (date) => {
        const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
        return (date.getDate() + ' ' + months[date.getMonth()])
    };
    return (
      <View style={styles.Container}>
        <View style={styles.Left}>
            <Text style={styles.Desription}>{props.description}</Text>
            <Text style={styles.Date}>{format(HajjStartDate, getMonthName(HajjStartDate))}</Text>
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
