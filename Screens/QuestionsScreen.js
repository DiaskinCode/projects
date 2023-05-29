import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, SafeAreaView, Text, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Category } from '../Components/Category';
import { QuestionsBlock } from '../Components/QuestionsBlock';
import { QuestionsPopUp } from '../Components/Pop-Up';
import i18n from 'i18next'
import { useGetPopularQuestionsQuery,useGetQuestionCategoryQuery } from '../api/apiSlice'
import { useTranslation } from 'react-i18next';
import { NoInternet } from '../Components/NoInternet';

export const QuestionsScreen = () => {
  const {t} = useTranslation()
  const [language, setLanguage] = useState('ru');
  const [isVisible, setVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [SelectedQuestion, setSelectedQuestion] = useState(0)
  const { data: PopularQuestions } = useGetPopularQuestionsQuery(i18n.language)
  const {
    data: Categories,
    isSuccess,
    isLoading,
    isError,
    refetch,
    error
  } = useGetQuestionCategoryQuery(i18n.language)

  useEffect(() => {
    refetch();
  }, [i18n.language]);
  
  const navigate = useNavigation()
  const onPressQuestion = (index) => {
    setSelectedQuestion(PopularQuestions[index])
    setVisible(true);
    }
  
  const delay = (ms) => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    delay(2000).then(() => setRefreshing(false))
}, [])

if (isLoading) {
  return(
    <NoInternet/>
  )
}
else if (isError) {
  return(
    <NoInternet/>
  )
}
  else if (PopularQuestions && Categories) {
    return (
      <SafeAreaView style={styles.Container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
              />}>
        <View style={styles.CategoryWrapper}>
          <Category title={Categories['QuestionCategories'][0].title}
            description={Categories["category_umra_questions"] + ' ' + 'ответов'}
            icon={require('../assets/Icons/HourglassSimpleHigh.png')}
            borderColor='#A1F6FB'
            type='Vertical'
            onPress={() => {navigate.navigate('CategoryQuestionsScreen', {
              CategoryTitle: Categories['QuestionCategories'][0].title,
              CategoryId: 1
            })}}/>
          <Category title={Categories['QuestionCategories'][1].title}
              description={Categories["category_hajj_questions"] + ' ' + 'ответов'}
              icon={require('../assets/Icons/Stack.png')}
              borderColor='#FBF1A3'
              type='Vertical'
              onPress={() => navigate.navigate('CategoryQuestionsScreen', {
                CategoryTitle: Categories['QuestionCategories'][1].title,
                CategoryId: 2
              })}/>
  
          <Category title={Categories['QuestionCategories'][2].title}
            description={Categories["category_finance_questions"] + ' ' + 'ответов'}
            icon={require('../assets/Icons/Coin.png')}
            borderColor='#FFDDD2'
            type='Vertical'
            onPress={() => navigate.navigate('CategoryQuestionsScreen', {
              CategoryTitle: Categories['QuestionCategories'][2].title,
              CategoryId: 3
            })}/>
  
          <Category title={Categories['QuestionCategories'][3].title}
            description={Categories["category_rites_questions"] + ' ' + 'ответов'}
            icon={require('../assets/Icons/EyeSlash.png')}
            borderColor='#D8F5C0'
            type='Vertical'
            onPress={() => navigate.navigate('CategoryQuestionsScreen', {
              CategoryTitle: Categories['QuestionCategories'][3].title,
              CategoryId: 4
            })}/>
  
          <Category title={Categories['QuestionCategories'][4].title}
            description={Categories["category_transport_questions"] + ' ' + 'ответов'}
            icon={require('../assets/Icons/Car.png')}
            borderColor='#E8F0F0'
            type='Vertical'
            onPress={() => navigate.navigate('CategoryQuestionsScreen', {
              CategoryTitle: Categories['QuestionCategories'][4].title,
              CategoryId: 5
            })}/>
  
          <Category title={Categories['QuestionCategories'][5].title}
            description={Categories["category_other_questions"] + ' ' + 'ответов'}
            icon={require('../assets/Icons/ChatTeardropText.png')}
            borderColor='#FFC8C8'
            type='Vertical'
            onPress={() => navigate.navigate('CategoryQuestionsScreen', {
              CategoryTitle: Categories['QuestionCategories'][5].title,
              CategoryId: 6
            })}/>
        </View>
  
        
        <QuestionsBlock
          title={t('faq')}
          data={PopularQuestions} 
          onPressItem={(index) => onPressQuestion(index)}
          />
  
        <QuestionsPopUp
          visible={isVisible}
          Close={() => setVisible(false)}
          title={SelectedQuestion.title}
          text={SelectedQuestion.response}
        />
        </ScrollView>
      </SafeAreaView>
    )
  }
    
  }


const styles = StyleSheet.create({
  Container: {
    marginHorizontal: '6.66%',
    flex: 1
  },
  CategoryWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 17,
    marginBottom: 20
}
})
