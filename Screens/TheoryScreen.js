import react, { useState, useCallback } from 'react'
import { StyleSheet, View, Text, ScrollView, SafeAreaView, RefreshControl} from 'react-native';
import { QuestionsBlock } from '../Components/QuestionsBlock'
import { Category } from '../Components/Category';
import { QuestionsPopUp } from '../Components/Pop-Up';
import { Title } from '../Components/Title';
import { useGetCategoryTheoryMainQuery, useGetPopularQuestionsQuery } from '../api/apiSlice'
import { useNavigation } from '@react-navigation/native';

export const TheoryScreen = (props) => {
  const [refreshing, setRefreshing] = useState(false);
  const [SelectedQuestion, setSelectedQuestion] = useState(0)
  const [isVisible, setVisible] = useState(false);
  const {
    data: Categories,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetCategoryTheoryMainQuery()
  console.log(Categories);

  const {data: PopularQuestions} = useGetPopularQuestionsQuery()
  const navigate = useNavigation()
  const delay = (ms) => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const onPressQuestion = async (index) => {
    setSelectedQuestion(PopularQuestions[index])
    setVisible(true);
  }

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
  else if (Categories && PopularQuestions) {
    return (
      <SafeAreaView style={styles.Container}>
        <ScrollView 
        showsVerticalScrollIndicator={false}
        refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />}>

      <Text style={styles.Title}>Основное</Text>
      <View style={styles.CategoryWrapper}>
        <Category type={'Horizontal'} 
          title={Categories[0].title} 
          icon={require('../assets/Icons/Cube.png')} 
          borderColor={'#FBF1A3'} 
          description={Categories[0].category}
          onPress={() => navigate.navigate('WhatIsUmrah', {
            CategoryTitle: Categories[0].title,
            CategoryId: 1
          })} />

        <Category type={'Horizontal'}
          title={Categories[1].title} 
          icon={require('../assets/Icons/Stack.png')} 
          borderColor={'#A1F6FB'} 
          description={Categories[1].category}
          onPress={() => navigate.navigate('WhatIsHajj', {
            CategoryTitle: props.title,
            CategoryId: 2
          })} />

        <Category type={'Horizontal'} 
          title={Categories[2].title} 
          icon={require('../assets/Icons/Users.png')} 
          borderColor={'#E8F0F0'}
          description={Categories[2].category}
          onPress={() => navigate.navigate('HajjAndUmrah', {
            CategoryTitle: Categories[2].title,
            CategoryId: 3
          })} />

        <Category type={'Horizontal'} 
          title={Categories[3].title} 
          icon={require('../assets/Icons/ThumbsUp.png')} 
          borderColor={'#FFC8C8'} 
          description={Categories[3].category}
          onPress={() => navigate.navigate('BenefitsAndPurposes', {
            CategoryTitle: Categories[3].title,
            CategoryId: 4
          })} />         
      </View>     
    
      <Text style={styles.Title}>Что нужно взять</Text>
      <View style={styles.CategoryWrapper}>
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
          
        <QuestionsBlock 
          data={PopularQuestions} 
          title={'Частые Вопросы'}
          onPressItem={(index) => onPressQuestion(index)}/>

        <QuestionsPopUp
          visible={isVisible}
          Close={() => setVisible(false)}
          title={SelectedQuestion.title}
          text={SelectedQuestion.response}
        />
      </ScrollView>
    </SafeAreaView>
  );
}}

const styles = StyleSheet.create({
  Container: {
    marginHorizontal:'6,66%',
  },
  CategoryWrapper: {
    marginTop: 12,
    marginTop: 15,
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent:'space-between'
  },
  CategoryContainer: {
    marginTop: 15,
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent:'space-between'
  },
  Title: {
    marginBottom: 10,
    fontFamily: 'GolosRegular',
    fontSize: 16,
    lineHeight: 19,
  }
});
