import React, {useState, useCallback, useMemo} from 'react';
import { View, StyleSheet, SafeAreaView,TouchableOpacity,TouchableWithoutFeedback,FlatList, ScrollView, RefreshControl, Dimensions,Image,Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Carousel } from '../Components/Carousel';
import { Category } from '../Components/Category';
import { ArticleBlock } from '../Components/ArticleBlock';
import { Description } from '../Components/Description';
import { Button } from '../Components/Button';
import { PlayerItem } from '../Components/PlayerItem';
import { NoInternet } from '../Components/NoInternet';
import { useGetArticlesQuery } from '../api/apiSlice'
import QuestionsStackNavigator from '../navigation/QuestionsStackNavigator';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

export const MainScreen = () => {
    const { t } = useTranslation();
    const Navigation = useNavigation()
    const ScreenWidth = Dimensions.get('window').width
    const [refreshing, setRefreshing] = useState(false);
    const {
    data: Articles,
    isLoading,
    isSuccess,
    isError,
    error
    } = useGetArticlesQuery(i18n.language)
    
    const delay = (ms) => new Promise(
        resolve => setTimeout(resolve, ms)
      );

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        delay(2000).then(() => setRefreshing(false))
    }, [])

    const PlayerData = [
        {
            id: 1,
            youtubeId:"3loPeQnJKk4",
            status: 'Online',
            title: t('player_from_makkah'),
            image: require('../assets/images/PlayerBackground.png')
        },
        {
            id: 2,
            youtubeId:"bRSKpb_xzq0",
            status: 'Online',
            title: t('player_from_medina'),
            image: require('../assets/images/medina.jpg')
        }
    ]

    return (
        <SafeAreaView style={styles.Container}>
            <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
                <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                />
            }
            >
            <View style={{ marginBottom: 20 }}>
            <Carousel
                renderItem={({ item, index }) => <PlayerItem item={item} index={index} />}
                data={PlayerData}
                ItemSeparatorComponent={() => <View style={{ width: ItemSeparatorComponent }} />}
              />
            </View>
            <View style={styles.CategoryBlock}>
                <Category
                title={t('welcome_category_calendar')}
                description={t('calendar')}
                icon={require('../assets/Icons/Cube.png')}
                borderColor="#A1F6FB"
                type="Vertical"
                onPress={() => Navigation.navigate('CategoryCalendarScreen')}
                />
                <Category
                title={t('welcome_category_faq')}
                description={t('questions')}
                icon={require('../assets/Icons/InfoCircle.png')}
                borderColor="#FBF1A3"
                type="Vertical"
                onPress={() => Navigation.navigate('MainPopularQuestions')}
                />
                <Category
                title={t('welcome_category_rites')}
                description=""
                icon={require('../assets/Icons/Stack.png')}
                borderColor="#FFDDD2"
                type="Vertical"
                onPress={() =>
                    Navigation.navigate('root', {
                    screen: t('rites'),
                    params: { screen: 'RiteScreen', tab: t('do_umrah') },
                    })
                }
                />
                <Category
                title={t('welcome_category_translate')}
                description={t('arabic')}
                icon={require('../assets/Icons/ChatTeardropText.png')}
                borderColor="#D8F5C0"
                type="Vertical"
                onPress={() => Navigation.navigate('ExpressTranslate')}
                />
                <Category
                title={t('important_info')}
                description={t('theory')}
                icon={require('../assets/Icons/GraduationCap.png')}
                borderColor="#E8F0F0"
                type="Vertical"
                onPress={() =>
                    Navigation.navigate('root', {
                    screen: t('theory'),
                    params: { screen: 'TheoryScreen'},
                    })
                }
                />
                <Category
                title={t('famous_places')}
                description={t('map')}
                icon={require('../assets/Icons/House.png')}
                borderColor="#FFC8C8"
                type="Vertical"
                onPress={() => Navigation.navigate('Attractions')}
                />
            </View>
            {Articles == undefined ? 
                <NoInternet/>
                :
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
            }
            <Button
                title={t('welcome_hotel_route')}
                onPress={() => Navigation.navigate('MapRoute')}
                description={t('open_map')}
                type="Question"
                icon={require('../assets/Icons/UpRightIcon.png')}
            />
            </ScrollView>
        </SafeAreaView>
    );
  }
const styles = StyleSheet.create({
    Container: {
        flex:1,
        width:  '86.6%',
        marginHorizontal:'6.4%',
    },
    CategoryBlock: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },

    ContainerArticle: {
        marginBottom: 15,
        marginTop:10,
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
})