import React from 'react';
import { 
    Text,
    View, 
    TouchableWithoutFeedback, 
    Image, 
    Modal, 
    Pressable,
    StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ModalHeader } from './Pop-Up';

export const DialogPicker = (props) => {
    return (
        <TouchableWithoutFeedback onPress={props.onPress}>
            <View style={styles.ButtonContainer}>
                <View style={styles.Left}>
                    <Text style={styles.Description}>{props.description}</Text>
                    <Text style={styles.InputLabel}>{props.title}</Text>
                </View>

                <View style={styles.Right}>
                    <Image source={props.flagIcon} style={styles.FlagIcon}/>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
export const ModalWindow = (props) => {
    return (
        <View>
            <Modal 
                visible={props.visible}
                transparent={true}
                style={{justifyContent: 'flex-end', height: '100%'}}
                onPress={props.onPress}
                onRequestClose={props.onRequestClose}>
                <View style={styles.ModalContainer}>
                    <View style={styles.ModalContent}>
                        <ModalHeader Close={props.onRequestClose} type='Settings'/>
                        <Picker
                            style={styles.Picker}
                            selectedValue={props.selectedValue}
                            onValueChange={(itemValue, itemIndex) => props.onValueChange(itemIndex)}
                            labelProps={{
                                numberOfLines: 1
                            }}
                            labelStyle={{
                                fontSize: 200
                            }}>
                            <Picker.Item value={props.value} label={props.label}/>
                            <Picker.Item value={props.value2} label={props.label2}/>
                        </Picker>
                    </View>
                </View>
                <Pressable style={styles.CenteredView} onPress={props.onRequestClose}/>
            </Modal>
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
    Left: {
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
    FlagIcon: {
        width: 26,
        height: 26,
        BorderRadius: 50
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

