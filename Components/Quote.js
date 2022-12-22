import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Quote = (props) => {
    return (
      <View style={styles.Container}>
        <View style={styles.Content}>
            <Text style={styles.Text}>{props.text}</Text>
        </View>
      </View>
    );
  }
const styles = StyleSheet.create({
    Container: {
        width: '100%',
        backgroundColor: '#F6F6F6',
        borderRadius: 20,
    },
    Content: {
        paddingVertical: 20,
        paddingHorizontal: 16,
    },
    Text: {
        fontFamily: 'GolosRegular',
        fontSize: 16,
        textAlign: 'center'

    }
});
