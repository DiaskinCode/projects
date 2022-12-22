import React from 'react';
import { Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Title } from '../Components/Title';
import { TheoryScreen } from '../Screens/TheoryScreen';
import TheoryGuide  from '../Screens/TheoryGuide'

import HajjAndUmrah from '../Screens/HajjAndUmrah'
import WhatIsUmrah from '../Screens/WhatIsUmrah'
import WhatIsHajj from '../Screens/WhatIsHajj'
import BenefitsAndPurposes from '../Screens/BenefitsAndPurposes'

import { useNavigation } from '@react-navigation/native';

const Theory = createNativeStackNavigator();

export default function TheoryStackNavigator() {
    const Navigation = useNavigation()
    return (
        <Theory.Navigator>
            <Theory.Screen
                name='TheoryScreen'
                component={TheoryScreen}
                options={{
                    headerShadowVisible: false,
                    headerTitle: '',
                    headerLeft: () => (
                        <Title text='Теория'/>
                    ),
                    headerRight: () => (
                        <HeaderIcon source={require('../assets/Icons/MagnifyingGlass.png')}/>
                    )
                }}/>
            <Theory.Screen
                name='WhatIsUmrah'
                component={WhatIsUmrah}
                options={({ navigation }) => ({ 
                    headerShadowVisible: false,
                    headerTitle: () => (
                        <Text style={{fontSize: 18, fontFamily: 'GolosBold'}}>Что такое Умра</Text>
                    ),
                    headerRight: () => (
                        <HeaderIcon source={require('../assets/Icons/UploadSimple.png')}/>
                    ),
                    headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => navigation.goBack()}/>
                    )
                    })
                }/>
            <Theory.Screen
                name='WhatIsHajj'
                component={WhatIsHajj}
                options={({ navigation }) => ({ 
                    headerShadowVisible: false,
                    headerTitle: () => (
                        <Text style={{fontSize: 18, fontFamily: 'GolosBold'}}>Что такое Умра</Text>
                    ),
                    headerRight: () => (
                        <HeaderIcon source={require('../assets/Icons/UploadSimple.png')}/>
                    ),
                    headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => navigation.goBack()}/>
                    )
                    })
                }/>
            <Theory.Screen
                name='HajjAndUmrah'
                component={HajjAndUmrah}
                options={({ navigation }) => ({ 
                    headerShadowVisible: false,
                    headerTitle: () => (
                        <Text style={{fontSize: 18, fontFamily: 'GolosBold'}}>Что такое Умра</Text>
                    ),
                    headerRight: () => (
                        <HeaderIcon source={require('../assets/Icons/UploadSimple.png')}/>
                    ),
                    headerLeft: () => (
                        <HeaderIcon source={require('../assets/Icons/ArrowLeft.png')} onPress={() => navigation.goBack()}/>
                    )
                    })
                }/>
            <Theory.Screen
                name='BenefitsAndPurposes'
                component={BenefitsAndPurposes}
                options={({ navigation }) => ({ 
                    headerShadowVisible: false,
                    headerTitle: () => (
                        <Text style={{fontSize: 18, fontFamily: 'GolosBold'}}>Что такое Умра</Text>
                    ),
                    headerRight: () => (
                        <HeaderIcon source={require('../assets/Icons/UploadSimple.png')}/>
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