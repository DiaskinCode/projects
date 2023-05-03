import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView,TouchableOpacity,FlatList,TouchableWithoutFeedback,Image } from 'react-native';
import { ArticleItem } from '../Screens/ArticleItem';
import { ArticleBlock } from '../Components/ArticleBlock'
import { Quote } from './Quote';
import { Description } from './Description';
import { useGetArticleByIdQuery,useGetArticlesQuery } from '../api/apiSlice'
import i18n from 'i18next'
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

export default function ArticleScreen ({route, navigation}) {
    const { itemId } = route.params;
    const Navigation = useNavigation()
    const { t } = useTranslation();
    const { data: Article, isLoading, isSuccess, isError, error } = useGetArticleByIdQuery({ language: i18n.language, id: itemId });
    const {
      data: Articles,
    } = useGetArticlesQuery(i18n.language)
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
            <ArticleItem 
              item={Article[0]}/>
            <View>
              <Text style={styles.Text}>
                {Article[0].content}
              </Text>
            </View>

            <View style={styles.ContainerArticle}>
                <View style={styles.Header}>
                <Text style={styles.Title}>{t('articles')}</Text>

                <TouchableOpacity onPress={() => Navigation.navigate('AllArticlesScreen')}>
                    <Text style={styles.ShowAllButton}>{t('all')}</Text>
                </TouchableOpacity>
                </View>
                
                <FlatList
                data={Articles}
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={true}
                ItemSeparatorComponent={() => <View style={{width: 10}}/>}
                renderItem={({item, index}) =>
                <TouchableWithoutFeedback onPress={() => {
                    Navigation.navigate('ArticleScreen', {
                    itemId:index + 1,
                    })
                }}>
                <View style={{width: 154, minHeight: 150}}>
                    <Image source={{uri :`http://oralbekov.dias19.fvds.ru${item.upload}`}} style={styles.Image}/>
                    <Description text={item.created_at}/>
                    <Text style={styles.ArticleText}>{item.title}</Text>
                </View>
                </TouchableWithoutFeedback>}
                />
            </View>
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
  ContainerArticle: {
    marginBottom: 15,
    marginTop:10,
  },
  Text: {
    fontFamily: 'GolosRegular',
    fontSize: 14,
    marginTop:20,
    marginBottom:30,
    lineHeight: 20,
  },

  Header: {
    flexDirection:'row', 
    justifyContent:'space-between', 
    alignItems: 'center', 
    marginBottom: 10,
  },
  Title: {
    fontFamily: 'GolosRegular',
    fontSize: 18,
  },
  ShowAllButton: {
    fontFamily: 'GolosRegular',
    fontSize: 12,
    color: '#D0CDD2'
  },
  ArticleText: {
    fontFamily: 'GolosBold',
    fontSize: 13,
  },
  Image: {
    height: 90, 
    width: '100%', 
    resizeMode: 'cover',
    marginBottom: 7, 
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 6,
  }
});