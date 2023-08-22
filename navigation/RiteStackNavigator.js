import React from 'react';
import { Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Title } from '../Components/Title';
import RiteScreen from '../Screens/RiteScreen';
import RiteInstructionScreen from '../Screens/RiteInstructionScreen';
import RiteVideoInstructionScreen from '../Screens/RiteVideoInstructionScreen';
import UmrahRiteInstructionScreen from '../Screens/UmrahRiteInstructionScreen';
import UmrahRiteVideoInstructionScreen from '../Screens/UmrahRiteVideoInstructionScreen';
import RiteTextLessonListScreen from '../Screens/RiteTextLessonListScreen';
import RiteTextLessonScreen from '../Screens/RiteTextLessonScreen';
import RiteTextLessonUmrahListScreen from '../Screens/RiteTextLessonUmrahListScreen';
import RiteTextLessonUmrahScreen from '../Screens/RiteTextLessonUmrahScreen';
import RiteViewScreen from '../Screens/RiteViewScreen';
import RiteViewVideoScreen from '../Screens/RiteViewVideoScreen';
import UmrahRiteViewScreen from '../Screens/UmrahRiteViewScreen';
import UmrahRiteViewVideoScreen from '../Screens/UmrahRiteViewVideoScreen';
import RiteArticlesListScreen from '../Screens/RiteArticlesListScreen';
import RiteArticleScreen from '../Screens/RiteArticleScreen';
import RiteTypesOfHajj from '../Screens/RiteTypesOfHajj';
import { useTranslation } from 'react-i18next';

const Rite = createNativeStackNavigator();

export default function RiteStackNavigator() {
    const {t} = useTranslation()
    return(
        <Rite.Navigator 
            initialRouteName='RiteScreen'
            options={{
                
            }}>
            <Rite.Screen name='RiteScreen' component={RiteScreen}
            options={{
                headerShadowVisible: false,
                headerTitle: '',
                headerLeft: () => (
                    <Title text={t('rites')}/>
                ),
                }}/>
            <Rite.Screen name='RiteTypesOfHajj' component={RiteTypesOfHajj}
                options={({ navigation }) => ({
                    headerShadowVisible: false,
                    headerTitle: () => (
                        <Text style={{fontSize: 18, fontFamily: 'GolosBold'}}>{t('rite_type_head')}</Text>
                    ),
                    headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => {
                            navigation.goBack()
                        }}/>
                    )

            })}/>
            <Rite.Screen name='RiteInstructionScreen' component={RiteInstructionScreen}
            options={({ navigation }) => ({
                headerShadowVisible: false,
                headerTitle: () => (
                    <Text style={{fontSize: 18, fontFamily: 'GolosBold'}}>{t('rites_of_hajj')}</Text>
                ),
                headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => {
                            navigation.goBack()
                        }}/>
                    )

            })}/>
            <Rite.Screen name='RiteVideoInstructionScreen' component={RiteVideoInstructionScreen}
            options={({ navigation }) => ({
                headerShadowVisible: false,
                headerTitle: () => (
                    <Text style={{fontSize: 18, fontFamily: 'GolosBold'}}>{t('rites_of_hajj')}</Text>
                ),
                headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => {
                            navigation.goBack()
                        }}/>
                    )

            })}/>
            <Rite.Screen name='UmrahRiteInstructionScreen' component={UmrahRiteInstructionScreen}
            options={({ navigation }) => ({
                headerShadowVisible: false,
                headerTitle: () => (
                    <Text style={{fontSize: 18, fontFamily: 'GolosBold'}}>{t('rites_of_umrah')}</Text>
                ),
                headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => {
                            navigation.goBack()
                        }}/>
                    )

            })}/>
            <Rite.Screen name='UmrahRiteVideoInstructionScreen' component={UmrahRiteVideoInstructionScreen}
            options={({ navigation }) => ({
                headerShadowVisible: false,
                headerTitle: () => (
                    <Text style={{fontSize: 18, fontFamily: 'GolosBold'}}>{t('rites_of_umrah')}</Text>
                ),
                headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => {
                            navigation.goBack()
                        }}/>
                    )

            })}/>
            <Rite.Screen name='RiteViewScreen' component={RiteViewScreen}
                options={({ route, navigation }) => ({
                    headerTitle: () => (
                    <Text>{route.params.name}</Text>),
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => {
                            navigation.goBack()
                        }}/>
                    )

                })
            }/>
            <Rite.Screen name='RiteViewVideoScreen' component={RiteViewVideoScreen}
                options={({ route, navigation }) => ({
                    headerTitle: () => (
                    <Text>{route.params.name}</Text>),
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => {
                            navigation.goBack()
                        }}/>
                    )

                })
            }/>
            
            <Rite.Screen name='UmrahRiteViewScreen' component={UmrahRiteViewScreen}
                options={({ route, navigation }) => ({
                    headerTitle: () => (
                    <Text>{route.params.name}</Text>),
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => {
                            navigation.goBack()
                        }}/>
                    )

                })
            }/>
            <Rite.Screen name='UmrahRiteViewVideoScreen' component={UmrahRiteViewVideoScreen}
                options={({ route, navigation }) => ({
                    headerTitle: () => (
                    <Text>Видео Обряды Умры</Text>),
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => {
                            navigation.goBack()
                        }}/>
                    )

                })
            }/>
            <Rite.Screen name='RiteTextLesson' component={RiteTextLessonListScreen}
                options={({ route, navigation }) => 
                ({ headerTitle: () => (
                    <Text>{route.params.name}</Text>),
                headerShadowVisible: false,
                headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => {
                            navigation.goBack()
                        }}/>
                    )

                })
            }/>
            <Rite.Screen name='RiteArticles' component={RiteArticlesListScreen}
                options={({ route, navigation }) => 
                ({ headerTitle: () => (
                    <Text>{route.params.name}</Text>),
                headerShadowVisible: false,
                headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => {
                            navigation.goBack()
                        }}/>
                    )

                })
            }/>
            <Rite.Screen name='RiteArticle' component={RiteArticleScreen}
                options={({ route, navigation }) => ({
                    headerTitle: () => (
                    <Text>{t('preparation_and_intention')}</Text>),
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => {
                            navigation.goBack()
                        }}/>
                    )

                })
            }/>
            <Rite.Screen name='RiteTextLessonListScreen' component={RiteTextLessonListScreen}
                options={({ route, navigation }) => 
                ({ headerTitle: () => (
                    <Text></Text>),
                headerShadowVisible: false,
                headerLeft: () => (
                    <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => {
                        navigation.goBack()
                    }}/>
                )
                    
                })
            }/>
            <Rite.Screen name='RiteTextLessonScreen' component={RiteTextLessonScreen}
                options={({ route, navigation }) => 
                ({ headerTitle: () => (
                    <Text></Text>),
                headerShadowVisible: false,

                })
            }/>
            <Rite.Screen name='RiteTextLessonUmrahListScreen' component={RiteTextLessonUmrahListScreen}
                options={({ route, navigation }) => 
                ({ headerTitle: () => (
                    <Text></Text>),
                headerShadowVisible: false,
                headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => {
                            navigation.goBack()
                        }}/>
                    )

                })
            }/>
            <Rite.Screen name='RiteTextLessonUmrahScreen' component={RiteTextLessonUmrahScreen}
                options={({ route, navigation }) => 
                ({ headerTitle: () => (
                    <Text></Text>),
                headerShadowVisible: false,
                headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => {
                            navigation.goBack()
                        }}/>
                    )
                    
                })
            }/>

        </Rite.Navigator>
    )
}
function HeaderIcon(props) {
    return (
    <TouchableOpacity onPress={props.onPress}>
        <Image source={props.source}
        style={styles.Icon}/>
    </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    Icon: {
        marginLeft: 13,
        width: 26,
        height: 26,
        resizeMode: 'contain'
    }
});