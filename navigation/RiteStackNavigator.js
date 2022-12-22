import React from 'react';
import { Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Title } from '../Components/Title';
import RiteScreen from '../Screens/RiteScreen';
import RiteInstructionScreen from '../Screens/RiteInstructionScreen';
import RiteVideoInstructionScreen from '../Screens/RiteVideoInstructionScreen';
import UmrahRiteInstructionScreen from '../Screens/UmrahRiteInstructionScreen';
import UmrahRiteVideoInstructionScreen from '../Screens/UmrahRiteVideoInstructionScreen';
import RiteTextLessonList from '../Screens/RiteTextLessonList';
import RiteViewScreen from '../Screens/RiteViewScreen';
import RiteViewVideoScreen from '../Screens/RiteViewVideoScreen';
import UmrahRiteViewScreen from '../Screens/UmrahRiteViewScreen';
import UmrahRiteViewVideoScreen from '../Screens/UmrahRiteViewVideoScreen';

const Rite = createNativeStackNavigator();

export default function RiteStackNavigator() {
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
                    <Title text='Обряды'/>
                ),
                headerRight: () => (
                    <HeaderIcon source={require('../assets/Icons/MagnifyingGlass.png')}/>
                ),
                }}/>
            <Rite.Screen name='RiteInstructionScreen' component={RiteInstructionScreen}
            options={({ navigation }) => ({
                headerShadowVisible: false,
                headerTitle: () => (
                    <Text style={{fontSize: 18, fontFamily: 'GolosBold'}}>Обряды хаджа</Text>
                ),
                headerRight: () => (
                    <HeaderIcon source={require('../assets/Icons/MagnifyingGlass.png')}/>
                ),
                headerLeft: () => (
                    <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => navigation.goBack()}/>
                )
            })}/>
            <Rite.Screen name='RiteVideoInstructionScreen' component={RiteVideoInstructionScreen}
            options={({ navigation }) => ({
                headerShadowVisible: false,
                headerTitle: () => (
                    <Text style={{fontSize: 18, fontFamily: 'GolosBold'}}>Обряды хаджа</Text>
                ),
                headerRight: () => (
                    <HeaderIcon source={require('../assets/Icons/MagnifyingGlass.png')}/>
                ),
                headerLeft: () => (
                    <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => navigation.goBack()}/>
                )
            })}/>
            <Rite.Screen name='UmrahRiteInstructionScreen' component={UmrahRiteInstructionScreen}
            options={({ navigation }) => ({
                headerShadowVisible: false,
                headerTitle: () => (
                    <Text style={{fontSize: 18, fontFamily: 'GolosBold'}}>Обряды хаджа</Text>
                ),
                headerRight: () => (
                    <HeaderIcon source={require('../assets/Icons/MagnifyingGlass.png')}/>
                ),
                headerLeft: () => (
                    <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => navigation.goBack()}/>
                )
            })}/>
            <Rite.Screen name='UmrahRiteVideoInstructionScreen' component={UmrahRiteVideoInstructionScreen}
            options={({ navigation }) => ({
                headerShadowVisible: false,
                headerTitle: () => (
                    <Text style={{fontSize: 18, fontFamily: 'GolosBold'}}>Обряды хаджа</Text>
                ),
                headerRight: () => (
                    <HeaderIcon source={require('../assets/Icons/MagnifyingGlass.png')}/>
                ),
                headerLeft: () => (
                    <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => navigation.goBack()}/>
                )
            })}/>
            <Rite.Screen name='RiteViewScreen' component={RiteViewScreen}
                options={({ route, navigation }) => ({
                    headerTitle: () => (
                    <Text>{route.params.name}</Text>),
                    headerShadowVisible: false,
                    headerRight: () => (
                        <HeaderIcon source={require('../assets/Icons/UploadSimple.png')}/>
                ),
                headerLeft: () => (
                    <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => navigation.goBack()}/>
                )
                })
            }/>
            <Rite.Screen name='RiteViewVideoScreen' component={RiteViewVideoScreen}
                options={({ route, navigation }) => ({
                    headerTitle: () => (
                    <Text>{route.params.name}</Text>),
                    headerShadowVisible: false,
                    headerRight: () => (
                        <HeaderIcon source={require('../assets/Icons/UploadSimple.png')}/>
                ),
                headerLeft: () => (
                    <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => navigation.goBack()}/>
                )
                })
            }/>
            <Rite.Screen name='UmrahRiteViewScreen' component={UmrahRiteViewScreen}
                options={({ route, navigation }) => ({
                    headerTitle: () => (
                    <Text>{route.params.name}</Text>),
                    headerShadowVisible: false,
                    headerRight: () => (
                        <HeaderIcon source={require('../assets/Icons/UploadSimple.png')}/>
                ),
                headerLeft: () => (
                    <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => navigation.goBack()}/>
                )
                })
            }/>
            <Rite.Screen name='UmrahRiteViewVideoScreen' component={UmrahRiteViewVideoScreen}
                options={({ route, navigation }) => ({
                    headerTitle: () => (
                    <Text>Видео Обряды Умры</Text>),
                    headerShadowVisible: false,
                    headerRight: () => (
                        <HeaderIcon source={require('../assets/Icons/UploadSimple.png')}/>
                ),
                headerLeft: () => (
                    <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => navigation.goBack()}/>
                )
                })
            }/>
            <Rite.Screen name='RiteTextLesson' component={RiteTextLessonList}
                options={({ route, navigation }) => 
                ({ headerTitle: () => (
                    <Text>{route.params.name}</Text>),
                headerShadowVisible: false,
                headerRight: () => (
                    <HeaderIcon source={require('../assets/Icons/MagnifyingGlass.png')}/>
                ),
                headerLeft: () => (
                    <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => navigation.goBack()}/>
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