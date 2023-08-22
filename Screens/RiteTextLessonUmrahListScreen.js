import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import i18n from 'i18next';
import { RiteTextLesson } from '../Components/RiteTextLesson';
import { useNavigation } from '@react-navigation/native';

export default function RiteTextLessonUmrahListScreen (props) {
  const {CategoryTitle} = props.route.params || {}

  PraysUmrahData = [
    {
        id:1,
        title:i18n("Prays_Umrah_Data_Title"),
        when:i18n("Prays_Umrah_Data_When"),
        content:i18n("Prays_Umrah_Data_Content"),
        pray:'لَبَّيْكَ ٱللَّٰهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ ٱلْحَمْدَ وَٱلنِّعْمَةَ لَكَ وَٱلْمُلْكَ، لَا شَرِيكَ لَكَ',
        transcription:i18n("Prays_Umrah_Data_Transcription"),
        translate:i18n("Prays_Umrah_Data_Translate"),
    }
]

  useLayoutEffect(() => {
    Navigation.setOptions({
      headerTitle: () => <Text style={{fontFamily: 'GolosBold', fontSize: 18}}>{i18n('rite_prays_heads')}</Text>
    });
  }, [Navigation]);
  
  const Navigation = useNavigation()
    return (
      <View style={styles.Container}>
        <FlatList 
          data={PraysUmrahData}
          keyExtractor={item => item.id}
          renderItem={({item}) => 
            <RiteTextLesson
              item={item}
              onPress={() => Navigation.navigate('RiteTextLessonUmrahScreen', {
                HeaderTitle: item.title,
                id:item.id,
              })}
            />
          }/>
      </View>
    );
}
const styles = StyleSheet.create({
  Container: {
    marginHorizontal: '6%',
    marginTop: 24,
    flex: 1,
  }
});



