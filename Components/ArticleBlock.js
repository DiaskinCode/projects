import React from 'react';
import { View, FlatList, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Description } from './Description';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

export const ArticleBlock = (props) => {
    const Navigation = useNavigation()
    const { t } = useTranslation();
    return (
      <View style={styles.Container}>
        <View style={styles.Header}>
          <Text style={styles.Title}>{t('articles')}</Text>

          <TouchableOpacity onPress={props.onPressAll}>
            <Text style={styles.ShowAllButton}>{t('all')}</Text>
          </TouchableOpacity>
        </View>
        
        <FlatList
          data={props.data}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          ItemSeparatorComponent={() => <View style={{width: 10}}/>}
          renderItem={({item, index}) =>
          <TouchableWithoutFeedback onPress={() => {
            Navigation.navigate('ArticleScreen', {
              itemId:index + 1,
            })
          }}>
          <View style={{width: 154, minHeight: 150}}>
            <Image source={{uri :`http://oralbekov.dias19.fvds.ru${item.upload}`}} style={styles.Image}/>
            <Description text={item.created_at}/>
            <Text style={styles.ArticleText}>{item.title}</Text>
          </View>
        </TouchableWithoutFeedback>}
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
      marginBottom: 15,
      marginTop:10,
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
