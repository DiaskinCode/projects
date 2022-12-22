import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AccountOption } from '../Components/AccountOption';
import { AccountInput } from '../Components/AccountInput';
import { AccountInputToMap } from '../Components/AccountInputToMap';
import { PrimaryButton } from '../Components/PrimaryButton';
import { SecondaryButton } from '../Components/SecondaryButton';
import { ProfileItem } from '../Components/ProfileItem';
import { TextInput } from 'react-native-gesture-handler'; 
import { Picker } from '@react-native-picker/picker';

export function MyHotelScreen () {
    const [selectedLanguage, setSelectedLanguage] = useState();
    const pickerRef = useRef();

    function open() {
      pickerRef.current.focus();
    };
    function close() {
      pickerRef.current.blur();
    };
    return (
      <View style={styles.Container}>
        <View style={{marginTop:15,}}>
          <AccountInput name='Название отеля' 
              placeholder='Sheraton Makkah' keyboardType="default"/>
          <AccountInputToMap name='Адрес отеля'
              placeholder='Jabal Al Kaaba, Mecca 24231, Саудовская Аравия' keyboardType="default"/>
          <AccountInput name='Номер телефона отеля' 
              placeholder='+966 12 551 8900'  keyboardType="numeric"/>
          <AccountInput name='Электронная почта' 
              placeholder='example@mail.com' keyboardType="email-address"/>
          <AccountInput name='Адрес сайта' 
              placeholder='https://' keyboardType="url"/>
        </View>
          <View style={{marginTop:30,}}>
            <PrimaryButton text="Сохранить данные" />
            <SecondaryButton text="Удалить отель" />
          </View>
          {/* <Picker
              ref={pickerRef}
              style={{borderRadius:10,borderWidth:1,borderColor:'#E9E9E9'}}
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
              }>
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
          </Picker>
          <AccountOption onPress={() => console.log('press')} name="На электронную почту" text="Новости приложения" /> */}
        </View>
    );
  }
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        marginHorizontal: '6%'
    }
});

