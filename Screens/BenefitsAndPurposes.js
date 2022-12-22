import React, { useLayoutEffect, useEffect } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useGetCategoryTheoryMainQuery, useGetPopularQuestionsQuery } from '../api/apiSlice'
import { VideoPlayer } from '../Components/VideoPlayer';
import { Quote } from '../Components/Quote.js'

export default function BenefitsAndPurposes(props) {
  const {CategoryTitle} = props.route.params || {}
  const {CategoryId} = props.route.params || {}
  const {
    data: categories,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetCategoryTheoryMainQuery()

  const {data: PopularQuestions} = useGetPopularQuestionsQuery()
  const {data: Article} = useGetCategoryTheoryMainQuery(`${CategoryId}`)
  const Navigation = useNavigation()

  useEffect(() => {
    Navigation.setOptions({
      headerTitle: () => <Text style={{fontFamily: 'GolosBold', fontSize: 18}}>{CategoryTitle}</Text>
    });
  }, []);

    return (
      <ScrollView style={styles.Container}>
        <Text style={styles.TextMedium}>{Article.content}</Text>
      </ScrollView>
    );
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
});