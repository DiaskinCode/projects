import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Rite } from '../Components/Rite';
import { UmrahInstructionsData } from '../Components/Data';

export default function UmrahRiteInstructionScreen (props) {
  const Navigation = useNavigation()
    return (
      <View style={styles.Container}>
        <FlatList data={UmrahInstructionsData}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <Rite category={'umrah'} type={'text'} item={item}
          onPress={() => Navigation.navigate('UmrahRiteViewScreen', {
            HeaderTitle: item.title,
            type:'text',
            id:item.id,
            Data:UmrahInstructionsData[item.id - 1],
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