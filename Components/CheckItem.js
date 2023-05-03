import React, { useState } from 'react';
import { View, Text, Image, TouchableWithoutFeedback, TouchableOpacity, StyleSheet } from 'react-native';
import {useTranslation} from 'react-i18next'

export const CheckItem = (props) => { 
    const [checked, setChecked] = useState(true)
    const {t} = useTranslation()

    return (
      <View style={styles.Container}>
        <View style={styles.Wrapper}>
            <View style={styles.Left}>
                <Text style={styles.Title}>{props.title}</Text>
                <Text style={styles.Description}>{props.description}</Text>
            </View>
            <View style={styles.Right}>
                <Image 
                    source={checked ? require('../assets/Icons/CheckGreen.png') : require('../assets/Icons/CheckGreenEmpty.png')} 
                    style={styles.Icon}/>
            </View>
        </View>
        {props.type == 'Article' ?
        <View>
        <TouchableOpacity onPress={props.onPress}>
                <Text style={styles.Button}>{t('watch')}</Text>
        </TouchableOpacity>

        <Image style={styles.Image} source={props.image}/>
        </View>
        : null}
      </View>
    );
}
const styles = StyleSheet.create({
    Container: {
        width: '100%',
        borderRadius: 20,
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: '#E9E9E9',
        marginBottom:20,
    },
    Wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6,
    },
    Left: {
        width: '90%'
    },
    Title: {
        fontFamily: 'GolosBold',
        fontSize: 15,
        lineHeight: 18,
        marginBottom: 6,
    },
    Description: {
        fontFamily: 'GolosRegular',
        fontSize: 14,
        lineHeight: 20,
    },
    Icon: {
        width: 22,
        height: 22,
    },
    Button: {
        fontFamily: 'GolosBold',
        fontSize: 15,
        lineHeight: 21,
        color: '#61C66C',
        marginBottom: 12,
    },
    Image: {
        height: 110,
        width: '100%',
        borderRadius: 13,
    }
});
