import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList,ScrollView} from 'react-native';
import i18n from 'i18next';
import { RiteTextLesson } from '../Components/RiteTextLesson';
import { useNavigation } from '@react-navigation/native';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

export default function RiteTextLessonListScreen (props) {
  useLayoutEffect(() => {
    Navigation.setOptions({
      headerTitle: () => <Text style={{fontFamily: 'GolosBold', fontSize: 18}}>{props.route.params.head}</Text>
    });
  }, [Navigation]);

  const PraysData = [
    {
        id:1,
        title:i18n.t("Prays_Data_Title"),
        when:i18n.t("Prays_Data_When"),
        content:i18n.t("Prays_Data_Content"),
        pray:'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَ النِّعْمَةَ لَكَ وَ الْمُلْكَ، لا شَرِيكَ لَكَ',
        transcription:i18n.t("Prays_Data_Transcription"),
        translate:i18n.t("Prays_Data_Translate")
    },
    {
        id:2,
        title:i18n.t("Prays_Data_Title_2"),
        when:i18n.t("Prays_Data_When_2"),
        content:i18n.t("Prays_Data_Content_2"),
        pray:'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَ النِّعْمَةَ لَكَ وَ الْمُلْكَ، لا شَرِيكَ لَكَ',
        transcription:i18n.t("Prays_Data_Transcription_2"),
        translate:i18n.t("Prays_Data_Translate_2")
    },
    {
        id:3,
        title:i18n.t("Prays_Data_Title_3"),
        when:i18n.t("Prays_Data_When_3"),
        content:i18n.t("Prays_Data_Content_3"),
        pray:'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَ النِّعْمَةَ لَكَ وَ الْمُلْكَ، لا شَرِيكَ لَكَ',
        transcription:i18n.t("Prays_Data_Transcription_3"),
        translate:i18n.t("Prays_Data_Translate_3")
    },
    {
      id:4,
      title:i18n.t("Prays_Data_Title_4"),
      when:i18n.t("Prays_Data_When_4"),
      content:i18n.t("Prays_Data_Content_4"),
      pray:'',
      transcription:i18n.t("Prays_Data_Transcription_4"),
      translate:i18n.t("Prays_Data_Translate_4")
  },
  {
      id:5,
      title:i18n.t("Prays_Data_Title_5"),
      when:i18n.t("Prays_Data_When_5"),
      content:i18n.t("Prays_Data_Content_5"),
      pray:'اَللَّهُمَّ أُحْرِمُ لَكَ شَعْرِي وَ بَشَرِي وَ لَحْمِي وَ دَمِي',
      transcription:i18n.t("Prays_Data_Transcription_5"),
      translate:i18n.t("Prays_Data_Translate_5")
  },
  {
      id:6,
      title:i18n.t("Prays_Data_Title_6"),
      when:i18n.t("Prays_Data_When_6"),
      content:i18n.t("Prays_Data_Content_6"),
      pray:'بِسْمِ اللَّهِ وَ اللَّهُ أَكْبَرُ. اَللَّهُمَّ إِيمَانًا بِكَ وَ تَصْدِيقًا بِكِتَابِكَ وَ وَفَاءً بِعَهْدِكَ وَ اتِّبَاعًا لِسُنَّةِ نَبِيِّكَ مُحَمَّدٍ، صَلَّى اللَّهُ عَلَيْهِ وَ سَلَّمَ',
      transcription:i18n.t("Prays_Data_Transcription_6"),
      translate:i18n.t("Prays_Data_Translate_6")
  },
  {
    id:7,
    title:i18n.t("Prays_Data_Title_7"),
    when:i18n.t("Prays_Data_When_7"),
    content:i18n.t("Prays_Data_Content_7"),
    pray:'',
    transcription:i18n.t("Prays_Data_Transcription_7"),
    translate:i18n.t("Prays_Data_Translate_7")
},
{
    id:8,
    title:i18n.t("Prays_Data_Title_8"),
    when:i18n.t("Prays_Data_When_8"),
    content:i18n.t("Prays_Data_Content_8"),
    pray:'',
    transcription:i18n.t("Prays_Data_Transcription_8"),
    translate:i18n.t("Prays_Data_Translate_8")
},
{
  id:9,
  title:i18n.t("Prays_Data_Title_9"),
  when:i18n.t("Prays_Data_When_9"),
  content:i18n.t("Prays_Data_Content_9"),
  pray:'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَ فِي الآخِرَةِ حَسَنَةً وَ قِنَا عَذَابَ النَّارِ',
  transcription:i18n.t("Prays_Data_Transcription_9"),
  translate:i18n.t("Prays_Data_Translate_9")
},
{
  id:10,
  title:i18n.t("Prays_Data_Title_10"),
  when:i18n.t("Prays_Data_When_10"),
  content:i18n.t("Prays_Data_Content_10"),
  pray:'اَللَّهُ أَكْبَرُ  لا إِلَهَ إِلاَّ اللَّهُ وَ اللَّهُ أَكْبَرُ، وَ لِلَّهِ الْحَمْدُ',
  transcription:i18n.t("Prays_Data_Transcription_10"),
  translate:i18n.t("Prays_Data_Translate_10")
},
]

  const UmrahTypesData = [
    {
        id:1,
        title:i18n.t("Prays_Data_Title"),
        when:i18n.t("Prays_Data_When"),
        content:i18n.t("Prays_Data_Content"),
        pray:'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَ النِّعْمَةَ لَكَ وَ الْمُلْكَ، لا شَرِيكَ لَكَ',
        transcription:i18n.t("Prays_Data_Transcription"),
        translate:i18n.t("Prays_Data_Translate")
    },
    {
        id:2,
        title:i18n.t("Prays_Data_Title_3"),
        when:i18n.t("Prays_Data_When_3"),
        content:i18n.t("Prays_Data_Content_3"),
        pray:'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَ النِّعْمَةَ لَكَ وَ الْمُلْكَ، لا شَرِيكَ لَكَ',
        transcription:i18n.t("Prays_Data_Transcription_3"),
        translate:i18n.t("Prays_Data_Translate_3")
    },
    {
      id:3,
      title:i18n.t("Prays_Data_Title_4"),
      when:i18n.t("Prays_Data_When_4"),
      content:i18n.t("Prays_Data_Content_4"),
      pray:'',
      transcription:i18n.t("Prays_Data_Transcription_4"),
      translate:i18n.t("Prays_Data_Translate_4")
  },
  {
      id:4,
      title:i18n.t("Prays_Data_Title_5"),
      when:i18n.t("Prays_Data_When_5"),
      content:i18n.t("Prays_Data_Content_5"),
      pray:'اَللَّهُمَّ أُحْرِمُ لَكَ شَعْرِي وَ بَشَرِي وَ لَحْمِي وَ دَمِي',
      transcription:i18n.t("Prays_Data_Transcription_5"),
      translate:i18n.t("Prays_Data_Translate_5")
  },
  {
      id:5,
      title:i18n.t("Prays_Data_Title_6"),
      when:i18n.t("Prays_Data_When_6"),
      content:i18n.t("Prays_Data_Content_6"),
      pray:'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَ فِي الآخِرَةِ حَسَنَةً وَ قِنَا عَذَابَ النَّارِ',
      transcription:i18n.t("Prays_Data_Transcription_6"),
      translate:i18n.t("Prays_Data_Translate_6")
  },
  {
    id:6,
    title:i18n.t("Prays_Data_Title_7"),
    when:i18n.t("Prays_Data_When_7"),
    content:i18n.t("Prays_Data_Content_7"),
    pray:'اَللَّهُ أَكْبَرُ، اَللَّهُ أَكْبَرُ، اَللَّهُ أَكْبَرُ، وَ لِلَّهِ الْحَمْدُ ، اَللَّهُ أَكْبَرُ عَلَى مَا هَدَانَا، وَ الْحَمْدُ لِلَّهِ عَلَى مَا أَوْلانَا ، لا إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَ لَهُ الْحَمْدُ يُحْيِي وَ يُمِيتُ بِيَدِهِ الْخَيْرُ ، وَ هُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ . لا إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ، أَنْجَزَ وَعْدَهُ، وَ نَصَرَ عَبْدَهُ، وَ هَزَمَ الأَحْزَابَ وَحْدَهُ . لا إِلَهَ إِلاَّ اللَّهُ وَ لاَ نَعْبُدُ إِلاَّ إِيَّاهُ، مُخْلِصِينَ لَهُ الدِّينُ، وَ لَوْ كَرِهَ الْكَافِرُونَ',
    transcription:i18n.t("Prays_Data_Transcription_7"),
    translate:i18n.t("Prays_Data_Translate_7")
  },
  {
    id:7,
    title:i18n.t("Prays_Data_Title_11"),
    when:i18n.t("Prays_Data_When_11"),
    content:i18n.t("Prays_Data_Content_11"),
    pray:'رَبِّ اغْفِرْ وَ ارْحَمْ وَ تَجَاوَزْ عَمَّا تَعْلَمُ، إِنَّكَ أَنْتَ الأَعَزُّ الأَكْرَمُ',
    transcription:i18n.t("Prays_Data_Transcription_11"),
    translate:i18n.t("Prays_Data_Translate_11")
  },
]
  
  const Navigation = useNavigation()
  const {t} = useTranslation()
    return (
        <View style={styles.Container}>
          { i18next.t('Prays_Data_Title') &&
            <FlatList 
              data={props.route.params.types === true ? UmrahTypesData : PraysData}
              keyExtractor={item => item.id}
              renderItem={({item}) => 
                <RiteTextLesson
                  item={item}
                  onPress={() => Navigation.navigate(props.route.params.types === true ? 'RiteTextLessonUmrahScreen' : 'RiteTextLessonScreen', {
                    HeaderTitle: item.title,
                    id:item.id,
                  })}
                />
              }/>}
        </View>
    );
}
const styles = StyleSheet.create({
  Container: {
    marginTop: 24,
    flex: 1,
  }
});



