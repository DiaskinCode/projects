import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, TouchableOpacity, Animated, SafeAreaView, StyleSheet } from 'react-native';
import { TabSwitch } from '../Components/TabSwitch'
import { useTranslation } from 'react-i18next';
import { RiteTabOne } from '../Screens/RiteTabOne';
import { RiteTabTwo } from '../Screens/RiteTabTwo';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator()

export default function RiteMaterialTopTabNavigator({route}) {
  const [SelectionMode, setSelectionMode] = useState(1)
  const { t } = useTranslation()
  const onSelectSwitch = (value) => {
    setSelectionMode(value)
  };

    return (
      <SafeAreaProvider>
        <Tab.Navigator initialRouteName={t('do_hajj')} tabBar={props => <TabBar {...props} sceneAnimationEnabled={false}/>}>
          <Tab.Screen name={t('do_hajj')} component={RiteTabOne} />
          <Tab.Screen name={t('do_umrah')} component={RiteTabTwo} />
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

// <SafeAreaProvider>
        //   <Tab.Navigator tabBar={props => <TabBar {...props} sceneAnimationEnabled={false}/>}>
        //       <Tab.Screen name={t('do_hajj')} component={RiteTabOne} />
        //       <Tab.Screen name={t('do_umrah')} component={RiteTabTwo} />
        //   </Tab.Navigator>
        // </SafeAreaProvider>