import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CheckItem } from '../Components/CheckItem';

export default function FinancesAndCurrencyScreen() {
    const Navigation = useNavigation()
    return (
      <View style={styles.Container}>
        <CheckItem
            title={'Намерение'} 
            description={'Начните подготовку с намерения совершить Умру или Хадж ради Аллаха'}/>
      </View>
    );
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        marginHorizontal: '6%'
    }
});