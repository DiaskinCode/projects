import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import { Description } from '../Components/Description';

export const ArticleItem = (props) => {
    return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.Container}>
        <Image source={{uri :`http://oralbekov.dias19.fvds.ru${props.item.upload}`}} style={styles.Image}/>
        <View style={{marginTop: 9}}>
            <Description text={props.item.created_at}/>
        </View>
        <Text style={styles.Title}>{props.item.title}</Text>
      </View>
    </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    Container: {    
        borderBottomWidth: 1,
        borderColor: '#E9E9E9'
    },
    Title: {
        lineHeight: 24,
        fontFamily: 'GolosBold',
        fontSize: 18,
        width: '80%',
        marginBottom: 15
    },
    Image: {
        resizeMode: 'cover',
        width: '100%',
        height: 154,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 6,
    },
});
