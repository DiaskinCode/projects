import React, { Component,useLayoutEffect} from 'react';
import { View, Image,Text, FlatList, ScrollView, StyleSheet,Linking } from 'react-native';
import { MapItem } from '../Components/MapItem';
import { useNavigation } from '@react-navigation/native';
import { useGetRestaurantByIdQuery } from '../api/apiSlice'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next';
import {ItemButton} from '../Components/MapItem'

export default function RestarauntScreen (props) {
  const {t} = useTranslation()
    const {
        data: Place,
        isSuccess,
        isLoading,
        isError,
        error
      } = useGetRestaurantByIdQuery({language:i18n.language,id:props.route.params.id})

    const Navigation = useNavigation()

    useLayoutEffect(() => {
        Navigation.setOptions({
          headerTitle: () => <Text numberOfLines={1} style={{width:'75%',fontFamily: 'GolosBold', fontSize: 18}}//указываете допустимое количество строк для текста
          ellipsizeMode="tail" //место, где будет разрыв текста в три точки (возможно указать 'head', 'middle', 'tail', 'clip'. 'clip' только для iOS)
    >{props.route.params.HeaderTitle}</Text>
        });
      }, [Navigation]);
      
    return (
      <ScrollView>
        {Place == undefined ? false : 
        <View style={styles.Container}>
            <Image style={styles.Image} source={{uri :`http://oralbekov.dias19.fvds.ru${Place.upload}`}}/>
            <Text style={styles.Heading}>{Place.title}</Text>
            <Text style={styles.Category}>{Place.category}</Text>
            <View style={{flexDirection:'row',marginTop:30,justifyContent:'space-between'}}>
              <View style={styles.block}>
                <Image style={{width:26,height:26,}} source={require('../assets/Icons/Clock.png')}/>
                <Text style={styles.time}>{t('from')} {Place.opening_at} {t('to')} {Place.closing_at}</Text>
                <Text style={styles.blockDesc}>{t('work_time')}</Text>
              </View>
              <View style={styles.block}>
                <Image style={{width:26,height:26,}} source={require('../assets/Icons/Star.png')}/>
                <Text style={styles.time}>{t('review')} {Place.rating}</Text>
                <Text style={styles.blockDesc}>{t('work_time')}</Text>
              </View>
            </View>
            <View style={styles.ButtonWrapper}>
                <ItemButton
                    type={'PointButton'}
                    buttonText={t('on_map')}
                    onPress={() => Navigation.navigate('PlaceOnMap',{id: Place.id,HeaderTitle:Place.title,type: 'Restaraunt'})}
                />
                <ItemButton
                    type={'PhoneButton'}
                    buttonText={Place.phone}
                    onPress={() => Linking.openURL(`tel:${Place.phone}`).catch((err) => console.error('An error occurred', err))}
                />
            </View>
            <Text style={styles.Heading}>{t('about_restaraunt')}</Text>
            <Text style={styles.Text}>{Place.content}</Text>
        </View>
        }
      </ScrollView>
    );
}
const styles = StyleSheet.create({
    Container: {
      flex: 1,
      marginHorizontal: '6%',
      marginTop:26,
    },
    ButtonWrapper: {
      marginTop:20,
      flexDirection: 'row',
    },
    ButtonIcon: {
      width: 9,
      height: 12,
      marginRight: 8,
    },
    ButtonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 6,
      paddingHorizontal: 10,
      backgroundColor: '#F6F6F6',
      borderRadius: 10,
      marginRight: 5,
    },
    ButtonTitle: {
      fontFamily: 'GolosMedium',
      fontSize: 12,
      lineHeight: 14,
    },
    Image: {
        borderRadius:20,
        height:240,
        width:'100%',
    },
    Text:{
        fontWeight:'300',
        fontSize:18,
        lineHeight:25,
        marginTop:15,
    },
    Heading:{
      fontSize:30,
      marginTop:30,
      fontWeight:'600',
    },
    Category:{
      fontSize:14,
      marginTop:10,
      fontWeight:'300',
      color:'#bbb',
    },
    time:{
      fontSize:16,
      fontWeight:'600',
      marginTop:10,
    },
    block:{
      borderRadius:20,
      borderWidth:1,
      padding:15,
      width:'48%',
      borderColor:'#E9E9E9',
    },
    blockDesc:{
      color:'#bbb',
      fontSize:12,
      marginTop:5,
    }
});
