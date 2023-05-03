
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStore, createHook } from 'react-sweet-state';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AccountInput } from '../Components/AccountInput';
import { AccountInputToMap } from '../Components/AccountInputToMap';
import { PrimaryButton } from '../Components/PrimaryButton';
import { SecondaryButton } from '../Components/SecondaryButton';
import { useTranslation } from 'react-i18next';

const UserTourData = createStore({
  initialState: {
    HotelName: '',
    HotelAdress: '',
    UserAdress: '',
    HotelPhoneNumber: '',
    HotelWebsite: '',
    UserHotelLongitude:0,
    UserHotelLatitude:0
  },
  actions: {
    setHotelName: (value) => ({ getState, setState }) => setState({HotelName: value}),
    setHotelAdress: (value) => ({ getState, setState }) => setState({HotelAdress: value}),
    setUserAdress: (value) => ({ getState, setState }) => setState({UserAdress: value}),
    setHotelPhoneNumber: (value) => ({ getState, setState }) => setState({HotelPhoneNumber: value}),
    setHotelWebsite: (value) => ({ getState, setState }) => setState({HotelWebsite: value}),
    setUserHotelLongitude: (value) => ({ getState, setState }) => {
      try {
        if(value === undefined) {
        setState({HotelAdressLongitude: null})
        console.log('Hotel Adress lng is undefined')
        } else {
          setState({HotelAdressLongitude: value})
          AsyncStorage.setItem('HotelAdressLongitude', JSON.stringify(value)).then(
            console.log('Hotel Adress lng: ' + value)
          )
        }
      } catch (error) {
          console.error(error)
       }
    },

    setUserHotelLatitude: (value) => ({ getState, setState }) => {
      try {
        if(value === undefined) {
        setState({HotelAdressLatitude: null})
        console.log('Hotel Adress lat is undefined')
        } else {
          setState({HotelAdressLatitude: value})
          AsyncStorage.setItem('HotelAdressLatitude', JSON.stringify(value)).then(
            console.log('Hotel Adress lat: ' + value)
          )
        }
      } catch (error) {
          console.error(error)
      }
    }
  }
});

export const useUserTourData = createHook(UserTourData);

export function MyHotelScreen () {
    const { t } = useTranslation()
    const [ isLoading, setIsLoading ] = useState(true)
    const [ error, setError] = useState(null);
    const [ isAdressLoading, setIsAdressLoading ] = useState(false)
    const [ state, actions ] = useUserTourData();

    useEffect(() => {
      const fetchData = async () => {
        try {
          Promise.all([
            AsyncStorage.getItem('HotelName').then(data => {
              try {
                if(data === null || data === undefined) {
                 actions.setHotelName('')
                } else {
                 actions.setHotelName(JSON.parse(data));
                 console.log(data)}
                }
                catch (error) {
                 console.error(error)
              }
            }),

            AsyncStorage.getItem('UserLocation').then(data => {
              try {
                  actions.setUserAdress(JSON.parse(data))
                  console.log(data)
              } catch (error) {
                console.error(error)
              }
            }),

            AsyncStorage.getItem('HotelAdress').then(data => {
              try {
                if(data === null || data === undefined) {
                  actions.setHotelAdress('')
                } else 
                  actions.setHotelAdress(JSON.parse(data))
                  console.log(data)
              } catch (error) {
                console.error(error)
              }
          }),

          AsyncStorage.getItem('HotelPhoneNumber').then(data => {
            try {
              if(data === null || data === undefined) {
                actions.setHotelPhoneNumber('')
              } else 
                actions.setHotelPhoneNumber(JSON.parse(data));
                console.log(data)
            } catch (error) {
              console.error(error)
            }
          }),

          AsyncStorage.getItem('HotelWebSite').then(data => {
            try {
              if(data === null || data === undefined) {
                  actions.setHotelWebsite('')
              } else 
                  actions.setHotelWebsite(JSON.parse(data));
                  console.log(data)
            } catch (error) {
              console.error(error)
            }
          }),
              setIsLoading(false)
          ])
          } catch (error) {
          console.error(error);
          }
      };
      fetchData();
  }, []);

  const onSaveData = async () => {
    try {
      await Promise.all([
        AsyncStorage.setItem('HotelName', JSON.stringify(state.HotelName)).then(console.log('data saved' + ' ' + state.HotelName)),
        AsyncStorage.setItem('HotelAdress', JSON.stringify(state.HotelAdress)).then(console.log('data saved' + ' ' + state.HotelAdress)),
        AsyncStorage.setItem('HotelPhoneNumber', JSON.stringify(state.HotelPhoneNumber)).then(console.log('data saved' + ' ' + state.HotelPhoneNumber)),
        AsyncStorage.setItem('HotelWebSite', JSON.stringify(state.HotelWebsite)).then(console.log('data saved' + ' ' + state.HotelWebsite)),
      ])

      alert('data saved')
    } catch (error) {
      console.log(error);
    }
  }


const onDeleteData = async () => {
    try {
      await Promise.all([
        AsyncStorage.removeItem('HotelName').then(
        actions.setHotelName()),

        AsyncStorage.removeItem('HotelAdress').then(
        actions.setHotelAdress()),

        AsyncStorage.removeItem('HotelPhoneNumber').then(
        actions.setHotelPhoneNumber()),

        AsyncStorage.removeItem('HotelWebSite').then(
        actions.setHotelWebsite())
      ])
      alert('data deleted')
    } catch (error) {
      console.log(error);
    }
  }
  const onTapRow = async (address) => {
    actions.setHotelAdress(address.formatted_address)
    actions.setUserHotelLatitude(address.geometry.location.lat)
    actions.setUserHotelLongitude(address.geometry.location.lng)
    try {
      await AsyncStorage.setItem('HotelAdress', address.formatted_address);
      console.log(address.formatted_address)
  } catch (error) {
      console.log(error);
  }
}
  const onInputIconPress = () => {
    actions.setHotelAdress(state.UserAdress)
  }
  
  if (isLoading) {
    return(null)
  } else {
    return (
      <View style={styles.Container}>
          <View style={{marginTop:15}}>
            <AccountInput label={t('hotel_name')} 
                placeholder='Sheraton Makkah' 
                keyboardType="default"
                value={state.HotelName}
                onChangeText={(value) => actions.setHotelName(value)}/>

            <AccountInputToMap label={t('hotel_adress')}
                placeholder='Jabal Al Kaaba, Mecca 24231, Саудовская Аравия'
                keyboardType="default"
                value={state.HotelAdress}
                onPress={onInputIconPress}
                onChangeText={(value) => {actions.setHotelAdress(value), console.log(state.HotelAdress)}}
                onTapRow={(details) => onTapRow(details)}/>

            <AccountInput label={t('hotel_phone')} 
                placeholder='+966 12 551 8900'  
                keyboardType="numeric"
                maxLength={15}
                value={state.HotelPhoneNumber}
                onChangeText={(value) => actions.setHotelPhoneNumber(value)}/>

            <AccountInput label={t('site')} 
                placeholder='https://' 
                keyboardType="url"
                value={state.HotelWebsite}
                onChangeText={(value) => actions.setHotelWebsite(value)}/>
          </View>

          <View style={{marginTop:30}}>
            <PrimaryButton 
              text={t('button_save_data')} 
              onPress={() => onSaveData()}/>

            <SecondaryButton 
              text={t('button_delete_data')}
              onPress={() => onDeleteData()}/>
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        marginHorizontal: '6%'
    }
});
