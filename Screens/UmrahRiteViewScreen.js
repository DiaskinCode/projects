import React, { useLayoutEffect,useEffect } from 'react';
import i18n from 'i18next';
import { View,ScrollView, Text, StyleSheet, Image,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useDispatch } from 'react-redux';
import { increment } from '../reducers/riteReducer';

export default function UmrahRiteViewScreen (props) {
  const HeaderTitle = props.route.params.HeaderTitle
  const RiteInstructionId = props.route.params.id
  const Navigation = useNavigation()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(increment({type:'umrahText',id:RiteInstructionId}))
  },[RiteInstructionId])
  
  const UmrahInstructionsData = [
    {
      id: 1,
      title: i18n.t("Umrah_Instructions_Data_Title"),
      description: i18n.t("Umrah_Instructions_Data_Description"),
      image: require('../assets/images/RiteImg.png'),
      desc: i18n.t("Umrah_Instructions_Data_ArticleText"),
  },
    {
      id: 2,
      title: i18n.t("Umrah_Instructions_Data_Title_5"),
      description: i18n.t("Umrah_Instructions_Data_Description_5"),
      image: require('../assets/images/RiteImg.png'),
      desc: i18n.t("Umrah_Instructions_Data_ArticleText_5"),
  },
  {
      id: 3,
      title: i18n.t("Umrah_Instructions_Data_Title_2"),
      description: i18n.t("Umrah_Instructions_Data_Description_2"),
      image: require('../assets/images/RiteImg.png'),
      desc: i18n.t("Umrah_Instructions_Data_ArticleText_2"),
  },
    {
      id: 4,
      title: i18n.t("Umrah_Instructions_Data_Title_6"),
      description: i18n.t("Umrah_Instructions_Data_Description_6"),
      image: require('../assets/images/RiteImg.png'),
      desc: i18n.t("Umrah_Instructions_Data_ArticleText_6"),
  },
  {
      id: 5,
      title: i18n.t("Umrah_Instructions_Data_Title_7"),
      description: i18n.t("Umrah_Instructions_Data_Description_7"),
      image: require('../assets/images/RiteImg.png'),
      desc: i18n.t("Umrah_Instructions_Data_ArticleText_7"),
  },
  {
      id: 6,
      title: i18n.t("Umrah_Instructions_Data_Title_3"),
      description: i18n.t("Umrah_Instructions_Data_Description_3"),
      image: require('../assets/images/RiteImg.png'),
      desc: i18n.t("Umrah_Instructions_Data_ArticleText_3"),
  },
  {
      id: 7,
      title: i18n.t("Umrah_Instructions_Data_Title_4"),
      description: i18n.t("Umrah_Instructions_Data_Description_4"),
      image: require('../assets/images/RiteImg.png'),
      desc: i18n.t("Umrah_Instructions_Data_ArticleText_4"),
  },
  {
      id: 8,
      title: i18n.t("Umrah_Instructions_Data_Title_8"),
      description: i18n.t("Umrah_Instructions_Data_Description_8"),
      image: require('../assets/images/RiteImg.png'),
      desc: i18n.t("Umrah_Instructions_Data_ArticleText_8"),
  },
]

  const Rite = UmrahInstructionsData[RiteInstructionId - 1]

  useLayoutEffect(() => {
    Navigation.setOptions({
      headerTitle: () => (<Text numberOfLines={1} ellipsizeMode="tail" style={{fontFamily: 'GolosBold', fontSize: 18,width:'85%'}}>{HeaderTitle}</Text>)
    });
  }, [Navigation]);
    return (
      <ScrollView>
        <View style = {styles.container}>
          <Image style = {styles.image} source={require('../assets/images/RiteImg.png')} />
          <Text style = {styles.desc}>{Rite['desc']}</Text>
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
      lineHeight:25,
    },
    subtitle: {
      fontSize:14,
      marginTop:30,
    },
    translateContainer:{
      marginTop:15,
      height:350,
      marginTop:30,
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
