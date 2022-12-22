import React from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, useWindowDimensions} from 'react-native';
import { Title } from './Title';
import { Description } from './Description'

 export const Category = (props) => {

  const { width } = useWindowDimensions()
  const itemWidth = width * 0.27

  return (
    <View style={[styles[`Container${props.type}`], {borderColor: props.borderColor, 
        borderWidth: 1, 
        borderRadius: 20, 
        marginBottom: 10,
        }
        ]}>
      <TouchableWithoutFeedback onPress={props.onPress}>
          <View style={styles[`Content${props.type}`]}>
            <View style={styles.textBar}>
              <View style={styles[`textWrap${props.type}`]}>
                <Title type='Category' text={props.title}/>
              </View>
                <Description text={props.description}/>
            </View>

            <Image source={props.icon} style={[styles[`Icon${props.type}`]]}/>
          </View>
      </TouchableWithoutFeedback>
    </View>
    )
  }
const styles = StyleSheet.create({
    ContainerHorizontal: {
      width: '48.5%',
    },
    ContainerVertical: {
      width: '31.35%',
      height: 106,
    },
    ContentHorizontal: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
      paddingVertical: 10,
    },
    ContentVertical: {
      paddingHorizontal: 15,
      paddingVertical: 10,
    },
    IconHorizontal: {
      width: 24,
      height: 24,
      marginTop: 'auto',
    },
    IconVertical: {
      marginTop: 10,
      width: 24,
      height: 24,
    },
    textWrapHorizontal: {
      marginBottom: 5,
      width: 100,
      height: 36,
    },
    textWrapVertical: {
      width: 75,
    },

});
