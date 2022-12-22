import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native'

export default function TheoryGuide() {
  const Navigation = createNativeStackNavigator()

    return (
      <View style={styles.Container}>
        
      </View>
    );
  }
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  }
});