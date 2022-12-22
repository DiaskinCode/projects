import React, { useState, useEffect, useLayoutEffect,Component, } from 'react';
import { View, Text, StyleSheet,Switch,Modal,modalVisible,Pressable,TouchableOpacity,TextInput } from 'react-native';


export const AccountOption = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const data = [{
        key: 5,
        label: 'Red Apples',
        // The next keys are optional --
        component:<Text style={{color: '#1C1C1E'}}>Red Apples custom component</Text>,
        testID: '5-red-apples'
      }];
    return (
                <View style={styles.option}>
                    <View>
                        <Text style={styles.optionName}>{props.name}</Text>
                        <Text style={styles.optionText}>{props.text}</Text>
                    </View>
                    <Switch
                        trackColor={{ false: "#D9D9D9", true: "#61C56C" }}
                        thumbColor={isEnabled ? "#ffffff" : "#ffffff"}
                        ios_backgroundColor="#D9D9D9"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />  
                </View>
    );
  }
const styles = StyleSheet.create({
    centeredView: {
        backgroundColor:'#000000',
        width:'100%',
        height:'100%',
        opacity:0.5,
    },
    modalView: {

    },
    option: {
        marginTop:15,
        backgroundColor: '#F6F6F6',
        paddingVertical:8,
        height:60,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:15,
        borderRadius:10,
      },
    
      optionName: {
        color:'#C5C5C5',
        fontSize:12,
      },
      optionText: {
        fontSize:15,
      },
});
