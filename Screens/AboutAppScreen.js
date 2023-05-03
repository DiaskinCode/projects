import React from 'react';
import { Text, ScrollView, Image, StyleSheet } from 'react-native';
import { Title } from '../Components/Title.js'
import { useTranslation } from 'react-i18next';

export function AboutAppScreen() {
    const {t} = useTranslation()
    return (
        <ScrollView 
            style={styles.Container}
            showsVerticalScrollIndicator={false}>
            <Image source={require('../assets/images/aboutApp.png')} style={styles.Image} />
            <Text style={styles.Text}>{t('about_app_desc')}</Text>
            <Title text={t('about_app_goals')} />
            <Text style={styles.GoalsText}>{t('about_app_goals_text')}</Text>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    Container: {
        marginHorizontal: '6%',
        flex: 1
    },
    Image: {
        width: '100%',
        height: 140,
        marginTop: 25,
    },
    Text:{
        fontFamily: 'GolosRegular',
        fontSize: 18,
        fontWeight: '400',
        lineHeight: 25,
        marginVertical:30,
    },
    GoalsText:{
        fontFamily: 'GolosRegular',
        fontSize: 14,
        marginTop: 15,
        lineHeight: 19.6,
    },
});
