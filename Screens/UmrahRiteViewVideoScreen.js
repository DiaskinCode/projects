import React, { useLayoutEffect,useCallback,useState } from 'react';
import { View,ScrollView,Dimensions,TouchableWithoutFeedback, Text,AsyncStorage, StyleSheet, Image,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react'
import { UmrahInstructionsVideoData } from '../Components/Data';
import { Rite } from '../Components/Rite';
import YoutubePlayer from "react-native-youtube-iframe";

export default function UmrahRiteViewVideoScreen (props) {
  const HeaderTitle = props.route.params.HeaderTitle
  const RiteInstructionId = props.route.params.id
  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(true);
    }
  }, []);
  const [playing, setPlaying] = useState(false);
  const Data = props.route.params.Data
  const RiteAsyncStorageType = props.route.params.type
  const Navigation = useNavigation()
  const Rite = UmrahInstructionsVideoData[RiteInstructionId - 1]
  const ScreenWidth = Dimensions.get('window').width
  

  AsyncStorage.getItem(`umrahrite${RiteAsyncStorageType}`,(err, previousRite) => {
    let riteProgress = []
    if(previousRite == null) {
      riteProgress.push(props.route.params.id)
      AsyncStorage.setItem(`umrahrite${RiteAsyncStorageType}`,JSON.stringify(riteProgress));
    } else{
      if (!previousRite.includes(props.route.params.id)){
        riteProgress.push(props.route.params.id)
      }
      JSON.parse(previousRite).map((item) => {
          riteProgress.push(item)
      })
      AsyncStorage.setItem(`umrahrite${RiteAsyncStorageType}`,JSON.stringify(riteProgress));
    }
  }); 
  
  // AsyncStorage.removeItem('rite')
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
