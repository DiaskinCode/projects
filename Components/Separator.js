import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Separator = () => {
    return (
        <View style={styles.Separator}/>
    );
}
const styles = StyleSheet.create({
    Separator: {
        backgroundColor: '#E9E9E9',
        height: 1,
        width: '100%',
        marginTop: 10,
    }
});
