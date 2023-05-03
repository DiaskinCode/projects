import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

export const AccountLegacyScreen = () => {
    const Navigation = useNavigation()
    const { t } = useTranslation()
    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={{marginTop: 30}}>{t('legal_documents')}</Text>
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
