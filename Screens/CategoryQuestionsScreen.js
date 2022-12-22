import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { QuestionsPopUp } from '../Components/Pop-Up';

import { Question } from '../Components/Question';
import axios from 'axios';

const baseUrl = 'http://oralbekov.dias19.fvds.ru'
const language = 'ru'

export const CategoryQuestionsScreen = (props) => {
  const {CategoryTitle} = props.route.params || {}
  const {CategoryId} = props.route.params || {}
  const [isVisible, setVisible] = useState(false)
  const [question, setQuestion] = useState()  

  useLayoutEffect(() => {
    Navigation.setOptions({
      headerTitle: () => <Text style={{fontFamily: 'GolosBold', fontSize: 18}}>{CategoryTitle}</Text>
    });
  }, [Navigation]);
  
  const Navigation = useNavigation()

  const onPressQuestion = () => {
    setVisible(true)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/${language}/api/questions/category/${CategoryId}`)
        setQuestion(response.data);
      } catch (e) {
        console.log(e)
      }
    };

    fetchData();
  }, [])

  useEffect(() => {
    console.log(question)
  }, [question])

  if (!question) {
    return <Text>Loading...</Text>
  } else {
    return (
      <SafeAreaView style={styles.Container}>
        <View style={styles.Content}>
          <FlatList data={question}
            keyExtractor={item => item.id}
            bounces={false}
            ItemSeparatorComponent={() => <View style={{height: 6}}/>}
            renderItem = {({item}) => 
              <Question item={item} onPress={() => onPressQuestion()}/>}
          />
        </View>
        <QuestionsPopUp 
          visible={isVisible} 
          Close={() => setVisible(false)}
          Close1={() => setVisible(false)}
          title={question[0].title}
          text={question[0].response}
          />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    marginHorizontal: '6.66%',
  },
  Content: {
    height: '100%',
    marginTop: 24,
  }
});

