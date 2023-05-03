import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Carousel } from '../Components/Carousel';
import { useNavigation } from '@react-navigation/native';
import { PlayerItem } from '../Components/PlayerItem';
import i18n from 'i18next';
import { ProfileItem } from '../Components/ProfileItem';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';

export const AccountScreen = () => {
    const Navigation = useNavigation()
    const {t} = useTranslation()

    const PlayerData = [
      {
          id: 1,
          youtubeId:"3loPeQnJKk4&ab",
          status: 'Online',
          title: t('player_from_makkah'),
          image: require('../assets/images/PlayerBackground.png')
      },
      {
          id: 2,
          youtubeId:"bRSKpb_xzq0",
          status: 'Online',
          title: t('player_from_medina'),
          image: require('../assets/images/medina.jpg')
      }
  ]

    return (
      <ScrollView style={styles.container}>
          <View style={{ marginBottom: 20 }}>
              <Carousel
                renderItem={({ item, index }) => <PlayerItem item={item} index={index} />}
                data={PlayerData}
                ItemSeparatorComponent={() => <View style={{ width: ItemSeparatorComponent }} />}
              />
          </View>
        <View style={{marginTop: 15}}>
          <ProfileItem image={require('../assets/Icons/User.png')} 
            text={t('personal_data')}
            onPress={() => Navigation.navigate('PersonalDataScreen')}/>
          <ProfileItem image={require('../assets/Icons/House.png')} 
            text={t('my_hotel')}
            onPress={() => Navigation.navigate('MyHotelScreen')}/>
          <ProfileItem image={require('../assets/Icons/Nut.png')} 
            text={t('settings')}
            onPress={() => Navigation.navigate('AccountSettings')}/>
          <ProfileItem image={require('../assets/Icons/Vibrate.png')}
            text={t('about_app')}
            onPress={() => Navigation.navigate('AboutApp')}/>
          <ProfileItem image={require('../assets/Icons/WarningOctagon.png')} 
            text={t('report_error')}
            onPress={() => Navigation.navigate('AccountReport')}/>
        </View>
          <TouchableOpacity style={{marginTop:6}} onPress={() => Navigation.navigate('Legacy')}><Text style={styles.greyText}>{t('docs')}</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => Navigation.navigate('PrivacyPolicy')}><Text style={styles.greyText}>{t('privacy')}</Text></TouchableOpacity>
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
