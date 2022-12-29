import React, {useState, useCallback} from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Carousel } from '../Components/Carousel';
import { Category } from '../Components/Category';
import { ArticleBlock } from '../Components/ArticleBlock';
import { Button } from '../Components/Button';
import { PlayerData } from '../Components/Data';
import { PlayerItem } from '../Components/PlayerItem';
import { useGetArticlesQuery, useGetQuestionCategoryQuery } from '../api/apiSlice'

export const MainScreen = () => {
    const Navigation = useNavigation()
    const [refreshing, setRefreshing] = useState(false);
    const {
    data: Articles,
    isLoading,
    isSuccess,
    isError,
    error
    } = useGetArticlesQuery()

    const delay = (ms) => new Promise(
        resolve => setTimeout(resolve, ms)
      );

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        delay(2000).then(() => setRefreshing(false))
    }, [])
    return (
        <SafeAreaView style={styles.Container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />}>
            <View style={{marginBottom: 20}}>
                <Carousel renderItem={({item, index}) => <PlayerItem item={item} index={index}/>} data={PlayerData}/>
            </View>
            <View style={styles.CategoryBlock}>
                <Category title='Ещё 7 дней хажда' 
                    description= 'Календарь' 
                    icon={require('../assets/Icons/Cube.png')}
                    borderColor='#A1F6FB'
                    type='Vertical'
                    onPress={() => Navigation.navigate('CategoryCalendarScreen')}/>
                <Category title='Частые вопросы'
                    description='Вопросы'
                    icon={require('../assets/Icons/InfoCircle.png')}
                    borderColor='#FBF1A3'
                    type='Vertical'
                    onPress={() => Navigation.navigate('PopularQuestionsScreen')}/>
                <Category title='Обряды хаджа'
                    description= 'Урок 25'
                    icon={require('../assets/Icons/Stack.png')}
                    borderColor='#FFDDD2'
                    type='Vertical'
                    onPress={() => Navigation.navigate('RiteScreen')}/>
                <Category title='Список Транспорта'
                    description='Мекка'
                    icon={require('../assets/Icons/Car.png')}
                    borderColor='#D8F5C0'
                    type='Vertical'
                    onPress={() => Navigation.navigate('TransportList')}/>
                <Category title='Финансы и валюта'
                    description='Банкоматы'
                    icon={require('../assets/Icons/Coin.png')}
                    borderColor='#E8F0F0'
                    type='Vertical'
                    onPress={() => Navigation.navigate('CurrencyAndFinances')}/>
                <Category title='Экспресс перевод'
                    description='Арабский'
                    icon={require('../assets/Icons/ChatTeardropText.png')}
                    borderColor='#FFC8C8'
                    type='Vertical'
                    onPress={() => Navigation.navigate('ExpressTranslate')}/>
            </View>
            <ArticleBlock 
                data={Articles} 
                onPressAll={() => Navigation.navigate('AllArticlesScreen')}
                />

            <Button title='Маршрут до моего отеля' 
                description='15 минут пешком' 
                type='Question' 
                icon={require('../assets/Icons/UpRightIcon.png')}
            />
            </ScrollView>
        </SafeAreaView>
    );
  }
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        marginHorizontal: '6.66%',
    },
    CategoryBlock: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
        
    }
})