import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Modal,TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';

export const StartTable = (props) => {
    const {t} = useTranslation()
    const HajjStartDate = props.date

    const getMonthName = (date) => {
        const months = [t('January'), t('February'), t('March'), t('April'), t('May'), t('June'), t('July'), t('August'), t('September'), t('October'), t('November'), t('December')];
        return (date.getDate() + ' ' + months[date.getMonth()])
    };
    return (
      <View style={styles.Container}>
        <View style={styles.Left}>
            <Text style={styles.Desription}>{props.description}</Text>
            <Text style={styles.Date}>{getMonthName(HajjStartDate)}</Text>
        </View>
        <TouchableOpacity onPress={props.onPress}>
            <Image source={require('../assets/Icons/Calendar.png')} style={styles.Icon}/>
        </TouchableOpacity>
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
