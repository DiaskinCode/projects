import React, { useState,useCallback } from 'react'
import { View, Text, StyleSheet,Image,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export function ReportSuccessScreen () {
  const navigation = useNavigation()

  return (
    <View style={styles.Container}>
        <Image style={styles.Image} source = {require('../assets/images/ThumbsUp.png')}/>
        <Text style={styles.Text}>Ваше сообщение{"\n"}отправлено!</Text>
        <Text style={styles.content}>Мы проверим ваше обращение. Обработка запросов происходит в течении 24 часов.</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}><Text style={styles.buttonText}>Прекрасно!</Text></TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  Container: {
    marginTop: 24,
    marginHorizontal: '6%',
    alignItems:'center',
    justifyContent:'center',
  },
  Image:{
    height:120,
    width:120,
    marginTop:100
  },
  Text:{
    fontSize:22,
    fontWeight:'700',
    textAlign:'center',
    marginBottom:10,
    marginTop:20,
  },
  content:{
    fontSize:14,
    fontWeight:'400',
    textAlign:'center',
    marginTop:15
  },
  button:{
    backgroundColor: '#61C56C',
    borderRadius: 20,
    width:190,
    height:55,
    marginTop:25,
    justifyContent:'center',
  },
  buttonText:{
    fontSize:16,
    color:'#fff',
    fontWeight:'500',
    textAlign:'center'
  }
});
