import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import i18n from 'i18next';
import { useNavigation } from '@react-navigation/native';
import { Rite } from '../Components/Rite';
import { useSelector } from 'react-redux';

export default function UmrahRiteVideoInstructionScreen (props) {
  const Navigation = useNavigation()
  const rites = useSelector((state) => state.rite.umrahVideo);

  const UmrahInstructionsVideoData = [
    {
        id: 1,
        title: i18n.t("Umrah_Instructions_Video_Data_Title"),
        youtubeId:"yy6hW0NhZco",
        description: i18n.t("Umrah_Instructions_Video_Data_Description"),
        image: require('../assets/images/RiteImg.png'),
        desc: i18n.t("Umrah_Instructions_Video_Data_Desc"),
        arabText:'إِنَّ الصَّفَا وَ الْمَرْوَةَ مِنْ شَعَائِرِ اللهِ فَمَنْ حَجَّ الْبَيْتَ أَوِ اعْتَمَرَ فَلاَ جُنَاحَ عَلَيْهِ أَن يَطَّوَّفَ بِهِمَا',
        translatedArabText: i18n.t("Umrah_Instructions_Video_Data_TranslatedArabText"),
        borderColor: '#A1F6FB'
    },
]

    return (
      <View style={styles.Container}>
        <FlatList data={UmrahInstructionsVideoData}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <Rite checked={rites.includes(item.id)} type={'video'} item={item}
          onPress={() => Navigation.navigate('UmrahRiteViewVideoScreen', {
            HeaderTitle: item.title,
            type:'video',
            id:item.id,
            Data:UmrahInstructionsVideoData[item.id - 1],
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