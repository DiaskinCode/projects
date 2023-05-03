import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text,ScrollView, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { QuestionsPopUp } from '../Components/Pop-Up';
import { Question } from '../Components/Question';
import { useGetCategoryQuestionsQuery } from '../api/apiSlice';
import i18n from 'i18next'
import { NoInternet } from '../Components/NoInternet';

export const CategoryQuestionsScreen = (props) => {
  const {CategoryTitle} = props.route.params || {}
  const {CategoryId} = props.route.params || {}
  const [isVisible, setVisible] = useState(false)
  const [ SelectedQuestion, setSelectedQuestion ] = useState(0)

  const {
    data: Questions,
    isSuccess,
    isLoading,
    isError,
    error
  } = useGetCategoryQuestionsQuery({language:i18n.language,id:CategoryId})

  useLayoutEffect(() => {
    Navigation.setOptions({
      headerTitle: () => <Text style={{fontFamily: 'GolosBold', fontSize: 18}}>{CategoryTitle}</Text>
    });
  }, [Navigation]);
  const Navigation = useNavigation()
  const onPressQuestion = (index) => {
    setSelectedQuestion(Questions[index]);
    setVisible(!isVisible);
  }
  

  if (isLoading) {
      return(
        <NoInternet/>
      )  
  }
  else if (Questions.length == 0) {
    return(
      <NoInternet/>
    )  
  }
  else if (Questions) {
    return (
      <ScrollView>
        <View style={styles.Container}>
          {Questions.map((item, index) => {
              return (
                <Question
                  key={item.id}
                  item={item}
                  type='Question' 
                  icon={require('../assets/Icons/Plus.png')} 
                  onPress={() => onPressQuestion(index)}/>
            )})}
          <QuestionsPopUp
            visible={isVisible}
            Close={() => setVisible(false)}
            title={SelectedQuestion.title}
            text={SelectedQuestion.response}
          />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    marginHorizontal: '6.66%',
    marginTop:20,
  },
  Content: {
    height: '100%',
    marginTop: 24,
  },
  Center: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

