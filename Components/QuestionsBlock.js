import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Question } from './Question';

export const QuestionsBlock = (props) => {
    return (
      <View style={{width: '100%'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Text style={styles.Title}>{props.title}</Text>

          <TouchableOpacity>
              <Text style={styles.ShowAllButton}>Все</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.QuestionsList}>
          {props.data.map((item, index) => {
            return (
              <Question
                key={item.id}
                item={item} 
                type='Question' 
                icon={require('../assets/Icons/Plus.png')} 
                onPress={() => props.onPressItem(index)}/>
          )})}
        </View>
      </View>


    );
  }
const styles = StyleSheet.create({
    QuestionsList: {
        marginTop: 15,
    },
    Title: {
      fontFamily: 'GolosRegular',
      fontSize: 18
    },
    ShowAllButton: {
      fontFamily: 'GolosRegular',
      fontSize: 12,
      color: '#D0CDD2'
    }
});
