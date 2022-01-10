import React from 'react';
import {Text} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export const Other = () => {
  const sv = useSharedValue(1);

  const style = useAnimatedStyle(() => {
    return {
      padding: 32,
      opacity: withTiming(sv.value, {
        duration: 1000,
        easing: Easing.ease,
      }),
    };
  });

  return (
    <Animated.View style={style}>
      <Text
        onPress={() => (sv.value = Math.max(0.1, Math.random()))}
        style={{color: '#000000'}}>
        Other
      </Text>
    </Animated.View>
  );
};
