import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font'

export const Description = ({text, color}) => {
    const [loaded] = useFonts({
        GolosBold: require('../assets/fonts/Golos-Text_Regular.ttf')
    })
    if (!loaded) {
        return null;}

    return (
      <View>
        <Text style={[styles.Description, {color: color}]}>{text}</Text>
      </View>
    )
  }
const styles = StyleSheet.create({
    Description: {
        fontFamily: 'GolosBold',
        fontSize: 10,
        color: '#1C1C1E',
        opacity: 0.3,
    }
});