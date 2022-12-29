import React, { useRef, useState, useCallback, useEffect } from 'react';
import { View, FlatList, Dimensions, Text } from 'react-native';
import { Pagination } from './pagination';

export const Carousel = ({renderItem, data}) => {
  const SlidesRef = useRef(null);
  const { width, height } = Dimensions.get('window')
  const [ViewableSlide, setViewableSlide] = useState(0)

  const onViewChanged = ({viewableItems}) => {
    console.log('I snapped to', viewableItems[0].index);
    if (viewableItems.length > 0) {
      const {item: activeItem, index: activeIndex} = viewableItems[0];
      setViewableSlide({activeIndex: activeIndex});
    }
  };

  return (
    <View>
      <View style={{marginBottom: 10, marginTop: 17}}>
        <FlatList data={data}
        renderItem = {renderItem}
        keyExtractor={item => item.id}
        bounces={false}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToStart={true}
        ItemSeparatorComponent={() => <View style={{width: 10}}/>}
        decelerationRate={0}
        snapToInterval={width * 0.892}
        // onViewableItemsChanged = {useCallback(({ viewableItems }) => {
        // console.log(viewableItems[0])
        // setViewableSlide(viewableItems[0].index);
        // }, [])}
        onViewableItemsChanged = {useCallback((viewableItems) => {
          onViewChanged(viewableItems)
        }, [])}
        viewabilityConfig={{itemVisiblePercentThreshold: 100}}
        />
      </View>
      <Pagination data={data} currentSlide={ViewableSlide}/>
    </View>
  );
  }


