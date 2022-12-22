import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Title } from '../Components/Title.js'

export function AboutAppScreen() {
    return (
        <View style={styles.Container}>
            <Image source={require('../assets/images/aboutApp.png')} style={styles.aboutAppImage} />
            <Text style={styles.aboutAppText}>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual </Text>
            <Title text={'Цели приложения'} />
            <Text style={styles.aboutAppGoalsText}>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    Container: {
        marginHorizontal: '6%',
        flex: 1
    },
    aboutAppImage: {
        width: '100%',
        height: 140,
        marginTop: 25,
    },
    aboutAppText:{
        fontFamily: 'GolosRegular',
        fontSize: 18,
        fontWeight: '400',
        lineHeight: 25,
        marginVertical:30,
    },
    aboutAppGoalsText:{
        fontFamily: 'GolosRegular',
        fontSize: 14,
        marginTop: 15,
        lineHeight: 19.6,
    },
});
