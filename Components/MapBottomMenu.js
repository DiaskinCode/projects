import React, { Component,useState } from 'react';
import { View, Image, Text, StyleSheet,Dimensions, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';

export const MapBottomMenu = (props) => { 
    const {t} = useTranslation()
    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
        setIsPressed(!isPressed);
        props.myHotel(isPressed)
    };

    return (
        <View style={styles.MapBottomMenu}>
            <View style={styles.container}>
                <View style={styles.MenuFunctions}>
                    <TouchableOpacity style={styles.MenuFunction}>
                            <Text style={styles.functionText}>{t('get_taxi')}</Text>
                            <Image style={styles.functionImage} source={require('../assets/images/get_taxi.png')}/>
                    </TouchableOpacity>

                    {isPressed == false ? 
                        <TouchableOpacity style={styles.MenuFunction} onPress={handlePress}>
                                <Text style={styles.functionText} >{t('where_hotel')}</Text>
                                <Image
                                    style={styles.functionImage}
                                    source={require('../assets/images/find_hotel.png')}
                                />
                        </TouchableOpacity>
                        : 
                        <TouchableOpacity style={styles.MenuFunctionActive} onPress={handlePress}>
                            <Text style={styles.functionTextActive} >{t('where_hotel')}</Text>
                            <Image
                                style={styles.functionImage}
                                source={require('../assets/Icons/roundedX.png')}
                            />
                        </TouchableOpacity>
                        }
                </View>

                <View style={styles.MenuNavigation}>
                    <TouchableOpacity style={styles.MenuNavigationItem} onPress={() => props.navigation.navigate('MapPlaces')}>
                        <Image style={styles.MenuNavigationImage} source={require('../assets/images/places.png')}/>
                        <Text style={styles.MenuNavigationText}>{t('places')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.MenuNavigationItem} onPress={() => props.navigation.navigate('MapRestaraunts')}>
                        <Image style={styles.MenuNavigationImage} source={require('../assets/images/food.png')}/>
                        <Text style={styles.MenuNavigationText}>{t('eat')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.MenuNavigationItem} onPress={() => props.navigation.navigate('AboutCity')}>
                        <Image style={styles.MenuNavigationImage} source={require('../assets/images/aboutCity.png')}/>
                        <Text style={styles.MenuNavigationText}>{t('city')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.MenuNavigationItem} onPress={() => props.navigation.navigate('MapHelp')}>
                        <Image style={styles.MenuNavigationImage} source={require('../assets/images/help.png')}/>
                        <Text style={styles.MenuNavigationText}>{t('help')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    MenuNavigation: {
        marginTop:25,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    MenuNavigationItem: {
        width:'100%',
        alignItems:'center'
    },
    MenuNavigationImage:{
        width:58,
        height:60,
    },
    MenuNavigationText:{
        marginTop:5,
        fontWeight:'500',
        fontSize:12,
    },
    MapBottomMenu: {
        position:'absolute',
        bottom:0,
        left:0,
        width:Dimensions.get('window').width,
        height:210,
        backgroundColor:'#fff',
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        alignItems:'center'
    },
    container: {
        width:Dimensions.get('window').width * 0.85,
    },
    MenuFunctions: {
        width:Dimensions.get('window').width * 0.85,
        position:'relative',
        height:36,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:30,
    },
    MenuFunction: {
        width:Dimensions.get('window').width * 0.41,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:36,
        borderRadius:20,
        backgroundColor:'#F6F6F6',
        paddingLeft:15,
        paddingRight:6,
    },
    MenuFunctionActive: {
        width:Dimensions.get('window').width * 0.41,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:36,
        borderRadius:20,
        backgroundColor:'#61C66C',
        paddingLeft:15,
        paddingRight:6,
    },
    functionImage: {
        height:26,
        width:26,
        position:'absolute',
        right:8,
        top:5,
    },
    functionText: {
        fontWeight:'500',
        fontSize:14,
        width:'140%'
    },
    functionTextActive: {
        fontWeight:'500',
        fontSize:14,
        color:'#ffffff'
    },
    
});
