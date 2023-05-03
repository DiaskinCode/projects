import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export const AccountInput = (props) => {
  const [InputFocus, setInputFocus] = useState(false)
  const onFocus = () => {
    setInputFocus(true)
  }
  const onBlur = () => {
    setInputFocus(false)
  }
  return (
      <View style={[styles.InputContainer, 
        props.type == 'Report' ? styles.InputReport : null,
        props.error ? {borderColor: '#F65757'} : null]}>
        <Text 
          style={[props.type == 'Report' ? styles.ReportText : styles.InputText,
          InputFocus || props.value ? {opacity: 1} : null]}>
            {props.label}
        </Text>
        <TextInput
          style={styles.Input}
          value={props.value}
          onChangeText={props.onChangeText}
          placeholder={props.placeholder}
          keyboardType={props.keyboardType}
          multiline={false}
          onFocus={onFocus}
          onBlur={onBlur}
          returnKeyType='done'
          maxLength={props.maxLength}
          numberOfLines={props.numberOfLines}
        />
      </View>
  );
}
const styles = StyleSheet.create({
  Input: {
    height: 30,
    fontSize: 15,
    fontFamily: 'GolosRegular'
  },
  InputContainer: {
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
    borderColor:'#E9E9E9',
  },    
  InputText: {
    opacity: 0.3,
    fontFamily: 'GolosMedium',
  },
  ReportText: {
    fontFamily: 'GolosMedium',
    opacity: 0.3,
    fontSize: 12,
  },
  InputReport: {
    height: 160,
    marginBottom: 38
  }
});
