import React, { useRef, useState, useCallback, useEffect } from 'react';
import { View, FlatList, Dimensions, Text } from 'react-native';
import { Pagination } from './pagination';

export const Carousel = ({renderItem, data}) => {
  const SlidesRef = useRef(null).current;
  const { width, height } = Dimensions.get('window')
  const [currentIndex, setCurrentIndex] = useState(0)

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
        decelerationRate={0}
        snapToInterval={width * 0.892}
        ItemSeparatorComponent={() => <View style={{width: 10}}/>}
        activeItemIndex={currentIndex}
        onChangeActiveItemIndex={(index)=>{
          setCurrentIndex(index)}}
        // onViewableItemsChanged = {useCallback(({ viewableItems }) => {
        // console.log(viewableItems);
        // }, [])}
        ref={SlidesRef}
        />
      </View>
      <Pagination data={data} currentSlide={currentIndex}/>
    </View>
  );
  }


