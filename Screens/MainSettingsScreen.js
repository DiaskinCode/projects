import React, { useState, useRef } from 'react';
import { 
    Text,
    View, 
    StyleSheet } from 'react-native';
import { AccountInput } from '../Components/AccountInput';
import { AccountInputToMap } from '../Components/AccountInputToMap';
import { DropdownPicker } from '../Components/DropdownPicker';
import { DialogPicker, ModalWindow } from '../Components/DialogPicker.js'

export default function MainSettingsScreen() {
    const [userGender, setUserGender] = useState([
        { value: 'Мужской', label: 'Мужской', id: 1 },
        { value: 'Женский', label: 'Женский', id: 2 }
    ]);
    const [language, setLanguage] = useState([
        {label: 'Русский', value: 'Русский', flagIcon: require('../assets/Icons/FlagIcon.png') , id: 1 },
        {label: 'English', value: 'English', flagIcon: require('../assets/Icons/FlagIcon.png'), id: 2 }
    ])
    const [ SelectedLanguage, setSelectedLanguage ] = useState({label: 'Русский', value: 'Русский', flagIcon: require('../assets/Icons/FlagIcon.png') , id: 1 });
    const [ SelectedUserGender, setSelectedUserGender ] = useState({ value: 'Мужской', label: 'Мужской', id: 1 },);

    const [isVisible, setVisible] = useState(false);
    const PickerRef = useRef()

    const onItemPress = (id) => {
        console.log(id)
        setVisible(false);
    }
    const onValueChange = (itemIndex) => {
        setSelectedLanguage(language[itemIndex])
        console.log(itemIndex)
    }
    return (
        <View style={styles.Container}>
            <DialogPicker 
                description='Язык в приложении' 
                title={SelectedLanguage.value}
                flagIcon={SelectedLanguage.flagIcon}
                type='language'
                onPress={() => setVisible(true)}/>

            <DropdownPicker 
                description={'Ваш пол'}
                title={SelectedLanguage.value}
                data={userGender} 
                onItemPress={(id) => onItemPress(id)}/>

            <View style={styles.InputBlock}>
                <Text style={styles.Title}>Контакты моего отеля</Text>

                <AccountInput name='Название отеля' 
                    placeholder='Sheraton Makkah' keyboardType="default"/>

                <AccountInputToMap name='Адрес отеля'
                    placeholder='Jabal Al Kaaba, Mecca 24231, Саудовская Аравия' keyboardType="default"/>

                <AccountInput name='Номер телефона отеля' 
                    placeholder='+966 12 551 8900'  keyboardType="numeric"/>

                <AccountInput name='Адрес сайта' 
                    placeholder='https://' keyboardType="url"/>
            </View>

            <ModalWindow 
                visible={isVisible} 
                selectedValue={SelectedLanguage}
                onPress={() => setVisible(!isVisible)}
                onItemPress={(item) => onItemPress(item)}
                ref={PickerRef}
                onRequestClose={() => {setVisible(false)}}
                onValueChange={(itemIndex) => onValueChange(itemIndex)}
                value={language[0].value}
                value2={language[1].value}
                label={language[0].label}
                label2={language[1].label}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        marginHorizontal: '6%',
        marginTop: 26
    },
    InputBlock: {
        marginTop: 15
    },
    ButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E9E9E9',
        borderRadius: 10,
        paddingHorizontal: 14,
        paddingVertical: 8,
        marginBottom: 15,
    },
    Picker: {
        borderColor:'#E9E9E9', 
        BorderRadius: 1,
    },
    Title: {
        fontFamily: 'GolosRegular',
        fontSize: 18,
    },
    InputLabel: {
        fontFamily: 'GolosBold',
        fontSize: 15,
    },
    Description: {
        fontFamily: 'GolosMedium',
        fontSize: 12,
        marginBottom: 5,
        opacity: 0.3
    },
    Right: {
        width: 26,
        height: 26,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Icon: {
        width: 20,
        height: 20
    },
    ModalContainer: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: '40%',
        borderRadius : 40,
        position: 'absolute',
        bottom: 0,
        zIndex: 2,
        paddingTop: '7%',
        paddingHorizontal: '6%'
    },
    CenteredView: {
        flex: 1,
        position:'relative',
        zIndex: 1,
    },
    DropDownPicker: {
        borderColor: '#E9E9E9',
        height: 60,
        paddingRight: 15,
        paddingLeft: 14,
    },
    
});
