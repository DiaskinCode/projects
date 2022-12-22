import React, { useState, useRef } from 'react';
import {View, 
        Text, 
        TouchableWithoutFeedback, 
        TouchableOpacity, 
        Pressable, 
        Image, 
        Modal, 
        FlatList, 
        StyleSheet} from 'react-native';

export const DropdownPicker = (props) => {
    const [isVisible, setVisible] = useState(false);
    const [dropdownTop, setDropdownTop] = useState(0);
    const toggleDropdown = () => {
        isVisible ? setVisible(false) : openDropdown()
    };
    const DropdownButtonRef = useRef()
    const openDropdown = () => {
        DropdownButtonRef.current.measure((_fx, _fy, _w, h, _px, py) => {
            setDropdownTop(py + h);
        });
        setVisible(true);
    };

    return (
        <TouchableWithoutFeedback onPress={() => toggleDropdown()}>
            <View style={[styles.ButtonContainer, isVisible == true ? {borderBottomLeftRadius: 0, borderBottomRightRadius: 0} : '']} ref={DropdownButtonRef} >
                <View style={styles.Left}>
                    <Text style={styles.Description}>{props.description}</Text>
                    <Text style={styles.InputLabel}>{props.title}</Text>
                </View>

                <View style={styles.Right}>
                    {isVisible ? 
                        <Image source={require('../assets/Icons/CaretUp.png')} 
                            style={styles.Icon}/> :
                                <Image source={require('../assets/Icons/CaretDown.png')} 
                                    style={styles.Icon}/>}
                </View>
                
                {isVisible ? 
                <Dropdown visible={isVisible} 
                    dropdownTop={dropdownTop} 
                    onRequestClose={() => setVisible(false)} 
                    data={props.data}
                    onPress={(index) => props.onItemPress(index)}/> : null}
            </View>
        </TouchableWithoutFeedback>
    );
};
const Dropdown = (props) => {
    return (
        <Modal visible={props.visible} transparent animationType="none">
          <View style={[styles.Dropdown, { top: props.dropdownTop }]}>
            <FlatList
                data={props.data}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <TouchableWithoutFeedback onPress={(event) => props.onPress(event.currentTarget.id)}>
                        <View style={styles.DropdownRow}>
                            <Text style={styles.Label}>{item.value}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                )
                }
            />
          </View>
          <Pressable
          style={styles.overlay}
          onPress={props.onRequestClose}
        />
      </Modal>
    );
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        marginHorizontal: '6%',
        marginTop: 26
    },
    ButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E9E9E9',
        paddingHorizontal: 14,
        paddingVertical: 8,
        marginBottom: 15,
        borderBottomLeftRadius: 10, 
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10
    },
    Title: {
        fontFamily: 'GolosRegular',
        fontSize: 18,
    },
    DropdownRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 14,
        BackgroundColor: '#FFFFFF',
        borderBottomLeftRadius: 10, 
        borderBottomRightRadius: 10,
    },
    Label: {
        fontFamily: 'GolosRegular',
        fontSize: 15,
    },
    InputLabel: {
        fontFamily: 'GolosBold',
        fontSize: 15,
    },
    Description: {
        fontFamily: 'GolosMedium',
        fontSize: 12,
        opacity: 0.3,
        marginBottom: 5
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
    Dropdown: {
        backgroundColor: '#fff',
        marginHorizontal: '6%',
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#E9E9E9',
        zIndex: 2,
        borderBottomleftRadius: 10,
        borderBottomRightRadius: 10,
    },
    overlay: {
        flex: 1,
        zIndex: 1
    }
});

