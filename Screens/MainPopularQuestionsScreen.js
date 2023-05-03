import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { useGetPopularQuestionsQuery } from '../api/apiSlice'
import { useNavigation } from '@react-navigation/native';
import { QuestionsPopUp } from '../Components/Pop-Up';
import { ScrollView } from 'react-native-gesture-handler';
import { Question } from '../Components/Question';
import i18n from 'i18next';
import { NoInternet } from '../Components/NoInternet';

export default function MainPopularQuestionsScreen() {
  const { data: PopularQuestions, isLoading, isSuccess } = useGetPopularQuestionsQuery(i18n.language)
  const [ isVisible, setVisible ] = useState(false)
  const [ SelectedQuestion, setSelectedQuestion ] = useState(0)

  const onPressQuestion = (index) => {
    setSelectedQuestion(PopularQuestions[index]);
    setVisible(!isVisible);
  }
  if(!PopularQuestions){
    return(
      <NoInternet/>
    )
  } else if (isSuccess) {
      return (
        <ScrollView style={styles.Container}>
          {PopularQuestions.map((item, index) => {
            return (
              <Question
                key={item.id}
                item={item}
                type='Question' 
                icon={require('../assets/Icons/Plus.png')} 
                onPress={() => onPressQuestion(index)}/>
          )})}
        <QuestionsPopUp
          visible={isVisible}
          Close={() => setVisible(false)}
          title={SelectedQuestion.title}
          text={SelectedQuestion.response}
        />
        </ScrollView>
      )
  }
}

const styles = StyleSheet.create({
  Container: {
    marginHorizontal: '6.66%',
    marginTop:24,
  },
  Content: {
    height: '100%',
    marginTop: 24,
  }
});