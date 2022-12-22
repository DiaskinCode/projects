import React, { Component,useState,useCallback} from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, ImageBackground, Image, Dimensions, Modal, Pressable} from 'react-native';
import { Title } from './Title'
import { Description } from './Description';
import YoutubePlayer from "react-native-youtube-iframe";

export const PlayerItem = ({ item }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const onStateChange = useCallback((state) => {
        if (state === "ended") {
          setPlaying(false);
          Alert.alert("video has finished playing!");
        }
      }, []);
    const ScreenWidth = Dimensions.get('window').width
    const ItemWidth = ScreenWidth * 0.8665
    const [playing, setPlaying] = useState(true);

    return (
     <ImageBackground imageStyle={styles.ImageBackground} source={item.image}>
        <Modal
            onPress={() => setModalVisible(!modalVisible)}
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
          
        >
            <View style={styles.YoutubePlayerWrapper}>
                <Pressable style={styles.YoutubePlayerClose} onPress={() => setModalVisible(!modalVisible)}>
                    <Image style={{height:20,width:20,}} source={require('../assets/Icons/X.png')}/>
                </Pressable>
                <View style={styles.YoutubePlayerVideoWrapper}>
                    <Image style={styles.preloader} source={require('../assets/images/spinner.gif')}/>
                    <YoutubePlayer
                    height={195}
                    width={ScreenWidth * 0.90}
                    play={true}
                    videoId={item.youtubeId}
                    onChangeState={onStateChange}
                    />  
                </View>
            </View>
            <Pressable style={styles.centeredView} onPress={() => setModalVisible(!modalVisible)}>
            </Pressable>
        </Modal>
        <View style={{flexDirection: 'row', width: ItemWidth, borderRadius: 20, height: 104}}>
            <View style={styles.Content}>
                <View>
                    <Text style={styles.PlayerStatus}>{item.status}</Text>
                    <Title text={item.title} type='Player'/>
                </View>
                
                <TouchableOpacity onPress={() => setModalVisible(true)} style={{alignSelf: 'center'}}>
                    <View>
                        <Image style={styles.PlayIcon} source={require('../assets/Icons/PlayCircle.png')}/>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </ImageBackground>
    );
  }
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        position:'relative',
        zIndex:1,
        backgroundColor:"rgba(0,0,0,.5)",
      },
    YoutubePlayerWrapper:{
        position:'absolute',
        zIndex:2,
        top: '35%',
        left:'5%',
    },
    YoutubePlayerVideoWrapper:{
        backgroundColor:'#fff',
        borderRadius:20,
        overflow:'hidden',
        alignItems:'center',
        justifyContent:'center',
    },
    preloader:{
        position:'absolute',
        height:30,
        width:30,
    },  
    YoutubePlayerClose:{
        position:'absolute',
        top:-55,
        right:10,
        backgroundColor:'#F6F6F6',
        borderRadius:10,
        padding:5,
        alignItems:'center',
        justifyContent:"center",
        zIndex:2,
        height:35,
        width:35,
    },
    Content: {
        height: '100%',
        width: '100%',
        paddingVertical: '4%',
        paddingRight: '10%',
        paddingLeft: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ImageBackground: {
        borderRadius: 20,
        height: 104,
    },
    PlayerStatus: {
        fontSize: 10,
        color: '#FFFFFF',
        fontFamily: 'GolosRegular'
    },
    PlayIcon: {
        width: 54,
        height: 54,
        alignSelf: 'center'
    }
});