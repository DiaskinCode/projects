import React, { useMemo } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { MotiView } from 'moti';
import { Easing } from 'react-native-reanimated';

const _colors = {
    inactive: '#D9D9D9',
    active: '#61C56C'
}
const trackWidth = 42

export const SwitchBlock = (props) => {
    return (
        <Pressable onPress={props.onPress}> 
        <View style={styles.Container}>
            <View style={styles.Left}>
                <Text style={styles.Description}>{props.description}</Text>
                <Text style={styles.Title}>{props.title}</Text>
            </View>

            <Switch isActive={props.isActive}/>
        </View>
        </Pressable>
    );
}
const Switch = ({isActive}) => {
    return(
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <MotiView 
                style={styles.Switch}
                transition={{type: 'timing'}}
                from={{backgroundColor: isActive ? _colors.active : _colors.inactive}}
                animate={{backgroundColor: isActive ? _colors.active : _colors.inactive}}
            />
            <MotiView 
                style={styles.SwitchKnob}
                transition={{
                    type: 'timing',
                }}
                from={{
                    translateX: isActive ? trackWidth / 4 : - trackWidth / 4
                }}/>
        </View>
    )
}
const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: 60,
        backgroundColor: '#F6F6F6',
        borderRadius: 10,
        paddingVertical: 8,
        paddingLeft: 14,
        paddingRight: 18,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 3,
        marginBottom: 15
    },
    Switch: {
        width: 48,
        height: 26,
        borderRadius: 10,
        position: 'absolute',
        paddingVertical: 3
    },
    SwitchTrack: {
        
    },
    SwitchKnob: {
        width: 20,
        height: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 7,
    },
    Description: {
        fontFamily: 'GolosMedium',
        fontSize: 12,
        lineHeight: 14,
        opacity: 0.3,
        marginBottom: 5,
    },
    Title: {
        fontFamily: 'GolosRegular',
        fontSize: 15,
        lineHeight: 18,
    },
});
