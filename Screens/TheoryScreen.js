import react, { useState, useCallback } from 'react'
import { StyleSheet, View, Text, ScrollView, SafeAreaView, RefreshControl} from 'react-native';
import { QuestionsBlock } from '../Components/QuestionsBlock'
import { Category } from '../Components/Category';
import { Title } from '../Components/Title';
import { useGetCategoryTheoryMainQuery, useGetPopularQuestionsQuery } from '../api/apiSlice'
import { useNavigation } from '@react-navigation/native';

export const TheoryScreen = (props) => {
  const [refreshing, setRefreshing] = useState(false);
  const {
    data: categories,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetCategoryTheoryMainQuery()

  const {data: PopularQuestions} = useGetPopularQuestionsQuery()
  const navigate = useNavigation()
  const delay = (ms) => new Promise(
    resolve => setTimeout(resolve, ms)
  );

const onRefresh = useCallback(() => {
    setRefreshing(true);
    delay(2000).then(() => setRefreshing(false))
}, [])

  if (isLoading) {
    <Text>loading...</Text>
  }
  else if (isError) {
    <Text>{error}</Text>
  }
  else if (isSuccess) {
  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView 
      showsVerticalScrollIndicator={false}
      refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />}>
      <View style={styles.Content}>
        <Title type='News' text={'Основное'}/>
        <View style={styles.categoryContainer}>
          <Category type={'Horizontal'} 
            title={categories[0].title} 
            icon={require('../assets/Icons/Cube.png')} 
            borderColor={'#FBF1A3'} 
            description={categories[0].category}
            onPress={() => navigate.navigate('WhatIsUmrah', {
              CategoryTitle: categories[0].title,
              CategoryId: 1
            })} />

          <Category type={'Horizontal'}
            title={categories[1].title} 
            icon={require('../assets/Icons/Stack.png')} 
            borderColor={'#A1F6FB'} 
            description={categories[1].category}
            onPress={() => navigate.navigate('WhatIsHajj', {
              CategoryTitle: props.title,
              CategoryId: 2
            })} />

          <Category type={'Horizontal'} 
            title={categories[2].title} 
            icon={require('../assets/Icons/Users.png')} 
            borderColor={'#E8F0F0'}
            description={categories[2].category}
            onPress={() => navigate.navigate('HajjAndUmrah', {
              CategoryTitle: categories[2].title,
              CategoryId: 3
            })} />

          <Category type={'Horizontal'} 
            title={categories[3].title} 
            icon={require('../assets/Icons/ThumbsUp.png')} 
            borderColor={'#FFC8C8'} 
            description={categories[3].category}
            onPress={() => navigate.navigate('BenefitsAndPurposes', {
              CategoryTitle: categories[3].title,
              CategoryId: 4
            })} />         
        </View>     
      </View>

      <View style={styles.Content}>
        <Title type='News' text={'Что нужно взять'}/>
        <View style={styles.categoryContainer}>
          <Category 
            type={'Horizontal'} 
            title={`Обязательные вещи`} 
            icon={require('../assets/Icons/TShirt.png')} 
            borderColor={'#E8F0F0'} 
            description='Список'
            onPress={() => navigate.navigate('TheoryGuide')} />         
          <Category type={'Horizontal'} 
            title={`Желательные вещи`} 
            icon={require('../assets/Icons/ShoppingBagOpen.png')} 
            borderColor={'#FFC8C8'} 
            description='Список'
            onPress={() => navigate.navigate('TheoryGuide')} />         
          <Category type={'Horizontal'} 
            title={`Правила пребывания`} 
            icon={require('../assets/Icons/Note.png')} 
            borderColor={'#A1F6FB'} 
            description='Статья'
            onPress={() => navigate.navigate('TheoryGuide')} />         
          <Category type={'Horizontal'} 
            title={`Запрещено делать`} 
            icon={require('../assets/Icons/WarningOctagon.png')} 
            borderColor={'#FBF1A3'} 
            description='Статья'
            onPress={() => navigate.navigate('TheoryGuide')} />         
        </View>
        <View style={styles.Content}>
        <QuestionsBlock data={PopularQuestions} 
          title={'Частые Вопросы'}/> 
        </View>
    </View>
    </ScrollView>
  </SafeAreaView>
  );
}}

const styles = StyleSheet.create({
  Container: {
    marginHorizontal:'6,66%',
  },
  Content: {
    marginTop: 12,
  },
  categoryContainer: {
    marginTop: 15,
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent:'space-between'
  }
});
