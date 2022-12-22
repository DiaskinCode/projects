import React, { Component } from 'react';
import { View, Modal, StyleSheet, TouchableOpacity, Pressable, Image, ScrollView, Text } from 'react-native';
import { Title } from './Title';

export const QuestionsPopUp = (props) => {
  return (
    <View>
      <Modal
        transparent={true}
        visible={props.visible} >
          <View style={styles.ModalContainer}>
            <ModalHeader Close={props.Close} title={props.title}/>

            <ScrollView bounces={false}>
              <Text style={styles.Text}>{props.text}</Text>
            </ScrollView>
          </View>
          <Pressable style={styles.ModalBackground} onPress={props.Close}/>
      </Modal>
    </View>
  );
}
export const ModalHeader = (props) => {
  return (
    <View style={styles.HeaderContainer}>
      <View style={{width: '80%'}}>
        <Title type='Category' text={props.title}/>
      </View>
      <View style={styles.HeaderRight}>
        {props.type == 'Settings' ? null : <TouchableOpacity>
          <View style={styles.IconConatainer}>
            <Image source={require('../assets/Icons/UploadSimple.png')} style={styles.Icon}/>
          </View>
        </TouchableOpacity>}

      <TouchableOpacity onPress={props.Close}>
        <View style={[styles.IconConatainer, {backgroundColor: '#F6F6F6'}]}>
          <Image source={require('../assets/Icons/X.png')} style={styles.Icon}/>
        </View>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  ModalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 1
  },
  ModalContainer: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '40%',
    paddingHorizontal: '6.666%',
    paddingTop: '7%',
    alignSelf: 'flex-end',
    borderRadius : 40,
    position: 'absolute',
    bottom: 0,
    zIndex: 2,
    shadowColor: '#0000001A',
    shadowRadius: 2,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowColor: '#000000',
    elevation: 4,
  },
  HeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 22,
  },
  HeaderRight: {
    flexDirection: 'row',
  },
  IconConatainer: {
    padding: 6,
    borderColor: '#E9E9E9',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 6,
  },
  Icon: {
    width: 18,
    height: 18,
  },
  Text: {
    fontFamily: 'GolosBold',
    fontSize: 14
  }
  
});