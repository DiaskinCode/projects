  import React, { useRef, useState, useMemo } from 'react';
  import { View, FlatList, Dimensions, TouchableWithoutFeedback, StyleSheet } from 'react-native';


  export const Carousel = ({renderItem, data}) => {
  const SlidesRef = useRef().current;
  const ScreenWidth = Dimensions.get('window').width
  const ItemSeparatorComponent = useMemo(() => ScreenWidth * 0.03)
  const numberOfPages = data.length;
  const [ activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef();
  return (
    <>
      <View style={{marginBottom: 10, marginTop: 17}}>
        <FlatList 
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          bounces={false}
          decelerationRate={0}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          snapToStart={true}
          ref={scrollRef}
          onScroll={(event) => {
            const contentOffset = event.nativeEvent.contentOffset;
            const viewSize = event.nativeEvent.layoutMeasurement;
            const pageNum = Math.floor(contentOffset.x / viewSize.width);
            setActiveIndex(pageNum);
          }}
          snapToInterval={ScreenWidth * 0.892}
          ItemSeparatorComponent={() => <View style={{width: ItemSeparatorComponent}}/>}
          />
      </View>
      <PaginationDots activeIndex={activeIndex} numberOfPages={numberOfPages} />
    </>
  );
}
function PaginationDots({ activeIndex, numberOfPages, onDotPress }) {
  const dots = [];
  for (let i = 0; i < numberOfPages; i++) {
    const dotStyle = i === activeIndex ? styles.activeDot : styles.inactiveDot;
    dots.push(
      <TouchableWithoutFeedback key={i}>
        <View style={dotStyle}/>
      </TouchableWithoutFeedback>
    );
  }
  return (
    <View style={styles.dotContainer}>{dots}</View>
  )
}
  const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inactiveDot: {
    height: 6,
    width: 6,
    borderRadius: 5,
    marginRight: 8,
    backgroundColor: '#D8D0DD'
  },
  activeDot: {
    height: 6,
    width: 6,
    marginRight: 8,
    borderRadius: 5,
    backgroundColor: '#1C1C1E'
  }
});

