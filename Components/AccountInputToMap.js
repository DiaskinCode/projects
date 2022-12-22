import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';


export const AccountInputToMap = (props) => {
    return (
        <View style={styles.inputContainer}>
            <View style={{width:'70%',}}>
                <Text style={styles.inputText}>{props.name}</Text>
                <TextInput
                    style={styles.input}
                    placeholder={props.placeholder}
                    keyboardType={props.type}
                    multiline={true}
                />
            </View>

            <View style={styles.Icon}>
                <Image style={{width: 14, height: 14}} source={require('../assets/Icons/NavigationArrow.png')}/>
            </View>
        </View>
    );
  }
const styles = StyleSheet.create({
    input: {
        height: 50,
        fontSize:15,
        marginTop:5,
    },
    inputContainer: {
        borderWidth: 1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:15,
        padding: 10,
        borderRadius: 10,
        borderColor:'#E9E9E9',
    },  
    inputText: {
        color:'#BBBBBB',
    },
    Icon: {
        height: '100%',
        width: 30,
        borderRadius: 4,
        backgroundColor: '#F6F6F6',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
