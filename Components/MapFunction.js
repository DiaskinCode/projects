import React from 'react';
import { View, FlatList, Dimensions, Text, useWindowDimensions, StyleSheet, Image } from 'react-native';

export const MapItemBtn = (props) => {
    return (
        <View style={styles.mapFunction} >
            <Text style={styles.text}>{props.text}</Text>
            { propsType == 'MapPoint' ?
            <Image style={styles.image} source={props.image}/> : 
            null
            }
        </View>
    );
}

const styles = StyleSheet.create({
    mapItemBtn: {
        width: '48.5%',
        height: 36,
        borderRadius:20,
        padding:7,
        backgroundColor:'#F6F6F6',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical: 6,
        paddingHorizontal: 10
    },
    text:{
        marginLeft:15,
    },
    Icon: {
        height: 11,
        width: 8,
    }

})