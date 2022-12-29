import React, { useLayoutEffect } from 'react';
import { View,ScrollView, Text,AsyncStorage, StyleSheet, Image,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react'
import { UmrahInstructionsData } from '../Components/Data';

export default function UmrahRiteViewScreen (props) {
  const HeaderTitle = props.route.params.HeaderTitle
  const RiteInstructionId = props.route.params.id
  const RiteAsyncStorageType = props.route.params.type
  const Data = props.route.params.Data
  const Navigation = useNavigation()
  const Rite = UmrahInstructionsData[0]

  AsyncStorage.getItem(`umrahRite${RiteAsyncStorageType}`,(err, previousRite) => {
    let riteProgress = []
    if(previousRite == null) {
      riteProgress.push(props.route.params.id)
      AsyncStorage.setItem(`umrahRite${RiteAsyncStorageType}`,JSON.stringify(riteProgress));
    } else{
      if (!previousRite.includes(props.route.params.id)){
        riteProgress.push(props.route.params.id)
      }
      JSON.parse(previousRite).map((item) => {
          riteProgress.push(item)
      })

      AsyncStorage.setItem(`umrahRite${RiteAsyncStorageType}`,JSON.stringify(riteProgress));
    }
  }); 

  // AsyncStorage.removeItem('umrahritevideo')
  useLayoutEffect(() => {
    Navigation.setOptions({
      headerTitle: () => (<Text style={{fontFamily: 'GolosBold', fontSize: 18}}>{HeaderTitle}</Text>)
    });
  }, [Navigation]);
    return (
      <ScrollView>
        <View style = {styles.container}>
          <Image style = {styles.image} source={require('../assets/images/RiteImg.png')} />
          <Text style = {styles.desc}>{Rite['desc']}</Text>
          <Text style = {styles.subtitle}>На ас-Сафа следует читать аят:</Text>
          <View style = {styles.translateContainer}>
            <View style = {styles.translate}><Text style = {styles.translateArabText} >{Rite['arabText']}</Text></View>
            <Text style = {styles.translateText}>{Rite['translatedArabText']}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex:1,
      width:  '86.6%',
      marginHorizontal:'6.4%',
      marginTop:20,
    },
    image: {
      width:'100%',
      height:155,
      resizeMode: 'contain'
    },
    desc: {
      fontSize:18,
      marginTop:30,
    },
    subtitle: {
      fontSize:14,
      marginTop:30,
    },
    translateContainer:{
      marginTop:15,
      height:350,
      borderWidth:1,
      borderColor:'#61C66C',
      overflow:'hidden',
      borderRadius:20,
      flexDirection:'column',
    },
    translate:{
      height:150,
      backgroundColor:'#61C66C',
      justifyContent:'center',
      alignItems:'center',
      padding:20,
      width:'100%',
      borderRadius:20,
    },
    translateArabText :{
      color:'#fff',
      textAlign:'center',
      fontSize:23,
      fontWeight:'400',
    },
    translateText :{
      fontSize:14,
      padding:22,
      fontWeight:'400',
    },
  })
