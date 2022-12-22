import React from 'react';
import { View, FlatList, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Description } from './Description';
import { useNavigation } from '@react-navigation/native';

export const ArticleBlock = (props) => {
    const Navigation = useNavigation()
    return (
      <View style={styles.Container}>
        <View style={styles.Header}>
          <Text style={styles.Title}>Статьи и новости</Text>

          <TouchableOpacity onPress={props.onPressAll}>
            <Text style={styles.ShowAllButton}>Все</Text>
          </TouchableOpacity>
        </View>
        
        <FlatList
          data={props.data}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          ItemSeparatorComponent={() => <View style={{width: 10}}/>}
          renderItem={({item, index}) => <Article item={item} onPress={() => {
            Navigation.navigate('ArticleScreen', {
              itemId:index + 1,
            })
          }}/>}
          />
      </View>
    );
  }

  const Article = (props) => {
    return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={{width: 154, minHeight: 150}}>
        <Image source={{uri :`http://oralbekov.dias19.fvds.ru${props.item.upload}`}} style={styles.Image}/>
        <Description text={props.item.created_at}/>
        <Text style={styles.ArticleText}>{props.item.title}</Text>
      </View>
    </TouchableWithoutFeedback>
    )
  }

  const styles = StyleSheet.create({
    Container: {
      marginBottom: 15
    },
    Header: {
      flexDirection:'row', 
      justifyContent:'space-between', 
      alignItems: 'center', 
      marginBottom: 10,
    },
    Title: {
      fontFamily: 'GolosRegular',
      fontSize: 18,
    },
    ShowAllButton: {
      fontFamily: 'GolosRegular',
      fontSize: 12,
      color: '#D0CDD2'
    },
    ArticleText: {
      fontFamily: 'GolosBold',
      fontSize: 13,
    },
    Image: {
      height: 90, 
      width: '100%', 
      resizeMode: 'cover',
      marginBottom: 7, 
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      borderBottomRightRadius: 20,
      borderBottomLeftRadius: 6,
    }
  });
