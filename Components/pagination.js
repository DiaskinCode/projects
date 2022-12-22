import React, {useState} from 'react';
import { View, useWindowDimensions, StyleSheet} from 'react-native';


export const Pagination = ({data, currentSlide}) => {
  const [ index ] = useState(currentSlide)

    return(
    <View style={styles.container}>
      {data.map((_, i) => {
         return <View style={[styles.dot, {backgroundColor: i == index ? '#1C1C1E' : '#D8D0DD' }]} key={i.toString()}/>
      })}
    </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    height: 6,
    width: 6,
    borderRadius: 5,
    marginRight: 8,
  },
});
