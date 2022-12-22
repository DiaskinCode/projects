import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import { PopularQuestionsData } from '../Components/Data';
import { RiteTextLesson } from '../Components/RiteTextLesson';
import { QuestionsCategoryData } from '../Components/Data';
import { useNavigation } from '@react-navigation/native';

export default function RiteTextLessonList (props) {
  const {CategoryTitle} = props.route.params || {}
  useLayoutEffect(() => {
    Navigation.setOptions({
      headerTitle: () => <Text style={{fontFamily: 'GolosBold', fontSize: 18}}>{CategoryTitle}</Text>
    });
  }, [Navigation]);
  
  const Navigation = useNavigation()
    return (
      <View style={styles.Container}>
        <FlatList 
          data={QuestionsCategoryData}
          keyExtractor={item => item.id}
          renderItem={({item}) => 
            <RiteTextLesson item={item}/>
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



