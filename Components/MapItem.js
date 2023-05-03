import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

export const MapItem = (props) => {
    const {t} = useTranslation()
    const Navigation = useNavigation()
    return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.Container}>
        <Image style={styles.Image} source={{uri :`http://oralbekov.dias19.fvds.ru${props.image}`}}/>

        <View style={styles.Right}>
            <View style={styles.TextWrapper}>
                <Text style={styles.Title}>{props.title}</Text>
                <Text style={styles.Description}>{props.desc}</Text>
            </View>
            <View style={styles.ButtonWrapper}>
                <ItemButton
                    type={'PointButton'}
                    buttonText={props.pointButtonText}
                    onPress={() => Navigation.navigate('PlaceOnMap',{id: props.id,HeaderTitle:props.title,type: props.type})}
                />
                <ItemButton
                    buttonText={t('more')}
                    onPress={props.onPress}
                />
            </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
    );
  }

export const ItemButton = (props) => {
    return (
    <TouchableOpacity onPress={props.onPress}>
        <View style={styles.ButtonContainer}>
            {props.type == 'PointButton' ?
            <Image 
                style={styles.ButtonIcon}
                source={require('../assets/Icons/MapPin.png')}/> 
                : null}
            {props.type == 'PhoneButton' ?
            <Image 
                style={styles.ButtonIcon}
                source={require('../assets/Icons/Phone.png')}/> 
                : null}
            <Text 
                style={[styles.ButtonTitle, props.type == 'PointButton' ? 
                    {color: '#1C1C1E'} : {opacity: 0.5}]}>
                    {props.buttonText}
            </Text>
        </View>
    </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        borderColor: '#E9E9E9',
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
        marginBottom:20,
    },
    Right: {
        flex: 1
    },
    Title: {
        fontFamily: 'GolosBold',
        fontSize: 15,
        lineHeight: 18,
        marginBottom: 3,
    },
    Description: {
        fontFamily: 'GolosMedium',
        fontSize: 10,
        lineHeight: 12,
        opacity: 0.3
    },
    Image: {
        height: 86,
        width: 86,
        borderRadius: 10,
        marginRight: 15
    },
    ButtonWrapper: {
        flexDirection: 'row',
        marginTop: 'auto'
    },
    ButtonIcon: {
        width: 9,
        height: 12,
        marginRight: 8,
    },
    ButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 6,
        paddingHorizontal: 10,
        backgroundColor: '#F6F6F6',
        borderRadius: 10,
        marginRight: 5,
    },
    ButtonTitle: {
        fontFamily: 'GolosMedium',
        fontSize: 12,
        lineHeight: 14,
    }
});
