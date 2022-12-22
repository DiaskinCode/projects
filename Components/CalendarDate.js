import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet, FlatList } from 'react-native';
import { Title } from './Title';

export const CalendarDate = ({item}) => {
    const [ isToday, setToday ] = useState()

    return (
        <View style={styles.Container}>
            <View>
                <Text style={styles.Count}>1</Text>
            </View>

            <View style={styles.Left}>
                <Text style={styles.Date}>20 июня, понедельник</Text>
                <Text style={styles.ListText}>{item.text}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderColor: '#E9E9E9'
    },
    Left: {
        flexDirection: 'column',
        width: '100%', 
        alignContent:'flex-start'
    },
    Count: {
        fontSize: 14,
        fontFamily: 'GolosBold',
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 8,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignitems: 'center',
        marginRight: 14
    },
    Date: {
        fontFamily: 'GolosBold',
        fontSize: 16,
        marginBottom: 9,
    },
    ListText: {
        fontSize: 14,
        fontFamily: 'GolosRegular',
        lineHeight: 20,
    }

});
