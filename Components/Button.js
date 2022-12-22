import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';
import { Title } from './Title'
import { Description } from './Description';

export const Button = ({title, description, icon, type, onPress, item}) => {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.Container}>
        <View style={styles.Content}>

          <View style={{Width: '75%'}}>
            <Title type={type} text={title || item.title}></Title>
            <Description text={description}/>
          </View>

          <Image source={icon} style={styles.Icon}/>
        </View>
      </View>
      </TouchableWithoutFeedback>
    );
  }
const styles = StyleSheet.create({
    Container: {
      backgroundColor: '#F6F6F6',
      borderRadius: 20,
    },
    Content: {
      paddingVertical: 9,
      paddingLeft: 15,
      paddingRight: 11,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    Icon: {
      width: 32,
      height: 32,
      alignSelf: 'center'
    }
});

