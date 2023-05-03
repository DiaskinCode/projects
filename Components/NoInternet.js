import React, { Component } from 'react';
import { View, Text, Image,} from 'react-native';
import { useTranslation } from 'react-i18next';

export const NoInternet = () => {
    const { t } = useTranslation();
    return (
        <View style={{justifyContent:'center',alignItems:'center',flex:1,marginVertical:40,}}>
            <Image style={{height:20,width:20,}} source={require("../assets/images/spinner.gif")} />
            <Text style={{fontSize:15,marginTop:20,}}>{t('loading')}</Text>
        </View>
    );
  }


