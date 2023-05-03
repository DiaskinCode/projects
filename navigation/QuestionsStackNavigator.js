import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Title } from '../Components/Title';
import { useNavigation } from '@react-navigation/native';
import { QuestionsScreen } from '../Screens/QuestionsScreen';
import { CategoryQuestionsScreen } from '../Screens/CategoryQuestionsScreen'
import PopularQuestionsScreen from '../Screens/PopularQuestionsScreen';
import { useTranslation } from 'react-i18next';

const Questions = createNativeStackNavigator();

export default function QuestionsStackNavigator() {
    const {t} = useTranslation()
    return (
        <Questions.Navigator
            initialRouteName='QuestionsScreen'>
            <Questions.Screen 
                name='QuestionsScreen'
                component={QuestionsScreen}
                options={{
                    headerStyle: styles.Header,
                    headerShadowVisible: false,
                    title: null,
                    headerLeft: () => (
                        <Title text={t('questions')}/>
                    ),
                }}/>
            <Questions.Screen
                name='CategoryQuestionsScreen'
                component={CategoryQuestionsScreen}
                options={({ navigation }) => ({
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => navigation.goBack()}/>
                    )
                })}/>
            <Questions.Screen
                name='PopularQuestionsScreen'
                component={PopularQuestionsScreen}
                options={({ navigation }) => ({
                    headerShadowVisible: false,
                    headerTitle: () => (
                        <Text style={styles.HeaderTitle}>Частые вопросы</Text>
                    ),
                    headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => {
                            navigation.goBack()
                        }}/>
                    )
                    })}
                />
        </Questions.Navigator>
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
    },
    HeaderTitle: {
        fontFamily: 'GolosBold',
        fontSize: 18
    }
});