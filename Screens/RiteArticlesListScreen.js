import React, { useLayoutEffect } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CheckItem } from '../Components/CheckItem';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

export default function RiteArticlesListScreen(props) {
    const { t } = useTranslation()
    const {CategoryTitle} = props.route.params || {}
    const {CategoryId} = props.route.params || {}
    const Navigation = useNavigation()
    useLayoutEffect(() => {
        Navigation.setOptions({
          headerTitle: () => <Text style={{fontFamily: 'GolosBold', fontSize: 18}}>{CategoryTitle}</Text>
        });
      }, [Navigation]);
    return (
      <ScrollView>
        <View style={styles.Container}>
          <CheckItem
              title={t("intention")} 
              description={t("intention_title")}/>
          <CheckItem
              title={t("voucher")} 
              description={t("voucher_title")}/>
          <CheckItem
              title={t("small_bag")} 
              description={t("small_bag_title")}
              type={'Article'}
              image={require('../assets/images/SmallBag.png')}
              onPress={() => Navigation.navigate('RiteArticle', {
                HeaderTitle: t('small_bag'),
                id: 1,
                ArticleImage: require('../assets/images/SmallBag.png')
              })}/>
          <CheckItem
              title={t("clothes")} 
              description={t("clothes_title")}
              type={'Article'}
              image={require('../assets/images/Clothes.png')}
              onPress={() => Navigation.navigate('RiteArticle', {
                HeaderTitle: t('clothes'),
                id: 2,
                ArticleImage: require('../assets/images/Clothes.png')
              })}/>
            </View>
      </ScrollView>
    );
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        marginHorizontal: '6%'
    }
});