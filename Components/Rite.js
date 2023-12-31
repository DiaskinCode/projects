import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, Image, Text, TouchableWithoutFeedback} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Rite = (props) => {
  const Checked = props.checked

  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles[`Container${Checked ? 'Checked' : ''}`]}>
        <View style={styles.Left}>
          <View style={styles[`Count${Checked ? 'Checked' : ''}`]}>
              <Text style={styles[`Number${Checked ? 'Checked' : ''}`]}>{props.item.id.toString().length < 2 ? '0' : ''}{props.item.id}</Text>
          </View>
          <View style ={styles.riteContent}>
              <Text numberOfLines={2} ellipsizeMode="tail" style={styles.Title}>{props.item.title}</Text>
              <Text style={styles.Description}  numberOfLines={1} ellipsizeMode="tail">{props.item.description}</Text>
          </View>
        </View>
          
          {Checked ?
            <Image 
              source={require('../assets/Icons/Check.png')}
              style={styles.Icon}/> : null
          }
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  Container: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 65,
    borderColor: '#E9E9E9',
    borderWidth: 1,
    borderRadius: 20 ,
    paddingHorizontal: 15,
    paddingVertical: 7,
    marginTop: 10,
  },
  ContainerChecked: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 65,
    maxHeight:65,
    borderRadius: 20 ,
    paddingHorizontal: 15,
    paddingVertical: 7,
    marginTop: 10,
    backgroundColor: '#F6F6F6'
  },
  Left: {
    width: '79%',
    height:65,
    position:'relative',
    flexDirection: 'row'
  },
  Count: {
    width:36,
    height:36,
    marginVertical:10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    borderColor: '#000',
    marginRight: 10,
    backgroundColor: '#61C66C'
  },
  CountChecked: {
    borderWidth: 1,
    marginVertical:10,
    backgroundColor: 'transparent',
    borderColor: '#000000',
    width:36,
    height:36,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginRight:10,
  },
  Number: {
    fontSize: 16,
    fontFamily: 'GolosBold',
    color: '#FFF'
  },
  NumberChecked: {
    fontSize: 16,
    fontFamily: 'GolosBold',
    color: '#1C1C1E'
  },
  Title : {
    marginTop:10,
    fontSize: 14,
    fontFamily: 'GolosBold',
  },
  Description : {
    fontSize: 10,
    marginTop:4,
    fontStyle: 'GolosMedium',
    color: '#1C1C1E',
    opacity: 0.3
  },
  content : {
    flexDirection:'column',
    width: '77%',
    paddingRight:20
  },
  Icon : {
    width: 18,
    height: 18,
    padding: 0,
    backgroundColor: '#61C66C', 
    borderRadius: 5
  },
});