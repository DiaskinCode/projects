import React, { useLayoutEffect,useCallback,useState,useEffect } from 'react';
import i18n from 'i18next';
import { View,ScrollView,Dimensions,TouchableWithoutFeedback, Text, StyleSheet, Image,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import YoutubePlayer from "react-native-youtube-iframe";

import { useSelector,useDispatch } from 'react-redux';
import { increment } from '../reducers/riteReducer';

export default function UmrahRiteViewVideoScreen (props) {
  const UmrahInstructionsVideoData = [
    {
        id: 1,
        title: i18n.t("Umrah_Instructions_Video_Data_Title"),
        youtubeId:"yy6hW0NhZco",
        description: i18n.t("Umrah_Instructions_Video_Data_Description"),
        image: require('../assets/images/RiteImg.png'),
        desc: i18n.t("Umrah_Instructions_Video_Data_Desc"),
        arabText:'إِنَّ الصَّفَا وَ الْمَرْوَةَ مِنْ شَعَائِرِ اللهِ فَمَنْ حَجَّ الْبَيْتَ أَوِ اعْتَمَرَ فَلاَ جُنَاحَ عَلَيْهِ أَن يَطَّوَّفَ بِهِمَا',
        translatedArabText: i18n.t("Umrah_Instructions_Video_Data_TranslatedArabText"),
        borderColor: '#A1F6FB'
    },
]

  const HeaderTitle = props.route.params.HeaderTitle
  const RiteInstructionId = props.route.params.id
  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(true);
    }
  }, []);
  const [playing, setPlaying] = useState(false);
  const Navigation = useNavigation()
  const Rite = UmrahInstructionsVideoData[RiteInstructionId - 1]
  const ScreenWidth = Dimensions.get('window').width

  // add rite to redux 
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(increment({type:'umrahVideo',id:RiteInstructionId}))
  },[RiteInstructionId])
  
  useLayoutEffect(() => {
    Navigation.setOptions({
      headerTitle: () => (<Text style={{fontFamily: 'GolosBold', fontSize: 18}}>{HeaderTitle}</Text>)
    });
  }, [Navigation]);
    return (
      <ScrollView>
        <View style = {styles.container}>
          <Text style = {styles.desc}>{Rite['desc']}</Text>
          <View style={styles.videoContainer}>
            <YoutubePlayer
              height={195}
              width={ScreenWidth * 0.90}
              play={false}
              videoId={Rite['youtubeId']}
              onChangeState={onStateChange}
            />  
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
    desc: {
      fontSize:18,
      marginTop:30,
    },

    videoContainer:{
      borderRadius:15,
      overflow:'hidden',
      marginTop:40,
    }
  })
