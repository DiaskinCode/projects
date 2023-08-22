import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

export default function RiteTextLessonUmrahScreen (props) {
  const Navigation = useNavigation()
  useLayoutEffect(() => {
    Navigation.setOptions({
      headerTitle: () => <Text numberOfLines={1} style={{flex:0.8,fontFamily: 'GolosBold', fontSize: 18}}
      ellipsizeMode="tail"
  >{props.route.params.HeaderTitle}</Text>
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

  const Rite = PraysData[props.route.params.id - 1]
  
    return (
      <ScrollView>
        <View style={styles.Container}>
          {Rite.pray == '' || undefined || null ? <View></View> :
          <View style={styles.pray}>
              <Text style={styles.prayText}>{Rite.pray}</Text>
          </View>
          }
          <Text style={styles.content}>{Rite.content}</Text>
          {Rite.transcription == '' || undefined || null ? <View></View> :
            <View>
              <Text style={styles.greenText}>{i18n.t('transcription')}</Text>
              <Text style={styles.mainText}>{Rite.transcription}</Text>
              <View style={styles.border}></View>
              <Text style={styles.greenText}>{i18n.t('translate')}</Text>
              <Text style={styles.mainText}>{Rite.translate}</Text> 
            </View>
          }
        </View>
      </ScrollView>
    );
}
const styles = StyleSheet.create({
  Container: {
    marginHorizontal: '6%',
    marginTop: 24,
    flex: 1,
  },
  content:{
    fontWeight: '400',
    fontSize: 18,
    marginBottom:30,
  },
  pray:{
    marginVertical:20,
    borderRadius:20,
    padding:30,
    backgroundColor:'#61C66C',
  },
  prayText:{
    fontSize: 23,
    color:'#fff',
  },
  greenText:{
    fontWeight: '700',
    fontSize: 15,
    color:'#61C66C',
  },
  mainText:{
    marginTop:7,
    fontSize:18,
  },
  border:{
    height:1,
    backgroundColor:'#E9E9E9',
    marginVertical:20,
  }
});



