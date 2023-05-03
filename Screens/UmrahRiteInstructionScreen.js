import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import i18n from 'i18next';
import { Rite } from '../Components/Rite';

export default function UmrahRiteInstructionScreen (props) {
  const Navigation = useNavigation()

  const UmrahInstructionsData = [
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
      title: i18n.t("Umrah_Instructions_Data_Title_2"),
      description: i18n.t("Umrah_Instructions_Data_Description_2"),
      image: require('../assets/images/RiteImg.png'),
      desc: i18n.t("Umrah_Instructions_Data_ArticleText_2"),
  },
    {
      id: 4,
      title: i18n.t("Umrah_Instructions_Data_Title_6"),
      description: i18n.t("Umrah_Instructions_Data_Description_6"),
      image: require('../assets/images/RiteImg.png'),
      desc: i18n.t("Umrah_Instructions_Data_ArticleText_6"),
  },
  {
      id: 5,
      title: i18n.t("Umrah_Instructions_Data_Title_7"),
      description: i18n.t("Umrah_Instructions_Data_Description_7"),
      image: require('../assets/images/RiteImg.png'),
      desc: i18n.t("Umrah_Instructions_Data_ArticleText_7"),
  },
  {
      id: 6,
      title: i18n.t("Umrah_Instructions_Data_Title_3"),
      description: i18n.t("Umrah_Instructions_Data_Description_3"),
      image: require('../assets/images/RiteImg.png'),
      desc: i18n.t("Umrah_Instructions_Data_ArticleText_3"),
  },
  {
      id: 7,
      title: i18n.t("Umrah_Instructions_Data_Title_4"),
      description: i18n.t("Umrah_Instructions_Data_Description_4"),
      image: require('../assets/images/RiteImg.png'),
      desc: i18n.t("Umrah_Instructions_Data_ArticleText_4"),
  },
  {
    id: 8,
    title: i18n.t("Umrah_Instructions_Data_Title_8"),
    description: i18n.t("Umrah_Instructions_Data_Description_8"),
    image: require('../assets/images/RiteImg.png'),
    desc: i18n.t("Umrah_Instructions_Data_ArticleText_8"),
},

]

    return (
      <View style={styles.Container}>
        <FlatList data={UmrahInstructionsData}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <Rite category={'umrah'} type={'text'} item={item}
          onPress={() => Navigation.navigate('UmrahRiteViewScreen', {
            HeaderTitle: item.title,
            type:'text',
            id:item.id,
            Data:UmrahInstructionsData[item.id - 1],
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