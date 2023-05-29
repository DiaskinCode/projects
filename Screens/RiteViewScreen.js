import React, { useLayoutEffect, useEffect } from 'react';
import { View,ScrollView, Text, StyleSheet, Image } from 'react-native';
import i18n from 'i18next';
import { useNavigation } from '@react-navigation/native';

import { useSelector,useDispatch } from 'react-redux';
import { increment } from '../reducers/riteReducer';

function RiteViewScreen (props) {
  const HeaderTitle = props.route.params.HeaderTitle
  const RiteInstructionId = props.route.params.id
  const Navigation = useNavigation()

  const dispatch = useDispatch()
  const rites = useSelector((state) => state.rite);

  console.log("state",rites);
  useEffect(() => {
    dispatch(increment({type:'hajjText',id:RiteInstructionId}))
  },[RiteInstructionId])
  

  const InstructionsData = [
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
      title: i18n.t("Instructions_Data_Title_2"),
      description: i18n.t("Instructions_Data_Description_2"),
      image: require('../assets/images/RiteImg.png'),
      desc: i18n.t("Instructions_Data_Desc_2"),
      borderColor: '#A1F6FB'
  },
  {
      id: 4,
      title: i18n.t("Umrah_Instructions_Data_Title_2"),
      description: i18n.t("Umrah_Instructions_Data_Description_2"),
      image: require('../assets/images/RiteImg.png'),
      desc: i18n.t("Umrah_Instructions_Data_ArticleText_2"),
  },
  {
      id: 5,
      title: i18n.t("Umrah_Instructions_Data_Title_6"),
      description: i18n.t("Umrah_Instructions_Data_Description_6"),
      image: require('../assets/images/RiteImg.png'),
      desc: i18n.t("Umrah_Instructions_Data_ArticleText_6"),
  },
  {
    id: 6,
    title: i18n.t("Umrah_Instructions_Data_Title_7"),
    description: i18n.t("Umrah_Instructions_Data_Description_7"),
    image: require('../assets/images/RiteImg.png'),
    desc: i18n.t("Umrah_Instructions_Data_ArticleText_7"),
},
  {
      id: 7,
      title: i18n.t("Umrah_Instructions_Data_Title_3"),
      description: i18n.t("Umrah_Instructions_Data_Description_3"),
      image: require('../assets/images/RiteImg.png'),
      desc: i18n.t("Umrah_Instructions_Data_ArticleText_3"),
      borderColor: '#A1F6FB'
  },
  {
      id: 8,
      title: i18n.t("Instructions_Data_Title_5"),
      description: i18n.t("Instructions_Data_Description_5"),
      image: require('../assets/images/RiteImg.png'),
      desc: i18n.t("Instructions_Data_Desc_5"),
      borderColor: '#A1F6FB'
  },
  {
      id: 9,
      title: i18n.t("Instructions_Data_Title_14"),
      description: i18n.t("Instructions_Data_Description_14"),
      image: require('../assets/images/RiteImg.png'),
      desc: i18n.t("Instructions_Data_Desc_14"),
      borderColor: '#A1F6FB'
  },
  {
      id: 10,
      title: i18n.t("Instructions_Data_Title_6"),
      description: i18n.t("Instructions_Data_Description_6"),
      image: require('../assets/images/RiteImg.png'),
      desc: i18n.t("Instructions_Data_Desc_6"),
      borderColor: '#A1F6FB'
  },
  {
      id: 11,
      title: i18n.t("Instructions_Data_Title_7"),
      description: i18n.t("Instructions_Data_Description_7"),
      image: require('../assets/images/RiteImg.png'),
      desc: i18n.t("Instructions_Data_Desc_7"),
      borderColor: '#A1F6FB'
  },
  {
      id: 12,
      title: i18n.t("Instructions_Data_Title_9"),
      description: i18n.t("Instructions_Data_Description_9"),
      image: require('../assets/images/RiteImg.png'),
      desc: i18n.t("Instructions_Data_Desc_9"),
      borderColor: '#A1F6FB'
  },
  {
      id: 13,
      title: i18n.t("Instructions_Data_Title_8"),
      description: i18n.t("Instructions_Data_Description_8"),
      image: require('../assets/images/RiteImg.png'),
      desc: i18n.t("Instructions_Data_Desc_8"),
      borderColor: '#A1F6FB'
  },
  {
      id: 14,
      title: i18n.t("Instructions_Data_Title_10"),
      description: i18n.t("Instructions_Data_Description_10"),
      image: require('../assets/images/RiteImg.png'),
      desc: i18n.t("Instructions_Data_Desc_10"),
      borderColor: '#A1F6FB'
  },
  {
      id:15,
      title: i18n.t("Instructions_Data_Title_11"),
      description: i18n.t("Instructions_Data_Description_11"),
      image: require('../assets/images/RiteImg.png'),
      desc: i18n.t("Instructions_Data_Desc_11"),
      borderColor: '#A1F6FB'
  },
  {
      id: 16,
      title: i18n.t("Instructions_Data_Title_12"),
      description: i18n.t("Instructions_Data_Description_12"),
      image: require('../assets/images/RiteImg.png'),
      desc: i18n.t("Instructions_Data_Desc_12"),
      borderColor: '#A1F6FB'
  },
  {
      id: 17,
      title: i18n.t("Instructions_Data_Title_13"),
      description: i18n.t("Instructions_Data_Description_13"),
      image: require('../assets/images/RiteImg.png'),
      desc: i18n.t("Instructions_Data_ArticleText_13"),
  },


]

  const Rite = InstructionsData[RiteInstructionId - 1]

    useLayoutEffect(() => {
      Navigation.setOptions({
        headerTitle: () => (<Text numberOfLines={1} ellipsizeMode="tail" style={{fontFamily: 'GolosBold', fontSize: 18,flex:0.8}}>{HeaderTitle}</Text>)
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

  // const mapStateToProps = (state) => {
  //   const { rites } = state
  //   return { rites }
  // };

  export default RiteViewScreen;

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
