import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';


export const SecondaryButton = (props) => {
    return (
        <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>{props.text}</Text>
        </TouchableOpacity>
    );
  }
const styles = StyleSheet.create({
    secondaryButton:{
        flexDirection:'row',
        backgroundColor:'#F6F6F6',
        height:45,
        width:'100%',
        borderRadius:20,
        marginTop:15,
        alignItems:'center',
        justifyContent:'center',
      },  
      secondaryButtonText:{
        color:'#B5B5B5',
        fontSize:16,
        fontWeight:'500',
      }, 
});
