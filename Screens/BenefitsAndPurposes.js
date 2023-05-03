import React, { useState, useLayoutEffect, useEffect } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useGetCategoryTheoryArticleQuery, useGetPopularQuestionsQuery } from '../api/apiSlice'
import { VideoPlayer } from '../Components/VideoPlayer';
import { Quote } from '../Components/Quote.js'
import { QuestionsBlock } from '../Components/QuestionsBlock';
import { QuestionsPopUp } from '../Components/Pop-Up';
import i18n from 'i18next';

export default function BenefitsAndPurposes(props) {
  const {CategoryTitle} = props.route.params || {}
  const {CategoryId} = props.route.params || {}
  const [isVisible, setVisible] = useState(false);
  const [SelectedQuestion, setSelectedQuestion] = useState(0)
  const {data: PopularQuestions} = useGetPopularQuestionsQuery(i18n.language)
  const {data: Article,
    isLoading,
    isError,
    isSuccess,
    error
    } = useGetCategoryTheoryArticleQuery({language:i18n.language,id:CategoryId})
  const Navigation = useNavigation()

  useLayoutEffect(() => {
    Navigation.setOptions({
      headerTitle: () => <Text style={{fontFamily: 'GolosBold', fontSize: 18}}>{CategoryTitle}</Text>
    });
  }, []);
  const onPressQuestion = async (index) => {
    setSelectedQuestion(PopularQuestions[index])
    setVisible(true);
  }
  if (isLoading) {
    <Text>loading...</Text>      
  }
  else if (isError) {
    <Text>{error}</Text>
  }
  else if (isSuccess) {
    return (
      <ScrollView>
        <View style={styles.Container}>
          <Text style={styles.TextMedium}>{Article[0].content}</Text>

          <QuestionsBlock 
            title={'Популярные Вопросы'} 
            data={PopularQuestions}
            onPressItem={(index) => onPressQuestion(index)}/>

          <QuestionsPopUp
            visible={isVisible}
            Close={() => setVisible(false)}
            title={SelectedQuestion.title}
            text={SelectedQuestion.response}
          />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginHorizontal: '6%'
  },
  TextMedium: {
    fontfamily: 'GolosRegular',
    fontSize: 18,
    lineHeight: 25,
    marginTop:20,
    marginBottom: 40,
  },
  TextSmall: {
    fontfamily: 'GolosRegular',
    fontSize: 14,
    lineHeight: 18,
  },
  Title: {
    fontfamily: 'GolosBold',
    fontSize: 22,
    lineHeight: 30,
  }
})
