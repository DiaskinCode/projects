import React, { useState } from 'react';
import { View,Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Rite } from '../Components/Rite';
import { InstructionsVideoData } from '../Components/Data';

export default function RiteVideoInstructionScreen (props) {
  const Navigation = useNavigation()
    return (
      <View style={styles.Container}>
        <FlatList data={InstructionsVideoData}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <Rite type={'video'} item={item}
          onPress={() => Navigation.navigate('RiteViewVideoScreen', {
            HeaderTitle: item.title,
            type:'video',
            id:item.id,
            Data:InstructionsVideoData[item.id - 1],
          })}/>}/>
      </View>
    );
}

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      marginHorizontal: '6%',
    }
});