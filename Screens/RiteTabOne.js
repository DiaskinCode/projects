import React, { useState, useCallback, useEffect } from 'react';
import {View, 
        Text, 
        ScrollView,
        SafeAreaView,
        RefreshControl, 
        StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Category } from '../Components/Category';
import { RiteProgress } from '../Components/RiteProgress';
import { QuestionsBlock } from '../Components/QuestionsBlock';
import { QuestionsPopUp } from '../Components/Pop-Up';
import { useGetPopularQuestionsHajjQuery } from '../api/apiSlice'
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { NoInternet } from '../Components/NoInternet';
import { useSelector } from 'react-redux';

export const RiteTabOne = () => {
  const { t } = useTranslation();
  const Navigation = useNavigation()
  const [SelectedQuestion, setSelectedQuestion] = useState(0)
  const [isVisible, setVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const rites = useSelector((state) => state.rite);
  const CurrentRiteText = Math.max(...rites.hajjText)
  const CurrentRiteVideo = Math.max(...rites.hajjVideo)

  const InstructionsVideoData = [
    {
        id: 1,
        title: i18n.t("Hajj_Instructions_Video_Data_Title"),
    },
  ]

  const InstructionsData = [
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
            title: i18n.t("Instructions_Data_Title_2"),
        },
        {
            id: 4,
            title: i18n.t("Umrah_Instructions_Data_Title_2"),
        },
        {
            id: 5,
            title: i18n.t("Umrah_Instructions_Data_Title_6"),
        },
        {
          id: 6,
          title: i18n.t("Umrah_Instructions_Data_Title_7"),
        },
        {
            id: 7,
            title: i18n.t("Umrah_Instructions_Data_Title_3"),
        },
        {
            id: 8,
            title: i18n.t("Instructions_Data_Title_5"),
        },
        {
            id: 9,
            title: i18n.t("Instructions_Data_Title_14"),
        },
        {
            id: 10,
            title: i18n.t("Instructions_Data_Title_6"),
        },
        {
            id: 11,
            title: i18n.t("Instructions_Data_Title_7"),
        },
        {
            id: 12,
            title: i18n.t("Instructions_Data_Title_9"),
        },
        {
            id: 13,
            title: i18n.t("Instructions_Data_Title_8"),
        },
        {
            id: 14,
            title: i18n.t("Instructions_Data_Title_10"),
        },
        {
            id:15,
            title: i18n.t("Instructions_Data_Title_11"),
        },
        {
            id: 16,
            title: i18n.t("Instructions_Data_Title_12"),
        },
        {
            id: 17,
            title: i18n.t("Instructions_Data_Title_13"),
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
  const {data: PopularQuestions,
    refetch,
    } = useGetPopularQuestionsHajjQuery(i18n.language)

    useEffect(() => {
      refetch();
    }, [i18n.language]);
    
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
        <Category borderColor='#E8F0F0' 
          title={t('rite_type_head')}
          description={t('list')}
          icon={require('../assets/Icons/CirclesThreePlus.png')}
          onPress={() => Navigation.navigate('RiteTypesOfHajj')}
          type='Horizontal'/>
        <Category borderColor='#FFC8C8'
          title={t('preparation_and_intention')}
          description={t('lesson')}
          icon={require('../assets/Icons/Suitcase.png')}
          type='Horizontal'
          onPress={() => Navigation.navigate('RiteArticles', {
            CategoryTitle: t('preparation_and_intention')})}/>
        <RiteProgress
          background={require('../assets/images/GreenBackground.png')}
          title={t('instructions_performing_hajj')}
          description={t('rites')}
          icon={require('../assets/Icons/Path.png')}
          currentRiteTitle={CurrentRiteText != undefined ? InstructionsData[CurrentRiteText - 1].title : t('go')}
          count={InstructionsData.length}
          onPress={() => Navigation.navigate('RiteInstructionScreen')}
          />
        <RiteProgress 
          background={require('../assets/images/RiteBackground2.png')}
          title={t('video_instructions_performing_hajj')}
          description={t('rites')}
          currentRiteTitle={CurrentRiteVideo != undefined ? InstructionsVideoData[CurrentRiteVideo - 1].title : t('go')}
          icon={require('../assets/Icons/PlayCircle.png')}
          count={InstructionsVideoData.length}
          onPress={() => Navigation.navigate('RiteVideoInstructionScreen')}/>
        <Category borderColor='#A1F6FB'
          title={t('rite_prays_head')}
          description={t('lessons')}
          icon={require('../assets/Icons/GraduationCap.png')}
          type='Horizontal'
          onPress={() => Navigation.navigate('RiteTextLessonListScreen',{
            types:false,
            head: t('rite_prays_head')
          })}/>
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
    marginHorizontal: '6.66%',
  },
  Wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 17,
  },
});
