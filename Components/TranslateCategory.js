import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';

export const TranslateCategory = ({item, index}) => {
    return (
    <TouchableWithoutFeedback>
        <View style={[styles.CategoryConatainer, { marginRight: 5 }]}>
            <Text style={styles.CategoryText}>{item.text}</Text>
        </View>
    </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    CategoryConatainer: {
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 20,
        backgroundColor: '#F6F6F6',
        marginBottom: 8
    },
    CategoryText: {
        fontSize: 12,
        textAlign: 'center',
        color: '#A4A4AF'
    },
});