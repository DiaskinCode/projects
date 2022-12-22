import React, { useState } from 'react';
import { View,Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Rite } from '../Components/Rite';
import { UmrahInstructionsVideoData } from '../Components/Data';

export default function UmrahRiteVideoInstructionScreen (props) {
  const Navigation = useNavigation()
    return (
      <View style={styles.Container}>
        <FlatList data={UmrahInstructionsVideoData}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <Rite type={'video'} item={item}
          onPress={() => Navigation.navigate('UmrahRiteViewVideoScreen', {
            HeaderTitle: item.title,
            type:'video',
            id:item.id,
            Data:UmrahInstructionsVideoData[item.id - 1],
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