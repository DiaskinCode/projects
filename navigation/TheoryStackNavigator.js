import React from 'react';
import { Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Title } from '../Components/Title';
import { TheoryScreen } from '../Screens/TheoryScreen';
import TheoryGuide  from '../Screens/TheoryGuide'

import WhatIsHajj from '../Screens/WhatIsHajj'

import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const Theory = createNativeStackNavigator();

export default function TheoryStackNavigator() {
    const Navigation = useNavigation()
    const {t} = useTranslation()
    return (
        <Theory.Navigator>
            <Theory.Screen
                name='TheoryScreen'
                component={TheoryScreen}
                options={{
                    headerShadowVisible: false,
                    headerTitle: '',
                    headerLeft: () => (
                        <Title text={t('theory')}/>
                    ),
                }}/>
            <Theory.Screen
                name='WhatIsHajj'
                component={WhatIsHajj}
                options={({ navigation }) => ({ 
                    headerShadowVisible: false,
                    headerTitle: () => (
                        <Text style={{fontSize: 18, fontFamily: 'GolosBold'}}></Text>
                    ),
                    headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => navigation.goBack()}/>
                    )
                    })
                }/>
        </Theory.Navigator>
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