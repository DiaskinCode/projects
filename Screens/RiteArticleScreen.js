import React, { useLayoutEffect } from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import i18n from 'i18next';
import { useNavigation } from '@react-navigation/native';
import { ListItem } from '../Components/ListItem';

export default function RiteArticleScreen(props) {
    const {HeaderTitle} = props.route.params || {}
    const {ArticleImage} = props.route.params || {}

    const SmallBagScreenData = [
        {
        text: i18n.t("Small_Bag_Screen_Data_Text"),
        listTitle: i18n.t("Small_Bag_Screen_Data_ListTitle"),
        list: [
            {
                id: 1,
                text: i18n.t("Small_Bag_Screen_Data_List_AirplaneTickets"),
            },
            {
                id: 2,
                text: i18n.t("Small_Bag_Screen_Data_List_PasportAndVisaCopy")
            },
            {
                id: 3,
                text: i18n.t("Small_Bag_Screen_Data_List_ShahadaCertificate")
            },
            {
                id: 4,
                text: i18n.t("Small_Bag_Screen_Data_List_HotelAdress")
            },
            {
                id: 5,
                text: i18n.t("Small_Bag_Screen_Data_List_Cash")
            },
            {
                id: 6,
                text: i18n.t("Small_Bag_Screen_Data_List_Medicines")
            },
            {
                id: 7,
                text: i18n.t("Small_Bag_Screen_Data_List_GlassesOrLenses")
            }
        ]
        },
        {
            text: i18n.t("Small_Bag_Screen_Data_Text"),
            listTitle: i18n.t("Small_Bag_Screen_Data_ListTitle"),
            list: [
                {
                    id: 1,
                    text: i18n.t("Small_Bag_Screen_Data_List_AirplaneTickets"),
                },
                {
                    id: 2,
                    text: i18n.t("Small_Bag_Screen_Data_List_PasportAndVisaCopy")
                },
                {
                    id: 3,
                    text: i18n.t("Small_Bag_Screen_Data_List_ShahadaCertificate")
                },
                {
                    id: 4,
                    text: i18n.t("Small_Bag_Screen_Data_List_HotelAdress")
                },
                {
                    id: 5,
                    text: i18n.t("Small_Bag_Screen_Data_List_Cash")
                },
                {
                    id: 6,
                    text: i18n.t("Small_Bag_Screen_Data_List_Medicines")
                },
                {
                    id: 7,
                    text: i18n.t("Small_Bag_Screen_Data_List_GlassesOrLenses")
                }
            ]
        },
    ]

    const Data = SmallBagScreenData[props.route.params.id - 1]
    const Navigation = useNavigation()
    useLayoutEffect(() => {
        Navigation.setOptions({
          headerTitle: () => <Text style={{fontFamily: 'GolosBold', fontSize: 18}}>{HeaderTitle}</Text>
        });
      }, [Navigation]);
    return (
      <ScrollView>
        <View style={styles.Container}>
            <Image source={ArticleImage} style={styles.Image}/>
            <Text style={styles.Description}>{Data.text}</Text>

            <View>
                <Text style={styles.ListTitle}>{Data.listTitle}</Text>
                <View style={{borderTopWidth: 1, borderColor: '#E9E9E9'}}>
                    {Data.list.map((item) => {
                        return(
                            <ListItem item={item}/>
                        )})}
                </View>
            </View>
        </View>
      </ScrollView>
    );
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        marginHorizontal: '6%',
        marginTop: 20
    },
    Image: {
        width: '100%',
        height: 120,
        boderRadius: 13,
        marginBottom: 20
    },
    Description: {
        fontFamily: 'GolosRegular',
        fontSize: 18,
        lineHeight: 25,
        marginBottom: 30,
    },
    ListTitle: {
        fontFamily: 'GolosBold',
        fontSize: 15,
        lineHeight: 18,
        marginBottom: 10
    }
});