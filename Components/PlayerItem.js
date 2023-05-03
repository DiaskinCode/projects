import React, { useState, useCallback, useMemo} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image, Dimensions, Modal, Pressable,Linking,Alert} from 'react-native';
import { Title } from './Title'
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
    const ItemWidth = useMemo(() => ScreenWidth * 0.865)
    const [ playing, setPlaying ] = useState(true);
    const [fullscreen, setFullscreen] = useState(false);

    const onFullScreen = () => {
        const url = `https://www.youtube.com/watch?v=${item.youtubeId}`;
        Linking.openURL(url);
      };

    return (
     <ImageBackground imageStyle={styles.ImageBackground} source={item.image}>
        <View style={[styles.Container, {width: ItemWidth}]}>
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
                        onFullScreen={onFullScreen}
                    />  
                </View>
            </View>
            <Pressable 
                style={styles.centeredView} 
                onPress={() => setModalVisible(!modalVisible)}/>
        </Modal>
    </ImageBackground>
    );
  }

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        borderRadius: 20, 
        height: 104,
        paddingVertical: '4%',
        paddingRight: '10%',
        paddingLeft: '5%',
    },
    Content: {
        flex: 1,
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
    },
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
        height:'100%',
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
    }
});