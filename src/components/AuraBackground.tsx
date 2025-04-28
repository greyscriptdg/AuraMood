import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { Mood } from '../types/mood';

interface AuraBackgroundProps {
  mood: Mood;
}

export const AuraBackground: React.FC<AuraBackgroundProps> = ({ mood }) => {
  const { theme } = useTheme();
  const colorAnim = useRef(new Animated.Value(0)).current;
  const prevMood = useRef(mood);

  useEffect(() => {
    Animated.timing(colorAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: false,
    }).start(() => {
      colorAnim.setValue(0);
      prevMood.current = mood;
    });
  }, [mood]);

  const prevColor = theme.aura[prevMood.current];
  const nextColor = theme.aura[mood];

  const backgroundColor = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [prevColor, nextColor],
  });

  return (
    <View style={styles.container} pointerEvents="none">
      <Animated.View
        style={[
          styles.aura,
          {
            backgroundColor,
            opacity: 0.3,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
    zIndex: -1,
  },
  aura: {
    position: 'absolute',
    width: '200%',
    height: '200%',
    borderRadius: 1000,
    top: '-50%',
    left: '-50%',
  },
});
