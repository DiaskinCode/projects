import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';


export const PrimaryButton = (props) => {
    return (
        <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>{props.text}</Text>
        </TouchableOpacity>
    );
  }
const styles = StyleSheet.create({
    primaryButton:{
        flexDirection:'row',
        backgroundColor:'#61C56C',
        height:55,
        width:'100%',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
      },  
      primaryButtonText:{
        color:'#fff',
        fontSize:16,
        fontWeight:'500',
      }, 
});
