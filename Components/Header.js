import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Title } from './Title';

export const Header = ({title, iconLeft, titleCenter, IconRight1, IconRight2, type}) => {
    return (
        <View style={styles.Container}>
            <View style={styles.headerWrapperLeft}>
                <Title text={title}/>
            </View>

            <View style={styles.headerWrapperCenter}>
                <Title type={'Bold18'} text={titleCenter}/>
            </View>

            <View style={styles.headerWrapperRight}>
                <TouchableOpacity>
                    <View>
                        <Image source={IconRight2} style={styles.Icon}/>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View>
                        <Image source={IconRight1} style={styles.Icon}/>
                    </View>
                </TouchableOpacity>
            </View> 
        </View>
    );
  }


  const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerWrapperRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    Icon: {
        marginLeft: 13,
        width: 26,
        height: 26,
        resizeMode: 'contain'
    },
    HeaderCenter: {
        alignSelf: 'center'
    }
  });
