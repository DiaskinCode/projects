import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';

export const TabSwitch = ({SelectionMode, onSelectSwitch, TabOneTitle, TabTwoTitle}) => {
    const [getSelectionMode, setSelectionMode] = useState(SelectionMode)
    const updateSwitchData = (value) => {
        setSelectionMode(value)
        onSelectSwitch(value)
   }
    return (
        <View style={styles.Container}>
          <View style={{width: '50%'}}>
            <TouchableWithoutFeedback onPress={() => updateSwitchData(1)}>
              <View style={[styles.Tab, {backgroundColor: getSelectionMode == 1 ? '#FFFFFF' 
                : '#F6F6F6'}]}>
                <Text style={[styles.Text, 
                  {opacity: getSelectionMode == 1 ? 1 : 0.5}]}>{TabOneTitle}</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>

          <View style={{width: '50%'}}>
            <TouchableWithoutFeedback onPress={() => updateSwitchData(2)}>
              <View style={[styles.Tab, {backgroundColor: getSelectionMode == 2 ? '#FFFFFF' :
                '#F6F6F6'}]}>
                <Text style={[styles.Text, 
                  {opacity: getSelectionMode == 2 ? 1 : 0.5}]}>{TabTwoTitle}</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
            
        </View>
    );
  }
  const styles = StyleSheet.create({
    Container: {
      width: '100%',
      height: 36,
      backgroundColor: '#F6F6F6',
      paddingHorizontal: '2%',
      borderRadius: 20,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 28,
      marginTop: 24
    },
    Tab: {
      height: 26,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
 
    }
  });
