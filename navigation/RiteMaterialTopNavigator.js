import React from 'react';
import { View, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

export default function RiteMaterialTopTabNavigator({TabOne, TabTwo, TabOneLabel, TabTwoLabel}) {
    return (
      
        <SafeAreaProvider>
        <Tab.Navigator tabBar={props => <TabBar {...props} sceneAnimationEnabled={false}/>}>
            <Tab.Screen name={TabOneLabel} component={TabOne} />
            <Tab.Screen name={TabTwoLabel} component={TabTwo} />
        </Tab.Navigator>
        </SafeAreaProvider>
      
    )   
}
function TabBar({ state, descriptors, navigation, position }) {
    return(
        <View style={styles.tabBarStyle}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };    

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map(i => (i === index ? 1 : 0.5)),
        });

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            key={route.key}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.tabBarItemStyle, isFocused ? {backgroundColor: '#FFFFFF'} : null]}
          >
            <Animated.Text style={{ opacity }}>
              {label}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
    )
}
    
const styles = StyleSheet.create({
    tabBarStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '86%',
        height: 36,
        alignSelf: 'center',
        backgroundColor: '#F6F6F6',
        borderRadius: 20,
        marginBottom: 28,
        marginTop: 24,
        paddingHorizontal: 5,
    },
    tabBarItemStyle: {
        width: '50%',
        height: 26,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabBarItemFocusedStyle: {
        backgroundColor: '#FFFFFF',
    }
});