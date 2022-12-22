import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableWithoutFeedback, Image, Dimensions } from 'react-native';
import { Title } from './Title';
import { Description } from './Description';
import window from '../constants/Layout.js'

export const RiteProgress = (props) => {

  const ScreenWidth = Dimensions.get('window').width
    return (
    <ImageBackground source={props.background} imageStyle={styles.Container} resizeMode='cover'>
    <View style={[styles.Container, {width: ScreenWidth * 0.42, height: ScreenWidth * 0.42}]}>
        <View style={styles.Content}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{width: '80%'}}>
              <Text style={styles.Title}>{props.title}</Text>
            </View>

            <View style={styles.Count}>
              <Title text={props.count} type='Bold11'/>
            </View>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
            <Description text={props.description} color='#FFFFFF'/>
            <Image source={props.icon} style={styles.Icon}/>
          </View>
        
          
            <TouchableWithoutFeedback onPress={props.onPress} style={{}}>
              <View style={styles.Button}>
                <View style={{marginHorizontal: 13, marginVertical: 7, width: '100%'}}>
                  <Description text={'Продолжить'} color='#FFFFFF'/>
                  <Text style={styles.Title}>{props.currentRiteTitle != 'undefined' ? props.currentRiteTitle : 'Обряды'}</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
        </View>
    </View>
    </ImageBackground>
    );
  }
const styles = StyleSheet.create({
    Container: {
      borderRadius: 20,
      marginBottom: 10
    },
    Content: {
      marginHorizontal: 15,
      marginVertical: 14,
      flex: 1
    },
    Title: {
      fontFamily: 'GolosSemiBold',
      fontSize: 12,
      color: '#FFFFFF',
      maxWidth:'84%',
    },
    Count: {
      backgroundColor: '#FFFFFF',
      height: 18,
      width: 18,
      borderRadius: 6,
      flexDirection: 'row', 
      justifyContent: 'center',
      alignItems: 'center'
    },
    Button: {
      borderWidth: 1,
      borderColor: '#FFFFFF',
      borderRadius: 10,
      marginTop: 'auto',
      
    },
    Icon: {
      width: 24,
      height: 24,
    },
});