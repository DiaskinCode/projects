import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Rite } from '../Components/Rite';
import { InstructionsData } from '../Components/Data';

export default function RiteInstructionScreen (props) {
  const Navigation = useNavigation()
    return (
      <View style={styles.Container}>
        <FlatList data={InstructionsData}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <Rite type={'text'} item={item}
          onPress={() => Navigation.navigate('RiteViewScreen', {
            HeaderTitle: item.title,
            type:'text',
            id:item.id,
            Data:InstructionsData[item.id - 1],
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