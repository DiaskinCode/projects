import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput } from 'react-native';

export const AccountInput = (props) => {
    return (
        <View style={[styles.inputContainer, props.type == 'Report' ? styles.InputReport : null]}>
          <Text style={props.type == 'Report' ? styles.ReportText : styles.inputText}>{props.name}</Text>
          <TextInput
            style={styles.input}
            placeholder={props.placeholder}
            keyboardType={props.keyboardType}
            multiline={true}
          />
        </View>
    );
  }
const styles = StyleSheet.create({
      input: {
        height: 30,
        fontSize: 15,
        fontFamily: 'GolosRegular'
      },
      inputContainer: {
        borderWidth: 1,
        marginTop:15,
        padding: 10,
        borderRadius: 10,
        borderColor:'#E9E9E9',
      },  
      inputText: {
        color:'#1C1C1E',
        opacity: 0.3,
        fontFamily: 'GolosMedium',
      },
      ReportText: {
        fontFamily: 'GolosMedium',
        fontSize: 12,
      },
      InputReport: {
        height: 160,
        marginBottom: 38
      }
});
