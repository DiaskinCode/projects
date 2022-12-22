import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArticleItem } from './ArticleItem';
import { ArticleData } from '../Components/Data';
import { useGetArticlesQuery } from '../api/apiSlice'

export default function AllArticlesScreen () {
  const {
    data: Articles,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetArticlesQuery()
  console.log(Articles)

  const navigation = useNavigation()
    return (
      <View style={styles.Container}>
        <FlatList style={{marginTop: '5%'}}
          data={Articles}
          ItemSeparatorComponent={() => <View style={{height: 32}}/>}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => 
          <ArticleItem 
            item={item}
            onPress={() => {
              navigation.navigate('ArticleScreen', {
                itemId:item.id,
              })
            }}
            />}
          />
      </View>
    );
  }
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginHorizontal: '6%'
  }
});
