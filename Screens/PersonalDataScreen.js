import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AccountInput } from '../Components/AccountInput';
import { PrimaryButton } from '../Components/PrimaryButton';
import { SecondaryButton } from '../Components/SecondaryButton';

export function PersonalDataScreen () {
    return (
      <View style={styles.Container}>
        <View style={{marginTop:15,}}>
            <AccountInput name='Имя' placeholder='Иван' keyboardType="default"/>
            <AccountInput name='Фамилия' placeholder='Петрович' keyboardType="default"/>
            <AccountInput name='номер' placeholder='8 777 777 77 77'  keyboardType="numeric"/>
            <AccountInput name='Электронная почта' placeholder='example@mail.com'  keyboardType="email-address"/>
            <AccountInput name='Город' placeholder='Новосибирск' />
          </View>
          <View style={{marginTop:30,}}>
            <PrimaryButton text="Сохранить данные" />
            <SecondaryButton text="Удалить аккаунт" />
          </View>
      </View>
    );
  }
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        margin: '6%'
    }
});

