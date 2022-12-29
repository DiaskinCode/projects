import React, { useState, useEffect, useLayoutEffect,useRef } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Carousel } from '../Components/Carousel';
import { useNavigation } from '@react-navigation/native';
import { PlayerItem } from '../Components/PlayerItem';
import { PlayerData } from '../Components/Data';
import { ProfileItem } from '../Components/ProfileItem';

export const AccountScreen = () => {
    const Navigation = useNavigation()
    const pickerRef = useRef();
    
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
            onPress={() => Navigation.navigate('MainSettings')}/>
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
