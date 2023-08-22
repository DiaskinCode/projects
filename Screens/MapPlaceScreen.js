import React, { Component,useLayoutEffect} from 'react';
import { View, Image,Text, FlatList, ScrollView, StyleSheet } from 'react-native';
import { MapItem } from '../Components/MapItem';
import { useNavigation } from '@react-navigation/native';
import { useGetPlaceByIdQuery } from '../api/apiSlice'
import i18n from 'i18next'

export default function MapPlacesScreen (props) {
    const {
        data: Place,
        isSuccess,
        isLoading,
        isError,
        error
      } = useGetPlaceByIdQuery({language:i18n.language,id:props.route.params.id})

    const Navigation = useNavigation()

    useLayoutEffect(() => {
        Navigation.setOptions({
          headerTitle: () => <Text numberOfLines={1} style={{width:'75%',fontFamily: 'GolosBold', fontSize: 18}}//указываете допустимое количество строк для текста
          ellipsizeMode="tail" //место, где будет разрыв текста в три точки (возможно указать 'head', 'middle', 'tail', 'clip'. 'clip' только для iOS)
    >{props.route.params.HeaderTitle}</Text>
        });
      }, [Navigation]);
      
    return (
      <ScrollView>
        {Place == undefined ? false : 
        <View style={styles.Container}>
            <Image style={styles.Image} source={{uri :`http://oralbekov.dias19.fvds.ru${Place.upload}`}}/>
            <Text style={styles.Text}>{Place.content}</Text>
        </View>
        }
      </ScrollView>
    );
}
const styles = StyleSheet.create({
    Container: {
      flex: 1,
      marginHorizontal: '6%',
      marginTop:26,
    },
    Image: {
        borderRadius:20,
        height:240,
        width:'100%',
    },
    Text:{
        fontWeight:'400',
        fontSize:18,
        lineHeight:25,
        marginTop:26,
    }
});
