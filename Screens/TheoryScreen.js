import react, { useState, useCallback,useEffect } from 'react'
import { StyleSheet, View, Text, ScrollView, SafeAreaView, RefreshControl} from 'react-native';
import { QuestionsBlock } from '../Components/QuestionsBlock'
import { Category } from '../Components/Category';
import { QuestionsPopUp } from '../Components/Pop-Up';
import { NoInternet } from '../Components/NoInternet';
import { useGetCategoryTheoryMainQuery,useGetCategoryTheoryWhatTakeQuery, useGetPopularQuestionsQuery } from '../api/apiSlice'
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next'

export const TheoryScreen = (props) => {
  const {t} = useTranslation()
  const [refreshing, setRefreshing] = useState(false);
  const [SelectedQuestion, setSelectedQuestion] = useState(0)
  const [isVisible, setVisible] = useState(false);
  const {
    data: Categories,
    isLoading,
    isSuccess,
    isError,
    refetch,
    error
  } = useGetCategoryTheoryMainQuery(i18n.language)

  const {
    data: WhatToTake,
  } = useGetCategoryTheoryWhatTakeQuery(i18n.language)


  useEffect(() => {
    refetch();
  }, [i18n.language]);

  const {data: PopularQuestions} = useGetPopularQuestionsQuery(i18n.language)
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

  if (Categories == undefined || undefined) {
    return (
      <NoInternet/>
    )
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

      <Text style={styles.Title}>{t('main')}</Text>
      <View style={styles.CategoryWrapper}>
        {Categories?.map((theory) => {
          return (
            <Category type={'Horizontal'} 
              key={theory.id}
              title={theory.title} 
              icon={{uri :`http://oralbekov.dias19.fvds.ru${theory.upload}`}} 
              borderColor={'#FBF1A3'} 
              description={theory.category}
              onPress={() => navigate.navigate('WhatIsHajj', {
                CategoryTitle: theory.title,
                CategoryId: theory.id
              })} />
          );
        })}
        </View>

        <Text style={styles.Title}>{t('what_take')}</Text>
        <View style={styles.CategoryWrapper}>
          {WhatToTake?.map((theory) => {
            return (
              <Category type={'Horizontal'} 
                key={theory.id}
                title={theory.title} 
                icon={{uri :`http://oralbekov.dias19.fvds.ru${theory.upload}`}} 
                borderColor={'#FBF1A3'} 
                description={theory.category}
                onPress={() => navigate.navigate('WhatIsHajj', {
                  CategoryTitle: theory.title,
                  CategoryId: theory.id
                })} />
            );
          })}
        </View>
          
        {PopularQuestions ? 
        <QuestionsBlock 
          data={PopularQuestions} 
          title={t('faq')}
          onPressItem={(index) => onPressQuestion(index)}/>
          :
          <NoInternet/>
        } 

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
    marginHorizontal:'6%',
    marginTop: 20,
  },
  CategoryWrapper: {
    marginBottom: 12,
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
