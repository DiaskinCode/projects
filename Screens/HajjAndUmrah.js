import React, { useState, useLayoutEffect, useEffect } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useGetCategoryTheoryArticleQuery, useGetPopularQuestionsQuery } from '../api/apiSlice'
import { VideoPlayer } from '../Components/VideoPlayer';
import { Quote } from '../Components/Quote.js'
import { isLoading } from 'expo-font';

export default function HajjAndUmrah(props) {

  const {CategoryTitle} = props.route.params || {}
  const {CategoryId} = props.route.params || {}

  const {data: PopularQuestions} = useGetPopularQuestionsQuery()
  const {data: Article,
    isLoading,
    isError,
    isSuccess,
    error
    } = useGetCategoryTheoryArticleQuery(`${CategoryId}`)
  const Navigation = useNavigation()

  useLayoutEffect(() => {
    Navigation.setOptions({
      headerTitle: () => <Text style={{fontFamily: 'GolosBold', fontSize: 18}}>{CategoryTitle}</Text>
    });
  }, []);
  useEffect(() => {
    console.log(Article)
  })
  if (isLoading) {
    <Text>loading...</Text>      
  }
  else if (isError) {
    <Text>{error}</Text>
  }
  else if (isSuccess) {
    return (
      <ScrollView style={styles.Container}>
        <Text style={styles.TextMedium}>{Article[0].content}</Text>
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
    marginBottom: 20,
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
