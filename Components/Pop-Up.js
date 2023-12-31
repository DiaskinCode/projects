import React, { Component } from 'react';
import { View, Modal, StyleSheet, TouchableOpacity, Pressable, Image, ScrollView, Text,Share } from 'react-native';
import { Title } from './Title';

export const QuestionsPopUp = (props) => {
  return (
    <View>
      <Modal
        transparent={true}
        visible={props.visible} >
          <View style={styles.ModalContainer}>
            <ModalHeader Close={props.Close} title={props.title} text={props.text}/>

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
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: props.title + '\n - \n' + props.text + '\n - \n Ответ из приложения Hajjum',
        title: props.title
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.HeaderContainer}>
      <View style={styles.Left}>
        <Text style={styles.Title}>{props.title}</Text>
      </View>
      <View style={styles.Right}>
      {props.type == 'Settings' ? null : <TouchableOpacity onPress={onShare}>
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
    height: '50%',
    paddingHorizontal: '6.666%',
    paddingTop: '7%',
    alignSelf: 'flex-end',
    borderRadius : 40,
    position: 'absolute',
    bottom: -30,
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
  Left: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  Right: {
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
    fontFamily: 'GolosRegular',
    lineHeight: 20,
    fontSize: 14,
    marginBottom:80,
    paddingRight:20,
  },
  Title: {
    fontFamily: 'GolosBold',
    fontSize: 12,
    lineHeight: 14,
  }
  
});