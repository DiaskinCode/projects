import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { ArticleItem } from '../Screens/ArticleItem';
import { ArticleBlock } from '../Components/ArticleBlock'
import { Quote } from './Quote';
import { useGetArticleByIdQuery,useGetArticlesQuery } from '../api/apiSlice'

export default function ArticleScreen ({route, navigation}) {
    const { itemId } = route.params;
    const {data: Article,
      isLoading,
      isSuccess,
      isError,
      error} = useGetArticleByIdQuery(`${itemId}`)
    const {
      data: Articles,
    } = useGetArticlesQuery()
    if (isLoading) {
      <Text>loading...</Text>
    }
    else if (isError) {
      <Text>{error}</Text>
    }
    else if (isSuccess) {
      return (
        <ScrollView style={styles.Container}>
          <ArticleItem 
            item={Article[0]}/>
          <View>
            <Text style={styles.Text}>
              {Article[0].content}
            </Text>
          </View>

          <ArticleBlock data={Articles}/>
        </ScrollView>
      );
    }
  }
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginHorizontal: '6%'
  },
  Text: {
    fontFamily: 'GolosRegular',
    fontSize: 14,
    marginTop:20,
    marginBottom:30,
    lineHeight: 20,
  }
});