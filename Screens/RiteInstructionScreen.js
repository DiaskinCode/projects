import React, { useState,useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import i18n from 'i18next';
import { useNavigation } from '@react-navigation/native';
import { Rite } from '../Components/Rite';

import { useSelector } from 'react-redux';

export default function RiteInstructionScreen (props) {
    const Navigation = useNavigation()
    const rites = useSelector((state) => state.rite.hajjText);

    const InstructionsData = [
        {
            id: 1,
            title: i18n.t("Umrah_Instructions_Data_Title"),
            description: i18n.t("Umrah_Instructions_Data_Description"),
            image: require('../assets/images/RiteImg.png'),
            desc: i18n.t("Umrah_Instructions_Data_ArticleText"),
        },
        {
          id: 2,
          title: i18n.t("Umrah_Instructions_Data_Title_5"),
          description: i18n.t("Umrah_Instructions_Data_Description_5"),
          image: require('../assets/images/RiteImg.png'),
          desc: i18n.t("Umrah_Instructions_Data_ArticleText_5"),
      },
        {
            id: 3,
            title: i18n.t("Instructions_Data_Title_2"),
            description: i18n.t("Instructions_Data_Description_2"),
            image: require('../assets/images/RiteImg.png'),
            desc: i18n.t("Instructions_Data_Desc_2"),
            borderColor: '#A1F6FB'
        },
        {
            id: 4,
            title: i18n.t("Umrah_Instructions_Data_Title_2"),
            description: i18n.t("Umrah_Instructions_Data_Description_2"),
            image: require('../assets/images/RiteImg.png'),
            desc: i18n.t("Umrah_Instructions_Data_ArticleText_2"),
        },
        {
            id: 5,
            title: i18n.t("Umrah_Instructions_Data_Title_6"),
            description: i18n.t("Umrah_Instructions_Data_Description_6"),
            image: require('../assets/images/RiteImg.png'),
            desc: i18n.t("Umrah_Instructions_Data_ArticleText_6"),
        },
        {
          id: 6,
          title: i18n.t("Umrah_Instructions_Data_Title_7"),
          description: i18n.t("Umrah_Instructions_Data_Description_7"),
          image: require('../assets/images/RiteImg.png'),
          desc: i18n.t("Umrah_Instructions_Data_ArticleText_7"),
      },
        {
            id: 7,
            title: i18n.t("Umrah_Instructions_Data_Title_3"),
            description: i18n.t("Umrah_Instructions_Data_Description_3"),
            image: require('../assets/images/RiteImg.png'),
            desc: i18n.t("Umrah_Instructions_Data_ArticleText_3"),
            borderColor: '#A1F6FB'
        },
        {
            id: 8,
            title: i18n.t("Instructions_Data_Title_5"),
            description: i18n.t("Instructions_Data_Description_5"),
            image: require('../assets/images/RiteImg.png'),
            desc: i18n.t("Instructions_Data_Desc_5"),
            borderColor: '#A1F6FB'
        },
        {
            id: 9,
            title: i18n.t("Instructions_Data_Title_14"),
            description: i18n.t("Instructions_Data_Description_14"),
            image: require('../assets/images/RiteImg.png'),
            desc: i18n.t("Instructions_Data_Desc_14"),
            borderColor: '#A1F6FB'
        },
        {
            id: 10,
            title: i18n.t("Instructions_Data_Title_6"),
            description: i18n.t("Instructions_Data_Description_6"),
            image: require('../assets/images/RiteImg.png'),
            desc: i18n.t("Instructions_Data_Desc_6"),
            borderColor: '#A1F6FB'
        },
        {
            id: 11,
            title: i18n.t("Instructions_Data_Title_7"),
            description: i18n.t("Instructions_Data_Description_7"),
            image: require('../assets/images/RiteImg.png'),
            desc: i18n.t("Instructions_Data_Desc_7"),
            borderColor: '#A1F6FB'
        },
        {
            id: 12,
            title: i18n.t("Instructions_Data_Title_9"),
            description: i18n.t("Instructions_Data_Description_9"),
            image: require('../assets/images/RiteImg.png'),
            desc: i18n.t("Instructions_Data_Desc_9"),
            borderColor: '#A1F6FB'
        },
        {
            id: 13,
            title: i18n.t("Instructions_Data_Title_8"),
            description: i18n.t("Instructions_Data_Description_8"),
            image: require('../assets/images/RiteImg.png'),
            desc: i18n.t("Instructions_Data_Desc_8"),
            borderColor: '#A1F6FB'
        },
        {
            id: 14,
            title: i18n.t("Instructions_Data_Title_10"),
            description: i18n.t("Instructions_Data_Description_10"),
            image: require('../assets/images/RiteImg.png'),
            desc: i18n.t("Instructions_Data_Desc_10"),
            borderColor: '#A1F6FB'
        },
        {
            id:15,
            title: i18n.t("Instructions_Data_Title_11"),
            description: i18n.t("Instructions_Data_Description_11"),
            image: require('../assets/images/RiteImg.png'),
            desc: i18n.t("Instructions_Data_Desc_11"),
            borderColor: '#A1F6FB'
        },
        {
            id: 16,
            title: i18n.t("Instructions_Data_Title_12"),
            description: i18n.t("Instructions_Data_Description_12"),
            image: require('../assets/images/RiteImg.png'),
            desc: i18n.t("Instructions_Data_Desc_12"),
            borderColor: '#A1F6FB'
        },
        {
            id: 17,
            title: i18n.t("Instructions_Data_Title_13"),
            description: i18n.t("Instructions_Data_Description_13"),
            image: require('../assets/images/RiteImg.png'),
            desc: i18n.t("Instructions_Data_ArticleText_13"),
        },

]
    return (
      <View style={styles.Container}>
        <FlatList data={InstructionsData}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <Rite checked={rites.includes(item.id)} type={'text'} item={item}
          onPress={() => Navigation.navigate('RiteViewScreen', {
            HeaderTitle: item.title,
            type:'text',
            id:item.id,
            Data:InstructionsData[item.id - 1],
          })}/>}/>
      </View>
    );
}

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      marginHorizontal: '6%',
    }
});