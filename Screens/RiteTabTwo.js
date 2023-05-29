import React, { useState, useCallback, useEffect } from 'react';
import {View, 
        ScrollView,
        SafeAreaView, 
        RefreshControl, 
        StyleSheet} from 'react-native';
import i18n from 'i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Category } from '../Components/Category';
import { RiteProgress } from '../Components/RiteProgress';
import { QuestionsBlock } from '../Components/QuestionsBlock';
import { QuestionsPopUp } from '../Components/Pop-Up';
import { useGetPopularQuestionsUmrahQuery } from '../api/apiSlice'
import { useTranslation } from 'react-i18next';
import { NoInternet } from '../Components/NoInternet';
import { useSelector } from 'react-redux';

export const RiteTabTwo = () => {
  const {t} = useTranslation()
  const Navigation = useNavigation()
  const [refreshing, setRefreshing] = useState(false);
  const [SelectedQuestion, setSelectedQuestion] = useState(0)
  const [isVisible, setVisible] = useState(false);
  const {data: PopularQuestions,
    refetch,
  } = useGetPopularQuestionsUmrahQuery(i18n.language)

  const rites = useSelector((state) => state.rite);
  const CurrentRiteText = Math.max(...rites.umrahText)
  const CurrentRiteVideo = Math.max(...rites.umrahVideo)
    
    useEffect(() => {
      refetch();
    }, [i18n.language]);
  
    const UmrahInstructionsData = [
      {
        id: 1,
        title: i18n.t("Umrah_Instructions_Data_Title"),
    },
      {
        id: 2,
        title: i18n.t("Umrah_Instructions_Data_Title_5"),
    },
    {
        id: 3,
        title: i18n.t("Umrah_Instructions_Data_Title_2"),
    },
      {
        id: 4,
        title: i18n.t("Umrah_Instructions_Data_Title_6"),
    },
    {
        id: 5,
        title: i18n.t("Umrah_Instructions_Data_Title_7"),
    },
    {
        id: 6,
        title: i18n.t("Umrah_Instructions_Data_Title_3"),
    },
    {
        id: 7,
        title: i18n.t("Umrah_Instructions_Data_Title_4"),
    },
    {
      id: 8,
      title: i18n.t("Umrah_Instructions_Data_Title_8"),
  },

  ]
  
  const UmrahInstructionsVideoData = [
      {
          id: 1,
          title: i18n.t("Umrah_Instructions_Video_Data_Title"),
      },
  ]
  
  const onPressQuestion = async (index) => {
    setSelectedQuestion(PopularQuestions[index])
    setVisible(true);
  }
  const delay = (ms) => new Promise(
    resolve => setTimeout(resolve, ms)
  );
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    delay(2000).then(() => setRefreshing(false))
  }, [])

  return (
    <SafeAreaView edges={["right", "top", "left"]} style={{flex: 1,paddingBottom: 36}} forceInset={{ top: "always", bottom: "never" }}>
    <ScrollView 
      style={styles.Container}
      showsVerticalScrollIndicator={false}
        refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}/>}
        >
      <View style={styles.Wrapper}>
        <RiteProgress
          background={require('../assets/images/GreenBackground.png')}
          title={t('instructions_performing_umrah')}
          description={t('rites')}
          icon={require('../assets/Icons/Path.png')}
          currentRiteTitle={CurrentRiteText != undefined ? UmrahInstructionsData[CurrentRiteText - 1].title : t('go')}
          count={UmrahInstructionsData.length}
          onPress={() => Navigation.navigate('UmrahRiteInstructionScreen')}
          />
        <RiteProgress 
          background={require('../assets/images/RiteBackground2.png')}
          title={t('video_instructions_performing_umrah')}
          description={t('rites')}
          currentRiteTitle={CurrentRiteVideo != undefined ? UmrahInstructionsVideoData[CurrentRiteVideo - 1].title : t('go')}
          icon={require('../assets/Icons/PlayCircle.png')}
          count={UmrahInstructionsVideoData.length}
          onPress={() => Navigation.navigate('UmrahRiteVideoInstructionScreen')}/>
        <Category borderColor='#A1F6FB'
          title={t('rite_prays_head_umrah')}
          description={t('lessons')}
          icon={require('../assets/Icons/GraduationCap.png')}
          type='Horizontal'
          onPress={() => Navigation.navigate('RiteTextLessonListScreen',{
            types:true,
            head: t('rite_prays_head_umrah')
          })}/>
          
          <Category borderColor='#FFC8C8'
          title={t('preparation_and_intention')}
          description={t('lesson')}
          icon={require('../assets/Icons/Suitcase.png')}
          type='Horizontal'
          onPress={() => Navigation.navigate('RiteArticles', {
            CategoryTitle: t('preparation_and_intention')})}/>
      </View>

      {PopularQuestions == undefined ? 
        <NoInternet/>
        :
        <View>
          <QuestionsBlock 
          title={t('faq')} 
          data={PopularQuestions}
          onPressItem={(index) => onPressQuestion(index)}/>
  
          <QuestionsPopUp
              visible={isVisible}
              Close={() => setVisible(false)}
              title={SelectedQuestion.title}
              text={SelectedQuestion.response}
            />
        </View>
      }
    </ScrollView>
    </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginHorizontal: '6%',
  },
  Wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 17,
  },
  
});
