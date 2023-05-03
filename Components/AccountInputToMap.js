
import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Dimensions } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

    const {height, width} = Dimensions.get('window')
    const InputWidth = width * 0.88

export const AccountInputToMap = (props) => {   
    const [InputFocus, setInputFocus] = useState(false)

    const onFocus = () => {
        setInputFocus(true)
    }
    const onBlur = () => {
        setInputFocus(false)
    }

    return (
        <View style={styles.Container}>
            <View style={styles.Right}>
                <Text style={[styles.InputText, 
                    InputFocus || props.value ? {opacity: 1} : null]}>
                        {props.label}
                </Text>
                <GooglePlacesAutocomplete
                    placeholder='Jabal Al Kaaba, Mecca 24231,
                    Саудовская Аравия'
                    autoFocus={false}
                    returnKeyType={'search'}
                    listViewDisplayed={"auto"}
                    numberOfLines={2}
                    bounces={false}
                    fetchDetails={true}
                    enablePoweredByContainer={false}
                    keyboardShouldPersistTaps="handled"
                    getDefaultValue={() => ''}
                    listEmptyComponent={() => (
                        <View style={{flex: 1}}>
                          <Text>No results were found</Text>
                        </View>
                      )}
                    textInputProps={{
                        value: props.value,
                        onChangeText: (value) => props.onChangeText(value),
                        onBlur: () => onBlur(),
                        onFocus: () => onFocus(),
                    }}
                    renderRow={(rowData) => {
                        const title = rowData.structured_formatting.main_text;
                        const address = rowData.structured_formatting.secondary_text;

                        return (
                            <View>
                                <Text style={InputStyles.predefinedPlacesDescription}>{title}</Text>
                                <Text style={{ fontSize: 14 }}>{address}</Text>
                            </View>
                        );
                    }}
                    
                    onPress={(data, details = null) => {props.onTapRow(details), console.log(data, details);
                    }}
                    query={{
                        key: 'AIzaSyCKKn8KVrLBr5jiIIgAC0mNpeWnZCObYq4',
                        language: 'ru',
                        types: 'address',
                }}
                styles={InputStyles}/>
            </View>
            <TouchableOpacity
                style={styles.Icon}
                onPress={props.onPress}>
                <Image 
                    style={{width: 14, height: 14}} 
                    source={require('../assets/Icons/NavigationArrow.png')}/>
            </TouchableOpacity>
        </View>
    );
  }
const styles = StyleSheet.create({
    Input: {
        height: 50,
        width: '100%',
        fontSize: 15,
        fontFamily: 'GolosRegular',
    },
    Container: {
        height: 85,
        borderWidth: 1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom: 15,
        padding: 10,
        borderRadius: 10,
        borderColor:'#E9E9E9',
        zIndex: 2
    },
    Right: {
        width: '85%'
    },
    InputText: {
        color: '#1C1C1E',
        opacity: 0.3,
        fontFamily: 'GolosMedium',
        width: 200
    },
    Icon: {
        height: '100%',
        width: 30,
        borderRadius: 4,
        backgroundColor: '#F6F6F6',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
});


const InputStyles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 100,
        
    },
    textInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textInput: {
        height: 40,
        fontSize: 15,
        fontFamily: 'GolosRegular',
        paddingHorizontal: 0,
        paddingVertical: 0,
        width: '60%',
        margin: 0,
        numberOfLines: 2
    },
    listView: {
        position: 'absolute',
        top: 60,
        width: InputWidth - 20,
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
        elevation: 999,
        zIndex: 999,
    },
    predefinedPlacesDescription: {
        
    },
    PredefinedPlacesTitle: {
        fontFamily: 'GolosMedium',
        fontSize: 12,
        lineHeight: 14
    },
    row: {
        padding: 0
    }
})
