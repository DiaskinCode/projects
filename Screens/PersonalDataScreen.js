import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AccountInput } from '../Components/AccountInput';
import { PrimaryButton } from '../Components/PrimaryButton';
import { SecondaryButton } from '../Components/SecondaryButton';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

export function PersonalDataScreen () {
  const [ isLoading, setIsLoading ] = useState(true) 
  const [ UserName, setUserName ] = useState('')
  const [ UserSurname, setUserSurname ] = useState('')
  const [ UserPhoneNumber, setUserPhoneNumber ] = useState('')
  const [ UserEmail, setUserEmail ] = useState('')
  const [ UserResidenceCity, setUserResidenceCity ] = useState('')
  const { t } = useTranslation()
 
  useEffect(() => {
    const fetchData = async () => {
        try {
        await Promise.all([
          AsyncStorage.getItem('UserName').then(data => {
            if(data === null || data === undefined) {
                setUserName('')
            } else 
            setUserName(JSON.parse(data))
            console.log(data)}),

          AsyncStorage.getItem('UserSurname').then(data => {
            if(data === null || data === undefined) {
                setUserSurname('')
            } else 
            setUserSurname(JSON.parse(data))
            console.log(data)}),

          AsyncStorage.getItem('UserPhoneNumber').then(data => {
            if(data === null || data === undefined) {
                setUserPhoneNumber('')
            } else 
            setUserPhoneNumber(JSON.parse(data))
            console.log(data)}),

          AsyncStorage.getItem('UserEmail').then(data => {
            if(data === null || data === undefined) {
                setUserEmail('')
            } else 
            setUserEmail(JSON.parse(data))
            console.log(data)}),

          AsyncStorage.getItem('UserResidenceCity').then(data => {
            if(data === null || data === undefined) {
                setUserResidenceCity('')
            } else 
            setUserResidenceCity(JSON.parse(data))
            console.log(data)})
        ])
        setIsLoading(false)
        } catch (error) {
        console.error(error);
        }
    };
    fetchData();
}, []);

const onSaveData = async () => {
  try {
    await Promise.all([
      AsyncStorage.setItem('UserName', JSON.stringify(UserName)),
      AsyncStorage.setItem('UserSurname', JSON.stringify(UserSurname)),
      AsyncStorage.setItem('UserPhoneNumber', JSON.stringify(UserPhoneNumber)),
      AsyncStorage.setItem('UserEmail', JSON.stringify(UserEmail)),
      AsyncStorage.setItem('UserResidenceCity', JSON.stringify(UserResidenceCity))
    ])
    alert('data saved')
  } catch (error) {
    console.log(error);
  }
}

const onDeleteData = async () => {
  try {
    await Promise.all([
      AsyncStorage.removeItem('UserName').then(
        setUserName()),
      AsyncStorage.removeItem('UserSurname').then(
        setUserSurname()),
      AsyncStorage.removeItem('UserPhoneNumber').then(
        setUserPhoneNumber()),
      AsyncStorage.removeItem('UserEmail').then(
        setUserEmail()),
      AsyncStorage.removeItem('UserResidenceCity').then(
        setUserResidenceCity())
      ])
  alert('data deleted')
  } catch (error) {
    console.log(error);
  }
}
if (isLoading) {
  return null
} else {
  return (
    <ScrollView>
      <View style={styles.Container}>
        <AccountInput 
          label={t('personal_data_placeholder_name')}
          placeholder='Иван' 
          keyboardType="default"
          value={UserName}
          onChangeText={(value) => setUserName(value)}/>
        <AccountInput 
          label={t('personal_data_placeholder_surname')}
          placeholder='Петрович' 
          keyboardType="default"
          value={UserSurname}
          onChangeText={(value) => setUserSurname(value)}/>
        <AccountInput
          label={t('personal_data_placeholder_phone_number')}
          placeholder='+966 12 551 8900' 
          keyboardType="numeric"
          maxLength={15}
          value={UserPhoneNumber}
          onChangeText={(value) => setUserPhoneNumber(value)}/>
        <AccountInput
          label={t('personal_data_placeholder_email')}
          placeholder='example@mail.com' 
          keyboardType="email-address"
          value={UserEmail}
          onChangeText={(value) => setUserEmail(value)}/>
        <AccountInput
          label={t('personal_data_placeholder_city')}
          placeholder='Новосибирск'
          keyboardType="default"
          value={UserResidenceCity}
          onChangeText={(value) => setUserResidenceCity(value)}/>

          <View style={{marginTop:30,}}>
            <PrimaryButton 
              text={t("button_save_data")}
              onPress={() => onSaveData()}/>
            <SecondaryButton 
              text={t("button_delete_data")}
              onPress={() => onDeleteData()}/>
          </View>
      </View>
    </ScrollView>
  );
}
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        marginHorizontal: '6%',
        marginTop: 24
    }
});

