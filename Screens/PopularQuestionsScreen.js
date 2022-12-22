import React, { useState, useEffect,useLayoutEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { useGetPopularQuestionsQuery } from '../api/apiSlice'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Category } from '../Components/Category';
import { QuestionsBlock } from '../Components/QuestionsBlock';
import { QuestionsPopUp } from '../Components/Pop-Up';
import { ScrollView } from 'react-native-gesture-handler';
import { Question } from '../Components/Question';

const baseUrl = 'http://oralbekov.dias19.fvds.ru'

export default function PopularQuestionsScreen() {
  const { data: PopularQuestions, isLoading,isSuccess } = useGetPopularQuestionsQuery()
  const [language, setLanguage] = useState('ru')
  const [isVisible, setVisible] = useState(false)

  const navigate = useNavigation()
  const onPressQuestion = () => {
    setVisible(true);
  }
  if(isLoading){
    <Text>Loading...</Text>
  } else if (isSuccess) {
      return (
        <ScrollView style={styles.Container}>
          {PopularQuestions.map((item) => {
            return (
              <Question
                item={item} 
                type='Question' 
                icon={require('../assets/Icons/Plus.png')} 
                onPress={onPressQuestion}/>
          )})}
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