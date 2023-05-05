import React, { useState, useCallback, useEffect } from 'react';
import {View, 
        Text, 
        ScrollView,
        SafeAreaView, 
        RefreshControl, 
        Image,
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

export const RiteTabTwo = () => {
  // AsyncStorage.removeItem('umrahRitevideo');s
  const {t} = useTranslation()
  const Navigation = useNavigation()
  const [refreshing, setRefreshing] = useState(false);
  const [SelectedQuestion, setSelectedQuestion] = useState(0)
  const [isVisible, setVisible] = useState(false);
  const [CurrentRite, setCurrentRite] = useState()
  const [CurrentRiteVideo, setCurrentRiteVideo] = useState()
  const {data: PopularQuestions,
    isLoading,
    isSuccess,
    isError,
    refetch,
    error} = useGetPopularQuestionsUmrahQuery(i18n.language)
    
    useEffect(() => {
      refetch();
    }, [i18n.language]);
  
    const UmrahInstructionsData = [
      {
          id: 1,
          title: i18n.t("Umrah_Instructions_Data_Title"),
          description: i18n.t("Umrah_Instructions_Data_Description"),
          image: require('../assets/images/RiteImg.png'),
          desc: i18n.t("Umrah_Instructions_Data_ArticleText"),
          arabText:'إِنَّ الصَّفَا وَ الْمَرْوَةَ مِنْ شَعَائِرِ اللهِ فَمَنْ حَجَّ الْبَيْتَ أَوِ اعْتَمَرَ فَلاَ جُنَاحَ عَلَيْهِ أَن يَطَّوَّفَ بِهِمَا',
          translatedArabText: i18n.t("Umrah_Instructions_Data_TranslatedArabText"),
          borderColor: '#A1F6FB'
      },
  
  ]
  
  const UmrahInstructionsVideoData = [
      {
          id: 1,
          title: i18n.t("Umrah_Instructions_Video_Data_Title"),
          youtubeId:"yy6hW0NhZco",
          description: i18n.t("Umrah_Instructions_Video_Data_Description"),
          image: require('../assets/images/RiteImg.png'),
          desc: i18n.t("Umrah_Instructions_Video_Data_Desc"),
          arabText:'إِنَّ الصَّفَا وَ الْمَرْوَةَ مِنْ شَعَائِرِ اللهِ فَمَنْ حَجَّ الْبَيْتَ أَوِ اعْتَمَرَ فَلاَ جُنَاحَ عَلَيْهِ أَن يَطَّوَّفَ بِهِمَا',
          translatedArabText: i18n.t("Umrah_Instructions_Video_Data_TranslatedArabText"),
          borderColor: '#A1F6FB'
      },
  ]
    
  const fetchData = useCallback(async () => {
    const data = await AsyncStorage.getItem('umrahRitetext');
    // console.log(data);
    const dataVideo = await AsyncStorage.getItem('umrahRitevideo');
    if(data != null){
      setCurrentRite(UmrahInstructionsData[Math.max.apply(null, JSON.parse(data)) - 1] );
    } else if (UmrahInstructionsData[0] != null){
      setCurrentRite(UmrahInstructionsData[0]);
    } else {
      setCurrentRite(undefined);
    }
    if(dataVideo != null){
      setCurrentRiteVideo(UmrahInstructionsVideoData[JSON.parse(dataVideo).sort((a,b) => b-a)[0] - 1] );
    } else if (UmrahInstructionsVideoData[0] != null){
      setCurrentRiteVideo(UmrahInstructionsVideoData[0]);
    } else {
      setCurrentRiteVideo(undefined);
    }
  }, [])
  
  // the useEffect is only there to call `fetchData` at the right time
  useEffect(() => {
    setInterval(fetchData,4000);
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [fetchData])

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
          currentRiteTitle={CurrentRite != undefined ? CurrentRite.title : t('go')}
          count={UmrahInstructionsData.length}
          onPress={() => Navigation.navigate('UmrahRiteInstructionScreen')}
          />
        <RiteProgress 
          background={require('../assets/images/RiteBackground2.png')}
          title={t('video_instructions_performing_umrah')}
          description={t('rites')}
          currentRiteTitle={CurrentRiteVideo != undefined ? CurrentRiteVideo.title : t('go')}
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
