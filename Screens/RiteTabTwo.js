import React, { useState,useCallback,useEffect } from 'react';
import { View, StyleSheet,AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Category } from '../Components/Category';
import { RiteProgress } from '../Components/RiteProgress';
import { QuestionsBlock } from '../Components/QuestionsBlock';
import { PopularQuestionsData } from '../Components/Data'
import { InstructionsData } from '../Components/Data';

export const RiteTabTwo = () => {
  const Navigation = useNavigation()
  const [CurrentRite, setCurrentRite] = useState()
  
  const fetchData = useCallback(async () => {
    const data = await AsyncStorage.getItem('rite');
    if(data != null){
      setCurrentRite(InstructionsData[JSON.parse(data).sort((a,b) => b-a)[0] - 1] );
    } else {
      setCurrentRite(0);
    }
  }, [])
  
  // the useEffect is only there to call `fetchData` at the right time
  useEffect(() => {
    setInterval(fetchData,4000);
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [fetchData])
  
  return (
    <View style={styles.Container}>
      <View style={styles.Wrapper}>
        <Category borderColor='#E8F0F0' 
          title={'Все виды \nУмры'}
          description='Список'
          icon={require('../assets/Icons/CirclesThreePlus.png')}
          type='Horizontal'/>
        <Category borderColor='#FFC8C8'
          title='Подготовка и намерение'
          description='Урок'
          icon={require('../assets/Icons/Suitcase.png')}
          type='Horizontal'/>
        <RiteProgress
          background={require('../assets/images/GreenBackground.png')}
          title={'Инструкция по совершению Умры'}
          description={'Обряды'}
          icon={require('../assets/Icons/Path.png')}
          currentRiteTitle={CurrentRite != undefined ? CurrentRite.title : 'Перейти'}
          count={InstructionsData.length}
          onPress={() => Navigation.navigate('UmrahRiteInstructionScreen')}
          />
        <RiteProgress 
          background={require('../assets/images/RiteBackground2.png')}
          title={'Видео инструкция Умры'}
          description={'Обряды'}
          currentRiteTitle={CurrentRite != undefined ? CurrentRite.title : 'Перейти'}
          icon={require('../assets/Icons/PlayCircle.png')}
          count={4}
          onPress={() => Navigation.navigate('UmrahRiteVideoInstructionScreen')}/>
        <Category borderColor='#A1F6FB'
          title='Все молитвы и дуа хаджа'
          description='Уроки'
          icon={require('../assets/Icons/GraduationCap.png')}
          type='Horizontal'
          onPress={() => Navigation.navigate('RiteTextLesson', {
            CategoryTitle: 'Все молитвы и дуа хаджа'})}/>
        <Category borderColor='#FBF1A3'
          title='Электронные четки'
          description='Совершение обхода'
          icon={require('../assets/Icons/DotsThreeOutline.png')}
          type='Horizontal'/>
      </View>

      <QuestionsBlock title={'Популярные Вопросы'} data={PopularQuestionsData}/>
    </View>
    );
  }
const styles = StyleSheet.create({
  Conatainer: {
    marginTop: 21,
  },
  Wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 17,
  },
  
});
