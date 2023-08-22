import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, ScrollView, Image, StyleSheet,View } from 'react-native';
import { Title } from '../Components/Title.js'

export function MapHelpScreen() {
    const {t} = useTranslation()
    return (
        <ScrollView 
            style={styles.Container}
            showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>{t("support_and_info")}</Text>

            <View style={styles.contactComponent}>
                <View style={{padding:6,backgroundColor:'#fff',borderRadius:10,}}>
                   <Image style={{height:30,width:30,}} source={require('../assets/Icons/Question.png')}/>
                </View>
                <View style={{marginLeft:10,}}>
                    <Text style={{fontSize:14,fontWeight:'400',}}>{t("referencial")}</Text>
                    <Text style={{fontSize:15,fontWeight:'700',marginTop:3,}}>905</Text>
                </View>
            </View>

            <View style={styles.contactComponent}>
                <View style={{padding:6,backgroundColor:'#fff',borderRadius:10,}}>
                   <Image style={{height:30,width:30,}} source={require('../assets/Icons/AirplaneTilt.png')}/>
                </View>
                <View style={{marginLeft:10,}}>
                    <Text style={{fontSize:14,fontWeight:'400',}}>{t("airport_referencial")}</Text>
                    <Text style={{fontSize:15,fontWeight:'700',marginTop:3,}}>684-2000</Text>
                </View>
            </View>

            <View style={styles.contactComponent}>
                <View style={{padding:6,backgroundColor:'#fff',borderRadius:10,}}>
                   <Image style={{height:30,width:30,}} source={require('../assets/Icons/Drop.png')}/>
                </View>
                <View style={{marginLeft:10,}}>
                    <Text style={{fontSize:14,fontWeight:'400',}}>{t("Water_supply_service")}</Text>
                    <Text style={{fontSize:15,fontWeight:'700',marginTop:3,}}>545-2240</Text>
                </View>
            </View>

            <Text style={styles.title}>{t("support_and_info")}</Text>

            <Text style={styles.GoalsText}>{t("payphone_text")}</Text>
            <Text style={styles.GoalsText}>{t("telephone_communications")}</Text>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    Container: {
        marginHorizontal: '6%',
        flex: 1
    },
    title:{
        fontSize:24,
        fontWeight:'700',
        marginTop:40,
        fontFamily:'GolosBold',
        marginBottom:10,
    },
    contactComponent: {
        width: '100%',
        height: 60,
        padding:10,
        flexDirection:'row',
        alignItems:'center',
        marginTop: 15,
        borderRadius:20,
        backgroundColor:'#F6F6F6',
    },
    GoalsText:{
        fontFamily: 'GolosRegular',
        fontSize: 14,
        marginTop: 15,
        lineHeight: 19.6,
    },
});
