import React, { useMemo } from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import i18n from 'i18next';
import { Carousel } from '../Components/Carousel'

export default function MapPlacesDetailed () {
    const ScreenWidth = Dimensions.get('window').width
    const ItemWidth = useMemo(() => ScreenWidth * 0.86)
    
    const PlacesCarouselData = [
      {
          id: 1,
          image: require("../assets/images/Mekkah.png")
      },
      {
          id: 2,
          image: require("../assets/images/Mekkah.png")
      },
      {
          id: 3,
          image: require("../assets/images/Mekkah.png")
      }
      ]
    
    return (
      <View style={styles.Container}>
        <Carousel 
          data={PlacesCarouselData}
          renderItem={({item}) => 
            <View style={styles.ItemContainer} key={item.id}>
              <Image style={[styles.Image, {width: ItemWidth}]}
                source={item.image}/>
            </View>
          }
        />
      </View>
    );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginHorizontal: '6%'
  },
  ItemContainer: {

  },
  Image: {
    height: 240,
    width: 338,
    borderRadius: 20,
  }
});

