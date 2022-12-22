import React, { useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { useGetPopularQuestionsQuery } from '../api/apiSlice'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Category } from '../Components/Category';
import { QuestionsBlock } from '../Components/QuestionsBlock';
import { QuestionsPopUp } from '../Components/Pop-Up';

const baseUrl = 'http://oralbekov.dias19.fvds.ru'

export const QuestionsScreen = () => {
  const [language, setLanguage] = useState('ru')
  const [isVisible, setVisible] = useState(false)
  const [category, setCategory] = useState()
  const [PopularQuestions, setPopularQuestions] = useState()

  const navigate = useNavigation()

  const onPressQuestion = () => {
    setVisible(true);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/${language}/api/questions/categories/`)
        setCategory(response.data);
        const response2 = await axios.get(`${baseUrl}/${language}/api/questions/popular`)
        setPopularQuestions(response2.data)
      } catch (e) {
        console.log(e)
      }
    };
    fetchData();
  }, [])

  useEffect(() => {
    console.log(category)
  }, [category])
  if (!category) {
    return <Text>Loading...</Text>
  } else {
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.CategoryBlock}>
        <Category title={category['QuestionCategories'][0].title}
          description={`${category['category_umra_questions']}`
            + category['category_umra_questions'] > 5 ? 'ответа' : 'ответов' }
          icon={require('../assets/Icons/HourglassSimpleHigh.png')}
          borderColor='#A1F6FB'
          type='Vertical'
          onPress={() => navigate.navigate('CategoryQuestionsScreen', {
            CategoryTitle: category['QuestionCategories'][0].title,
            CategoryId: 1
          })}/>

        <Category title={category['QuestionCategories'][1].title}
          description={`${category['category_hajj_questions']} ответов`}
          icon={require('../assets/Icons/Stack.png')}
          borderColor='#FBF1A3'
          type='Vertical'
          onPress={() => navigate.navigate('CategoryQuestionsScreen', {
            CategoryTitle: category['QuestionCategories'][1].title,
            CategoryId: 2
          })}/>

        <Category title={category['QuestionCategories'][2].title}
          description={`${category['category_finance_questions']} ответов`}
          icon={require('../assets/Icons/Coin.png')}
          borderColor='#FFDDD2'
          type='Vertical'
          onPress={() => navigate.navigate('CategoryQuestionsScreen', {
            CategoryTitle: category['QuestionCategories'][2].title,
            CategoryId: 3
          })}/>

        <Category title={category['QuestionCategories'][3].title}
          description= {`${category['category_rites_questions']} ответов`}
          icon={require('../assets/Icons/EyeSlash.png')}
          borderColor='#D8F5C0'
          type='Vertical'
          onPress={() => navigate.navigate('CategoryQuestionsScreen', {
            CategoryTitle: category['QuestionCategories'][3].title,
            CategoryId: 4
          })}/>

        <Category title={category['QuestionCategories'][4].title}
          description={`${category['category_transport_questions']} ответов`}
          icon={require('../assets/Icons/Car.png')}
          borderColor='#E8F0F0'
          type='Vertical'
          onPress={() => navigate.navigate('CategoryQuestionsScreen', {
            CategoryTitle: category['QuestionCategories'][4].title,
            CategoryId: 5
          })}/>

        <Category title={category['QuestionCategories'][5].title}
          description={`${category['category_other_questions']} ответов`}
          icon={require('../assets/Icons/ChatTeardropText.png')}
          borderColor='#FFC8C8'
          type='Vertical'
          onPress={() => navigate.navigate('CategoryQuestionsScreen', {
            CategoryTitle: category['QuestionCategories'][5].title,
            CategoryId: 6
          })}/>
      </View>

      <QuestionsBlock
        title={'Популярные Вопросы'}
        data={PopularQuestions} 
        onPress={() => onPressQuestion()}
        />

      <QuestionsPopUp
        visible={isVisible}
        Close={() => setVisible(false)}
        //title={PopularQuestions[0].title}
        //text={PopularQuestions[0].response}
        />
    </SafeAreaView>
  );
  }
}
const styles = StyleSheet.create({
  Container: {
    marginHorizontal: '6.66%'
  },
  CategoryBlock: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 17,
    
}
});
