import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';
import { Title } from './Title'

export const Question = ({onPress, item}) => {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.Container}>
        <View style={styles.Content}>
          <View style={{width: '80%'}}>
            <Title type={'Question'} text={item.title}></Title>
          </View>

          <Image source={require('../assets/Icons/Plus.png')} style={styles.Icon}/>
        </View>
      </View>
      </TouchableWithoutFeedback>
    );
  }
const styles = StyleSheet.create({
    Container: {
      backgroundColor: '#F6F6F6',
      borderRadius: 20,
      marginBottom: 6,
    },
    Content: {
      paddingVertical: 11,
      paddingLeft: 15,
      paddingRight: 11,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    Icon: {
      width: 32,
      height: 32,
      alignSelf: 'center'
    }
});

