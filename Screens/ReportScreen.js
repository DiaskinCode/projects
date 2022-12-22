import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AccountOption } from '../Components/AccountOption';
import { AccountInput } from '../Components/AccountInput';
import { AccountInputToMap } from '../Components/AccountInputToMap';
import { PrimaryButton } from '../Components/PrimaryButton';
import { SecondaryButton } from '../Components/SecondaryButton';
import { ProfileItem } from '../Components/ProfileItem';
import { TextInput } from 'react-native-gesture-handler'; 

export function ReportScreen () {
  return (
    <View style={styles.Container}>
      <AccountInput name='Название отеля' 
        placeholder='Sheraton Makkah' keyboardType="default"/>
      <AccountInput name='Название отеля' 
        placeholder='Sheraton Makkah' keyboardType="default"/>
      <AccountInput name='Название отеля' 
        placeholder='Sheraton Makkah' keyboardType="default"/>
      <AccountInput name='Название отеля' 
        placeholder='Sheraton Makkah' keyboardType="default" type='Report'/>

      <PrimaryButton text='Отправить сообщение'/>
    </View>
  );
}
const styles = StyleSheet.create({
  Container: {
    marginHorizontal: '6%'
  }
});

