import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font' 

export const Title = ({text, type}) => {
    const [loaded] = useFonts({
        GolosBold: require('../assets/fonts/Golos-Text_Bold.ttf'),
        GolosRegular: require('../assets/fonts/Golos-Text_Regular.ttf'),
        GolosSemiBold: require('../assets/fonts/Golos-Text_DemiBold.ttf'),
    })
    if (!loaded) {
        return null;}
    return (
      <View style={[styles.Container, styles[`Container${type}`]]}>
        <Text style={[styles.Title, styles[`Title${type}`]]}>{text}</Text>
      </View>
    )
  }
const styles = StyleSheet.create({
    Title: {
      color: "#1C1C1E",
      fontSize: 30,
      fontFamily: 'GolosBold'
    },
    TitlePlayer: {
      color: "#FFFFFF",
      fontSize: 17,
      fontFamily: 'GolosBold',
    },
    ContainerPlayer: {
      marginTop: 'auto',
      marginBottom: 10,
    },
    ContainerCategory: {
    },
    TitleCategory: {
      fontfamily: 'GolosBold',
      fontSize: 12,
    },
    TitleNews: {
      fontFamily: 'GolosRegular',
      fontSize: 18,
    },
    TitleNewsButton: {
      fontFamily: 'GolosRegular',
      fontSize: 12,
      color: '#D0CDD2'
    },
    ContainerNewsButton: {
    },
    TitleQuestion: {
      fontfamily: 'GolosBold',
      fontSize: 12,
    },
    ContainerQuestion: {
      marginBottom: 3,
    },
    TitleBold18: {
      fontFamily: 'GolosBold',
      fontSize: 18,
    },
    TitleRegular14: {
      fontFamily: 'GolosRegular',
      fontSize: 14,
    },
    TitleRegular13: {
      fontFamily: 'GolosRegular',
      fontSize: 13,
    },
    TitleSemiBoldWhite13: {
      fontFamily: 'GolosSemiBold',
      fontSize: 13,
      color: '#FFFFFF'
    },
    TitleBold11: {
      fontfamily: 'GolosBold',
      fontSize: 11,
    }
})

