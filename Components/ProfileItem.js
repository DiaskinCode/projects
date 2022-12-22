import React, { Component } from 'react';
import { Image,View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const ProfileItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style = {styles.ProfileItem}>
                <Image source={props.image} style={styles.Icon}/>
                <Text style={styles.ProfileItemText}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    );
  }
const styles = StyleSheet.create({
  ProfileItem: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#E9E9E9',
    paddingVertical: 15,
  },
  ProfileItemText: {
    marginLeft: 15,
    fontSize: 15,
  },
  Icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain'
  }

});
