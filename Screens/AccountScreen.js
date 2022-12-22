import React, { useState, useEffect, useLayoutEffect,useRef } from 'react';
import { Image, View, Text, StyleSheet, Switch, ScrollView } from 'react-native';
import { Carousel } from '../Components/Carousel';
import { useNavigation } from '@react-navigation/native';
import { PlayerItem } from '../Components/PlayerItem';
import { PlayerData } from '../Components/Data';
import { Title } from '../Components/Title';
import { AccountOption } from '../Components/AccountOption';
import { AccountInput } from '../Components/AccountInput';
import { AccountInputToMap } from '../Components/AccountInputToMap';
import { PrimaryButton } from '../Components/PrimaryButton';
import { SecondaryButton } from '../Components/SecondaryButton';
import { ProfileItem } from '../Components/ProfileItem';
import { TextInput } from 'react-native-gesture-handler'; 
import { Picker } from '@react-native-picker/picker';



export const AccountScreen = () => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    const Navigation = useNavigation()
    const pickerRef = useRef();

    function open() {
      pickerRef.current.focus();
    };
    function close() {
      pickerRef.current.blur();
    };

    return (
      <ScrollView style={styles.container}>
        <Carousel 
          data={PlayerData}
          renderItem={({item}) => <PlayerItem item={item}/>}
        />
        <View style={{marginTop: 15}}>
          <ProfileItem image={require('../assets/Icons/User.png')} 
            text='Личные данные'
            onPress={() => Navigation.navigate('PersonalDataScreen')}/>
          <ProfileItem image={require('../assets/Icons/House.png')} 
            text='Мой отель'
            onPress={() => Navigation.navigate('MyHotelScreen')}/>
          <ProfileItem image={require('../assets/Icons/Nut.png')} 
            text='Настройки' 
            onPress={() => Navigation.navigate('AccountSettings')}/>
          <ProfileItem image={require('../assets/Icons/Vibrate.png')}
            text='О приложении'
            onPress={() => Navigation.navigate('AboutApp')}/>
          <ProfileItem image={require('../assets/Icons/WarningOctagon.png')} 
            text='Сообщить об ошибке'
            onPress={() => Navigation.navigate('AccountReport')}/>
          <ProfileItem image={require('../assets/Icons/SignOut.png')} 
            text='Выйти из аккаунта'/>
        </View>
        <View style={{marginTop:6}}>
          <Text style={styles.greyText}>Правовые документы</Text>
          <Text style={styles.greyText}>Политика конфиденциальности</Text>
        </View> 

          {/* 
          !! ЛИЧНЫЕ ДАННЫЕ !!
          <View style={{marginTop:15,}}>
            <AccountInput name='Имя' placeholder='Иван' type="default"/>
            <AccountInput name='Фамилия' placeholder='Петрович' type="default"/>
            <AccountInput name='номер' placeholder='8 777 777 77 77'  type="numeric"/>
            <AccountInput name='Электронная почта' placeholder='example@mail.com'  type="email-address"/>
            <AccountInput name='Город' placeholder='Новосибирск' />
          </View>
          <View style={{marginTop:30,}}>
            <PrimaryButton text="Сохранить данные" />
            <SecondaryButton text="Удалить аккаунт" />
          </View> */}

          {/*
          !! Мой отель !!
          <View style={{marginTop:15,}}>
            <AccountInput name='Название отеля' placeholder='Sheraton Makkah' type="default"/>
            <AccountInputToMap name='Адрес отеля' placeholder='Jabal Al Kaaba, Mecca 24231, Саудовская Аравия' type="default"/>
            <AccountInput name='Номер телефона отеля' placeholder='+966 12 551 8900'  type="numeric"/>
            <AccountInput name='Электронная почта' placeholder='example@mail.com'  type="email-address"/>
            <AccountInput name='Адрес сайта' placeholder='https://' type="url"/>
          </View>
          <View style={{marginTop:30,}}>
            <PrimaryButton text="Сохранить данные" />
            <SecondaryButton text="Удалить отель" />
          </View> */}
          {/*<Picker
              ref={pickerRef}
              style={{borderRadius:10,borderWidth:1,borderColor:'#E9E9E9'}}
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
              }>
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
          </Picker>
          <AccountOption onPress={() => console.log('press')} name="На электронную почту" text="Новости приложения" />
        </View>
      </ScrollView>
    );
  }*/}
  </ScrollView>
    )}
const styles = StyleSheet.create({  
  container: {
    flex:1,
    width:  '86.6%',
    marginHorizontal:'6.4%',
  },
  profileItem: {
    flexDirection:'row',
    borderBottomWidth:1,
    borderColor:'#E9E9E9',
    paddingVertical:15,
  },
  profileItemText: {
    marginLeft:15,
    fontSize:15,
  },
  greyText: {
    color:"#D4D4D8",
    marginTop:9,
    fontSize:13,
  },
});
